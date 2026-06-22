# Jonginn Yun Academic Website

This repository contains Jonginn Yun's personal academic website. Version 1 migrates the maintainable site surface to Astro + TypeScript + MDX while preserving the original legacy HTML, CSS, assets, and DevFolio-based visual language.

## Commands

Use the normal npm commands when Node.js is on `PATH`:

```powershell
npm install
npm run dev
npm run build
npm run preview
npm run check
npm run generate:notes
```

If `node` or `npm` is not found in PowerShell, either add Node.js to `PATH` or use the explicit Windows npm path:

```powershell
& "C:\Program Files\nodejs\npm.cmd" install --cache .npm-cache
& "C:\Program Files\nodejs\npm.cmd" run dev
& "C:\Program Files\nodejs\npm.cmd" run build
& "C:\Program Files\nodejs\npm.cmd" run preview
& "C:\Program Files\nodejs\npm.cmd" run check
& "C:\Program Files\nodejs\npm.cmd" run lint
& "C:\Program Files\nodejs\npm.cmd" run generate:notes
```

`npm run dev` serves the site at `http://localhost:4321/`.

## How to Use the Website Locally

There are two modes:

- Development mode: run `npm run dev`, then edit files under `src/`. Astro updates the local site automatically. This is the normal way to write and preview pages.
- Production mode: run `npm run build` when you want to verify the deployable static site. The output is written to `dist/`. Run `npm run preview` to inspect that built output locally.

You do not manually edit `dist/`. It is generated output. The old hand-written HTML files are still preserved in the repository and mirrored under `/legacy/` during Astro builds.

Lecture-note fragments generated from `source_notes/lecture_notes/fibre_bundles_phys374_selfcontained_v13.tex` are split into topical pages with:

```powershell
npm run generate:notes
```

Run this after editing the LaTeX source, then run `npm run dev` or `npm run build`.

## Structure

- `src/pages/`: Astro pages for Home, Research, Publications, Projects, Notes, Essays, CV, and Contact.
- `src/layouts/LegacyLayout.astro`: shared layout that loads the preserved Bootstrap/vendor CSS and legacy stylesheet.
- `src/content/`: MDX content collections for `notes`, `essays`, `projects`, and `publications`.
- `src/content/config.ts`: front matter schema.
- `src/styles/v1.css`: small Astro-specific layer on top of the legacy design.
- `assets/`, `math/`, `physics/`, `engineering/`, `labnote/`, root `*.html`: preserved legacy site material.
- `source_notes/lecture_notes/`: LaTeX source/reference material only.
- `scripts/sync-legacy.mjs`: mirrors legacy assets/pages into `public/` for Astro builds.
- `scripts/new-content.mjs`: local MDX draft generator.

## Adding Content

No-code-ish local option on Windows:

```powershell
scripts\write-note.cmd
```

This opens a small prompt for title, category, section, and subsection, then creates an MDX draft for you.

Create a draft note:

```powershell
& "C:\Program Files\nodejs\npm.cmd" run new:note -- "My Note Title"
```

Create a draft note directly under a subject section:

```powershell
& "C:\Program Files\nodejs\npm.cmd" run new:note -- "Quotient Topology" --category "Mathematics" --section "Topology" --subsection "Quotient spaces"
```

This creates a nested MDX draft such as `src/content/notes/mathematics/topology/quotient-topology.mdx` with a matching `/notes/mathematics/topology/quotient-topology/` URL. While `npm run dev` is running, save the MDX file and refresh the browser to preview it.

Create a draft essay:

```powershell
& "C:\Program Files\nodejs\npm.cmd" run new:essay -- "My Essay Title"
```

Both scripts create valid MDX front matter and use JSX comments such as `{/* TODO: ... */}` instead of HTML comments.

This is still a static-site workflow, not a hosted blog dashboard. A Tistory/Tumblr-like editor is possible later through a Git-backed CMS such as Decap CMS or TinaCMS, but that would add authentication and deployment configuration.

## Drafts

Draft entries use `draft: true`.

- Development: drafts are visible in listings with a draft badge.
- Production build: drafts are hidden from listings and draft pages are not generated.
- Override: set `PUBLIC_SHOW_DRAFTS=true` only when intentionally building a draft preview.

Draft notes remain hidden from production builds unless explicitly enabled. Public notes should use `draft: false`.

## Math and MDX

MDX supports math through `remark-math` and `rehype-katex`. Use inline math with `$...$` and display math with `$$...$$`. Long LaTeX notes should be converted into readable MDX structure before publication; keep the original source under `source_notes/` for reference.

## Design Preservation

Version 1 keeps the original academic/minimal design direction:

- Legacy `assets/css/style.css` remains the primary stylesheet.
- Bootstrap, Bootstrap Icons, GLightbox, Swiper, and Typed.js assets are preserved.
- The home hero reuses the original background and typography.
- Project cards and content boxes follow the old spacing, shadows, section headings, and color behavior.
- Legacy detail pages are mirrored under `/legacy/` during build.

## Security Rules

- Do not commit `.env`, `.env.local`, API keys, OAuth secrets, tokens, or deployment credentials.
- Do not put credentials in frontend code.
- Do not call the OpenAI API unless explicitly requested.
- Do not auto-post to Naver Blog.
- Future automation must read credentials from local env files or deployment secrets only.

See `SECURITY_NOTES.md`.

## Future Work

Phase 2 ideas are documented but not implemented:

- OpenAI-assisted translation script using environment variables.
- Naver draft export to local `.html` and `.txt` files only.
- Optional Git-backed CMS through GitHub OAuth, implemented only with a secure backend or trusted provider.
- Further reconciliation of LaTeX source notes into polished public MDX notes.
