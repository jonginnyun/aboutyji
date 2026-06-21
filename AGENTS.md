# AGENTS.md

## Project identity

This is my personal academic website. It should eventually serve three purposes:

1. A professional academic/research profile suitable for sharing with colleagues, labs, collaborators, recruiters, and immigration attorneys.
2. A long-term writing platform for physics notes, research notes, intuition-based explanations, and study essays.
3. A bilingual Korean/English static website where Korean is often the source language and English pages can be generated or maintained separately.

The site should not feel like a generic portfolio template. It should feel like a serious academic research website for an experimental physicist working on semiconductor quantum devices, superconducting circuits, cQED, and many-body/quantum physics notes.

## User background to preserve in site design

The site owner is Jonginn Yun, a Stanford Applied Physics PhD student and experimental physicist. Prior research includes semiconductor quantum-dot qubits, spin qubits, quantum control, randomized benchmarking, gate set tomography, Si/SiGe and GaAs devices, cryogenic measurement, RF reflectometry, nanofabrication, and related quantum device experiments. Current interests include superconducting circuits, multimode cQED, hybrid quantum systems, and physics-oriented research notes.

## Desired long-term architecture

Prefer a maintainable static-site architecture where the user writes posts as Markdown or MDX files, not hand-written HTML.

The preferred target stack is:

* Astro
* TypeScript
* MDX
* Content collections
* LaTeX/math support
* Bilingual routing for Korean and English
* A clean academic design
* Automated build/deploy through GitHub Actions when appropriate

Do not introduce a full database-backed CMS unless explicitly requested. Do not introduce WordPress. Do not introduce heavy client-side React unless there is a specific need.

## Content types

The site should support at least these content types:

* Static profile pages
* Research overview
* Publications
* Selected projects
* Physics notes
* Research notes
* Essays/blog posts
* CV page
* Contact page

The writing system should support math-heavy posts, code blocks, citations/links, diagrams/images, and long-form technical explanations.

## Bilingual requirements

The site should eventually support:

* Korean original posts
* English translated versions
* Language switch links
* Stable slugs
* Canonical links where appropriate
* Front matter that records language and translation relationships

Korean content should not be destroyed or overwritten during migration. English translation automation should be added only after the content model is stable.

## OpenAI translation pipeline

Eventually add scripts that can:

1. Read Korean MDX files.
2. Translate them into English using the OpenAI API.
3. Preserve Markdown/MDX structure.
4. Preserve LaTeX exactly.
5. Preserve code blocks exactly.
6. Preserve links and image references.
7. Write English MDX files with proper front matter.
8. Avoid retranslating unchanged files by using source hashes.

Do not hard-code API keys. Use environment variables. Do not commit secrets.

## Naver Blog export

Naver Blog auto-posting should not be a core feature. Instead, implement export scripts that generate Naver-friendly draft files, such as HTML or plain text summaries, which the user can manually review and paste into Naver Blog.

The Naver draft should usually include:

* Title
* Short Korean summary
* Link to the original website post
* Link to the English version if available
* Optional tags

Do not implement browser automation for Naver login/posting unless explicitly requested later.

## Migration principles

This repository may currently be a hand-written static HTML site. The migration must be incremental.

Before making large changes:

1. Inspect the repository structure.
2. Identify all existing pages, assets, scripts, and deployment configuration.
3. Summarize the current architecture.
4. Propose a staged migration plan.
5. Preserve existing URLs where possible.
6. If URLs must change, create redirects or document the change.
7. Do not delete legacy content until it has been migrated or backed up.
8. Keep commits small and reviewable.

## Engineering expectations

Before finalizing any change:

* Run the relevant build command.
* Run formatting/linting/type checks if they exist.
* If no checks exist, document that clearly.
* Explain what changed.
* Explain how to test locally.
* Avoid unnecessary dependencies.
* Ask before adding large frameworks or services.
* Prefer simple, boring, maintainable code.

## Design expectations

The design should be:

* Academic
* Minimal
* Serious
* Readable
* Math-friendly
* Mobile-friendly
* Fast
* Not flashy
* Not corporate-generic
* Not over-animated

Prioritize typography, spacing, navigation, and long-form reading comfort.

## Do not do

* Do not rewrite all content at once.
* Do not invent publications, roles, affiliations, awards, or citations.
* Do not make unsupported claims about immigration or NIW legal strategy.
* Do not add API keys or secrets to the repository.
* Do not convert the site to a dynamic CMS unless explicitly requested.
* Do not remove existing files without explaining why.
* Do not make Naver auto-posting the first implementation target.

## Preferred first milestone

The first milestone should be a minimal working migration:

1. Current site inventory.
2. Proposed information architecture.
3. Minimal Astro scaffold.
4. One migrated page.
5. One migrated note/post.
6. Working local build.
7. Clear next-step plan.
