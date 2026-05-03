#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, '..');

function main() {
  const violations = [];

  for (const filePath of walkMarkdownFiles(vaultRoot)) {
    const relativePath = toPosix(path.relative(vaultRoot, filePath));

    if (relativePath.includes('/MichaelsNotes/')) {
      continue;
    }

    const text = fs.readFileSync(filePath, 'utf8');
    const links = extractLiveWikiLinks(text);
    violations.push(...validateLinks(relativePath, links));
  }

  if (violations.length > 0) {
    for (const violation of violations) {
      process.stdout.write(
        `${violation.file}:${violation.line}: ${violation.message} (${violation.link})\n`,
      );
    }
    process.exitCode = 1;
    return;
  }

  process.stdout.write('Wiki link audit passed.\n');
}

function validateLinks(file, links) {
  if (links.length === 0) {
    return [];
  }

  if (file === 'activeProjects.md' || file === 'inactiveProjects.md') {
    return links.flatMap((link) => {
      if (link.target === 'Templates/Project') {
        return [];
      }

      if (/^Projects\/([^/]+)\/\1$/.test(link.target)) {
        return [];
      }

      return [violation(file, link, 'project-list pages may link only project notes and Templates/Project')];
    });
  }

  const projectNoteMatch = file.match(/^Projects\/([^/]+)\/\1\.md$/);
  if (projectNoteMatch) {
    return links.map((link) =>
      violation(file, link, 'project notes must use plain paths instead of live wiki links'),
    );
  }

  const commitMatch = file.match(/^Projects\/([^/]+)\/Commits\/[^/]+\.md$/);
  if (commitMatch) {
    const projectSlug = commitMatch[1];
    const expectedTarget = `Projects/${projectSlug}/${projectSlug}`;
    return links.flatMap((link) => {
      if (link.target === expectedTarget) {
        return [];
      }

      return [violation(file, link, 'commit notes may link only their parent project')];
    });
  }

  if (/^(Projects\/[^/]+|Machines\/[^/]+)\/Learned\/.+\.md$/.test(file)) {
    const originCommitLinks = links.filter(
      (link) =>
        /^\s*-\s*Origin commit:\s*/.test(link.lineText) &&
        /^Projects\/[^/]+\/Commits\/[^/]+$/.test(link.target),
    );

    const results = links.flatMap((link) => {
      if (originCommitLinks.includes(link)) {
        return [];
      }

      return [violation(file, link, 'learned notes may link only one origin commit')];
    });

    if (originCommitLinks.length > 1) {
      for (const link of originCommitLinks.slice(1)) {
        results.push(violation(file, link, 'learned notes may contain only one origin-commit link'));
      }
    }

    return results;
  }

  return links.map((link) => violation(file, link, 'live wiki link is outside the allowed graph surfaces'));
}

function extractLiveWikiLinks(text) {
  const masked = maskCode(text);
  const links = [];
  const lines = masked.split(/\r?\n/);
  const originalLines = text.split(/\r?\n/);
  const pattern = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    let match;
    while ((match = pattern.exec(line)) !== null) {
      links.push({
        target: match[1],
        line: index + 1,
        lineText: originalLines[index] ?? '',
      });
    }
  }

  return links;
}

function maskCode(text) {
  const withoutFences = text.replace(/```[\s\S]*?```/g, (match) => ' '.repeat(match.length));
  return withoutFences.replace(/`[^`\r\n]*`/g, (match) => ' '.repeat(match.length));
}

function violation(file, link, message) {
  return {
    file,
    line: link.line,
    link: `[[${link.target}]]`,
    message,
  };
}

function walkMarkdownFiles(root) {
  const results = [];
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    const entries = fs.readdirSync(current, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.name === '.git' || entry.name === '.obsidian') {
        continue;
      }

      const absolute = path.join(current, entry.name);

      if (entry.isDirectory()) {
        stack.push(absolute);
        continue;
      }

      if (entry.isFile() && entry.name.endsWith('.md')) {
        results.push(absolute);
      }
    }
  }

  return results;
}

function toPosix(value) {
  return value.split(path.sep).join('/');
}

main();
