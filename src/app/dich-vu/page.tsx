import { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dịch vụ | HAMEDCO",
  description: "Giải pháp thiết bị y tế trọn gói – Đồng hành 24/7. Tư vấn, triển khai, bảo trì và sửa chữa thiết bị y tế chuyên nghiệp.",
  alternates: {
    canonical: "/dich-vu",
  },
};

const services = [
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Giải pháp toàn diện",
    description: "Đồng hành cùng khách hàng từ giai đoạn tư vấn, triển khai đến vận hành và bảo trì — đảm bảo hệ thống thiết bị luôn hoạt động ổn định, tối ưu hiệu suất và chi phí.",
    features: [
      "Quy trình chuẩn hóa từ tư vấn đến bàn giao",
      "Đội ngũ chuyên gia giàu kinh nghiệm",
      "Cam kết chất lượng và tiến độ",
    ],
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 21l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Tư vấn giải pháp",
    description: "Phân tích chuyên sâu nhu cầu thực tế, từ đó đề xuất giải pháp thiết bị phù hợp với từng chuyên khoa, quy mô và định hướng phát triển của cơ sở y tế.",
    features: [
      "Khảo sát thực tế tại cơ sở y tế",
      "Demo thiết bị trước khi quyết định",
      "Tối ưu ngân sách và lộ trình đầu tư",
    ],
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Triển khai & Lắp đặt",
    description: "Đội ngũ kỹ thuật viên giàu kinh nghiệm thực hiện lắp đặt theo đúng tiêu chuẩn nhà sản xuất, đảm bảo an toàn, chính xác và bàn giao vận hành đầy đủ.",
    features: [
      "Lắp đặt theo tiêu chuẩn nhà sản xuất",
      "Kiểm tra và hiệu chuẩn thiết bị",
      "Bàn giao đầy đủ hồ sơ kỹ thuật",
    ],
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Bảo trì & Bảo hành",
    description: "Cung cấp chế độ bảo hành chính hãng, bảo trì định kỳ và dịch vụ sửa chữa nhanh chóng — giúp tối đa thời gian hoạt động (uptime) và kéo dài tuổi thọ thiết bị.",
    features: [
      "Bảo hành chính hãng 12-24 tháng",
      "Bảo trì định kỳ theo tiêu chuẩn",
      "Hỗ trợ khắc phục sự cố 24/7",
    ],
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Chuyển giao công nghệ",
    description: "Tổ chức đào tạo và chuyển giao công nghệ bài bản cho đội ngũ y bác sĩ, đảm bảo sử dụng thiết bị đúng quy trình, khai thác tối đa tính năng.",
    features: [
      "Đào tạo tại chỗ cho đội ngũ y bác sĩ",
      "Workshop định kỳ cập nhật kiến thức",
      "Tài liệu hướng dẫn đầy đủ",
    ],
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Sửa chữa & Nâng cấp",
    description: "Cung cấp dịch vụ sửa chữa chuyên sâu, thay thế linh kiện chính hãng, đồng thời nâng cấp phần mềm và ứng dụng theo tiêu chuẩn của nhà sản xuất.",
    features: [
      "Sửa chữa chuyên sâu với thiết bị hiện đại",
      "Linh kiện chính hãng 100%",
      "Cập nhật phần mềm và hiệu chuẩn",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Dịch vụ"
        description="Giải pháp thiết bị y tế trọn gói – Đồng hành 24/7"
        breadcrumbs={[{ label: "Dịch vụ" }]}
      />

      <main className="main-content">
        {/* Hero Value Proposition */}
        <section className="services-intro">
          <div className="container">
            <div className="services-intro-content">
              <h2>Đồng hành cùng quý khách hàng trên toàn quốc</h2>
              <p>
                Với hơn 20 năm kinh nghiệm trong lĩnh vực thiết bị y tế, HAMEDCO cung cấp giải pháp trọn gói từ tư vấn, 
                triển khai đến bảo trì — cam kết chất lượng và sự hài lòng của khách hàng.
              </p>
            </div>
          </div>
        </section>

        {/* Services Cards Grid */}
        <section className="section bg-white">
          <div className="container">
            <div className="services-cards-grid">
              {services.map((service, index) => (
                <div key={index} className="service-box">
                  <div className="service-box-icon">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p className="service-box-desc">{service.description}</p>
                  <ul className="service-box-features">
                    {service.features.map((feature, i) => (
                      <li key={i}>
                        <span className="check-icon">
                          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container" style={{ textAlign: "center" }}>
            <h2 style={{ color: "var(--color-white)", marginBottom: "16px" }}>
              Cần tư vấn về dịch vụ?
            </h2>
            <p style={{ color: "rgba(255,255,255,.75)", maxWidth: "500px", margin: "0 auto 24px" }}>
              Liên hệ đội ngũ chuyên gia HAMEDCO để được hỗ trợ và báo giá chi tiết
            </p>
            <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/lien-he" className="btn btn-accent btn-xl">Liên hệ ngay</Link>
              <a href="tel:+84869009486" className="btn btn-outline-white btn-xl">📞 086 900 9486</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}