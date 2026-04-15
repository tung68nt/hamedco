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
      <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    link: "/san-pham/sieu-am",
    color: "#0066CC",
  },
  {
    id: "ct",
    title: "Giải pháp Chụp cắt lớp vi tính",
    desc: "CT Scanner Philips với AI Precise Image, giảm liều xạ và nâng cao chất lượng hình ảnh chẩn đoán.",
    icon: (
      <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    link: "/san-pham/ct",
    color: "#00994C",
  },
  {
    id: "mri",
    title: "Giải pháp Cộng hưởng từ (MRI)",
    desc: "Hệ thống MRI nam châm BlueSeal không bay hơi Helium, vận hành bền bỉ và rút ngắn thời gian chụp.",
    icon: (
      <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="1.5" d="M4.871 4A17.931 17.931 0 002 12c0 2.874.743 5.563 2.018 7.87.655.45.436 1.004.07 1.64-.132.255-.33.575-.468.84-.229.44-.37.715-.198.967a.737.737 0 00.91.368c.283-.126.503-.322.726-.54a8.463 8.463 0 001.45-1.58c.377-.528.64-.922.832-1.23.144.07.29.136.44.198.47.194 1.06.297 1.066.297h.002c.005 0 .595-.103 1.066-.297.15-.062.295-.127.44-.198.191.308.455.702.832 1.23.328.46.852.987 1.45 1.58.223.218.443.414.726.54a.737.737 0 00.91-.368c.172-.252.031-.527-.198-.967a8.07 8.07 0 01-.468-.84c-.365-.636-.585-1.19.07-1.64A17.932 17.932 0 0022 12c0-2.874-.743-5.563-2.018-7.87-.655-.45-.436-1.004-.07-1.64.132-.255.33-.575.468-.84.229-.44.37-.715.198-.967a.737.737 0 00-.91-.368c-.283.126-.503.322-.726.54a8.463 8.463 0 00-1.45 1.58c-.377.528-.64.922-.832 1.23a8.397 8.397 0 01-.44-.198 4.894 4.894 0 00-1.066-.297h-.002c-.005 0-.595.103-1.066.297a8.397 8.397 0 01-.44.198c-.191-.308-.455-.702-.832-1.23a8.463 8.463 0 00-1.45-1.58 7.186 7.186 0 00-.726-.54.737.737 0 00-.91.368c-.172.252-.031.527.198.967.138.265.336.585.468.84.365.636.585 1.19-.07 1.64z" />
        <circle strokeWidth="1.5" cx="12" cy="12" r="3" />
      </svg>
    ),
    link: "/san-pham/mri",
    color: "#9933CC",
  },
  {
    id: "x-quang",
    title: "Giải pháp X-quang",
    desc: "Thiết bị X-quang kỹ thuật số Philips với xử lý hình ảnh UNIQUE 2, hỗ trợ chẩn đoán chính xác từ lần bấm chụp đầu tiên.",
    icon: (
      <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="1.5" d="M9 2v6m6-6v6M3 10h18M5 2a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2v-2a2 2 0 00-2-2H5m0 2h14v16H5V4z" />
      </svg>
    ),
    link: "/san-pham/x-quang",
    color: "#CC6600",
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
      <section className="section bg-white" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: "3rem" }}>
            <h2>Giải pháp theo chuyên khoa</h2>
            <p className="text-large opacity-80" style={{ maxWidth: "600px", margin: "0 auto" }}>
              Lựa chọn giải pháp thiết bị phù hợp với nhu cầu và quy mô của cơ sở y tế
            </p>
          </div>

          <div className="solutions-grid">
            {SOLUTIONS.map((solution, index) => (
              <Link 
                key={solution.id} 
                href={solution.link}
                className="solution-card fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="solution-icon" style={{ background: `${solution.color}15`, color: solution.color }}>
                  {solution.icon}
                </div>
                <h3>{solution.title}</h3>
                <p>{solution.desc}</p>
                <div className="solution-link">
                  Xem sản phẩm
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRODUCTS SECTION ═══ */}
      <section className="section bg-light" style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: "2rem" }}>
            <h2>Sản phẩm nổi bật</h2>
            <p className="text-large opacity-80" style={{ maxWidth: "600px", margin: "0 auto" }}>
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