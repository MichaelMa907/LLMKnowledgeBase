param(
  [Parameter(Mandatory = $true)]
  [string]$WindowTitle,

  [Parameter(Mandatory = $true)]
  [string]$TranscriptPath,

  [Parameter(Mandatory = $true)]
  [string]$CommandDirectory
)

$ErrorActionPreference = 'Stop'

$host.UI.RawUI.WindowTitle = $WindowTitle
Start-Transcript -Path $TranscriptPath -Force | Out-Null

Write-Host 'Codex live visible shell is ready.'
Write-Host "Window title: $WindowTitle"
Write-Host "Transcript: $TranscriptPath"
Write-Host "Command directory: $CommandDirectory"
Write-Host 'Type commands manually or let Codex queue commands into this same shell.'

function New-CommandStatus {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Status,

    [Parameter(Mandatory = $true)]
    [string]$CommandPath,

    [Parameter(Mandatory = $true)]
    [string]$CommandText,

    [int]$ExitCode,

    [string]$ErrorMessage
  )

  return [ordered]@{
    status = $Status
    command_path = $CommandPath
    command = $CommandText.TrimEnd()
    location = (Get-Location).Path
    timestamp = (Get-Date).ToString('o')
    exit_code = $ExitCode
    error = $ErrorMessage
  }
}

New-Item -ItemType Directory -Path $CommandDirectory -Force | Out-Null

while ($true) {
  $commandFiles = Get-ChildItem -LiteralPath $CommandDirectory -Filter '*.ps1' -File -ErrorAction SilentlyContinue |
    Sort-Object Name

  foreach ($commandFile in $commandFiles) {
    $commandText = Get-Content -LiteralPath $commandFile.FullName -Raw
    $startedPath = [System.IO.Path]::ChangeExtension($commandFile.FullName, '.started.json')
    $donePath = [System.IO.Path]::ChangeExtension($commandFile.FullName, '.done.json')

    New-CommandStatus -Status 'started' -CommandPath $commandFile.FullName -CommandText $commandText |
      ConvertTo-Json -Depth 3 |
      Set-Content -LiteralPath $startedPath

    Remove-Item -LiteralPath $commandFile.FullName -Force

    Write-Host "PS $((Get-Location).Path)> $($commandText.TrimEnd())"

    $exitCode = $null
    $errorMessage = $null
    try {
      Invoke-Expression $commandText
      $exitCode = $LASTEXITCODE
      $status = 'completed'
    }
    catch {
      $errorMessage = $_.Exception.Message
      $exitCode = $LASTEXITCODE
      $status = 'failed'
      Write-Host $_
    }

    New-CommandStatus -Status $status -CommandPath $commandFile.FullName -CommandText $commandText -ExitCode $exitCode -ErrorMessage $errorMessage |
      ConvertTo-Json -Depth 3 |
      Set-Content -LiteralPath $donePath
  }

  Start-Sleep -Milliseconds 300
}
