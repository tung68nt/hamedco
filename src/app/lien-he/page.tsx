import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên hệ | HAMEDCO",
  description: "Liên hệ với đội ngũ HAMEDCO để nhận tư vấn giải pháp thiết bị y tế tổng thể.",
  alternates: {
    canonical: "/lien-he",
  },
};

export default function ContactPage() {
  return (
    <main className="main-content">
      <section className="section bg-light" style={{ padding: "4rem 0" }}>
        <div className="container">
          <div className="split">
            <div className="fade-in-up">
              <span className="overline" style={{ color: "var(--color-accent)" }}>Liên Hệ Nhanh</span>
              <h1 className="h2" style={{ marginBottom: "1.5rem" }}>Cổng Thông Tin Hỗ Trợ Khách Hàng</h1>
              <p style={{ marginBottom: "2rem", color: "var(--color-gray-500)" }}>Bạn có nhu cầu tìm hiểu về sản phẩm, dịch vụ bảo trì hay hệ thống phần mềm y tế? Đừng ngần ngại liên hệ với chuyên gia HAMEDCO qua thông tin dưới đây.</p>
              
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 7.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></svg>
                  <div>
                    <strong style={{ display: "block", marginBottom: "4px" }}>Địa chỉ văn phòng chính</strong>
                    <span style={{ color: "var(--color-gray-600)" }}>Tầng 3, Tòa nhà Detech Tower, Số 8C Tôn Thất Thuyết, Mỹ Đình 2, Nam Từ Liêm, Hà Nội</span>
                  </div>
                </li>
                <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  <div>
                    <strong style={{ display: "block", marginBottom: "4px" }}>Điện thoại liên hệ</strong>
                    <span style={{ color: "var(--color-gray-600)" }}>086 900 9486</span>
                  </div>
                </li>
                <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  <div>
                    <strong style={{ display: "block", marginBottom: "4px" }}>Hotline Email</strong>
                    <span style={{ color: "var(--color-gray-600)" }}>info@hamedco.vn</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="inquiry-form fade-in-up" style={{ animationDelay: "0.2s", background: "#fff", padding: "2.5rem", borderRadius: "12px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)" }}>
              <h3 style={{ marginBottom: "20px", fontSize: "1.25rem", color: "var(--color-primary-dark)" }}>Gửi yêu cầu tới chúng tôi</h3>
              <form>
                <div className="form-group" style={{ marginBottom: "1rem" }}>
                  <label className="form-label" style={{ fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>Họ và tên *</label>
                  <input type="text" className="form-input" placeholder="Nguyễn Văn A" required style={{ width: "100%", padding: "0.75rem", border: "1px solid #d1d5db", borderRadius: "0.375rem" }} />
                </div>
                <div className="form-group" style={{ marginBottom: "1rem" }}>
                  <label className="form-label" style={{ fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>Số điện thoại *</label>
                  <input type="tel" className="form-input" placeholder="0912 345 678" required style={{ width: "100%", padding: "0.75rem", border: "1px solid #d1d5db", borderRadius: "0.375rem" }} />
                </div>
                <div className="form-group" style={{ marginBottom: "1rem" }}>
                  <label className="form-label" style={{ fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>Email</label>
                  <input type="email" className="form-input" placeholder="email@company.com" style={{ width: "100%", padding: "0.75rem", border: "1px solid #d1d5db", borderRadius: "0.375rem" }} />
                </div>
                <div className="form-group" style={{ marginBottom: "1.5rem" }}>
                  <label className="form-label" style={{ fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>Nội dung cần hỗ trợ</label>
                  <textarea className="form-input" placeholder="Chi tiết yêu cầu thiết bị, tư vấn giải pháp..." rows={4} style={{ width: "100%", padding: "0.75rem", border: "1px solid #d1d5db", borderRadius: "0.375rem" }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%", display: "flex", justifyContent: "center" }}>Gửi Yêu Cầu</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
