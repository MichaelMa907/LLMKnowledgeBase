$ErrorActionPreference = 'Stop'

$projectRoot = 'C:\Users\micha\Projects\LLMKnowledgeBase\Projects\visible-shell-command-workflow'
$sessionScript = Join-Path $projectRoot 'visible-shell-live-session.ps1'
$sessionStamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$transcriptPath = Join-Path $projectRoot "live-visible-shell-$sessionStamp.txt"
$transcriptMetaPath = Join-Path $projectRoot 'live-visible-shell.transcript.txt'
$commandDirectory = Join-Path $projectRoot "live-visible-shell-commands-$sessionStamp"
$commandDirectoryMetaPath = Join-Path $projectRoot 'live-visible-shell.command-dir.txt'
$pidPath = Join-Path $projectRoot 'live-visible-shell.pid'
$titlePath = Join-Path $projectRoot 'live-visible-shell.title.txt'
$windowTitle = "Codex Visible Shell Live $sessionStamp"

New-Item -ItemType Directory -Path $commandDirectory -Force | Out-Null

$argumentList = "-NoExit -ExecutionPolicy Bypass -File `"$sessionScript`" -WindowTitle `"$windowTitle`" -TranscriptPath `"$transcriptPath`" -CommandDirectory `"$commandDirectory`""
$process = Start-Process -FilePath powershell.exe -WorkingDirectory $projectRoot -ArgumentList $argumentList -PassThru

Set-Content -LiteralPath $pidPath -Value $process.Id
Set-Content -LiteralPath $titlePath -Value $windowTitle
Set-Content -LiteralPath $transcriptMetaPath -Value $transcriptPath
Set-Content -LiteralPath $commandDirectoryMetaPath -Value $commandDirectory

Write-Output $process.Id
Write-Output $windowTitle
Write-Output $transcriptPath
Write-Output $commandDirectory
