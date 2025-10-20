<#
Start the Flask backend in a new PowerShell window.
This will activate the repo venv, create the database tables, then run the backend app.

Run from repository root:
  .\scripts\start_backend.ps1
#>

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$repoRoot = Resolve-Path "$scriptDir\.."
$activate = Join-Path $repoRoot 'venv\Scripts\Activate.ps1'

Write-Host "Starting backend in a new PowerShell window..."
Start-Process powershell -ArgumentList (
    '-NoExit',
    "-Command",
    "& '$activate'; python backend/scripts/create_db.py; python backend/app.py"
) -WorkingDirectory $repoRoot

Write-Host "Backend start command issued. Check the new window for logs."
