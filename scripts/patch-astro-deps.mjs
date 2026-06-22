import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const patches = [
  {
    file: join(process.cwd(), 'node_modules', 'aria-query', 'lib', 'index.js'),
    replacements: [
      ['require("./ariaPropsMap")', 'require("./ariaPropsMap.js")'],
      ['require("./domMap")', 'require("./domMap.js")'],
      ['require("./rolesMap")', 'require("./rolesMap.js")'],
      ['require("./elementRoleMap")', 'require("./elementRoleMap.js")'],
      ['require("./roleElementMap")', 'require("./roleElementMap.js")']
    ]
  },
  {
    file: join(process.cwd(), 'node_modules', 'axobject-query', 'lib', 'index.js'),
    replacements: [
      ['require("./AXObjectElementMap")', 'require("./AXObjectElementMap.js")'],
      ['require("./AXObjectRoleMap")', 'require("./AXObjectRoleMap.js")'],
      ['require("./AXObjectsMap")', 'require("./AXObjectsMap.js")'],
      ['require("./elementAXObjectMap")', 'require("./elementAXObjectMap.js")']
    ]
  }
];

for (const patch of patches) {
  if (!existsSync(patch.file)) continue;
  let text = await readFile(patch.file, 'utf8');
  let changed = false;
  for (const [from, to] of patch.replacements) {
    if (text.includes(from)) {
      text = text.replaceAll(from, to);
      changed = true;
    }
  }
  if (changed) {
    await writeFile(patch.file, text, 'utf8');
  }
}
