import { notFound } from "next/navigation";
import { PHILIPS_PRODUCTS } from "../../../data/products";
import Link from "next/link";
import ProductDetailClient from "./ProductDetailClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = PHILIPS_PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: "Không tìm thấy sản phẩm" };
  
  return {
    title: `${product.name} — ${product.subtitle.vi} | HAMEDCO`,
    description: product.description.vi,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PHILIPS_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Find related products (shared categoryIds, exclude self)
  const productCatIds = (product as any).categoryIds || [];
  const related = PHILIPS_PRODUCTS
    .filter((p: any) => p.id !== product.id && p.categoryIds?.some((id: string) => productCatIds.includes(id)))
    .slice(0, 3);

  // If not enough related in same category, fill from other categories
  const relatedFilled = related.length >= 3
    ? related
    : [
        ...related,
        ...PHILIPS_PRODUCTS
          .filter((p) => p.id !== product.id && !related.find((r) => r.id === p.id))
          .slice(0, 3 - related.length),
      ];

  return (
    <ProductDetailClient
      product={product}
      related={relatedFilled}
    />
  );
}
