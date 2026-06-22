import { mkdir, writeFile } from 'node:fs/promises';

const pages = [
  {
    name: 'notion-database-or-index',
    id: '28ac2a01f0788025903ae2e1bf6a112d'
  },
  {
    name: 'device-physics-mmqsim',
    id: '2dfc2a01f07880929657f66eb06a62b5'
  },
  {
    name: 'shot-noise-limit',
    id: '300c2a01f0788058a4b1fcc6d273cd02'
  },
  {
    name: 'final-project-319',
    id: '319c2a01f07880839f2dfcc7d44ca113'
  },
  {
    name: 'final-project-2ab',
    id: '2abc2a01f078809a9cafe00df85a2875'
  }
];

function uuid(id) {
  return id.includes('-') ? id : id.replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, '$1-$2-$3-$4-$5');
}

async function loadPage(page) {
  const pageId = uuid(page.id);
  let cursor = { stack: [] };
  let chunkNumber = 0;
  const merged = { recordMap: { block: {}, collection: {}, collection_view: {}, notion_user: {} } };

  while (true) {
    const response = await fetch('https://www.notion.so/api/v3/loadPageChunk', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'user-agent': 'Mozilla/5.0',
        'notion-client-version': '23.13.20260622.0538'
      },
      body: JSON.stringify({
        pageId,
        limit: 100,
        cursor,
        chunkNumber,
        verticalColumns: false
      })
    });

    if (!response.ok) {
      throw new Error(`${page.name}: ${response.status} ${response.statusText}`);
    }

    const json = await response.json();
    for (const [table, records] of Object.entries(json.recordMap ?? {})) {
      merged.recordMap[table] ??= {};
      Object.assign(merged.recordMap[table], records);
    }

    cursor = json.cursor;
    chunkNumber += 1;
    if (!cursor?.stack?.length || chunkNumber > 50) break;
  }

  return merged;
}

await mkdir('source_notes/notion_raw', { recursive: true });

for (const page of pages) {
  const data = await loadPage(page);
  const out = `source_notes/notion_raw/${page.name}.json`;
  await writeFile(out, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
  const blockCount = Object.keys(data.recordMap.block ?? {}).length;
  console.log(`${page.name}: ${blockCount} blocks -> ${out}`);
}
