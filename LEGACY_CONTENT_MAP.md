# Legacy Content Map

Last updated: 2026-06-22

This map classifies legacy detail pages that are not yet first-class Astro content.

## Excluded From Public Site

These pages are preserved in the repository for legacy continuity but must not be surfaced as Jonginn Yun projects or mirrored into the public `/legacy/` output.

| Legacy file | Title | Reason |
| --- | --- | --- |
| `mcm-details.html` | excluded third-party project page | Not Jonginn Yun's project. |
| `silicon-details.html` | excluded third-party project page | Not Jonginn Yun's project. |
| `vqe-details.html` | excluded third-party project page | Not Jonginn Yun's project. |

## Deleted Third-Party-Origin Pages

These files were removed because they came from third-party source's site content rather than Jonginn Yun's own site content.

| Deleted file | Former title/content |
| --- | --- |
| `optimize-details.html` | Neural-ODE / machine-learning optimization project |
| `qml-details.html` | Quantum machine-learning project |
| `awards-details.html` | third-party-source competitions, awards, QHack, and QIRS material |

## Recommended Notes Or Course Archives

These are better treated as study notes, course/lab archives, or essays rather than research-project entries.

| Legacy file | Recommended destination | Working title | Notes |
| --- | --- | --- | --- |
| `QCQI-details.html` | `src/content/notes/physics/quantum-mechanics/` | Quantum Computing and Quantum Information Course Notes | Course summary; should become a note index or study archive. |
| `super-details.html` | `src/content/notes/physics/condensed-matter/` | Superconducting Quantum Circuits Course Notes | Course summary with useful cQED and bosonic-code topics. |
| `laser-details.html` | `src/content/notes/physics/quantum-mechanics/` or `physics/electrodynamics/` | Laser Physics Simulations | Small simulation/course page; polish before public. |
| `IPL1-details.html` | `src/content/notes/physics/electrodynamics/` or archive | Intermediate Physics Laboratory 1 | Lab archive; likely not a main project. |
| `IPL2-details.html` | `src/content/notes/physics/electrodynamics/` or archive | Intermediate Physics Laboratory 2 | Lab archive; likely not a main project. |

## Recommended Archive Only

These should remain preserved under `/legacy/` unless there is a specific reason to surface them.

| Legacy file | Recommended destination | Reason |
| --- | --- | --- |
| `lead-details.html` | archive or CV/supporting page | Leadership/resume material, not a technical project or note. |

## Migration Priority

1. Audit remaining legacy lab/course pages before deciding whether to delete or rewrite them.
2. Convert `QCQI-details.html` and `super-details.html` into study-note/course-archive pages only if the content is actually Jonginn's.
3. Keep lab pages and leadership pages archived unless they become useful context for CV or essays and pass ownership review.
