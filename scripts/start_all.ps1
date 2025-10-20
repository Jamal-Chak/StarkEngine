<#
Start both backend and frontend dev servers in separate PowerShell windows.

Run from repository root:
  .\scripts\start_all.ps1
#>

Write-Host "Launching backend and frontend..."
& .\scripts\start_backend.ps1
Start-Sleep -Seconds 2
& .\scripts\start_frontend.ps1

Write-Host "Commands issued. Check the two new windows for logs."
