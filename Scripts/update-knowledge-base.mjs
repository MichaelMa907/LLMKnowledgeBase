#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, '..');
const statePath = path.join(scriptDir, 'knowledge-base-state.json');
const now = new Date();

function main() {
  const args = parseArgs(process.argv.slice(2));
  const state = loadState();
  const needsFullScan = args.full || !fs.existsSync(statePath) || args.changed.length === 0;

  if (needsFullScan) {
    fullScan(state);
    renderAll(state);
  } else {
    const touched = getTouchedScopes(args.changed);
    applyIncrementalScans(state, touched);
    renderIncremental(state, touched);
  }

  state.generated_at = now.toISOString();
  writeTextFile(statePath, `${JSON.stringify(state, null, 2)}\n`);
}

function parseArgs(argv) {
  const args = { full: false, changed: [] };

  for (let index = 0; index < argv.length; index += 1) {
    const current = argv[index];

    if (current === '--help' || current === '-h') {
      printHelp();
      process.exit(0);
    }

    if (current === '--full') {
      args.full = true;
      continue;
    }

    if (current === '--changed') {
      const next = argv[index + 1];
      if (!next) {
        throw new Error('`--changed` requires a path argument.');
      }
      args.changed.push(next);
      index += 1;
      continue;
    }

    throw new Error(`Unknown argument: ${current}`);
  }

  return args;
}

function printHelp() {
  process.stdout.write(
    [
      'Usage:',
      '  node Scripts/update-knowledge-base.mjs --full',
      '  node Scripts/update-knowledge-base.mjs --changed Projects/<project-slug> --changed Projects/<project-slug>/Learned',
      '',
      'Options:',
      '  --full              Rebuild the state cache and every generated index from disk.',
      '  --changed <path>    Mark one changed file or folder inside the vault. Repeat as needed.',
      '',
      'Notes:',
      '  - Pass the smallest set of roots that changed in the current prompt.',
      '  - If a global note was created, replaced, or deleted, include the root that contains that note.',
      '  - If a machine note changed, include Machines/<machine-id>/Learned.',
      '  - If a project note, commit, or project learned note changed, include Projects/<project-slug>.',
    ].join('\n') + '\n',
  );
}

function loadState() {
  if (!fs.existsSync(statePath)) {
    return {
      version: 1,
      generated_at: null,
      projects: {},
      learned: {},
    };
  }

  try {
    const parsed = JSON.parse(fs.readFileSync(statePath, 'utf8'));
    return {
      version: 1,
      generated_at: parsed.generated_at ?? null,
      projects: parsed.projects ?? {},
      learned: parsed.learned ?? {},
    };
  } catch (error) {
    return {
      version: 1,
      generated_at: null,
      projects: {},
      learned: {},
    };
  }
}

function fullScan(state) {
  state.projects = {};
  state.learned = {};

  for (const machineId of listChildDirectories(path.join(vaultRoot, 'Machines'))) {
    scanMachine(state, machineId);
  }

  for (const projectSlug of listChildDirectories(path.join(vaultRoot, 'Projects'))) {
    scanProject(state, projectSlug);
  }
}

function getTouchedScopes(changedInputs) {
  const touched = {
    global: false,
    machines: new Set(),
    projects: new Set(),
    other: [],
  };

  for (const input of changedInputs) {
    const relative = normalizeChangedPath(input);
    const parts = relative.split('/').filter(Boolean);
    if (parts.length === 0) {
      continue;
    }

    const [root, scopeId] = parts;
    if (root === 'Globals') {
      touched.global = true;
      continue;
    }

    if (root === 'Machines' && scopeId) {
      touched.machines.add(scopeId);
      continue;
    }

    if (root === 'Projects' && scopeId) {
      touched.projects.add(scopeId);
      continue;
    }

    touched.other.push(relative);
  }

  return touched;
}

function normalizeChangedPath(input) {
  const absolute = path.isAbsolute(input)
    ? path.resolve(input)
    : path.resolve(process.cwd(), input);

  const relative = path.relative(vaultRoot, absolute);
  return toPosix(relative);
}

function applyIncrementalScans(state, touched) {
  for (const machineId of touched.machines) {
    scanMachine(state, machineId);
  }

  for (const projectSlug of touched.projects) {
    scanProject(state, projectSlug);
  }
}

