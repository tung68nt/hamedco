import { MetadataRoute } from 'next';
import { ALL_PRODUCTS } from '../data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hamedco.com.vn';
  const now = new Date();

  const productEntries: MetadataRoute.Sitemap = ALL_PRODUCTS.map((product) => ({
    url: `${baseUrl}/san-pham/chi-tiet/${product.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return productEntries;
}
