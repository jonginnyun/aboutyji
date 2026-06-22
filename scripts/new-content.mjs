import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';

const type = process.argv[2];
const rawArgs = process.argv.slice(3);

function parseArgs(args) {
  const options = {};
  const titleParts = [];

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      const value = args[index + 1]?.startsWith('--') ? '' : args[index + 1];
      options[key] = value ?? '';
      if (value) index += 1;
    } else {
      titleParts.push(arg);
    }
  }

  return { titleArg: titleParts.join(' ').trim(), options };
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function slugPath(...parts) {
  return parts.map(slugify).filter(Boolean).join('/');
}

const { titleArg, options } = parseArgs(rawArgs);

const config = {
  note: {
    dir: 'src/content/notes',
    collection: 'notes',
    defaults: {
      category: 'Mathematics',
      section: 'Foundations',
      subsection: '',
      math: true,
      draft: true
    }
  },
  essay: {
    dir: 'src/content/essays',
    collection: 'essays',
    defaults: {
      category: 'essay',
      section: '',
      subsection: '',
      math: false,
      draft: true
    }
  }
};

if (!config[type]) {
  console.error('Usage: npm run new:note -- "Title" OR npm run new:essay -- "Title"');
  process.exit(1);
}

const title = titleArg || `Untitled ${type[0].toUpperCase()}${type.slice(1)}`;
const defaults = config[type].defaults;
const category = options.category || defaults.category;
const section = options.section || defaults.section;
const subsection = options.subsection || defaults.subsection;
const lang = options.lang || 'en';
const draft = options.draft || String(defaults.draft);
const math = options.math || String(defaults.math);
const slug =
  options.slug ||
  (type === 'note'
    ? slugPath(category, section, title)
    : slugify(title)) ||
  `untitled-${Date.now()}`;

const today = new Date().toISOString().slice(0, 10);
const targetDir = join(process.cwd(), config[type].dir);
const target = join(targetDir, `${slug}.mdx`);

if (existsSync(target)) {
  console.error(`Refusing to overwrite existing file: ${target}`);
  process.exit(1);
}

await mkdir(dirname(target), { recursive: true });

const body = `---
title: "${title.replaceAll('"', '\\"')}"
date: ${today}
updated: ${today}
lang: ${lang}
slug: ${slug}
category: ${category}
section: "${section}"
subsection: "${subsection}"
tags: []
summary: ""
math: ${math}
draft: ${draft}
source_note: ""
translation_of: ""
canonical_lang: en
naver_export: false
---

{/* TODO: Write and polish this ${type} before setting draft to false. */}

## Overview

`;

await writeFile(target, body, 'utf8');
console.log(`Created ${config[type].collection.slice(0, -1)}: ${target}`);
