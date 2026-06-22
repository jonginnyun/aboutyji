# Codex V1 Summary

## 1. What Changed

- Created a working Astro + TypeScript + MDX Version 1 site.
- Added top-level pages: Home, Research, Publications, Projects, Notes, Essays, CV, and Contact.
- Added MDX content collections for notes, essays, projects, and publications.
- Added math rendering with `remark-math`, `rehype-katex`, and KaTeX CSS.
- Added safe draft filtering for production builds.
- Added local writing scripts: `npm run new:note` and `npm run new:essay`.
- Preserved legacy HTML/CSS/assets and mirrored them into `public/` during dev/build.

## 2. Files Changed

- Project setup: `package.json`, `package-lock.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`.
- Astro source: `src/components/`, `src/layouts/`, `src/pages/`, `src/styles/`, `src/data/`, `src/content/config.ts`.
- Content: `src/content/notes/`, `src/content/essays/`, `src/content/projects/`, `src/content/publications/`.
- Scripts: `scripts/sync-legacy.mjs`, `scripts/new-content.mjs`, `scripts/patch-astro-deps.mjs`.
- Documentation: `README.md`, `SECURITY_NOTES.md`, `TODO_NOTES_RECONCILIATION.md`, `CODEX_V1_SUMMARY.md`.

## 3. Design Preservation Decisions

- Kept legacy `assets/css/style.css` as the primary visual source of truth.
- Reused the original hero background, typography direction, section spacing, shadows, Bootstrap grid, project-card pattern, and academic/minimal tone.
- Avoided a generic portfolio redesign.
- Kept legacy detail pages available under `/legacy/` in generated builds.

## 4. Content Architecture

- `notes`: math-heavy MDX notes with hierarchy metadata.
- `essays`: long-form non-note writing.
- `projects`: maintainable project archive with legacy detail links.
- `publications`: publication metadata preserved from the legacy homepage.

Front matter supports title, date, updated, lang, slug, category, section, subsection, tags, summary, math, draft, source_note, translation_of, canonical_lang, and naver_export.

## 5. Notes Generated

Draft mathematics notes:

- Sets, Functions, and Relations
- Topological Spaces and Continuity
- Quotient Spaces
- Metric Spaces, Sequences, and Convergence
- Groups, Rings, Fields, and Modules
- Homotopy, Fundamental Group, and Covering Spaces
- Manifolds, Forms, Lie Derivatives, and Connections
- Fiber Bundles, Connections, and Curvature

Draft physics notes:

- Analytical Mechanics Roadmap
- Quantum Mechanics Section Index
- Boltzmann Entropy and Gibbs Entropy
- Electrodynamics Section Index
- Quantum Field Theory Section Index
- Crystals, Bands, and Quantum-Device Basics

All generated lecture-note-derived pages are `draft: true`.

## 6. Draft/Public Behavior

- Production hides drafts from listings and does not generate draft note/essay pages.
- Development shows drafts with a visible draft badge.
- `PUBLIC_SHOW_DRAFTS=true` can intentionally expose drafts for a draft preview build.

## 7. Security Model

- No credentials are included.
- `.env` and `.env.*` are ignored.
- No OpenAI API calls, Naver posting, Naver automation, or browser automation were added.
- Future translation, Naver export, and CMS work are documented as Phase 2.

## 8. Commands Run

```powershell
& "C:\Program Files\nodejs\npm.cmd" install --cache .npm-cache
& "C:\Program Files\nodejs\npm.cmd" run build
& "C:\Program Files\nodejs\npm.cmd" run check
& "C:\Program Files\nodejs\npm.cmd" run lint
& "C:\Program Files\nodejs\npm.cmd" run dev
```

## 9. Build Result

Final result:

- `npm run build`: passed, 14 pages built.
- `npm run check`: passed, 0 errors, 0 warnings.
- `npm run lint`: passed, 0 errors, 0 warnings.
- `npm run dev`: starts successfully at `http://127.0.0.1:4321/`.

Notes:

- npm install reported dependency audit advisories. I did not run `npm audit fix --force` because it can make broad dependency changes.
- Astro's dependency graph triggered a Windows sandbox/esbuild resolver issue for `aria-query` and `axobject-query`. `astro.config.mjs` aliases those accessibility-helper packages to local shims, and `scripts/patch-astro-deps.mjs` is retained as a defensive postinstall/prebuild patch.

## 10. How To Preview Locally

```powershell
& "C:\Program Files\nodejs\npm.cmd" run dev
```

Open `http://127.0.0.1:4321/`.

## 11. What Remains For Version 2

- Reconcile draft notes against source LaTeX and legacy note pages.
- Add polished public notes after manual review.
- Improve visual QA across mobile and desktop.
- Add real essay content.
- Decide whether to remove or keep external font loading.
- Consider secure Phase 2 translation/export/CMS tooling.
