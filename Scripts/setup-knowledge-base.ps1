$ErrorActionPreference = 'Stop'

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$vaultRoot = Resolve-Path (Join-Path $scriptDir '..')

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  throw 'Node.js is required. Install Node.js, then rerun this setup script.'
}

Push-Location $vaultRoot
try {
  node Scripts/update-knowledge-base.mjs --full
  Write-Host 'Knowledge base generated views are up to date.'
  Write-Host "Vault root: $vaultRoot"
}
finally {
  Pop-Location
}
