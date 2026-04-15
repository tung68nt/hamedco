"use client";

import { useState } from "react";
import { createNewProduct } from "../actions";
import { CATEGORIES } from "@/data/categories";
import { useRouter } from "next/navigation";

export default function ProductCreateForm() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  
  const [formData, setFormData] = useState({
    slug: "",
    name: "",
    subtitle: { vi: "", en: "" },
    deviceType: "sieu-am",
    priceTier: "pho-thong",
    brand: "Philips Healthcare",
    description: { vi: "", en: "" },
    longDescription: { vi: "", en: "" },
    images: [""],
    thumbnail: "",
    highlights: { vi: [""], en: [""] },
    features: [],
    specifications: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, fieldPath?: string) => {
    if (!fieldPath) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
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

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);
    
    const result = await createNewProduct(formData);
    
    if (result.success) {
      setMessage({ type: "success", text: "✓ Tạo sản phẩm thành công!" });
      setTimeout(() => router.push("/admin/san-pham"), 1500);
    } else {
      setMessage({ type: "error", text: "✗ Lỗi: " + result.error });
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleCreate}>
      {message && (
        <div className={`admin-toast ${message.type}`}>
          {message.text}
        </div>
      )}

      {/* Basic Info */}
      <div className="admin-card" style={{ marginBottom: "20px" }}>
        <div className="admin-card-header">
          <h2>Thông tin cơ bản</h2>
        </div>
        <div className="admin-card-body">
          <div className="form-group">
            <label className="form-label">Tên sản phẩm *</label>
            <input
              type="text"
              className="form-input"
              value={formData.name}
              onChange={(e) => handleChange(e)}
              name="name"
              required
              placeholder="VD: Lumify Pro"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Slug *</label>
            <input
              type="text"
              className="form-input"
              value={formData.slug}
              onChange={(e) => handleChange(e)}
              name="slug"
              required
              placeholder="VD: lumify-pro (URL thân thiện)"
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div className="form-group">
              <label className="form-label">Loại thiết bị *</label>
              <select
                className="form-input"
                value={formData.deviceType}
                onChange={(e) => handleChange(e)}
                name="deviceType"
              >
                {CATEGORIES.filter(c => c.type === 'device-type').map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name.vi}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Phân khúc giá *</label>
              <select
                className="form-input"
                value={formData.priceTier}
                onChange={(e) => handleChange(e)}
                name="priceTier"
              >
                {CATEGORIES.filter(c => c.type === 'price-tier').map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name.vi}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Hãng sản xuất</label>
            <input
              type="text"
              className="form-input"
              value={formData.brand}
              onChange={(e) => handleChange(e)}
              name="brand"
              placeholder="VD: Philips Healthcare"
            />
          </div>
        </div>
      </div>

      {/* Bilingual Info */}
      <div className="admin-card" style={{ marginBottom: "20px" }}>
        <div className="admin-card-header">
          <h2>Nội dung đa ngôn ngữ</h2>
        </div>
        <div className="admin-card-body">
          <div className="dual-section">
            <div className="dual-section-title">Mô tả ngắn (Subtitle)</div>
            <div className="dual-grid">
              <div className="dual-col">
                <span className="dual-col-flag">🇻🇳 Tiếng Việt</span>
                <textarea
                  className="form-input"
                  style={{ minHeight: "80px" }}
                  value={formData.subtitle.vi}
                  onChange={(e) => handleChange(e, "subtitle.vi")}
                  placeholder="Mô tả ngắn tiếng Việt..."
                />
              </div>
              <div className="dual-col">
                <span className="dual-col-flag">🇬🇧 English</span>
                <textarea
                  className="form-input"
                  style={{ minHeight: "80px" }}
                  value={formData.subtitle.en}
                  onChange={(e) => handleChange(e, "subtitle.en")}
                  placeholder="English subtitle..."
                />
              </div>
            </div>
          </div>

          <div className="dual-section">
            <div className="dual-section-title">Mô tả sản phẩm</div>
            <div className="dual-grid">
              <div className="dual-col">
                <span className="dual-col-flag">🇻🇳 Tiếng Việt</span>
                <textarea
                  className="form-input"
                  style={{ minHeight: "120px" }}
                  value={formData.description.vi}
                  onChange={(e) => handleChange(e, "description.vi")}
                  placeholder="Mô tả tiếng Việt..."
                />
              </div>
              <div className="dual-col">
                <span className="dual-col-flag">🇬🇧 English</span>
                <textarea
                  className="form-input"
                  style={{ minHeight: "120px" }}
                  value={formData.description.en}
                  onChange={(e) => handleChange(e, "description.en")}
                  placeholder="English description..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Images */}
      <div className="admin-card" style={{ marginBottom: "20px" }}>
        <div className="admin-card-header">
          <h2>Hình ảnh</h2>
        </div>
        <div className="admin-card-body">
          <div className="form-group">
            <label className="form-label">Ảnh đại diện (Thumbnail URL)</label>
            <input
              type="url"
              className="form-input"
              value={formData.thumbnail}
              onChange={(e) => handleChange(e)}
              name="thumbnail"
              placeholder="https://..."
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Danh sách hình ảnh (URL)</label>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {formData.images.map((img, idx) => (
                <input
                  key={idx}
                  type="url"
                  className="form-input"
                  value={img}
                  onChange={(e) => {
                    const newImages = [...formData.images];
                    newImages[idx] = e.target.value;
                    setFormData({ ...formData, images: newImages });
                  }}
                  placeholder="https://..."
                />
              ))}
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setFormData({ ...formData, images: [...formData.images, ""] })}
              >
                + Thêm hình ảnh
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Save Bar */}
      <div className="admin-save-bar">
        <div className="container">
          <button type="button" className="btn btn-outline" onClick={() => router.push("/admin/san-pham")}>
            Hủy
          </button>
          <button type="submit" className="btn btn-primary" disabled={saving}>
            {saving ? "Đang lưu..." : "Tạo sản phẩm"}
          </button>
        </div>
      </div>
    </form>
  );
}
