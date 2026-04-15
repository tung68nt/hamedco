import { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS, BLOG_CATEGORIES, getBlogPostsByCategory } from "@/data/blog";
import ArticleSchema from "@/components/ArticleSchema";
import JsonLd from "@/components/JsonLd";
import "@/app/css/article.css";
import "@/app/css/components.css";

export const metadata: Metadata = {
  title: "Tin tức & Kiến thức | HAMEDCO",
  description: "Cập nhật tin tức ngành y tế, kiến thức thiết bị y tế và tin tức công ty HAMEDCO. Đối tác tin cậy của Philips Healthcare.",
};

const categoryNames: Record<string, string> = {
  "tin-cong-ty": "Tin công ty",
  "nganh-y-te": "Ngành y tế",
  "kien-thuc": "Kiến thức",
};

export default function BlogPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hamedco.com.vn';

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": BLOG_POSTS.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `${baseUrl}/tin-tuc/${post.slug}`,
      "name": post.title,
    })),
  };

  return (
    <>
      <JsonLd data={blogListSchema} />
      <main className="main-content">
        {/* Hero */}
        <section className="blog-hero">
          <div className="container">
            <h1 className="blog-hero-title">Tin tức & Kiến thức</h1>
            <p className="blog-hero-subtitle">
              Cập nhật tin tức ngành y tế, xu hướng công nghệ và hoạt động của HAMEDCO
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="blog-categories">
          <div className="container">
            <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/tin-tuc" className="btn btn-primary btn-md">
                Tất cả
              </Link>
              {BLOG_CATEGORIES.map((cat) => (
                <Link 
                  key={cat.id} 
                  href={`/tin-tuc?danh-muc=${cat.id}`} 
                  className="btn btn-outline btn-md"
                >
                  {cat.name.vi}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section style={{ padding: "var(--space-12) 0" }}>
          <div className="container">
            <div className="blog-grid">
              {BLOG_POSTS.map((post) => (
                <Link key={post.id} href={`/tin-tuc/${post.slug}`} className="blog-card">
                  <div className="blog-card-image">
                    <img 
                      src={post.coverImage} 
                      alt={post.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-card-category">
                      {categoryNames[post.category]}
                    </div>
                    <h2 className="blog-card-title">{post.title}</h2>
                    <p className="blog-card-excerpt">{post.subtitle}</p>
                    <div className="blog-card-meta">
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString("vi-VN")}
                      </time>
                      <span className="blog-card-cta">
                        Đọc tiếp
                        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container" style={{ textAlign: "center" }}>
            <h2 style={{ color: "var(--color-white)", marginBottom: "16px" }}>
              Cần tư vấn về thiết bị y tế?
            </h2>
            <p style={{ color: "rgba(255,255,255,.75)", maxWidth: "500px", margin: "0 auto 24px" }}>
              Liên hệ đội ngũ chuyên gia HAMEDCO để được hỗ trợ lựa chọn giải pháp phù hợp
            </p>
            <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/lien-he" className="btn btn-accent btn-xl">Liên hệ ngay</Link>
              <a href="tel:+84869009486" className="btn btn-outline-white btn-xl">📞 086 900 9486</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
