@echo off
setlocal

pushd "%~dp0.."

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is required. Install Node.js, then rerun this setup script.
  popd
  exit /b 1
)

node Scripts\update-knowledge-base.mjs --full
if errorlevel 1 (
  popd
  exit /b 1
)

echo Knowledge base generated views are up to date.
echo Vault root: %CD%
popd
