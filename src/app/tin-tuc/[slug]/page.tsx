import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS, getBlogPostBySlug, getRelatedPosts, BLOG_CATEGORIES } from "@/data/blog";
import ArticleSchema from "@/components/ArticleSchema";
import JsonLd from "@/components/JsonLd";
import "@/app/css/article.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) return { title: "Không tìm thấy bài viết" };

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hamedco.com.vn';
  const canonicalUrl = post.seo?.canonical || `${baseUrl}/tin-tuc/${slug}`;
  const title = post.seo?.title || `${post.title} | HAMEDCO`;
  const description = post.seo?.description || post.subtitle;

  return {
    title,
    description,
    keywords: post.tags,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "HAMEDCO",
      images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }],
      locale: "vi_VN",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.coverImage],
    },
    robots: {
      index: post.seo?.metaRobots?.includes("noindex") ? false : true,
      follow: post.seo?.metaRobots?.includes("nofollow") ? false : true,
    },
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

const categoryNames: Record<string, string> = {
  "tin-cong-ty": "Tin công ty",
  "nganh-y-te": "Ngành y tế",
  "kien-thuc": "Kiến thức",
};

const categoryColors: Record<string, string> = {
  "tin-cong-ty": "accent",
  "nganh-y-te": "primary",
  "kien-thuc": "outline",
};

