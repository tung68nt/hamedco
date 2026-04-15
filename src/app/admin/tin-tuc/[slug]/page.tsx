import { BLOG_POSTS } from "@/data/blog";
import PostEditForm from "./PostEditForm";
import { redirect } from "next/navigation";

export default async function AdminPostEditPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    redirect("/admin/tin-tuc");
  }

  return (
    <>
      {/* Edit Hero Bar */}
      <div className="admin-edit-hero">
        <div style={{ 
          width: "80px", 
          height: "60px", 
          borderRadius: "var(--radius-md)", 
          overflow: "hidden",
          background: "var(--color-gray-100)",
          flexShrink: 0
        }}>
          <img 
            src={post.coverImage} 
            alt={post.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="admin-edit-meta">
          <p>
            <a href="/admin/tin-tuc" style={{ color: "var(--color-primary)", textDecoration: "none", fontSize: "0.8rem", fontWeight: 500 }}>
              ← Quay lại danh sách
            </a>
          </p>
          <h1>{post.title}</h1>
          <p style={{ fontFamily: "var(--font-mono, monospace)" }}>/tin-tuc/{post.slug}</p>
        </div>
      </div>

      {/* Content */}
      <div className="admin-content">
        <PostEditForm initialData={post} />
      </div>
    </>
  );
}
