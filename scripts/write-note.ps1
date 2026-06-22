$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $repoRoot

function Read-Default($prompt, $default) {
  $value = Read-Host "$prompt [$default]"
  if ([string]::IsNullOrWhiteSpace($value)) {
    return $default
  }
  return $value
}

$title = Read-Host "Note title"
if ([string]::IsNullOrWhiteSpace($title)) {
  Write-Host "No title entered. Nothing created."
  exit 1
}

$category = Read-Default "Category" "Mathematics"
$section = Read-Default "Section" "Topology"
$subsection = Read-Default "Subsection" ""

$npm = "npm"
$nodeNpm = "C:\Program Files\nodejs\npm.cmd"
if (Test-Path $nodeNpm) {
  $npm = $nodeNpm
}

& $npm run new:note -- $title --category $category --section $section --subsection $subsection

Write-Host ""
Write-Host "Draft created. Run npm run dev and open http://localhost:4321/ to preview."
