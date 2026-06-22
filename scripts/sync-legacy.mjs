import { cp, mkdir, readdir, copyFile, rm } from 'node:fs/promises';
import { join, extname } from 'node:path';

const root = process.cwd();
const publicDir = join(root, 'public');

async function copyIfExists(from, to) {
  try {
    await cp(from, to, { recursive: true, force: true });
  } catch (error) {
    if (error?.code !== 'ENOENT') throw error;
  }
}

await mkdir(publicDir, { recursive: true });
await copyIfExists(join(root, 'assets'), join(publicDir, 'assets'));

const legacyDir = join(publicDir, 'legacy');
await mkdir(legacyDir, { recursive: true });

const entries = await readdir(root, { withFileTypes: true });
const legacyDirs = ['math', 'physics', 'engineering', 'labnote'];
const excludedLegacyFiles = new Set([
  'index.html',
  'mcm-details.html',
  'silicon-details.html',
  'vqe-details.html',
  'optimize-details.html',
  'qml-details.html',
  'awards-details.html',
  'IPL1-details.html',
  'IPL2-details.html',
  'laser-details.html',
  'lead-details.html',
  'QCQI-details.html',
  'super-details.html'
]);

const excludedPublicAssetPaths = [
  'assets/img/ML_code_1.png',
  'assets/img/ml_cover.png',
  'assets/img/ml_result.png',
  'assets/img/ml_result_wo.png',
  'assets/img/model_1.png',
  'assets/img/model_2.png',
  'assets/img/model_3.png',
  'assets/img/qhack_2024_0.png',
  'assets/img/qhack_2024_1.png',
  'assets/img/qhack_2024_2.png',
  'assets/img/QIRS_2023_1.png',
  'assets/img/QIRS_2023_2.png',
  'assets/img/QIRS_2023_3.png',
  'assets/img/QIRS_2023_4.png',
  'assets/img/QIRS_2023_5.png',
  'assets/img/QIRS_2024_1.png',
  'assets/img/QIRS_2024_2.png',
  'assets/img/QIRS_2024_3.png',
  'assets/img/QIRS_2024_4.png',
  'assets/img/QIRS_2024_5.png',
  'assets/img/QIRS_2024_6.png',
  'assets/img/QIRS_2024_7.png',
  'assets/img/qml_1.png',
  'assets/img/qml_2.png',
  'assets/img/qml_3.png',
  'assets/img/qml_4.png',
  'assets/img/qml_5.png',
  'assets/img/qml_kernel.png',
  'assets/pdf/QIRS_2023.pdf',
  'assets/pdf/QIRS_2024.pdf'
];

for (const assetPath of excludedPublicAssetPaths) {
  await rm(join(publicDir, assetPath), { force: true });
}

for (const fileName of excludedLegacyFiles) {
  await rm(join(legacyDir, fileName), { force: true });
}

await rm(join(legacyDir, 'forms'), { recursive: true, force: true });

for (const entry of entries) {
  if (entry.isFile() && extname(entry.name).toLowerCase() === '.html') {
    if (excludedLegacyFiles.has(entry.name)) continue;
    await copyFile(join(root, entry.name), join(legacyDir, entry.name));
  }
}

for (const dir of legacyDirs) {
  await copyIfExists(join(root, dir), join(legacyDir, dir));
}

await copyIfExists(join(root, 'CNAME'), join(publicDir, 'CNAME'));
