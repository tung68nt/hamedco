import { notFound } from "next/navigation";
import Link from "next/link";
import { CATEGORIES } from "@/data/categories";
import { PHILIPS_PRODUCTS } from "@/data/products";
import PageHero from "@/components/layout/PageHero";
import ClientCategoryPage from "./ClientCategoryPage";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const cat = CATEGORIES.find((c) => c.slug === slug);
  if (!cat) return { title: "Không tìm thấy danh mục — HAMEDCO" };

  return {
    title: `${cat.name.vi} | HAMEDCO Thiết Bị Y Tế`,
    description: cat.description.vi,
  };
}

// Generate static routes at build time
export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = CATEGORIES.find((c) => c.slug === slug);
  
  if (!cat) {
    notFound();
  }

  // Filter products by categoryIds array
  const products = PHILIPS_PRODUCTS.filter((p: any) => p.categoryIds?.includes(cat.id));

  return (
    <>
      <PageHero
        title={cat.name.vi}
        description={cat.description.vi}
        breadcrumbs={[
          { label: "Sản phẩm", href: "/san-pham" },
          { label: cat.name.vi }
        ]}
      />
      
      <section className="section bg-light">
        <div className="container">
          <div style={{ marginBottom: "2rem" }}>
            <Link href="/san-pham" style={{ color: "var(--color-primary)", textDecoration: "none", fontWeight: 500 }}>
              ← Xem tất cả sản phẩm
            </Link>
          </div>
          
          <ClientCategoryPage category={cat} products={products} />
        </div>
      </section>
    </>
  );
}
