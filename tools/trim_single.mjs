import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function run() {
  const inputPath = 'public/assets/images/products/ct-3500.png';
  const tempPath = 'public/assets/images/products/tmp_ct-3500.png';
  
  try {
    await sharp(inputPath)
      .trim({
        background: { r: 255, g: 255, b: 255, alpha: 0 },
        threshold: 10
      })
      .toFile(tempPath);
    
    fs.renameSync(tempPath, inputPath);
    console.log(`Trimmed ct-3500.png`);
  } catch (err) {
    console.log(`Failed to trim ct-3500.png:`, err.message);
  }
}

run().catch(console.error);
