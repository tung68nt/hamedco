import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hamedco.com.vn';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/preview/',
          '/404',
          '/500',
          '/bao-gia*', // Lead form pages
          '/tim-kiem*', // Internal search
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/preview/',
          '/404',
          '/500',
          '/bao-gia*',
          '/tim-kiem*',
        ],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: '/admin/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/preview/',
        ],
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap-products.xml`,
      `${baseUrl}/sitemap-images.xml`,
    ],
    host: baseUrl,
  };
}
