# Content Audit

Last updated: 2026-06-22

This file tracks what has been preserved from the legacy site and what is currently surfaced in the Astro site.

## Summary

- Legacy HTML, CSS, assets, PDFs, and root detail pages are preserved.
- Astro currently exposes the main academic website surface: Home, Research, Publications, Projects, Notes, Essays, CV, and Contact.
- The first pass intentionally keeps the active site conservative and avoids inventing claims.
- Some preserved legacy detail pages are archive-only or intentionally excluded from the public Astro site.

## Projects

Currently surfaced in Astro:

- `msoga-details.html` -> `src/content/projects/micromagnet-shape-optimization.mdx`
- `devfab-details.html` -> `src/content/projects/device-fabrication.mdx`
- `qdspinqmeas-details.html` -> `src/content/projects/semiconductor-spin-qubit-control.mdx`
- `vdw-details.html` -> `src/content/projects/vdw-heterostructure-transport.mdx`
- `setup-details.html` -> `src/content/projects/cryogenic-rf-system-integration.mdx`
- `simul-details.html` -> `src/content/projects/quantum-system-modeling.mdx`
- NIW/CV materials -> `src/content/projects/superconducting-quantum-hardware-calibration.mdx`

Project copy was reconciled against NIW/CV materials. Leadership claims are retained where the NIW packet explicitly supports them, including nanofabrication workflows, Hamiltonian-estimation/readout optimization, two-qubit interaction characterization, low-temperature transport measurements, RF/cryogenic infrastructure, and current superconducting-hardware calibration work.

Preserved legacy detail pages not yet surfaced as Astro project entries:

- `IPL1-details.html`
- `IPL2-details.html`
- `laser-details.html`
- `lead-details.html`
- `QCQI-details.html`
- `super-details.html`

Excluded from public Astro pages and from `/legacy/` mirroring because they are not Jonginn Yun's projects:

- `mcm-details.html`
- `silicon-details.html`
- `vqe-details.html`

Deleted from the repository because they came from third-party source's site content rather than Jonginn Yun's site content:

- `optimize-details.html`
- `qml-details.html`
- `awards-details.html`
- associated QML, ML, QHack, and QIRS image/PDF assets

Classification is tracked in `LEGACY_CONTENT_MAP.md`.

## Publications

Currently surfaced in Astro:

- PRL 2022 Hamiltonian-estimation / energy-selective tunneling paper
- PRR 2023 superconducting diode effect paper
- npj Quantum Information 2023 two-qubit capacitive interaction paper
- npj Quantum Information 2024 Si/SiGe field-gradient singlet-triplet qubit paper
- Nature Communications 2025 transduced-noise suppression paper

Recommendation: compare against the latest CV before publication freeze.

## CV

- PDF asset is preserved at `assets/pdf/JonginnYun_CV.pdf`.
- Astro CV page now embeds the PDF in-page and keeps a direct open-PDF link.

## Notes

Currently surfaced in Astro:

- Mathematics / Topology / Topological Spaces and Point-Set Topology
- Mathematics / Topology / Quotient Spaces
- Mathematics / Analysis / Analysis, Metric Spaces, Measure Theory, and Function Spaces
- Mathematics / Algebra / Groups, Rings, Fields, Modules, and Category Refresher
- Mathematics / Algebraic Topology / Homotopy, Homology, Cohomology, and Covering Spaces
- Mathematics / Algebraic Topology / Homotopy and Covering Spaces
- Mathematics / Algebraic Topology / Homology, Cohomology, and Characteristic Classes
- Mathematics / Differential Geometry / Manifolds, Forms, Lie Derivatives, and Lie Groups
- Mathematics / Differential Geometry / Manifolds and Tangent Spaces
- Mathematics / Differential Geometry / Forms, Flows, and Lie Derivatives
- Mathematics / Analysis / Metric Spaces, Compactness, and Continuity
- Mathematics / Analysis / Sequences, Series, and Function Spaces
- Mathematics / Fiber Bundles / Fiber Bundles, Connections, Curvature, and Chern Numbers
- Mathematics / Fiber Bundles / Topological Fiber Bundles
- Mathematics / Fiber Bundles / Vector Bundles, Frames, and Sections
- Mathematics / Fiber Bundles / Principal Bundles and Connections
- Mathematics / Fiber Bundles / Chern Classes and Bloch Bundles

Physics Notion imports reviewed:

- `source_notes/notion/device-physics-mmqsim.md` -> `src/content/notes/physics/condensed-matter/device-physics-mmqsim.mdx`
- `source_notes/notion/shot-noise-limit.md` -> `src/content/notes/physics/quantum-mechanics/shot-noise-limit.mdx`
- `source_notes/notion/final-project-319.md` -> `src/content/notes/physics/condensed-matter/traveling-wave-parametric-amplifiers.mdx`
- Notion QM index material -> `src/content/notes/physics/quantum-mechanics/harmonic-oscillator-coherent-states.mdx`
- Notion QM index material -> `src/content/notes/physics/quantum-mechanics/uncertainty-principle.mdx`
- Notion EM index material -> `src/content/notes/physics/electrodynamics/section-index.mdx`

Raw Notion exports are kept locally and ignored from git. Personal project-management material from the Notion import is not surfaced in Astro.

Legacy topology reconciliation completed in this pass:

- `math/topo/topo-basic.html` intuition was folded into the topological-spaces note.
- `math/topo/quotient.html` intuition was folded into the quotient-spaces note.

Remaining notes work:

- Continue polishing each mathematics note as an independent topic page rather than as a visible slice of a single source document.
- Reconcile future Notion exports against current MDX material.
- Continue expanding the public Physics notes from technical source material only; keep personal project management notes out of the website.
- Keep raw source exports local and ignored; publish only curated MDX.

## Next Recommended Steps

1. Audit remaining legacy lab/course pages before deciding whether to delete or rewrite them.
2. Turn `QCQI-details.html` and `super-details.html` into course-note indexes only if the content is actually Jonginn's.
3. Continue polishing differential geometry, algebraic topology, and analysis as independent note sequences.
4. Review publication/CV consistency against the current PDF.
