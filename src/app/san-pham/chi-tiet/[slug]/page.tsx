import { notFound } from "next/navigation";
import { ALL_PRODUCTS, getProductBySlug } from "@/data/products";
import Link from "next/link";
import ProductDetailClient from "./ProductDetailClient";
import JsonLd from "@/components/JsonLd";
import { CATEGORIES } from "@/data/categories";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug) as any;
  if (!product) return { title: "Không tìm thấy sản phẩm" };
  
  const title = product.seo?.title || `${product.name} — ${product.subtitle?.vi || product.subtitle} | HAMEDCO`;
  const description = product.seo?.description || product.description?.vi || product.description;

  return {
    title,
    description,
    alternates: {
      canonical: `/san-pham/chi-tiet/${slug}`,
    }
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

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
    "image": product.images ? product.images : [product.thumbnail],
    "description": product.seo?.description || product.description?.vi || product.description,
    "brand": {
      "@type": "Brand",
      "name": product.brand || "Philips"
    }
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
