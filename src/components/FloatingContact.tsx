"use client";

import { useState, useEffect, useRef } from "react";

/**
 * FloatingContact — Floating contact widget (bottom-right)
 * Zalo, Hotline, Facebook messenger
 */
export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className={`floating-cta${open ? " open" : ""}`} ref={ref}>
      {/* Contact Panel */}
      <div className="floating-panel" role="dialog" aria-label="Liên hệ nhanh">
        <div className="floating-panel-header">
          <h4>Liên hệ HAMEDCO</h4>
          <p>Chúng tôi sẵn sàng hỗ trợ bạn</p>
        </div>
        <div className="floating-panel-list">
          {/* Hotline */}
          <a href="tel:+84869009486" className="floating-panel-item">
            <div className="floating-panel-icon hotline">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="floating-panel-text">
              <div className="label">Hotline</div>
              <div className="detail">086 900 9486</div>
            </div>
            <span className="floating-panel-action hotline">Gọi →</span>
          </a>

          {/* Zalo */}
          <a href="https://zalo.me/0869009486" target="_blank" rel="noopener noreferrer" className="floating-panel-item">
            <div className="floating-panel-icon zalo">
              <svg width="20" height="20" viewBox="0 0 48 48" fill="#0068FF">
                <path d="M24 2C11.85 2 2 11.85 2 24s9.85 22 22 22 22-9.85 22-22S36.15 2 24 2zm8.66 31.15c-.4.68-1.16 1.04-1.93 1.04h-.37c-.46-.04-.86-.24-1.14-.58l-5.07-6.24v5.16c0 .94-.72 1.66-1.66 1.66H13.6c-.72 0-1.34-.44-1.58-1.08-.24-.64-.04-1.36.48-1.78l8.36-7.04H13.6c-.94 0-1.66-.72-1.66-1.66s.72-1.66 1.66-1.66h8.88c.72 0 1.34.44 1.58 1.08.24.64.04 1.36-.48 1.78l-8.36 7.04h7.28c.22 0 .42-.08.58-.22l5.72-7.04c.54-.66 1.52-.74 2.16-.2.66.54.74 1.52.2 2.16l-3.44 4.22 3.76 4.62c.36.44.42 1.04.04 1.52z" />
              </svg>
            </div>
            <div className="floating-panel-text">
              <div className="label">Zalo</div>
              <div className="detail">Chat ngay</div>
            </div>
            <span className="floating-panel-action" style={{ color: "#0068FF" }}>Mở →</span>
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com/hamedco" target="_blank" rel="noopener noreferrer" className="floating-panel-item">
            <div className="floating-panel-icon fb">
              <svg width="20" height="20" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </div>
            <div className="floating-panel-text">
              <div className="label">Facebook</div>
              <div className="detail">Nhắn tin Fanpage</div>
            </div>
            <span className="floating-panel-action" style={{ color: "#1877F2" }}>Mở →</span>
          </a>

          {/* Email */}
          <a href="mailto:info@hamedco.vn" className="floating-panel-item">
            <div className="floating-panel-icon" style={{ background: "linear-gradient(135deg, rgba(232,131,74,0.08), rgba(232,131,74,0.16))", color: "var(--color-accent)" }}>
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="floating-panel-text">
              <div className="label">Email</div>
              <div className="detail">info@hamedco.vn</div>
            </div>
            <span className="floating-panel-action" style={{ color: "var(--color-accent)" }}>Gửi →</span>
          </a>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        className="floating-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Đóng liên hệ nhanh" : "Mở liên hệ nhanh"}
      >
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ transition: "transform 0.3s", transform: open ? "rotate(45deg)" : "none" }}
        >
          {open ? (
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 21l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          )}
        </svg>
        <span className="toggle-label">{open ? "Đóng" : "Liên hệ ngay"}</span>
      </button>
    </div>
  );
}
