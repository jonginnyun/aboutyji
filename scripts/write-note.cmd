@echo off
setlocal
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0write-note.ps1"
pause
