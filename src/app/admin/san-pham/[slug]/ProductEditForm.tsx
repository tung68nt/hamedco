"use client";

import { useState } from "react";
import { updateProduct } from "../actions";
import { CATEGORIES } from "@/data/categories";

export default function ProductEditForm({ initialData }: { initialData: any }) {
  const [formData, setFormData] = useState(initialData);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, fieldPath: string) => {
    const keys = fieldPath.split(".");
    if (keys.length === 1) {
      setFormData({ ...formData, [keys[0]]: e.target.value });
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
    const res = await updateProduct(formData);
    setMessage(
      res.success
        ? { type: "success", text: "✓ Lưu thành công! Dữ liệu đã được cập nhật." }
        : { type: "error", text: "✗ Lưu thất bại: " + res.error }
    );
    setSaving(false);
    if (res.success) setTimeout(() => setMessage(null), 4000);
  };

  /* ─── Dual Language Section Component ─── */
  const DualLang = ({ label, icon, fieldKey, textarea = false }: { label: string; icon: React.ReactNode; fieldKey: string; textarea?: boolean }) => {
    const viVal = formData[fieldKey]?.vi || "";
    const enVal = formData[fieldKey]?.en || "";
    return (
      <div className="dual-section">
        <div className="dual-section-title">
          {icon}
          {label}
        </div>
        <div className="dual-grid">
          {/* VI */}
          <div className="dual-col">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <span className="dual-col-flag">🇻🇳 Tiếng Việt</span>
              {!viVal && enVal && (
                <button type="button" onClick={() => handleTranslate(fieldKey, "en", "vi")} className="btn-translate">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04z" /><path d="M18.5 10l-4.5 12h2l1.12-3h4.75L23 22h2l-4.5-12h-2zm-2.62 7l1.62-4.33L19.12 17h-3.24z" /></svg>
                  Dịch từ EN
                </button>
              )}
            </div>
            {textarea ? (
              <textarea className="form-input" style={{ minHeight: "120px" }} value={viVal} onChange={(e) => handleChange(e, `${fieldKey}.vi`)} placeholder="Nhập nội dung tiếng Việt..." />
            ) : (
              <input type="text" className="form-input" value={viVal} onChange={(e) => handleChange(e, `${fieldKey}.vi`)} placeholder="Nhập tiếng Việt..." />
            )}
          </div>
          {/* EN */}
          <div className="dual-col">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <span className="dual-col-flag">🇬🇧 English</span>
              {!enVal && viVal && (
                <button type="button" onClick={() => handleTranslate(fieldKey, "vi", "en")} className="btn-translate">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04z" /><path d="M18.5 10l-4.5 12h2l1.12-3h4.75L23 22h2l-4.5-12h-2zm-2.62 7l1.62-4.33L19.12 17h-3.24z" /></svg>
                  Translate from VI
                </button>
              )}
            </div>
            {textarea ? (
              <textarea className="form-input" style={{ minHeight: "120px" }} value={enVal} onChange={(e) => handleChange(e, `${fieldKey}.en`)} placeholder="Enter English content..." />
            ) : (
              <input type="text" className="form-input" value={enVal} onChange={(e) => handleChange(e, `${fieldKey}.en`)} placeholder="Enter English..." />
            )}
          </div>
        </div>
      </div>
    );
  };

  /* ─── Icons ─── */
  const iconText = <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8M16 17H8M10 9H8" /></svg>;
  const iconDesc = <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>;
  const iconInfo = <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>;

  return (
    <form onSubmit={handleSave}>
      {/* Toast */}
      {message && (
        <div className={`admin-toast ${message.type}`}>
          {message.text}
        </div>
      )}

      {/* Basic Info */}
      <div className="dual-section" style={{ marginBottom: "20px" }}>
        <div className="dual-section-title">
          {iconInfo}
          Thông tin cơ bản
        </div>
        <div style={{ padding: "20px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
            <div className="form-group">
              <label className="form-label">Tên sản phẩm</label>
              <input type="text" className="form-input" value={formData.name} onChange={(e) => handleChange(e, "name")} />
            </div>
            <div className="form-group" style={{ gridColumn: "span 3" }}>
              <label className="form-label">Danh mục kết nối (Có thể chọn nhiều)</label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", background: "#f9fafb", border: "1px solid #e5e7eb", padding: "16px", borderRadius: "8px" }}>
                {CATEGORIES.map(cat => {
                  const isChecked = formData.categoryIds?.includes(cat.id);
                  return (
                    <label key={cat.id} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", cursor: "pointer" }}>
                      <input 
                        type="checkbox" 
                        checked={isChecked}
                        onChange={(e) => {
                          const currentIds = formData.categoryIds || [];
                          if (e.target.checked) {
                            setFormData({ ...formData, categoryIds: [...currentIds, cat.id] });
                          } else {
                            setFormData({ ...formData, categoryIds: currentIds.filter((id: string) => id !== cat.id) });
                          }
                        }}
                        style={{ width: "16px", height: "16px" }}
                      />
                      <span style={{ fontWeight: cat.type === 'main' ? 600 : 400 }}>
                        {cat.name.vi} 
                        {cat.type === 'main' && <span style={{ color: "var(--color-primary)", marginLeft: "6px", fontSize: "0.7rem", padding: "2px 6px", background: "#e0f2fe", borderRadius: "10px" }}>Chính</span>}
                        {cat.type === 'segment' && <span style={{ color: "var(--color-gray-500)", marginLeft: "6px", fontSize: "0.7rem", padding: "2px 6px", background: "#f3f4f6", borderRadius: "10px" }}>Phân khúc</span>}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dual-lang sections */}
      <DualLang label="Phụ tiêu đề (Subtitle)" icon={iconText} fieldKey="subtitle" />
      <DualLang label="Mô tả ngắn (Description)" icon={iconDesc} fieldKey="description" textarea />
      <DualLang label="Mô tả chuyên sâu (Long Description)" icon={iconDesc} fieldKey="longDescription" textarea />

      {/* Gallery Preview */}
      {formData.images?.length > 0 && (
        <div className="dual-section">
          <div className="dual-section-title">
            <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
            Thư viện ảnh sản phẩm ({formData.images.length} ảnh)
          </div>
          <div style={{ padding: "20px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: "12px" }}>
            {formData.images.map((url: string, i: number) => (
              <div key={i} style={{ position: "relative", aspectRatio: "1", borderRadius: "10px", overflow: "hidden", border: "1px solid #f0f0f0", background: "#fafbfc" }}>
                <img src={url} alt={`Image ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                <div style={{ position: "absolute", bottom: "4px", right: "4px", background: "rgba(0,0,0,0.5)", color: "#fff", borderRadius: "4px", padding: "2px 6px", fontSize: "0.65rem" }}>
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Features Summary */}
      {formData.features?.length > 0 && (
        <div className="dual-section">
          <div className="dual-section-title">
            <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01 9 11.01" /></svg>
            Tính năng nổi bật ({formData.features.length} mục)
          </div>
          <div style={{ padding: "16px 24px" }}>
            {formData.features.map((f: any, i: number) => (
              <div key={i} style={{ display: "flex", gap: "16px", padding: "12px 0", borderBottom: i < formData.features.length - 1 ? "1px solid #f3f4f6" : "none" }}>
                {f.image && (
                  <img src={f.image} alt="" style={{ width: "64px", height: "64px", borderRadius: "8px", objectFit: "cover", flexShrink: 0, border: "1px solid #f0f0f0" }} />
                )}
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: "0.88rem", color: "var(--color-gray-800)", marginBottom: "4px" }}>
                    {f.title?.vi || f.title?.en || `Feature ${i + 1}`}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--color-gray-400)", lineHeight: "1.5", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as any, overflow: "hidden" }}>
                    {f.description?.vi || f.description?.en || "—"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sticky Save */}
      <div className="admin-save-bar">
        <span className="save-hint">Các thay đổi sẽ được ghi trực tiếp vào hệ thống</span>
        <button type="submit" disabled={saving} className="btn btn-primary btn-lg" style={{ minWidth: "200px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
          {saving ? (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: "spin 1s linear infinite" }}><path d="M21 12a9 9 0 11-6.219-8.56" /></svg>
              Đang lưu...
            </>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" /><path d="M17 21v-8H7v8" /><path d="M7 3v5h8" /></svg>
              Lưu Thay Đổi
            </>
          )}
        </button>
      </div>
    </form>
  );
}
