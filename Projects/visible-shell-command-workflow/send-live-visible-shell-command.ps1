param(
  [Parameter(Mandatory = $true)]
  [string]$Command,

  [string]$WindowTitle,

  [int]$ProcessId,

  [int]$WaitForStartSeconds = 10
)

$ErrorActionPreference = 'Stop'

$projectRoot = 'C:\Users\micha\Projects\LLMKnowledgeBase\Projects\visible-shell-command-workflow'
$commandDirectoryPath = Join-Path $projectRoot 'live-visible-shell.command-dir.txt'

if (-not (Test-Path $commandDirectoryPath)) {
  throw "Could not find command directory metadata at $commandDirectoryPath."
}

$commandDirectory = (Get-Content -LiteralPath $commandDirectoryPath -Raw).Trim()
if (-not $commandDirectory) {
  throw 'The command directory metadata file is empty.'
}

if (-not (Test-Path $commandDirectory)) {
  throw "The command directory '$commandDirectory' does not exist."
}

$commandStamp = Get-Date -Format 'yyyyMMdd-HHmmss-fff'
$commandFile = Join-Path $commandDirectory "$commandStamp.command.ps1"
$startedFile = [System.IO.Path]::ChangeExtension($commandFile, '.started.json')
$doneFile = [System.IO.Path]::ChangeExtension($commandFile, '.done.json')

Set-Content -LiteralPath $commandFile -Value $Command

$deadline = (Get-Date).AddSeconds($WaitForStartSeconds)
while ((Get-Date) -lt $deadline) {
  if (Test-Path $startedFile) {
    break
  }

  Start-Sleep -Milliseconds 250
}

if (-not (Test-Path $startedFile)) {
  throw "The visible shell did not acknowledge the queued command within $WaitForStartSeconds seconds."
}

Write-Output $commandFile
Write-Output $startedFile
Write-Output $doneFile
