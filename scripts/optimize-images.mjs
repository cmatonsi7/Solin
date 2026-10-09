// Generates responsive WebP variants for every entry in src/data/images.js
//   assets-src/<key>.jpg|png  ->  public/images/<key>-<width>.webp
// Run with: npm run images
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { images, imageWidths } from "../src/data/images.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = path.join(root, "assets-src");
const outDir = path.join(root, "public", "images");
await fs.mkdir(outDir, { recursive: true });

const find = async (key) => {
  for (const ext of ["jpg", "jpeg", "png", "webp"]) {
    const p = path.join(srcDir, `${key}.${ext}`);
    try { await fs.access(p); return p; } catch { /* try next */ }
  }
  return null;
};

let count = 0;
for (const [key, entry] of Object.entries(images)) {
  const input = await find(key);
  if (!input) { console.warn(`- no source for "${key}" in assets-src (skipped, existing output kept)`); continue; }
  for (const w of imageWidths(entry)) {
    await sharp(input)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 74, effort: 5 })
      .toFile(path.join(outDir, `${key}-${w}.webp`));
    count++;
  }
}
console.log(`Optimised ${count} files -> public/images`);
