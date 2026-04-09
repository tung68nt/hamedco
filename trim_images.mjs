import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const IMG_DIR = 'public/assets/images/products';

async function run() {
  const files = fs.readdirSync(IMG_DIR).filter(f => f.endsWith('.png'));
  for (const file of files) {
    const inputPath = path.join(IMG_DIR, file);
    const tempPath = path.join(IMG_DIR, 'tmp_' + file);
    
    try {
      await sharp(inputPath)
        .trim({
          background: { r: 255, g: 255, b: 255, alpha: 0 },
          threshold: 10 // aggressive trim of white-ish pixels
        })
        .toFile(tempPath);
      
      fs.renameSync(tempPath, inputPath);
      console.log(`Trimmed ${file}`);
    } catch (err) {
      console.log(`Failed to trim ${file}:`, err.message);
    }
  }
}

run().catch(console.error);
