$TranscriptPath = 'C:\Users\micha\Projects\LLMKnowledgeBase\Projects\visible-shell-command-workflow\visible-shell-demo-transcript.txt'
Start-Transcript -Path $TranscriptPath -Force | Out-Null
Write-Host 'Codex visible shell demo on MICHAEL-ROG'
Write-Host 'The window will stay open after the commands finish.'
Start-Sleep -Seconds 2

Write-Host ''
Write-Host '1/5 node -v'
node -v
Start-Sleep -Seconds 2

Write-Host ''
Write-Host '2/5 Get-Date -Format o'
Get-Date -Format o
Start-Sleep -Seconds 2

Write-Host ''
Write-Host '3/5 Get-Location'
(Get-Location).Path
Start-Sleep -Seconds 2

Write-Host ''
Write-Host '4/5 whoami'
whoami
Start-Sleep -Seconds 2

Write-Host ''
Write-Host '5/5 $PSVersionTable.PSVersion.ToString()'
$PSVersionTable.PSVersion.ToString()
Start-Sleep -Seconds 1

Stop-Transcript | Out-Null
Write-Host ''
Write-Host "Transcript saved to $TranscriptPath"
