import { ULTRASOUND_PRODUCTS } from './products-ultrasound';
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
