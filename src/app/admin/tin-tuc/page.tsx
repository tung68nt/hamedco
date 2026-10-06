import { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/blog";
import PostActions from "./PostActions";

export const metadata: Metadata = {
  title: "Quản lý Tin tức | HAMEDCO Admin",
};

const categoryNames: Record<string, string> = {
  "tin-cong-ty": "Tin công ty",
  "nganh-y-te": "Ngành y tế",
  "kien-thuc": "Kiến thức",
};

export default function AdminBlogPage() {
  return (
    <>
      {/* Topbar */}
      <div className="admin-topbar">
        <div className="admin-topbar-left">
          <h1>Quản lý Tin tức</h1>
          <p>Quản lý bài viết blog và tin tức</p>
        </div>
        <div className="admin-topbar-right">
          <span style={{ fontSize: "0.82rem", color: "var(--color-gray-400)" }}>
            Tổng: <strong style={{ color: "var(--color-gray-700)" }}>{BLOG_POSTS.length}</strong> bài viết
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="admin-content">
        {/* Categories */}
        <div className="admin-card" style={{ marginBottom: "var(--space-6)" }}>
          <div className="admin-card-header">
            <h2>Danh mục</h2>
            <button className="btn btn-primary btn-sm">
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              Thêm danh mục
            </button>
          </div>
          <div className="admin-card-body">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)" }}>
              {BLOG_CATEGORIES.map((cat) => {
                const count = BLOG_POSTS.filter(p => p.category === cat.id).length;
                return (
                  <div 
                    key={cat.id}
                    style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "var(--space-3)",
                      padding: "var(--space-3) var(--space-4)",
                      background: "var(--color-gray-50)",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--color-gray-200)"
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "0.9375rem", color: "var(--color-gray-900)" }}>
                        {cat.name.vi}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--color-gray-500)" }}>
                        {count} bài viết
                      </div>
                    </div>
                    <button className="btn btn-ghost btn-icon" style={{ width: "32px", height: "32px" }}>
                      <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Blog Table */}
        <div className="admin-card">
          <div className="admin-card-header">
            <h2>Danh sách bài viết</h2>
            <Link href="/admin/tin-tuc/tao-bai" className="btn btn-primary btn-sm">
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              Viết bài mới
            </Link>
          </div>
          <div className="admin-card-body">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Bài viết</th>
                  <th>Danh mục</th>
                  <th>Ngày đăng</th>
                  <th>Tags</th>
                  <th style={{ textAlign: "right" }}>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {BLOG_POSTS.map((post) => (
                  <tr key={post.id}>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
                        <div style={{ 
                          width: "60px", 
                          height: "40px", 
                          borderRadius: "var(--radius-sm)", 
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
                        <div>
                          <div style={{ fontWeight: 600, fontSize: "0.9375rem", color: "var(--color-gray-900)" }}>
                            {post.title}
                          </div>
                          <div style={{ fontSize: "0.75rem", color: "var(--color-gray-500)" }}>
                            /tin-tuc/{post.slug}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="admin-badge" style={{ 
                        background: "var(--color-primary-light)", 
                        color: "var(--color-primary-dark)"
                      }}>
                        {categoryNames[post.category]}
                      </span>
                    </td>
                    <td>
                      <span style={{ fontSize: "0.875rem", color: "var(--color-gray-600)" }}>
                        {new Date(post.publishedAt).toLocaleDateString("vi-VN")}
                      </span>
                    </td>
                    <td>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} style={{ 
                            fontSize: "0.7rem", 
                            padding: "2px 6px", 
                            background: "var(--color-gray-100)", 
                            borderRadius: "var(--radius-sm)",
                            color: "var(--color-gray-600)"
                          }}>
                            #{tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span style={{ fontSize: "0.7rem", color: "var(--color-gray-400)" }}>
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <div style={{ display: "flex", gap: "var(--space-2)", justifyContent: "flex-end" }}>
                        <Link href={`/tin-tuc/${post.slug}`} className="btn btn-ghost btn-sm" target="_blank">
                          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Xem
                        </Link>
                        <Link href={`/admin/tin-tuc/${post.slug}`} className="admin-btn-edit">
                          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                          Sửa
                        </Link>
                        <PostActions slug={post.slug} postTitle={post.title} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
