import fs from 'fs';
let content = fs.readFileSync('src/data/products.ts', 'utf-8');

// Replace any leftover categoryIds
content = content.replace(/categoryIds:\s*\[.*?\],/g, "deviceType: 'sieu-am',\n    priceTier: 'tam-trung',");
content = content.replace(/export const PHILIPS_PRODUCTS = /g, 'export const ULTRASOUND_PRODUCTS = ');

content += `
import { CT_PRODUCTS } from './products-ct';
import { MRI_PRODUCTS } from './products-mri';
import { XRAY_PRODUCTS } from './products-xray';

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

fs.writeFileSync('src/data/products.ts', content);
