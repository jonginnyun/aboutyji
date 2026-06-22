# Security Notes

This is a static academic website. Version 1 has no credentialed backend and no external API automation.

## Rules

- Keep secrets in local `.env` files or deployment-provider secret storage.
- Never commit `.env`, `.env.local`, API keys, OAuth secrets, GitHub tokens, OpenAI keys, Naver credentials, or deployment credentials.
- Never place credentials in Astro pages, client JavaScript, MDX front matter, or bundled frontend code.
- Do not add browser automation for Naver Blog.
- Do not auto-post to Naver Blog.
- Do not call OpenAI or other external APIs unless explicitly requested for a future task.

## Current Implementation

- The site builds statically.
- `scripts/new-content.mjs` only creates local MDX files.
- `scripts/sync-legacy.mjs` only copies local legacy assets into `public/`.
- No credentials are required for install, dev, build, preview, note creation, or essay creation.

## Phase 2 Notes

Future translation tooling should be a local script that reads `OPENAI_API_KEY` from an uncommitted `.env.local` or from CI/deployment secrets. It should write draft MDX files locally and never publish automatically.

Future Naver support should start as local export only, for example `.html` and `.txt` files intended for manual review. Any posting workflow would require a separate security review.

Future Git-backed CMS work should use a secure OAuth flow through a trusted provider or backend. OAuth client secrets must never be exposed in frontend code.
