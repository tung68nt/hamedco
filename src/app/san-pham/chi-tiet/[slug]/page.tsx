import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ALL_PRODUCTS, getProductBySlug } from "@/data/products";
import Link from "next/link";
import ProductDetailClient from "./ProductDetailClient";
import JsonLd from "@/components/JsonLd";
import { CATEGORIES } from "@/data/categories";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug) as any;
  if (!product) return { title: "Không tìm thấy sản phẩm" };
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hamedco.com.vn';
  const canonicalUrl = product.seo?.canonical || `${baseUrl}/san-pham/chi-tiet/${slug}`;
  const title = product.seo?.title || `${product.name} — ${product.subtitle?.vi || product.subtitle} | HAMEDCO`;
  const description = product.seo?.description || product.description?.vi || product.description;
  const images = product.images?.length ? product.images : [product.thumbnail];

  return {
    title,
    description,
    keywords: [
      product.name,
      product.brand,
      "thiết bị y tế",
      "philips healthcare",
      product.deviceType,
    ].filter(Boolean),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "HAMEDCO",
      images: images.map((img: string) => ({
        url: img,
        width: 1200,
        height: 630,
        alt: product.name,
      })),
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
    robots: {
      index: product.seo?.metaRobots?.includes("noindex") ? false : true,
      follow: product.seo?.metaRobots?.includes("nofollow") ? false : true,
      googleBot: {
        index: product.seo?.metaRobots?.includes("noindex") ? false : true,
        follow: product.seo?.metaRobots?.includes("nofollow") ? false : true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug) as any;

  if (!product) {
    notFound();
  }

  // Find related products (same device type, exclude self)
  const productDeviceType = (product as any).deviceType;
  const related = ALL_PRODUCTS
    .filter((p: any) => p.id !== product.id && p.deviceType === productDeviceType)
    .slice(0, 3);

  // If not enough related in same category, fill from other categories
  const relatedFilled = related.length >= 3
    ? related
    : [
        ...related,
        ...ALL_PRODUCTS
          .filter((p) => p.id !== product.id && !related.find((r) => r.id === p.id))
          .slice(0, 3 - related.length),
      ];

  const cat = CATEGORIES.find(c => c.id === productDeviceType);
  const catName = cat ? cat.name.vi : "Sản Phẩm";
  const catUrl = cat ? `/san-pham/${cat.id}` : "/san-pham";

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.images?.length ? product.images : [product.thumbnail],
    "description": product.seo?.description || product.description?.vi || product.description,
    "sku": product.slug?.toUpperCase(),
    "mpn": product.slug?.toUpperCase(),
    "brand": {
      "@type": "Brand",
      "name": product.brand || "Philips"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": product.brand || "Philips"
    },
    "category": catName,
    "offers": {
      "@type": "Offer",
      "url": `https://hamedco.com.vn/san-pham/chi-tiet/${slug}`,
      "priceCurrency": "VND",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "HAMEDCO"
      }
    },
    "aggregateRating": product.rating ? {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount || "1"
    } : undefined,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Trang Chủ",
        "item": "https://hamedco.com.vn"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Sản Phẩm",
        "item": "https://hamedco.com.vn/san-pham"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": catName,
        "item": `https://hamedco.com.vn${catUrl}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": product.name,
        "item": `https://hamedco.com.vn/san-pham/chi-tiet/${slug}`
      }
    ]
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      {product.seo?.faq && product.seo.faq.length > 0 && (
         <JsonLd data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": product.seo.faq.map((f: any) => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer
              }
            }))
         }} />
      )}
      <ProductDetailClient
        product={product}
        related={relatedFilled}
      />
    </>
  );
}