function scanMachine(state, machineId) {
  const machineRoot = path.join(vaultRoot, 'Machines', machineId);
  const learnedRoot = path.join(machineRoot, 'Learned');

  replaceLearnedEntries(
    state,
    (entry) => entry.relative_path.startsWith(`Machines/${machineId}/Learned/`),
    listLearnedFiles(learnedRoot),
  );

  if (!fs.existsSync(machineRoot)) {
    safeUnlink(path.join(machineRoot, 'machineIndex.md'));
  }
}

function scanProject(state, projectSlug) {
  const projectRoot = path.join(vaultRoot, 'Projects', projectSlug);
  const projectNotePath = path.join(projectRoot, `${projectSlug}.md`);
  const learnedRoot = path.join(projectRoot, 'Learned');

  if (fs.existsSync(projectNotePath)) {
    const entry = readProjectEntry(projectNotePath);
    if (entry) {
      state.projects[projectSlug] = entry;
    }
  } else {
    delete state.projects[projectSlug];
  }

  replaceLearnedEntries(
    state,
    (entry) => entry.relative_path.startsWith(`Projects/${projectSlug}/Learned/`),
    listLearnedFiles(learnedRoot),
  );

  if (!fs.existsSync(projectRoot)) {
    safeUnlink(path.join(projectRoot, 'learnedIndex.md'));
  }
}

function replaceLearnedEntries(state, predicate, files) {
  for (const relativePath of Object.keys(state.learned)) {
    const entry = state.learned[relativePath];
    if (predicate(entry)) {
      delete state.learned[relativePath];
    }
  }

  for (const filePath of files) {
    const entry = readLearnedEntry(filePath);
    if (entry) {
      state.learned[entry.relative_path] = entry;
    }
  }
}

function readProjectEntry(filePath) {
  const meta = readFrontMatter(filePath);
  if (meta.note_type !== 'project') {
    return null;
  }

  const relativePath = toRelativeVaultPath(filePath);
  return {
    project_slug: `${meta.project_slug ?? path.basename(filePath, '.md')}`,
    title: `${meta.title ?? path.basename(filePath, '.md')}`,
    relative_path: relativePath,
    link: toWikiLink(relativePath),
    last_active_raw: `${meta.last_active ?? ''}`,
    last_active_sort: toSortableDate(meta.last_active),
    sessions_count: toNumber(meta.sessions_count, 0),
    commit_threads_count: toNumber(meta.commit_threads_count, 0),
    total_prompt_entries: toNumber(meta.total_prompt_entries, 0),
    resolved: toBoolean(meta.resolved),
    status: `${meta.status ?? 'unknown'}`,
  };
}

function readLearnedEntry(filePath) {
  const meta = readFrontMatter(filePath);
  if (meta.note_type !== 'learned') {
    return null;
  }

  const relativePath = toRelativeVaultPath(filePath);
  return {
    title: `${meta.title ?? path.basename(filePath, '.md')}`,
    summary: `${meta.summary ?? ''}`,
    relative_path: relativePath,
    link: toWikiLink(relativePath),
    scope: `${meta.scope ?? ''}`,
    global: toBoolean(meta.global),
    machine_id: `${meta.machine_id ?? ''}`,
    project_slug: `${meta.project_slug ?? ''}`,
    origin_label: getOriginLabel(relativePath),
    category: `${meta.category ?? ''}`,
    confidence: toNumber(meta.confidence, 0),
    importance: toNumber(meta.importance, 0),
    created_raw: `${meta.created ?? ''}`,
    last_updated_raw: `${meta.last_updated ?? ''}`,
    last_updated_sort: toSortableDate(meta.last_updated),
    status: `${meta.status ?? 'active'}`,
  };
}

function listLearnedFiles(folderPath) {
  if (!fs.existsSync(folderPath)) {
    return [];
  }

  return walkMarkdownFiles(folderPath).filter((filePath) => {
    const name = path.basename(filePath);
    return name !== 'learnedIndex.md' && name !== 'machineIndex.md' && name !== 'globalIndex.md';
  });
}

function walkMarkdownFiles(folderPath) {
  const results = [];
  const stack = [folderPath];

  while (stack.length > 0) {
    const current = stack.pop();
    if (!current || !fs.existsSync(current)) {
      continue;
    }

    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const absolute = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(absolute);
        continue;
      }

      if (entry.isFile() && absolute.endsWith('.md')) {
        results.push(absolute);
      }
    }
  }

  return results;
}

