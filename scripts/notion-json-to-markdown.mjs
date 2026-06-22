import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { basename } from 'node:path';

const files = process.argv.slice(2);

function recordValue(record) {
  return record?.value?.value ?? record?.value;
}

function richText(parts = []) {
  return parts
    .map((part) => {
      let text = part[0] ?? '';
      for (const mark of part[1] ?? []) {
        if (mark[0] === 'e') text = `$${mark[1]}$`;
        if (mark[0] === 'd') text = mark[1]?.start_date ?? text;
        if (mark[0] === 'b') text = `**${text}**`;
        if (mark[0] === 'i') text = `_${text}_`;
        if (mark[0] === 'c') text = `\`${text}\``;
        if (mark[0] === 'a') text = `[${text}](${mark[1]})`;
      }
      return text;
    })
    .join('');
}

function blockText(block) {
  return richText(block.properties?.title ?? []);
}

function indent(text, depth) {
  const prefix = '  '.repeat(depth);
  return text
    .split('\n')
    .map((line) => (line ? `${prefix}${line}` : line))
    .join('\n');
}

function renderBlock(id, blocks, depth = 0) {
  const record = blocks[id];
  const block = recordValue(record);
  if (!block) return '';

  const text = blockText(block);
  const children = (block.content ?? [])
    .map((childId) => renderBlock(childId, blocks, depth + 1))
    .filter(Boolean)
    .join('\n\n');

  let body = '';
  switch (block.type) {
    case 'page':
      body = `# ${text || 'Untitled'}`;
      break;
    case 'header':
      body = `## ${text}`;
      break;
    case 'sub_header':
      body = `### ${text}`;
      break;
    case 'sub_sub_header':
      body = `#### ${text}`;
      break;
    case 'text':
      body = text;
      break;
    case 'bulleted_list':
      body = `- ${text}`;
      break;
    case 'numbered_list':
      body = `1. ${text}`;
      break;
    case 'to_do':
      body = `- [${block.properties?.checked ? 'x' : ' '}] ${text}`;
      break;
    case 'quote':
      body = `> ${text}`;
      break;
    case 'callout':
      body = `> ${text}`;
      break;
    case 'code':
      body = `\`\`\`\n${text}\n\`\`\``;
      break;
    case 'equation':
      body = `$$\n${block.properties?.title?.[0]?.[0] ?? text}\n$$`;
      break;
    case 'divider':
      body = '---';
      break;
    case 'image':
    case 'file':
    case 'pdf':
      body = `[${block.type}: ${text || block.format?.display_source || block.format?.source || id}]`;
      break;
    default:
      body = text ? `<!-- notion:${block.type} -->\n${text}` : `<!-- notion:${block.type} ${id} -->`;
      break;
  }

  if (children) {
    body = `${body}\n\n${indent(children, block.type === 'bulleted_list' || block.type === 'numbered_list' ? 1 : 0)}`;
  }

  return body.trim();
}

await mkdir('source_notes/notion', { recursive: true });

for (const file of files) {
  const raw = (await readFile(file, 'utf8')).replace(/^\uFEFF/, '');
  const json = JSON.parse(raw);
  const blocks = json.recordMap?.block ?? {};
  const root = Object.values(blocks)
    .map(recordValue)
    .find((block) => block?.type === 'page');

  if (!root) {
    console.warn(`No root page in ${file}`);
    continue;
  }

  const markdown = `${renderBlock(root.id, blocks)}\n`;
  const out = `source_notes/notion/${basename(file, '.json')}.md`;
  await writeFile(out, markdown, 'utf8');
  console.log(`${out}`);
}
