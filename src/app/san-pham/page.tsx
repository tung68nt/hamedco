import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/components/LocaleProvider";

export const metadata: Metadata = {
  title: "Sản phẩm — HAMEDCO | Thiết Bị Y Tế Philips Healthcare",
  description:
    "Danh mục sản phẩm Philips Healthcare chính hãng: CT Scanner, MRI, X-quang và siêu âm. HAMEDCO — nhà phân phối chính thức tại Việt Nam.",
};

const CATEGORIES = [
  {
    id: "ct",
    title: "Chụp Cắt Lớp Vi Tính (CT)",
    desc: "Khám phá cách mạng chẩn đoán hình ảnh với AI Precise Image và Cam kết bảo hành bóng Tube for Life.",
    image: "/assets/images/products/ct-5300.png",
    link: "/san-pham/ct"
  },
  {
    id: "mri",
    title: "Trang Thiết Bị MRI",
    desc: "Công nghệ nam châm BlueSeal không bay hơi Helium, vận hành bền bỉ và rút ngắn thời gian chụp.",
    image: "/assets/images/products/mr-7700.png",
    link: "/san-pham/mri"
  },
  {
    id: "sieu-am",
    title: "Hệ thống Siêu âm",
    desc: "Chất lượng hình ảnh tuyệt hảo, linh hoạt từ dòng máy cầm tay cho tới nền tảng EPIQ cao cấp.",
    image: "/assets/images/products/epiq-elite.jpg",
    link: "/san-pham/sieu-am"
  },
  {
    id: "x-quang",
    title: "Thiết bị X-quang",
    desc: "Xử lý hình ảnh UNIQUE 2 đỉnh cao từ Philips, hỗ trợ bác sĩ chẩn đoán chính xác ngay từ lần bấm chụp đầu tiên.",
    image: "/assets/images/products/philips-xray.png",
    link: "/san-pham/x-quang"
  }
];

