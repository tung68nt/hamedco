import type { Metadata } from "next";
import Link from "next/link";
import ProductFilterWrapper from "./ProductFilterWrapper";

export const metadata: Metadata = {
  title: "Sản phẩm | HAMEDCO - Thiết Bị Y Tế Philips Healthcare",
  description:
    "Danh mục sản phẩm Philips Healthcare chính hãng: Máy siêu âm Philips, Máy chụp cắt lớp vi tính (CT Scanner), Máy chụp cộng hưởng từ (MRI), Máy X-quang. HAMEDCO — nhà phân phối chính thức tại Việt Nam.",
};

const SOLUTIONS = [
  {
    id: "sieu-am",
    title: "Giải pháp Siêu âm",
    desc: "Từ máy siêu âm cầm tay đến hệ thống cao cấp EPIQ, Philips mang đến chất lượng hình ảnh vượt trội cho mọi chuyên khoa.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <path d="M12 19v2"/>
        <path d="M8 19v2"/>
        <path d="M16 19v2"/>
        <path d="M12 5V3"/>
        <path d="M8 5V3"/>
        <path d="M16 5V3"/>
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 9v-2"/>
        <path d="M9 12h-2"/>
        <path d="M17 12h2"/>
      </svg>
    ),
    link: "/san-pham/sieu-am",
    color: "#2B9EB3",
  },
  {
    id: "ct",
    title: "Giải pháp Chụp cắt lớp vi tính",
    desc: "CT Scanner Philips với AI Precise Image, giảm liều xạ và nâng cao chất lượng hình ảnh chẩn đoán.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="2" width="16" height="20" rx="2"/>
        <circle cx="12" cy="10" r="5"/>
        <path d="M12 15v4"/>
        <path d="M8 21h8"/>
        <path d="M12 2v2"/>
        <circle cx="12" cy="10" r="2"/>
      </svg>
    ),
    link: "/san-pham/ct",
    color: "#2B9EB3",
  },
  {
    id: "mri",
    title: "Giải pháp Cộng hưởng từ (MRI)",
    desc: "Hệ thống MRI nam châm BlueSeal không bay hơi Helium, vận hành bền bỉ và rút ngắn thời gian chụp.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="1" width="18" height="22" rx="3"/>
        <ellipse cx="12" cy="9" rx="4" ry="5"/>
        <path d="M3 17h18"/>
        <path d="M8 22h8"/>
        <path d="M12 14v3"/>
        <path d="M10 17h4"/>
        <ellipse cx="12" cy="9" rx="2" ry="2.5"/>
      </svg>
    ),
    link: "/san-pham/mri",
    color: "#2B9EB3",
  },
  {
    id: "x-quang",
    title: "Giải pháp X-quang",
    desc: "Thiết bị X-quang kỹ thuật số Philips với xử lý hình ảnh UNIQUE 2, hỗ trợ chẩn đoán chính xác từ lần bấm chụp đầu tiên.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v4"/>
        <path d="M12 18v4"/>
        <path d="M2 12h4"/>
        <path d="M18 12h4"/>
        <path d="M4.93 4.93l2.83 2.83"/>
        <path d="M16.24 16.24l2.83 2.83"/>
        <path d="M4.93 19.07l2.83-2.83"/>
        <path d="M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
    link: "/san-pham/x-quang",
    color: "#2B9EB3",
  },
];

export default function ProductsPage() {
  return (
    <main className="main-content">
      {/* ═══ FULL-WIDTH HERO BANNER ═══ */}
      <section className="products-hero">
        <div className="products-hero-bg">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="products-hero-content">
            <div className="products-hero-badge">Nhà phân phối ủy quyền Philips Healthcare</div>
            <h1 className="products-hero-title">Thiết bị y tế chẩn đoán hình ảnh cao cấp</h1>
            <p className="products-hero-sub">
              HAMEDCO cung cấp giải pháp thiết bị y tế toàn diện từ tư vấn, triển khai đến bảo trì — đồng hành cùng quý khách hàng trên toàn quốc.
            </p>
            <div className="products-hero-actions">
              <Link href="/san-pham" className="btn btn-accent btn-xl">
                Khám phá sản phẩm
              </Link>
              <Link href="/lien-he" className="btn btn-outline-white btn-xl">
                Liên hệ tư vấn
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SOLUTIONS SECTION ═══ */}
      <section className="section bg-white solutions-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Giải pháp theo chuyên khoa</h2>
            <p className="text-large opacity-80">
              Lựa chọn giải pháp thiết bị phù hợp với nhu cầu và quy mô của cơ sở y tế
            </p>
          </div>

          <div className="solutions-grid">
            {SOLUTIONS.map((solution, index) => (
              <Link 
                key={solution.id} 
                href={solution.link}
                className="solution-card fade-in-up"
              >
                <div className="solution-icon" style={{ background: `${solution.color}15`, color: solution.color }}>
                  {solution.icon}
                </div>
                <h3>{solution.title}</h3>
                <p>{solution.desc}</p>
                <span className="solution-link">
                  Xem sản phẩm
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRODUCTS SECTION ═══ */}
      <section className="section bg-light products-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Sản phẩm nổi bật</h2>
            <p className="text-large opacity-80">
              Danh mục thiết bị y tế Philips Healthcare chính hãng
            </p>
          </div>
          
          <ProductFilterWrapper />
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section className="cta-section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ color: "var(--color-white)", marginBottom: "16px" }}>
            Cần tư vấn chọn thiết bị phù hợp?
          </h2>
          <p style={{ color: "rgba(255,255,255,.75)", maxWidth: "500px", margin: "0 auto 24px" }}>
            Đội ngũ chuyên gia HAMEDCO sẵn sàng phân tích nhu cầu và đề xuất giải pháp tối ưu cho cơ sở y tế của bạn.
          </p>
          <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/bao-gia" className="btn btn-accent btn-xl">
              Yêu cầu báo giá
            </Link>
            <a href="tel:+84869009486" className="btn btn-outline-white btn-xl">
              📞 086 900 9486
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}