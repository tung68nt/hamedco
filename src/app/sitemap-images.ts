import { MetadataRoute } from 'next';
import { ALL_PRODUCTS } from '../data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hamedco.com.vn';
  const now = new Date();

  const imageEntries: MetadataRoute.Sitemap = [];

  ALL_PRODUCTS.forEach((product) => {
    const productAny = product as any;
    const allImages = [
      product.thumbnail,
      ...(product.images || []),
      ...(product.features?.flatMap((f: any) => f.image ? [f.image] : []) || []),
      ...(productAny.clinicalImages?.map((c: any) => c.url) || []),
    ].filter(Boolean);

    const uniqueImages = [...new Set(allImages)];

    uniqueImages.forEach((imgUrl) => {
      imageEntries.push({
        url: imgUrl,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.5,
      });
    });
  });

  return imageEntries;
}