function listChildDirectories(folderPath) {
  if (!fs.existsSync(folderPath)) {
    return [];
  }

  return fs
    .readdirSync(folderPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right));
}

function readFrontMatter(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) {
    return {};
  }

  const meta = {};
  let activeListKey = null;
  const lines = match[1].split(/\r?\n/);

  for (const line of lines) {
    const listMatch = line.match(/^\s*-\s+(.*)$/);
    if (listMatch && activeListKey) {
      meta[activeListKey].push(parseScalar(listMatch[1]));
      continue;
    }

    const keyMatch = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!keyMatch) {
      activeListKey = null;
      continue;
    }

    const [, key, rawValue] = keyMatch;
    if (rawValue === '') {
      meta[key] = [];
      activeListKey = key;
      continue;
    }

    meta[key] = parseScalar(rawValue);
    activeListKey = null;
  }

  return meta;
}

function parseScalar(rawValue) {
  const value = rawValue.trim();
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }

  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  if (/^-?\d+\.\d+$/.test(value)) {
    return Number.parseFloat(value);
  }

  if (/^-?\d+$/.test(value)) {
    return Number.parseInt(value, 10);
  }

  return value;
}

function renderAll(state) {
  renderProjectLists(state);
  renderGlobalIndex(state);

  for (const machineId of getMachineIdsFromState(state)) {
    renderMachineIndex(state, machineId);
  }

  for (const projectSlug of getProjectSlugsFromState(state)) {
    renderProjectLearnedIndex(state, projectSlug);
  }
}

function renderIncremental(state, touched) {
  if (touched.global || touched.projects.size > 0 || touched.machines.size > 0) {
    renderGlobalIndex(state);
  }

  if (touched.projects.size > 0) {
    renderProjectLists(state);
    for (const projectSlug of touched.projects) {
      renderProjectLearnedIndex(state, projectSlug);
    }
  }

  for (const machineId of touched.machines) {
    renderMachineIndex(state, machineId);
  }
}

function renderProjectLists(state) {
  const projects = Object.values(state.projects);
  const cutoff = new Date(now.getTime());
  cutoff.setDate(cutoff.getDate() - 30);

  const activeProjects = projects
    .filter((project) => !project.resolved && project.last_active_sort >= cutoff.getTime())
    .sort((left, right) => {
      if (right.sessions_count !== left.sessions_count) {
        return right.sessions_count - left.sessions_count;
      }
      return right.last_active_sort - left.last_active_sort;
    });

  const inactiveProjects = projects
    .filter((project) => project.resolved || project.last_active_sort < cutoff.getTime())
    .sort((left, right) => right.last_active_sort - left.last_active_sort);

  const activeMarkdown = buildProjectListMarkdown({
    title: 'Active Projects',
    source: 'Scripts/update-knowledge-base.mjs',
    description:
      'Projects are active when `resolved=false` and `last_active` is within the last 30 days. Sorted by `sessions_count` descending.',
    projects: activeProjects,
    state,
  });

  const inactiveMarkdown = buildProjectListMarkdown({
    title: 'Inactive Projects',
    source: 'Scripts/update-knowledge-base.mjs',
    description:
      'Projects are inactive when `resolved=true` or when `last_active` is older than 30 days. Sorted by `last_active` descending.',
    projects: inactiveProjects,
    state,
  });

  writeTextFile(path.join(vaultRoot, 'activeProjects.md'), activeMarkdown);
  writeTextFile(path.join(vaultRoot, 'inactiveProjects.md'), inactiveMarkdown);
}

function buildProjectListMarkdown({ title, source, description, projects, state }) {
  const lines = [
    `# ${title}`,
    `generated: ${formatGenerated(now)}`,
    `source: ${source}`,
    '',
    description,
    '',
  ];

  if (projects.length === 0) {
    lines.push('- No projects in this list.');
    lines.push('');
    lines.push('[[Templates/Project|Project]]');
    return `${lines.join('\n')}\n`;
  }

  lines.push('| Project | Path | Last Active | Sessions | Commits | Learned | Resolved | Status |');
  lines.push('| --- | --- | --- | --- | --- | --- | --- | --- |');

  for (const project of projects) {
    const learnedCount = countActiveProjectLearned(state, project.project_slug);
    lines.push(
      `| ${project.link} | \`${project.relative_path}\` | ${project.last_active_raw} | ${project.sessions_count} | ${project.commit_threads_count} | ${learnedCount} | ${String(project.resolved)} | ${project.status} |`,
    );
  }

  lines.push('');
  lines.push('[[Templates/Project|Project]]');

  return `${lines.join('\n')}\n`;
}