export default function ProductsPage() {
  return (
    <main className="main-content">
      {/* ═══ MASTER HERO ═══ */}
      <section className="about-banner" style={{ minHeight: "400px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="breadcrumbs" style={{ paddingTop: 0, paddingBottom: "1.5rem", justifyContent: "center" }}>
            <Link href="/" className="breadcrumb-item">Trang chủ</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Sản phẩm</span>
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div className="about-banner-badge" style={{ margin: "0 auto 1.5rem" }}>
              Danh mục hệ thống chẩn đoán
            </div>
            <h1 className="about-banner-title" style={{ fontSize: "3.5rem" }}>
              Tiên phong Tương lai Y tế
            </h1>
            <p className="about-banner-sub" style={{ margin: "0 auto 2rem", fontSize: "1.125rem", opacity: 0.9 }}>
              Với vai trò là nhà phân phối chính thức của Philips Healthcare tại Việt Nam, HAMEDCO tự hào cung cấp hệ sinh thái thiết bị hình ảnh y tế tiên tiến, hỗ trợ chăm sóc sức khỏe bệnh nhân chính xác và an toàn nhất.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ MASTER BENTO GRID ═══ */}
      <section className="section bg-white" style={{ padding: "5rem 0" }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: "3rem" }}>
            <h2>Danh mục chuyên khoa</h2>
          </div>

          <div className="philips-bento-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
            {CATEGORIES.map((cat, idx) => (
              <Link key={cat.id} href={cat.link} style={{ display: "block", textDecoration: "none" }}>
                <div className="bento-card" style={{ height: "100%", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)" }}>
                  <div className="bento-visual" style={{ position: "relative", height: "300px", background: "#f8f9fa", overflow: "hidden" }}>
                    <Image 
                      src={cat.image} 
                      alt={cat.title} 
                      fill 
                      style={{ objectFit: "contain", objectPosition: "center", transform: "scale(1.15)", padding: "1rem" }} 
                    />
                  </div>
                  <div className="bento-content" style={{ padding: "2rem", borderTop: "1px solid var(--color-gray-100)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                      <h3 style={{ fontSize: "1.5rem", margin: 0, color: "var(--color-gray-900)" }}>{cat.title}</h3>
                      <div className="btn btn-icon btn-ghost" style={{ background: "var(--color-primary-light)", color: "var(--color-primary-dark)", borderRadius: "50%" }}>
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <p style={{ color: "var(--color-gray-600)", lineHeight: 1.6, margin: 0, fontSize: "1rem" }}>
                      {cat.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TRUST & CREDIBILITY SECTION ═══ */}
      <section className="section bg-light" style={{ padding: "5rem 0", borderTop: "1px solid var(--color-gray-200)", borderBottom: "1px solid var(--color-gray-200)" }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.25rem", color: "var(--color-gray-900)" }}>Tại sao chọn HAMEDCO?</h2>
            <p className="text-large opacity-80 max-w-2xl mx-auto" style={{ color: "var(--color-gray-600)" }}>
              Sự khác biệt làm nên uy tín của nhà phân phối thiết bị y tế hàng đầu Việt Nam
            </p>
          </div>
          <div className="core-values-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
            {/* Value 1 */}
            <div className="core-value-card" style={{ background: "white", padding: "2.5rem 2rem", borderRadius: "12px", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05)" }}>
              <div className="core-value-icon" style={{ width: "64px", height: "64px", background: "var(--color-primary)", color: "white", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.25rem", color: "var(--color-gray-900)", marginBottom: "1rem" }}>Đại lý phân phối uỷ quyền</h3>
              <p style={{ color: "var(--color-gray-600)", lineHeight: 1.6, margin: 0 }}>Cam kết 100% thiết bị chẩn đoán hình ảnh chính hãng từ Philips Healthcare. Cung cấp đầy đủ giấy tờ thư ủy quyền, CO/CQ và tờ khai hải quan minh bạch.</p>
            </div>
            {/* Value 2 */}
            <div className="core-value-card" style={{ background: "white", padding: "2.5rem 2rem", borderRadius: "12px", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05)" }}>
              <div className="core-value-icon" style={{ width: "64px", height: "64px", background: "var(--color-primary)", color: "white", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.25rem", color: "var(--color-gray-900)", marginBottom: "1rem" }}>Đội ngũ kỹ sư tinh nhuệ</h3>
              <p style={{ color: "var(--color-gray-600)", lineHeight: 1.6, margin: 0 }}>Toàn bộ kỹ sư của HAMEDCO đều được đào tạo bài bản và cấp chứng chỉ từ các trung tâm huấn luyện chuyên sâu của Philips (Hà Lan/Mỹ).</p>
            </div>
            {/* Value 3 */}
            <div className="core-value-card" style={{ background: "white", padding: "2.5rem 2rem", borderRadius: "12px", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05)" }}>
              <div className="core-value-icon" style={{ width: "64px", height: "64px", background: "var(--color-primary)", color: "white", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.25rem", color: "var(--color-gray-900)", marginBottom: "1rem" }}>Dịch vụ bảo hành toàn diện</h3>
              <p style={{ color: "var(--color-gray-600)", lineHeight: 1.6, margin: 0 }}>Cam kết có mặt xử lý kỹ thuật trong vòng nhanh nhất (24/7) và cung cấp gói tùy chọn bảo trì linh hoạt, tối ưu chi phí vận hành cho Bệnh viện.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS SECTION ═══ */}
      <section className="section bg-white" style={{ padding: "4rem 0" }}>
        <div className="container text-center">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem", borderTop: "1px solid var(--color-gray-200)", borderBottom: "1px solid var(--color-gray-200)", padding: "3rem 0" }}>
            <div>
              <div style={{ fontSize: "2.5rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "0.5rem" }}>15+</div>
              <div style={{ fontSize: "1rem", color: "var(--color-gray-600)", fontWeight: "500", textTransform: "uppercase", letterSpacing: "1px" }}>Năm Kinh Nghiệm</div>
            </div>
            <div>
              <div style={{ fontSize: "2.5rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "0.5rem" }}>500+</div>
              <div style={{ fontSize: "1rem", color: "var(--color-gray-600)", fontWeight: "500", textTransform: "uppercase", letterSpacing: "1px" }}>Dự Án Lắp Đặt</div>
            </div>
            <div>
              <div style={{ fontSize: "2.5rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "0.5rem" }}>150+</div>
              <div style={{ fontSize: "1rem", color: "var(--color-gray-600)", fontWeight: "500", textTransform: "uppercase", letterSpacing: "1px" }}>Bệnh Viện Đối Tác</div>
            </div>
            <div>
              <div style={{ fontSize: "2.5rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "0.5rem" }}>24/7</div>
              <div style={{ fontSize: "1rem", color: "var(--color-gray-600)", fontWeight: "500", textTransform: "uppercase", letterSpacing: "1px" }}>Hỗ Trợ Kỹ Thuật</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section className="section bg-primary text-white text-center" style={{ padding: "6rem 0", backgroundImage: "linear-gradient(to right, var(--color-primary-dark), var(--color-primary))" }}>
        <div className="container">
          <h2 style={{ fontSize: "2.5rem", color: "white", marginBottom: "1.5rem" }}>Sẵn sàng nâng cấp cơ sở y tế của bạn?</h2>
          <p style={{ fontSize: "1.25rem", opacity: 0.9, maxWidth: "600px", margin: "0 auto 3rem" }}>
            Liên hệ ngay với các chuyên gia của HAMEDCO để được tư vấn thiết kế và nhận báo giá hệ thống chẩn đoán hình ảnh Philips cho bệnh viện và phòng khám của bạn.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <Link href="/lien-he" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.5)", color: "white", backgroundColor: "transparent", fontSize: "1.125rem", padding: "1rem 2rem", borderRadius: "8px" }}>
              Để lại thông tin
            </Link>
            <a href="tel:0869009486" className="btn" style={{ backgroundColor: "white", color: "var(--color-primary-dark)", fontSize: "1.125rem", padding: "1rem 2rem", borderRadius: "8px", fontWeight: "600" }}>
              Gọi hotline tư vấn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
