import { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import "@/app/css/article.css";

export const metadata: Metadata = {
  title: "Sitemap | HAMEDCO",
  description: "Sitemap - Danh sách tất cả trang trên website HAMEDCO",
};

export default function SitemapPage() {
  const sections = [
    {
      title: "Trang chủ",
      links: [
        { label: "Trang chủ", href: "/" },
      ],
    },
    {
      title: "Sản phẩm",
      links: [
        { label: "Tất cả sản phẩm", href: "/san-pham" },
        { label: "Chẩn đoán hình ảnh", href: "/san-pham#medical-imaging" },
        { label: "Dụng cụ phẫu thuật", href: "/san-pham#surgical" },
        { label: "Tự động hóa dược phẩm", href: "/san-pham#automation" },
        { label: "Thiết bị khác", href: "/san-pham#others" },
      ],
    },
    {
      title: "Dịch vụ",
      links: [
        { label: "Tư vấn giải pháp", href: "/dich-vu" },
        { label: "Triển khai & Cài đặt", href: "/dich-vu" },
        { label: "Bảo trì & Bảo hành", href: "/dich-vu" },
        { label: "Đào tạo sử dụng", href: "/dich-vu" },
      ],
    },
    {
      title: "Công ty",
      links: [
        { label: "Giới thiệu", href: "/gioi-thieu" },
        { label: "Đối tác chiến lược", href: "/doi-tac" },
        { label: "Tin tức", href: "/tin-tuc" },
        { label: "Liên hệ", href: "/lien-he" },
      ],
    },
    {
      title: "Chính sách",
      links: [
        { label: "Chính sách bán hàng", href: "/chinh-sach-ban-hang" },
        { label: "Bảo hành & Hậu mãi", href: "/chinh-sach-bao-hanh" },
        { label: "Vận chuyển & Lắp đặt", href: "/chinh-sach-van-chuyen" },
        { label: "Đổi hàng & Hoàn trả", href: "/chinh-sach-doi-tra" },
        { label: "Chính sách bảo mật", href: "/chinh-sach-bao-mat" },
        { label: "Điều khoản sử dụng", href: "/dieu-khoan" },
      ],
    },
  ];

  return (
    <>
      <PageHero
        title="Sitemap"
        description="Danh sách tất cả trang trên website HAMEDCO"
        breadcrumbs={[{ label: "Sitemap" }]}
      />
      <main className="main-content">
        <section className="section bg-white">
          <div className="container" style={{ maxWidth: "900px" }}>
            <div className="article-content">
              <p className="lead">
                Dưới đây là danh sách tất cả các trang trên website HAMEDCO để bạn dễ dàng điều hướng.
              </p>

              <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                {sections.map((section) => (
                  <div key={section.title}>
                    <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--color-primary)" }}>
                      {section.title}
                    </h2>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {section.links.map((link) => (
                        <li key={link.href} style={{ marginBottom: "0.5rem" }}>
                          <a 
                            href={link.href}
                            style={{ 
                              color: "var(--color-gray-700)", 
                              textDecoration: "none",
                              transition: "color 0.2s"
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
                            onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-gray-700)"}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}