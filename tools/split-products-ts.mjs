#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const dataDir = './src/data';
const productsFile = path.join(dataDir, 'products.ts');
const content = fs.readFileSync(productsFile, 'utf8');

// Find where ULTRASOUND_PRODUCTS ends (just before the CT/MRI/XRAY imports)
// The imports are at lines 1666-1668
const lines = content.split('\n');

// ULTRASOUND_PRODUCTS is from line 5 (0-indexed: 4) to line 1664 (0-indexed: 1663)
// But we need to include the export statement
const ultrasoundStart = 4; // export const ULTRASOUND_PRODUCTS = [
const ultrasoundEnd = 1663; // last line before imports

const ultrasoundContent = lines.slice(0, 1665).join('\n') + '\n';

const header = `/* ============================================================
   HAMEDCO — Philips Ultrasound Product Catalog
   Danh mục sản phẩm siêu âm Philips chính thức
   ============================================================ */

`;

const newProductsTs = `import { ULTRASOUND_PRODUCTS } from './products-ultrasound';
import { CT_PRODUCTS } from './products-ct';
import { MRI_PRODUCTS } from './products-mri';
import { XRAY_PRODUCTS } from './products-xray';

export { ULTRASOUND_PRODUCTS };

export const ALL_PRODUCTS = [
  ...ULTRASOUND_PRODUCTS,
  ...CT_PRODUCTS,
  ...MRI_PRODUCTS,
  ...XRAY_PRODUCTS
];

export function getProductBySlug(slug: string) {
  return ALL_PRODUCTS.find(p => p.slug === slug);
}

export function getProductsByDeviceType(deviceType: string) {
  return ALL_PRODUCTS.filter(p => p.deviceType === deviceType);
}

export function getProductsByPriceTier(priceTier: string) {
  return ALL_PRODUCTS.filter(p => p.priceTier === priceTier);
}
`;

fs.writeFileSync(path.join(dataDir, 'products-ultrasound.ts'), ultrasoundContent);
fs.writeFileSync(path.join(dataDir, 'products.ts'), newProductsTs);

console.log('Created products-ultrasound.ts and updated products.ts');
console.log('New products.ts is now', newProductsTs.split('\n').length, 'lines');
