"use client";

import { useState } from "react";
import { updateProduct } from "../actions";

export default function ProductEditForm({ initialData }: { initialData: any }) {
  const [formData, setFormData] = useState(initialData);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldPath: string) => {
    const keys = fieldPath.split('.');
    
    if (keys.length === 1) {
      setFormData({ ...formData, [keys[0]]: e.target.value });
    } else {
      setFormData({
        ...formData,
        [keys[0]]: {
          ...formData[keys[0]],
          [keys[1]]: e.target.value
        }
      });
    }
  };

  // Mock Google Translate
  const handleTranslate = (fieldKey: string, fromLang: 'vi' | 'en', toLang: 'vi' | 'en') => {
    const sourceText = formData[fieldKey]?.[fromLang];
    if (!sourceText) return;

    const mockTranslation = `[Bản dịch tự động (${toLang.toUpperCase()})] ${sourceText}`;
    
    setFormData({
      ...formData,
      [fieldKey]: {
        ...formData[fieldKey],
        [toLang]: mockTranslation
      }
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    
    const res = await updateProduct(formData);
    
    if (res.success) {
      setMessage("Đã lưu thành công!");
    } else {
      setMessage("Lưu thất bại: " + res.error);
    }
    setSaving(false);
  };

  // Helper component for dual language inputs
  const DualInput = ({ label, fieldKey, isTextarea = false }: { label: string, fieldKey: string, isTextarea?: boolean }) => {
    const InputCmp = isTextarea ? "textarea" : "input";
    const viValue = formData[fieldKey]?.vi || "";
    const enValue = formData[fieldKey]?.en || "";

    return (
      <div className="admin-card" style={{ marginBottom: "24px" }}>
        <h3 style={{ marginTop: 0, marginBottom: "16px", fontSize: "1.1rem", borderBottom: "1px solid #eee", paddingBottom: "8px" }}>{label}</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          {/* Vietnamese Column */}
          <div className="form-group">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <label className="form-label" style={{ margin: 0 }}>Tiếng Việt 🇻🇳</label>
              {!viValue && enValue && (
                <button type="button" onClick={() => handleTranslate(fieldKey, 'en', 'vi')} className="btn btn-outline btn-sm" style={{ padding: "4px 8px", fontSize: "0.75rem", display: "flex", gap: "4px", alignItems: "center" }}>
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg> Dịch từ EN Google
                </button>
              )}
            </div>
            {isTextarea ? (
              <textarea className="form-input" style={{ minHeight: "120px" }} value={viValue} onChange={(e) => handleChange(e, `${fieldKey}.vi`)} />
            ) : (
              <input type="text" className="form-input" value={viValue} onChange={(e) => handleChange(e, `${fieldKey}.vi`)} />
            )}
          </div>
          
          {/* English Column */}
          <div className="form-group">
             <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <label className="form-label" style={{ margin: 0 }}>Tiếng Anh 🇬🇧</label>
              {!enValue && viValue && (
                <button type="button" onClick={() => handleTranslate(fieldKey, 'vi', 'en')} className="btn btn-outline btn-sm" style={{ padding: "4px 8px", fontSize: "0.75rem", display: "flex", gap: "4px", alignItems: "center" }}>
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg> Translate to EN
                </button>
              )}
            </div>
            {isTextarea ? (
               <textarea className="form-input" style={{ minHeight: "120px" }} value={enValue} onChange={(e) => handleChange(e, `${fieldKey}.en`)} />
            ) : (
               <input type="text" className="form-input" value={enValue} onChange={(e) => handleChange(e, `${fieldKey}.en`)} />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <form onSubmit={handleSave} style={{ maxWidth: "1200px" }}>
      {message && (
        <div style={{ padding: "16px", background: message.includes("thành công") ? "var(--color-success)" : "var(--color-error)", color: "#fff", borderRadius: "8px", marginBottom: "24px" }}>
          {message}
        </div>
      )}

      <div className="admin-card">
        <h3 style={{ marginTop: 0 }}>Thông tin cơ bản</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          <div className="form-group">
            <label className="form-label">Tên sản phẩm gốc / Mã chung</label>
            <input type="text" className="form-input" value={formData.name} onChange={(e) => handleChange(e, "name")} />
          </div>
          <div className="form-group">
            <label className="form-label">Phân loại (Category Code)</label>
            <input type="text" className="form-input" value={formData.category} onChange={(e) => handleChange(e, "category")} />
          </div>
        </div>
      </div>

      <DualInput label="Phụ tiêu đề (Subtitle)" fieldKey="subtitle" />
      <DualInput label="Mô tả rút gọn (Short Description)" fieldKey="description" isTextarea={true} />
      <DualInput label="Nội dung chuyên sâu (Long Description)" fieldKey="longDescription" isTextarea={true} />
      
      {/* TODO: Features Array mapping could be added here in the future. For now handling root level multilingual strings */}

      <div style={{ position: "sticky", bottom: "0", background: "#fff", padding: "16px 24px", borderTop: "1px solid var(--color-gray-200)", display: "flex", justifyContent: "flex-end", margin: "0 -32px -32px -32px", zIndex: 10 }}>
        <button type="submit" disabled={saving} className="btn btn-primary btn-lg" style={{ minWidth: "200px" }}>
          {saving ? "Đang lưu..." : "💾 Lưu Thay Đổi"}
        </button>
      </div>
    </form>
  );
}