function renderGlobalIndex(state) {
  const notes = getActiveLearnedEntries(state).filter((entry) => entry.global);
  notes.sort(compareLearnedEntries);

  const lines = [
    '# Global Truth Index',
    `generated: ${formatGenerated(now)}`,
    'source: ../Scripts/update-knowledge-base.mjs',
    '',
    'This file is generated from active learned notes where `global=true`. Entries link to the real note files in their origin folders. Sorted by `importance`, then `confidence`, then `last_updated`.',
    '',
  ];

  if (notes.length === 0) {
    lines.push('- No global learned notes yet.');
  } else {
    lines.push('| Title | Summary | Path | Importance | Confidence | Last Updated | Origin |');
    lines.push('| --- | --- | --- | --- | --- | --- | --- |');
    for (const note of notes) {
      lines.push(
        `| ${escapeTable(note.title)} | ${escapeTable(note.summary)} | \`${note.relative_path}\` | ${formatScore(note.importance)} | ${formatScore(note.confidence)} | ${note.last_updated_raw} | ${note.origin_label} |`,
      );
    }
  }

  writeTextFile(path.join(vaultRoot, 'Globals', 'globalIndex.md'), `${lines.join('\n')}\n`);
}

function renderMachineIndex(state, machineId) {
  const machineDir = path.join(vaultRoot, 'Machines', machineId);
  const notes = getActiveLearnedEntries(state)
    .filter((entry) => entry.scope === 'machine' && entry.machine_id === machineId)
    .sort(compareLearnedEntries);

  if (!fs.existsSync(machineDir)) {
    safeUnlink(path.join(machineDir, 'machineIndex.md'));
    return;
  }

  const lines = [
    `# Machine Index - ${machineId}`,
    `generated: ${formatGenerated(now)}`,
    'source: ../../Scripts/update-knowledge-base.mjs',
    '',
    'This file is generated from active `scope: machine` learned notes for this machine. Sorted by `importance`, then `confidence`, then `last_updated`.',
    '',
  ];

  if (notes.length === 0) {
    lines.push('- No machine-scoped learned notes yet.');
  } else {
    lines.push('| Title | Summary | Path | Global | Importance | Confidence | Last Updated | Category |');
    lines.push('| --- | --- | --- | --- | --- | --- | --- | --- |');
    for (const note of notes) {
      lines.push(
        `| ${escapeTable(note.title)} | ${escapeTable(note.summary)} | \`${note.relative_path}\` | ${String(note.global)} | ${formatScore(note.importance)} | ${formatScore(note.confidence)} | ${note.last_updated_raw} | ${note.category} |`,
      );
    }
  }

  writeTextFile(path.join(machineDir, 'machineIndex.md'), `${lines.join('\n')}\n`);
}

function renderProjectLearnedIndex(state, projectSlug) {
  const projectDir = path.join(vaultRoot, 'Projects', projectSlug);
  if (!fs.existsSync(projectDir)) {
    safeUnlink(path.join(projectDir, 'learnedIndex.md'));
    return;
  }

  const notes = getActiveLearnedEntries(state)
    .filter((entry) => entry.project_slug === projectSlug && entry.relative_path.startsWith(`Projects/${projectSlug}/Learned/`))
    .sort(compareLearnedEntries);

  const lines = [
    `# Learned Index - ${projectSlug}`,
    `generated: ${formatGenerated(now)}`,
    'source: ../../Scripts/update-knowledge-base.mjs',
    '',
    'This file is generated from active learned notes stored in this project\'s `Learned/` folder. Sorted by `importance`, then `confidence`, then `last_updated`.',
    '',
  ];

  if (notes.length === 0) {
    lines.push('- No learned notes stored in this project yet.');
  } else {
    lines.push('| Title | Summary | Path | Scope | Global | Importance | Confidence | Last Updated | Category |');
    lines.push('| --- | --- | --- | --- | --- | --- | --- | --- | --- |');
    for (const note of notes) {
      lines.push(
        `| ${escapeTable(note.title)} | ${escapeTable(note.summary)} | \`${note.relative_path}\` | ${note.scope} | ${String(note.global)} | ${formatScore(note.importance)} | ${formatScore(note.confidence)} | ${note.last_updated_raw} | ${note.category} |`,
      );
    }
  }

  writeTextFile(path.join(projectDir, 'learnedIndex.md'), `${lines.join('\n')}\n`);
}

