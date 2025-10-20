<#
Start Vite dev server in a new PowerShell window.

Run from repository root:
  .\scripts\start_frontend.ps1
#>

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$repoRoot = Resolve-Path "$scriptDir\.."
$frontend = Join-Path $repoRoot 'frontend\vite-project'

Write-Host "Starting frontend (Vite) in a new PowerShell window..."
Start-Process powershell -ArgumentList (
  '-NoExit',
  "-Command",
  "cd '$frontend'; npm run dev -- --port 5175"
) -WorkingDirectory $frontend

Write-Host "Frontend start command issued. Check the new window for logs."