function TableOfContents({ content }: { content: string }) {
  const headings = content.match(/##\s+(.+)|###\s+(.+)/g) || [];
  
  if (headings.length === 0) return null;

  const items = headings.map((h, i) => {
    const isH2 = h.startsWith('##');
    const text = h.replace(/^##+\s+/, '');
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return { id, text, level: isH2 ? 2 : 3 };
  });

  return (
    <nav className="toc-container" aria-label="Table of contents">
      <div className="toc-header">
        <svg className="toc-header-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
        </svg>
        <h4 className="toc-title">Nội dung bài viết</h4>
      </div>
      <ul className="toc-list">
        {items.map((item) => (
          <li key={item.id} className="toc-item">
            <a 
              href={`#${item.id}`} 
              className={`toc-link ${item.level === 3 ? 'toc-link-h3' : ''}`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function renderContent(content: string): string {
  let html = content
    // H2 headings with anchor IDs
    .replace(/^## (.+)$/gm, (_, text) => {
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return `<h2 id="${id}">${text}</h2>`;
    })
    // H3 headings with anchor IDs
    .replace(/^### (.+)$/gm, (_, text) => {
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return `<h3 id="${id}">${text}</h3>`;
    })
    // Bold text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic text
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Paragraphs (double newline)
    .replace(/\n\n+/g, '</p><p>')
    // Single line breaks
    .replace(/\n/g, '<br/>')
    // Fix multiple br tags
    .replace(/<br\/><\/p>/g, '</p>')
    .replace(/<p><br\/>/g, '<p>');

  // Wrap everything in a paragraph if not already wrapped
  if (!html.startsWith('<p>')) {
    html = '<p>' + html + '</p>';
  }

  return html;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post.id, 3);
  const category = BLOG_CATEGORIES.find(c => c.id === post.category);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hamedco.com.vn';

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Trang Chủ", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "Tin tức", "item": `${baseUrl}/tin-tuc` },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `${baseUrl}/tin-tuc/${slug}` },
    ],
  };

  const catColorClass = `category-badge${categoryColors[post.category] === 'accent' ? '-accent' : categoryColors[post.category] === 'outline' ? '-outline' : ''}`;

  return (
    <>
      <ArticleSchema
        headline={post.title}
        description={post.subtitle}
        author={{ name: post.author.name, type: "Organization" }}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt}
        image={post.coverImage}
        url={`${baseUrl}/tin-tuc/${slug}`}
        category={category?.name.vi}
        tags={post.tags}
      />
      <JsonLd data={breadcrumbSchema} />

      {post.seo?.faq && post.seo.faq.length > 0 && (
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": post.seo.faq.map((f) => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": { "@type": "Answer", "text": f.answer },
          })),
        }} />
      )}

      <main className="main-content">
        {/* Breadcrumb */}
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/" className="breadcrumb-item">Trang chủ</Link>
            <span className="breadcrumb-separator">/</span>
            <Link href="/tin-tuc" className="breadcrumb-item">Tin tức</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{post.title}</span>
          </nav>
        </div>

        {/* Article Layout */}
        <div className="article-layout">
          {/* Main Content */}
          <article>
            {/* Header */}
            <header style={{ marginBottom: "var(--space-10)" }}>
              <div style={{ display: "flex", gap: "var(--space-3)", marginBottom: "var(--space-5)", flexWrap: "wrap" }}>
                <Link 
                  href={`/tin-tuc?danh-muc=${post.category}`} 
                  className={`category-badge${categoryColors[post.category] === 'accent' ? '-accent' : categoryColors[post.category] === 'outline' ? '-outline' : ''}`}
                >
                  {categoryNames[post.category]}
                </Link>
              </div>
              
              <h1 style={{ 
                fontSize: "2.5rem", 
                fontWeight: 800, 
                lineHeight: 1.25, 
                color: "var(--color-gray-900)",
                marginBottom: "var(--space-5)",
                letterSpacing: "-0.02em"
              }}>
                {post.title}
              </h1>
              
              <p style={{ 
                fontSize: "1.25rem", 
                color: "var(--color-gray-600)", 
                lineHeight: 1.6,
                marginBottom: "var(--space-6)"
              }}>
                {post.subtitle}
              </p>

              <div className="article-meta">
                <div className="article-meta-item">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString("vi-VN", { day: "numeric", month: "long", year: "numeric" })}
                  </time>
                </div>
                {post.updatedAt && post.updatedAt !== post.publishedAt && (
                  <div className="article-meta-item">
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <span>Cập nhật: {new Date(post.updatedAt).toLocaleDateString("vi-VN")}</span>
                  </div>
                )}
                <div className="article-meta-item">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Tác giả: {post.author.name}</span>
                </div>
                <div className="article-meta-item">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <div className="tag-group">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="tag tag-default">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </header>

            {/* Cover Image */}
            <figure style={{ margin: "0 0 var(--space-10) 0" }}>
              <img 
                src={post.coverImage} 
                alt={post.title}
                style={{ 
                  width: "100%", 
                  height: "auto", 
                  borderRadius: "var(--radius-xl)",
                  boxShadow: "var(--shadow-xl)"
                }}
              />
            </figure>

            {/* Content */}
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
            />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div style={{ marginTop: "var(--space-10)", paddingTop: "var(--space-8)", borderTop: "1px solid var(--color-gray-200)" }}>
                <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", alignItems: "center" }}>
                  <span style={{ fontWeight: 600, color: "var(--color-gray-700)" }}>Tags:</span>
                  <div className="tag-group">
                    {post.tags.map((tag) => (
                      <span key={tag} className="tag tag-default">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Share */}
            <div className="article-share">
              <span className="article-share-label">Chia sẻ:</span>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${baseUrl}/tin-tuc/${slug}`)}`} 
                target="_blank" 
                rel="noopener"
                className="btn btn-outline btn-sm"
              >
                Facebook
              </a>
              <a 
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`${baseUrl}/tin-tuc/${slug}`)}`} 
                target="_blank" 
                rel="noopener"
                className="btn btn-outline btn-sm"
              >
                LinkedIn
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${baseUrl}/tin-tuc/${slug}`)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener"
                className="btn btn-outline btn-sm"
              >
                Twitter
              </a>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="article-sidebar">
            <TableOfContents content={post.content} />
          </aside>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="related-articles">
            <div className="container">
              <h2 className="related-articles-title">Bài viết liên quan</h2>
              <div className="related-articles-grid">
                {relatedPosts.map((related) => (
                  <Link key={related.id} href={`/tin-tuc/${related.slug}`} className="related-article-card">
                    <div className="related-article-image">
                      <img src={related.coverImage} alt={related.title} loading="lazy" />
                    </div>
                    <div className="related-article-content">
                      <div className="related-article-category">{categoryNames[related.category]}</div>
                      <h3 className="related-article-title">{related.title}</h3>
                      <time className="related-article-date">
                        {new Date(related.publishedAt).toLocaleDateString("vi-VN")}
                      </time>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="cta-section" style={{ marginTop: 0 }}>
          <div className="container" style={{ textAlign: "center" }}>
            <h2 style={{ color: "var(--color-white)", marginBottom: "16px" }}>
              Cần tư vấn về thiết bị y tế?
            </h2>
            <p style={{ color: "rgba(255,255,255,.75)", marginBottom: "24px", maxWidth: "500px", margin: "0 auto 24px" }}>
              Liên hệ đội ngũ chuyên gia HAMEDCO để được hỗ trợ
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
