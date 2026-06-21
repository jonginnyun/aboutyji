# PROJECT_BRIEF.md

## Goal

Refactor my current personal HTML-based website into a maintainable academic website and long-form writing platform.

The current problem is that I have to manually write and upload HTML pages. I want to move toward a system where I can write posts and notes in Markdown or MDX, build the site automatically, and eventually generate English translations from Korean source posts.

## Primary audiences

1. Academic collaborators and researchers
2. Professors and lab members
3. Recruiters or technical interviewers
4. Immigration attorneys or reviewers who may need a clean public record of my research profile
5. Students or readers interested in physics explanations and research notes
6. Myself, as a long-term knowledge base

## Site tone

The site should be serious, technical, precise, and academic. It should not look like a startup landing page or a generic personal blog.

## Desired top-level navigation

* Home
* Research
* Publications
* Projects
* Notes
* Essays
* CV
* Contact

## Content categories

### Home

A concise landing page explaining who I am and what I work on.

### Research

A structured overview of my research interests and technical background. It should organize my work into themes such as semiconductor quantum devices, quantum control/benchmarking, superconducting circuits, and hybrid quantum systems.

### Publications

A clean publication list. Each publication should support fields such as title, authors, venue, year, DOI/arXiv link, role, and short contribution summary.

### Projects

Selected research projects written in an accessible but technically accurate style. Each project should have problem, method, result, and significance.

### Notes

Long-form technical notes. These may include LaTeX, equations, derivations, code snippets, diagrams, and conceptual explanations.

### Essays

Less formal but still precise physics intuition posts, career reflections, or research-adjacent writing.

### CV

A simple page linking to a PDF CV and possibly an HTML summary.

### Contact

A minimal contact page.

## Bilingual strategy

Korean may be the source language for many notes and essays. English versions should be supported as separate pages, not as machine-translated text hidden inside the same page.

Desired URL pattern:

* /ko/notes/example-slug/
* /en/notes/example-slug/

or another consistent bilingual route chosen during implementation.

## Writing format

Prefer MDX so that most posts can be written as Markdown, but special components can be embedded later when needed.

The content system should support front matter fields such as:

* title
* date
* updated
* lang
* slug
* category
* tags
* summary
* math
* draft
* translation_of
* canonical_lang
* naver_export

## Translation automation

After migration, add a script that uses the OpenAI API to translate Korean MDX into English MDX. The script should preserve LaTeX, code blocks, links, image paths, front matter structure, and headings.

The translation system should use source hashes to avoid retranslating unchanged posts.

## Naver Blog workflow

Do not auto-post to Naver Blog. Instead, create an export command that produces draft files for manual posting.

Example output:

* naver_drafts/my-post.html
* naver_drafts/my-post.txt

The draft should contain a short summary and links back to the original post on my website.

## Migration priority

Priority 1:

* Preserve the existing website.
* Inventory the current structure.
* Create a minimal Astro + MDX migration.
* Migrate only a few representative pages first.

Priority 2:

* Add content collections.
* Add bilingual routing.
* Add math support.
* Add publication/project schemas.

Priority 3:

* Add OpenAI translation script.
* Add Naver draft export.
* Add GitHub Actions deployment.

Priority 4:

* Polish design.
* Improve SEO.
* Add RSS/search/tags if useful.