function getMachineIdsFromState(state) {
  return Array.from(
    new Set(
      Object.values(state.learned)
        .filter((entry) => entry.scope === 'machine' && entry.machine_id)
        .map((entry) => entry.machine_id),
    ),
  ).sort((left, right) => left.localeCompare(right));
}

function getProjectSlugsFromState(state) {
  return Object.keys(state.projects).sort((left, right) => left.localeCompare(right));
}

function getActiveLearnedEntries(state) {
  return Object.values(state.learned).filter((entry) => entry.status === 'active');
}

function countActiveProjectLearned(state, projectSlug) {
  return getActiveLearnedEntries(state).filter(
    (entry) =>
      entry.project_slug === projectSlug &&
      entry.relative_path.startsWith(`Projects/${projectSlug}/Learned/`),
  ).length;
}

function compareLearnedEntries(left, right) {
  if (right.importance !== left.importance) {
    return right.importance - left.importance;
  }

  if (right.confidence !== left.confidence) {
    return right.confidence - left.confidence;
  }

  if (right.last_updated_sort !== left.last_updated_sort) {
    return right.last_updated_sort - left.last_updated_sort;
  }

  return left.title.localeCompare(right.title);
}

function getOriginLabel(relativePath) {
  const parts = relativePath.split('/');
  if (parts[0] === 'Projects' && parts[1]) {
    return `project:${parts[1]}`;
  }

  if (parts[0] === 'Machines' && parts[1]) {
    return `machine:${parts[1]}`;
  }

  return 'vault';
}

function toRelativeVaultPath(absolutePath) {
  return toPosix(path.relative(vaultRoot, absolutePath));
}

function toWikiLink(relativePath) {
  const withoutExtension = relativePath.endsWith('.md')
    ? relativePath.slice(0, -3)
    : relativePath;
  return `[[${withoutExtension}]]`;
}

function toPosix(value) {
  return value.split(path.sep).join('/');
}

function toBoolean(value) {
  return value === true || value === 'true';
}

function toNumber(value, fallback) {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === 'string' && value.trim() !== '') {
    const parsed = Number.parseFloat(value);
    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }

  return fallback;
}

function toSortableDate(value) {
  if (!value) {
    return 0;
  }

  const text = `${value}`.trim();
  const dateTimeMatch = text.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})$/);
  if (dateTimeMatch) {
    const [, year, month, day, hour, minute] = dateTimeMatch;
    return new Date(
      Number.parseInt(year, 10),
      Number.parseInt(month, 10) - 1,
      Number.parseInt(day, 10),
      Number.parseInt(hour, 10),
      Number.parseInt(minute, 10),
    ).getTime();
  }

  const dateMatch = text.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (dateMatch) {
    const [, year, month, day] = dateMatch;
    return new Date(
      Number.parseInt(year, 10),
      Number.parseInt(month, 10) - 1,
      Number.parseInt(day, 10),
    ).getTime();
  }

  const parsed = new Date(text).getTime();
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatGenerated(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');
  const offsetMinutes = -date.getTimezoneOffset();
  const sign = offsetMinutes >= 0 ? '+' : '-';
  const absolute = Math.abs(offsetMinutes);
  const offsetHour = String(Math.floor(absolute / 60)).padStart(2, '0');
  const offsetMinute = String(absolute % 60).padStart(2, '0');
  return `${year}-${month}-${day} ${hour}:${minute}:${second} ${sign}${offsetHour}:${offsetMinute}`;
}

function formatScore(value) {
  return toNumber(value, 0).toFixed(2);
}

function escapeTable(value) {
  return `${value ?? ''}`.replace(/\|/g, '\\|');
}

function writeTextFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
}

function safeUnlink(filePath) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
}

main();
