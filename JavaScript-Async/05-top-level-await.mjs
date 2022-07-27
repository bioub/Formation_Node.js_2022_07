import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const prettierRcPath = path.resolve(__dirname, '.prettierrc');
const prettierRcCopyPath = path.resolve(__dirname, '.prettierrc.copy');

// ES2022 Top-level await (uniquement avec les modules ESM)
try {
  const buffer = await fs.readFile(prettierRcPath);
  await fs.writeFile(prettierRcCopyPath, buffer);
  console.log('Copy done');
} catch (err) {
  console.log(err);
}
