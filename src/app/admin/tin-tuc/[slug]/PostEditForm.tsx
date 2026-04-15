"use client";

import { useState } from "react";
import { updatePost } from "../actions";
import { BLOG_CATEGORIES, BlogPost } from "@/data/blog";

export default function PostEditForm({ initialData }: { initialData: BlogPost }) {
  const [formData, setFormData] = useState(initialData);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [tagInput, setTagInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, fieldPath?: string) => {
    if (!fieldPath) {
      if (e.target.name.includes('.')) {
        const keys = e.target.name.split('.');
        setFormData({
          ...formData,
          [keys[0]]: { ...(formData as any)[keys[0]], [keys[1]]: e.target.value },
        });
      } else {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
      return;
    }
    
    const keys = fieldPath.split(".");
    if (keys.length === 1) {
      setFormData({ ...formData, [keys[0]]: e.target.value });
    } else if (keys.length === 2) {
      setFormData({
        ...formData,
        [keys[0]]: { ...(formData as any)[keys[0]], [keys[1]]: e.target.value },
      });
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);
    const res = await updatePost(formData.slug, formData);
    setMessage(
      res.success
        ? { type: "success", text: "✓ Lưu thành công! Bài viết đã được cập nhật." }
        : { type: "error", text: "✗ Lưu thất bại: " + res.error }
    );
    setSaving(false);
    if (res.success) setTimeout(() => setMessage(null), 4000);
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({ ...formData, tags: [...formData.tags, tagInput.trim()] });
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setFormData({ ...formData, tags: formData.tags.filter(t => t !== tag) });
  };

  return (
    <form onSubmit={handleSave}>
      {message && (
        <div className={`admin-toast ${message.type}`}>
          {message.text}
        </div>
      )}

      {/* Basic Info */}
      <div className="admin-card" style={{ marginBottom: "20px" }}>
        <div className="admin-card-header">
          <h2>Thông tin bài viết</h2>
        </div>
        <div className="admin-card-body">
          <div className="form-group">
            <label className="form-label">Tiêu đề *</label>
            <input
              type="text"
              className="form-input"
              value={formData.title}
              onChange={handleChange}
              name="title"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Slug *</label>
            <input
              type="text"
              className="form-input"
              value={formData.slug}
              onChange={handleChange}
              name="slug"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Mô tả ngắn (Subtitle) *</label>
            <input
              type="text"
              className="form-input"
              value={formData.subtitle}
              onChange={handleChange}
              name="subtitle"
              required
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div className="form-group">
              <label className="form-label">Danh mục *</label>
              <select
                className="form-input"
                value={formData.category}
                onChange={handleChange}
                name="category"
              >
                {BLOG_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name.vi}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Ngày đăng *</label>
              <input
                type="date"
                className="form-input"
                value={formData.publishedAt}
                onChange={handleChange}
                name="publishedAt"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Tên tác giả</label>
            <input
              type="text"
              className="form-input"
              value={formData.author.name}
              onChange={(e) => setFormData({ ...formData, author: { ...formData.author, name: e.target.value } })}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="admin-card" style={{ marginBottom: "20px" }}>
        <div className="admin-card-header">
          <h2>Nội dung</h2>
        </div>
        <div className="admin-card-body">
          <div className="form-group">
            <label className="form-label">Ảnh bìa (URL) *</label>
            <input
              type="url"
              className="form-input"
              value={formData.coverImage}
              onChange={handleChange}
              name="coverImage"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Nội dung bài viết (Markdown)</label>
            <textarea
              className="form-input"
              style={{ minHeight: "400px", fontFamily: "var(--font-mono, monospace)" }}
              value={formData.content}
              onChange={handleChange}
              name="content"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Tags</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
              {formData.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "4px 10px",
                    background: "var(--color-primary-light)",
                    color: "var(--color-primary-dark)",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "0.8125rem",
                  }}
                >
                  #{tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    style={{ background: "none", border: "none", cursor: "pointer", padding: 0, color: "inherit" }}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <input
                type="text"
                className="form-input"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTag())}
                placeholder="Nhập tag và nhấn Enter..."
              />
              <button type="button" className="btn btn-outline" onClick={handleAddTag}>
                Thêm
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SEO */}
      <div className="admin-card" style={{ marginBottom: "20px" }}>
        <div className="admin-card-header">
          <h2>SEO</h2>
        </div>
        <div className="admin-card-body">
          <div className="form-group">
            <label className="form-label">Meta Title</label>
            <input
              type="text"
              className="form-input"
              value={formData.seo?.title || ""}
              onChange={(e) => setFormData({ ...formData, seo: { ...formData.seo, title: e.target.value, description: formData.seo?.description || "", metaRobots: formData.seo?.metaRobots || "index,follow" } })}
              placeholder="SEO title..."
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Meta Description</label>
            <textarea
              className="form-input"
              style={{ minHeight: "80px" }}
              value={formData.seo?.description || ""}
              onChange={(e) => setFormData({ ...formData, seo: { ...formData.seo, description: e.target.value, title: formData.seo?.title || "", metaRobots: formData.seo?.metaRobots || "index,follow" } })}
              placeholder="SEO description..."
            />
          </div>
        </div>
      </div>

      {/* Save Bar */}
      <div className="admin-save-bar">
        <div className="container">
          <button type="button" className="btn btn-outline" onClick={() => window.history.back()}>
            Hủy
          </button>
          <button type="submit" className="btn btn-primary" disabled={saving}>
            {saving ? "Đang lưu..." : "Lưu thay đổi"}
          </button>
        </div>
      </div>
    </form>
  );
}
