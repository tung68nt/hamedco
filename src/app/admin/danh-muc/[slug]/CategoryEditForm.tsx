"use client";

import { useState } from "react";
import { updateCategory, deleteCategory } from "../actions";
import { useRouter } from "next/navigation";

export default function CategoryEditForm({ initialData, isNew }: { initialData: any, isNew?: boolean }) {
  const router = useRouter();
  const [formData, setFormData] = useState(initialData);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, fieldPath: string) => {
    const keys = fieldPath.split(".");
    if (keys.length === 1) {
      const val = e.target.value;
      let updates = { [keys[0]]: val };
      
      // Auto-generate ID and slug if new and typing ID
      if (isNew && keys[0] === "id") {
        updates = { id: val, slug: val };
      }
      setFormData({ ...formData, ...updates });
    } else {
      setFormData({
        ...formData,
        [keys[0]]: { ...formData[keys[0]], [keys[1]]: e.target.value },
      });
    }
  };

  const handleTranslate = (fieldKey: string, fromLang: "vi" | "en", toLang: "vi" | "en") => {
    const source = formData[fieldKey]?.[fromLang];
    if (!source) return;
    setFormData({
      ...formData,
      [fieldKey]: {
        ...formData[fieldKey],
        [toLang]: `[Auto-${toLang.toUpperCase()}] ${source}`,
      },
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);
    const res = await updateCategory(formData);
    setMessage(
      res.success
        ? { type: "success", text: "✓ Lưu danh mục thành công!" }
        : { type: "error", text: "✗ Lưu thất bại: " + res.error }
    );
    setSaving(false);
    if (res.success) {
      setTimeout(() => {
        if (isNew) {
           window.location.href = `/admin/danh-muc`;
        } else {
           setMessage(null);
        }
      }, 1500);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Bạn có chắc muốn xóa danh mục này?")) return;
    
    setDeleting(true);
    const res = await deleteCategory(formData.id);
    
    if (res.success) {
      router.push("/admin/danh-muc");
    } else {
      alert("Lỗi xóa danh mục: " + res.error);
      setDeleting(false);
      setShowDeleteConfirm(false);
    }
  };

  const DualLang = ({ label, fieldKey, textarea = false }: { label: string; fieldKey: string; textarea?: boolean }) => {
    const viVal = formData[fieldKey]?.vi || "";
    const enVal = formData[fieldKey]?.en || "";
    return (
      <div className="dual-section">
        <div className="dual-section-title">
          <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6h16M4 12h16M4 18h7" /></svg>
          {label}
        </div>
        <div className="dual-grid">
          <div className="dual-col">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <span className="dual-col-flag">🇻🇳 Tiếng Việt</span>
              {!viVal && enVal && (
                <button type="button" onClick={() => handleTranslate(fieldKey, "en", "vi")} className="btn-translate">Dịch</button>
              )}
            </div>
            {textarea ? (
              <textarea className="form-input" style={{ minHeight: "80px" }} value={viVal} onChange={(e) => handleChange(e, `${fieldKey}.vi`)} />
            ) : (
              <input type="text" className="form-input" value={viVal} onChange={(e) => handleChange(e, `${fieldKey}.vi`)} />
            )}
          </div>
          <div className="dual-col">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <span className="dual-col-flag">🇬🇧 English</span>
              {!enVal && viVal && (
                <button type="button" onClick={() => handleTranslate(fieldKey, "vi", "en")} className="btn-translate">Translate</button>
              )}
            </div>
            {textarea ? (
              <textarea className="form-input" style={{ minHeight: "80px" }} value={enVal} onChange={(e) => handleChange(e, `${fieldKey}.en`)} />
            ) : (
              <input type="text" className="form-input" value={enVal} onChange={(e) => handleChange(e, `${fieldKey}.en`)} />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <form onSubmit={handleSave}>
      {message && (
        <div className={`admin-toast ${message.type}`}>
          {message.text}
        </div>
      )}

      <div className="dual-section" style={{ marginBottom: "20px" }}>
        <div className="dual-section-title">
          <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
          Thiết lập Hệ thống
        </div>
        <div style={{ padding: "20px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
            <div className="form-group">
              <label className="form-label">ID (Định danh hệ thống)</label>
              <input type="text" className="form-input" value={formData.id} onChange={(e) => handleChange(e, "id")} readOnly={!isNew} />
              <p style={{ fontSize: "0.75rem", color: "var(--color-gray-400)", marginTop: "6px" }}>Không dùng dấu cách, khuyên dùng: <code>ten-danh-muc</code></p>
            </div>
            <div className="form-group">
              <label className="form-label">Slug (URL)</label>
              <input type="text" className="form-input" value={formData.slug} onChange={(e) => handleChange(e, "slug")} />
              <p style={{ fontSize: "0.75rem", color: "var(--color-gray-400)", marginTop: "6px" }}>Đường dẫn trên thanh trình duyệt</p>
            </div>
            <div className="form-group">
              <label className="form-label">Tầng Phân loại</label>
              <select className="form-select" value={formData.type} onChange={(e) => handleChange(e, "type")}>
                <option value="main">Danh mục Chính (Level 1)</option>
                <option value="segment">Phân khúc Nhóm (Level 2)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <DualLang label="Tên Danh mục (Name)" fieldKey="name" />
      <DualLang label="Mô tả SEO / Hero Banner" fieldKey="description" textarea />

      <div className="admin-save-bar">
        {!isNew && (
          <button
            type="button"
            onClick={() => setShowDeleteConfirm(true)}
            className="btn"
            style={{ background: "var(--color-error)", color: "white" }}
          >
            Xóa danh mục
          </button>
        )}
        <span className="save-hint">Mọi thay đổi sẽ ngay lập tức được xuất bản (Published) trên website</span>
        <button type="submit" disabled={saving} className="btn btn-primary btn-lg" style={{ minWidth: "200px" }}>
          {saving ? "Đang lưu..." : "Lưu Danh mục"}
        </button>
      </div>

      {showDeleteConfirm && (
        <div className="admin-toast error" style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "white", padding: "24px", borderRadius: "12px", boxShadow: "0 20px 60px rgba(0,0,0,0.3)", zIndex: 1001 }}>
          <p style={{ marginBottom: "16px", fontWeight: 600 }}>Xác nhận xóa danh mục?</p>
          <p style={{ marginBottom: "20px", fontSize: "0.875rem", color: "var(--color-gray-600)" }}>
            Hành động này không thể hoàn tác.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}>
            <button onClick={() => setShowDeleteConfirm(false)} className="btn btn-outline">Hủy</button>
            <button onClick={handleDelete} disabled={deleting} className="btn" style={{ background: "var(--color-error)", color: "white" }}>
              {deleting ? "Đang xóa..." : "Xóa"}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
