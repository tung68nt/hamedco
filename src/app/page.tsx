"use client";

import Link from "next/link";
import { PHILIPS_PRODUCTS } from "../data/products";
import HeroCarousel from "../components/HeroCarousel";
import FaqAccordion from "../components/FaqAccordion";
import { useLocale } from "../components/LocaleProvider";

export default function Home() {
  const topProducts = PHILIPS_PRODUCTS.slice(0, 6);
  const { locale, t } = useLocale();

  return (
    <>
      {/* ═══ HERO CAROUSEL ═══ */}
      <HeroCarousel />

      {/* ═══ STATS COUNTER ═══ */}
      {/* <section className="stats-section">
        <div className="container">
          <div className="grid grid-4">
            <div className="stat-item fade-in-up stagger-1">
              <div className="stat-number"><span data-counter="20">20</span><span className="stat-suffix">+</span></div>
              <div className="stat-label">{t("Năm kinh nghiệm", "Years of Experience")}</div>
            </div>
            <div className="stat-item fade-in-up stagger-2">
              <div className="stat-number"><span data-counter="25">25</span><span className="stat-suffix">+</span></div>
              <div className="stat-label">{t("Đối tác quốc tế", "International Partners")}</div>
            </div>
            <div className="stat-item fade-in-up stagger-3">
              <div className="stat-number"><span data-counter="200">200</span><span className="stat-suffix">+</span></div>
              <div className="stat-label">{t("Sản phẩm", "Products")}</div>
            </div>
            <div className="stat-item fade-in-up stagger-4">
              <div className="stat-number"><span data-counter="200">200</span><span className="stat-suffix">+</span></div>
              <div className="stat-label">{t("Dự án triển khai", "Project Implementations")}</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ═══ ABOUT INTRO ═══ */}
      <section className="section bg-white">
        <div className="container">
          <div className="split">
            <div className="fade-in-up">
              <span className="overline">{t("Về HAMEDCO", "About HAMEDCO")}</span>
              <h2>{t(
                "HAMEDCO – Nhà cung cấp giải pháp thiết bị y tế công nghệ cao hàng đầu Việt Nam. Đối tác chiến lược của Philips Healthcare",
                "HAMEDCO – Vietnam's Leading High-Tech Medical Equipment Solutions Provider. Strategic Partner of Philips Healthcare"
              )}</h2>
              <p className="body-lg" style={{ margin: "20px 0", color: "var(--color-gray-500)" }}>
                {t(
                  "Thành lập từ năm 2005, Công ty Cổ phần Vật tư và Thiết bị Y tế Hà Nội (HAMEDCO) là Nhà phân phối chính thức của Philips tại thị trường Việt Nam. Với hơn 20 năm kinh nghiệm, chúng tôi cung cấp các hệ thống chẩn đoán hình ảnh và giải pháp hồi sức cấp cứu tiên tiến, đồng thời mang đến giải pháp y tế tổng thể giúp các bệnh viện tối ưu vận hành, nâng cao độ chính xác trong chẩn đoán và cải thiện chất lượng điều trị.",
                  "Established in 2005, Hanoi Medical Supplies and Equipment Joint Stock Company (HAMEDCO) is the official distributor of Philips in the Vietnamese market. With over 20 years of experience, we provide advanced imaging diagnostics and critical care solutions, delivering comprehensive healthcare solutions to optimize hospital operations, improve diagnostic accuracy, and enhance treatment quality."
                )}
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/gioi-thieu" className="btn btn-primary btn-md">{t("Tìm hiểu thêm", "Learn More")}</Link>
                <Link href="/doi-tac" className="btn btn-outline btn-md">{t("Đối tác của chúng tôi", "Our Partners")}</Link>
              </div>
            </div>
            <div className="about-intro-image fade-in-up stagger-2">
              <img src="/assets/images/hero/hero-banner.webp" alt="HAMEDCO" width="600" height="450" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURED PRODUCTS ═══ */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="section-header fade-in-up">
            <span className="overline">{t("Sản phẩm nổi bật", "Featured Products")}</span>
            <h2>{t("Giải pháp Siêu âm & Chẩn đoán Hình ảnh Philips", "Philips Ultrasound & Imaging Solutions")}</h2>
            <p>{t(
              "Dẫn đầu kỷ nguyên siêu âm thông minh, Philips mang đến danh mục giải pháp toàn diện, từ thiết bị cầm tay linh hoạt đến các hệ thống chuyên sâu hiệu suất vượt trội, đáp ứng nhu cầu lâm sàng ở mọi cấp độ. Tại Việt Nam, HAMEDCO là nhà phân phối của Philips, đưa hệ sinh thái Connected Care hiện diện rộng khắp tại hàng trăm bệnh viện và cơ sở y tế trên toàn quốc.",
              "Leading the era of intelligent ultrasound, Philips offers a comprehensive portfolio of solutions, from flexible handheld devices to high-performance advanced systems, designed to meet clinical needs at every level. In Vietnam, HAMEDCO is Philips’ exclusive distributor, extending the Connected Care ecosystem across hundreds of hospitals and healthcare facilities nationwide."
            )}</p>
          </div>
          <div className="products-grid">
            {topProducts.map((p) => (
              <div 
                className="product-card" 
                key={p.id}
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  window.location.href = `/san-pham/${p.slug}`;
                }}
              >
                <div className="product-image">
                  <img src={p.thumbnail} alt={p.name} loading="lazy" />
                  <div className="product-badge">{p.categoryLabel[locale]}</div>
                </div>
                <div className="product-content">
                  <div className="product-brand">{p.brand}</div>
                  <Link href={`/san-pham/${p.slug}`} className="product-title" style={{ textDecoration: "none", color: "inherit", cursor: "pointer", display: "block", marginTop: "4px" }}>
                    {p.name}
                  </Link>
                  <p className="product-desc line-clamp-3">{p.description[locale]}</p>
                  <Link 
                    href={`/san-pham/${p.slug}`} 
                    className="product-action"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {t("Chi tiết sản phẩm", "View Details")}
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: "40px" }}>
            <Link href="/san-pham" className="btn btn-primary btn-lg">{t("Xem tất cả sản phẩm", "View All Products")}</Link>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header fade-in-up">
            <span className="overline">{t("Dịch vụ", "Services")}</span>
            <h2>{t("Giải pháp toàn diện", "Comprehensive Solutions")}</h2>
            <p>{t(
              "Đồng hành cùng khách hàng từ tư vấn, triển khai đến bảo trì — đảm bảo thiết bị hoạt động tối ưu",
              "We support our customers from consultation and implementation to maintenance — ensuring optimal equipment performance."
            )}</p>
          </div>
          <div className="grid grid-4">
            <div className="service-card fade-in-up stagger-1">
              <div className="service-icon">
                <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
              </div>
              <h3>{t("Tư vấn giải pháp", "Solution Consulting")}</h3>
              <p>{t(
                "Phân tích nhu cầu và đề xuất giải pháp thiết bị phù hợp nhất cho từng chuyên khoa và quy mô cơ sở.",
                "Analyze needs and propose the most suitable equipment solutions for each specialty and facility size."
              )}</p>
            </div>
            <div className="service-card fade-in-up stagger-2">
              <div className="service-icon">
                <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <h3>{t("Triển khai & Lắp đặt", "Deployment & Installation")}</h3>
              <p>{t(
                "Đội ngũ kỹ thuật viên chuyên nghiệp, lắp đặt đúng tiêu chuẩn nhà sản xuất, bàn giao vận hành đầy đủ.",
                "Our team of professional technicians installs according to manufacturer standards and provides a complete handover process."
              )}</p>
            </div>
            <div className="service-card fade-in-up stagger-3">
              <div className="service-icon">
                <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
              </div>
              <h3>{t("Bảo trì & Bảo hành", "Maintenance & Warranty")}</h3>
              <p>{t(
                "Chế độ bảo hành chính hãng, bảo trì định kỳ, sửa chữa nhanh chóng — đảm bảo uptime tối đa.",
                "Genuine manufacturer's warranty, regular maintenance, and prompt repairs — ensuring maximum uptime."
              )}</p>
            </div>
            <div className="service-card fade-in-up stagger-4">
              <div className="service-icon">
                <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
              </div>
              <h3>{t("Chuyển giao công nghệ & Hướng dẫn sử dụng", "Technology Transfer & User Training")}</h3>
              <p>{t(
                "Triển khai chương trình chuyển giao công nghệ và hướng dẫn sử dụng thiết bị cho đội ngũ y bác sĩ, bảo đảm vận hành đúng quy trình, khai thác hiệu quả tính năng và ứng dụng tối ưu trong thực hành lâm sàng trong suốt vòng đời của máy.",
                "Implementing technology transfer programs and user training for healthcare professionals to ensure smooth operation, maximize equipment capabilities and optimize clinical application throughout the equipment's lifecycle."
              )}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PHILIPS SHOWCASE ═══ */}
      <section className="section bg-gray-50 philips-partnership" id="philips-partnership">
        <div className="container">
          <div className="section-header fade-in-up">
            <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "rgba(11, 94, 215, 0.1)", color: "#0B5ED7", padding: "8px 24px", borderRadius: "100px", fontWeight: 700, fontSize: "0.8125rem", textTransform: "uppercase" as const, letterSpacing: "0.08em", margin: "0 auto 24px auto", border: "1px solid rgba(11, 94, 215, 0.2)" }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
              <span>{t("Nhà phân phối Philips Healthcare", "Philips Healthcare Distributor")}</span>
            </div>
            <div style={{ margin: "8px 0 32px", display: "flex", justifyContent: "center" }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Philips_logo_new.svg/1280px-Philips_logo_new.svg.png" alt="Philips Logo" width="350" style={{ objectFit: "contain" }} />
            </div>
            <h2>{t("HAMEDCO – Nhà phân phối Philips Healthcare tại Việt Nam", "HAMEDCO – Philips Healthcare Distributor in Vietnam")}</h2>
            <p>{t(
              "Tự hào là nhà phân phối của Philips tại Việt Nam, HAMEDCO đồng hành đưa hệ sinh thái y khoa tiên tiến cùng các giải pháp công nghệ hiện đại đến các bệnh viện và cơ sở y tế trên toàn quốc",
              "Proud to be Philips’ distributor in Vietnam, HAMEDCO helps bring an advanced healthcare ecosystem and modern medical technologies to hospitals and healthcare facilities nationwide."
            )}</p>
          </div>

          <div className="philips-bento-grid fade-in-up">
            <div className="bento-card bento-main">
              <div className="bento-content">
                <h3 className="h4">Connected Care Intelligence</h3>
                <p>{t(
                  "Hệ sinh thái kết nối dữ liệu y tế toàn diện từ máy theo dõi bệnh nhân đến hồ sơ bệnh án, giúp y bác sĩ đưa ra quyết định lâm sàng nhanh chóng, xóa bỏ hoàn toàn rào cản silo dữ liệu.",
                  "This ecosystem connects comprehensive healthcare data, from patient monitors to medical records, enabling doctors to make rapid clinical decisions and completely eliminate data silo barriers."
                )}</p>
              </div>
              <div className="bento-visual">
                <img src="/assets/images/placeholder/philips-connected-care.png" alt="Philips Connected Care Patient Monitor" loading="lazy" />
              </div>
            </div>
            <div className="bento-card bento-sub">
              <div className="bento-content">
                <h3 className="h4">AI-Enabled Diagnostics</h3>
                <p>{t(
                  "Tích hợp trí tuệ nhân tạo với công nghệ SmartSpeed, tự động hóa quy trình và cải thiện chất lượng hình ảnh MRI/CT tối đa.",
                  "Integrating artificial intelligence with SmartSpeed technology automates processes and maximizes MRI/CT image quality."
                )}</p>
              </div>
              <div className="bento-visual">
                <img src="/assets/images/placeholder/philips-ai-diagnostics.png" alt="Philips AI Diagnostics Interface" loading="lazy" />
              </div>
            </div>
            <div className="bento-card bento-sub">
              <div className="bento-content">
                <h3 className="h4">{t("Công nghệ An toàn Cao", "Reliable Technology")}</h3>
                <p>{t(
                  "Công nghệ xanh bền vững như giải pháp MRI BlueSeal không tiêu hao helium lỏng, an toàn tuyệt đối và tối ưu chi phí bệnh viện.",
                  "Sustainable green technologies like the BlueSeal MRI solution do not consume liquid helium, are absolutely safe, and optimize hospital costs."
                )}</p>
              </div>
              <div className="bento-visual">
                <img src="/assets/images/placeholder/philips-blueseal.png" alt="Philips BlueSeal MRI" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CERTIFICATIONS ═══ */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header fade-in-up">
            <span className="overline">{t("TIÊU CHUẨN & CHỨNG NHẬN CHẤT LƯỢNG", "Certifications & Quality Standards")}</span>
            <h2>{t("Cam kết chất lượng quốc tế", "Commitment to International Quality")}</h2>
            <p>{t(
              "Sản phẩm đạt chứng nhận quốc tế đảm bảo sự an toàn tuyệt đối và tính pháp lý minh bạch cho mọi dự án y tế.",
              "Products achieve international certifications ensuring absolute safety and transparent legal compliance for all medical projects."
            )}</p>
          </div>
          <div className="cert-grid fade-in-up">
            {[
              { name: "ISO 13485", detail: t("Quản lý chất lượng TBYT", "Medical Devices QMS") },
              { name: t("CFS", "CFS"), detail: t("Giấy chứng nhận lưu hành tự do", "Certificate of Free Sale") },
              { name: "CE", detail: t("Chứng nhận Châu Âu", "European Conformity") },
              { name: t("Giấy phép TTBYT", "Medical Equipment License"), detail: t("Bộ Y tế Việt Nam", "Vietnam Ministry of Health") },
            ].map((cert) => (
              <div className="cert-item" key={cert.name}>
                <div className="cert-icon">
                  <svg width="40" height="40" fill="none" stroke="var(--color-primary)" viewBox="0 0 24 24"><path strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                </div>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-detail">{cert.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="section-header fade-in-up">
            <span className="overline">{t("TẠI SAO CHỌN HAMEDCO?", "WHY CHOOSE HAMEDCO?")}</span>
            <h2>{t(
              "Đối tác tin cậy của hàng trăm bệnh viện trên toàn quốc",
              "The Trusted Partner of Hundreds of Hospitals Nationwide"
            )}</h2>
            <p>{t(
              "Chúng tôi cam kết mang đến giải pháp thiết bị y tế toàn diện cùng chất lượng dịch vụ vượt trội.",
              "We are committed to providing comprehensive medical equipment solutions alongside outstanding service quality."
            )}</p>
          </div>
          <div className="why-grid">
            <div className="why-item fade-in-up stagger-1">
              <div className="why-icon"><svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div>
              <div>
                <h3>{t("1. Chính hãng 100%", "1. 100% Genuine")}</h3>
                <p>{t(
                  "Cam kết phân phối sản phẩm chính hãng từ các nhà sản xuất hàng đầu thế giới như Philips. Hồ sơ pháp lý đầy đủ, bao gồm CO, CQ, giấy phép nhập khẩu và giấy phép lưu hành trang thiết bị y tế theo quy định.",
                  "Committed to distributing genuine products from top global manufacturers like Philips. Full legal documentation including CO, CQ, import licenses and medical device circulation permits."
                )}</p>
              </div>
            </div>
            <div className="why-item fade-in-up stagger-2">
              <div className="why-icon"><svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
              <div>
                <h3>{t("2. Phản hồi kỹ thuật 24/7", "2. 24/7 Technical Response")}</h3>
                <p>{t(
                  "Đội ngũ kỹ thuật chuyên sâu luôn sẵn sàng hỗ trợ 24/7. Chúng tôi cam kết phản hồi nhanh chóng và đưa ra phương án xử lý kịp thời, góp phần bảo đảm hệ thống thiết bị y tế vận hành ổn định, liên tục.",
                  "Our expert technical team is always ready and available 24/7. We commit to rapid response and timely resolution to ensure your medical systems operate stably and continuously."
                )}</p>
              </div>
            </div>
            <div className="why-item fade-in-up stagger-3">
              <div className="why-icon"><svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg></div>
              <div>
                <h3>{t("3. Chuyển giao công nghệ chuyên sâu", "3. In-depth Technology Transfer")}</h3>
                <p>{t(
                  "HAMEDCO chú trọng đào tạo và chuyển giao công nghệ bài bản. Đội ngũ y bác sĩ được hướng dẫn vận hành chi tiết, giúp khai thác tối đa hiệu quả thiết bị trong chẩn đoán và điều trị.",
                  "HAMEDCO prioritizes comprehensive training and technology transfer. Medical staff receive detailed guidance, helping maximize equipment efficiency in diagnosis and treatment."
                )}</p>
              </div>
            </div>
            <div className="why-item fade-in-up stagger-4">
              <div className="why-icon"><svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg></div>
              <div>
                <h3>{t("4. Bảo hành và bảo trì toàn diện", "4. Comprehensive Warranty & Maintenance")}</h3>
                <p>{t(
                  "Chính sách bảo hành chính hãng từ 12 đến 24 tháng. Đồng thời, chúng tôi xây dựng kế hoạch bảo trì định kỳ và duy trì kho linh kiện dự phòng, giúp rút ngắn thời gian xử lý khi phát sinh sự cố.",
                  "Official warranty policy from 12 to 24 months. We also establish regular maintenance plans and maintain on-site spare parts reserves, minimizing downtime when incidents occur."
                )}</p>
              </div>
            </div>
            <div className="why-item fade-in-up stagger-5">
              <div className="why-icon"><svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div>
              <div>
                <h3>{t("5. Hơn 20 năm kinh nghiệm thực chiến", "5. Over 20 Years of Practical Experience")}</h3>
                <p>{t(
                  "Với hơn 20 năm đồng hành cùng ngành y tế Việt Nam, HAMEDCO thấu hiểu sâu sắc quy trình vận hành và nhu cầu thực tiễn của các bệnh viện, từ đó mang đến các giải pháp phù hợp và hiệu quả.",
                  "With more than 20 years supporting Vietnam's healthcare sector, HAMEDCO deeply understands the operational processes and practical needs of hospitals, ensuring tailored and effective solutions."
                )}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COOPERATION PROCESS ═══ */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header fade-in-up">
            <span className="overline">{t("Quy trình hợp tác", "Collaboration Process")}</span>
            <h2>{t("4 bước để sở hữu thiết bị y tế chất lượng", "4 steps to owning quality medical equipment")}</h2>
            <p>{t(
              "Quy trình chuyên nghiệp, minh bạch — từ tư vấn đến bàn giao vận hành",
              "Professional and transparent process — from consultation to handover and operation."
            )}</p>
          </div>
          <div className="process-steps fade-in-up">
            <div className="process-step">
              <h3>{t("Tư vấn & Khảo sát", "Consulting & Surveying")}</h3>
              <p>{t(
                "Đội ngũ chuyên gia đến khảo sát thực tế, phân tích nhu cầu và đề xuất giải pháp phù hợp.",
                "Our team of experts conducts on-site surveys, analyzes needs, and proposes suitable solutions."
              )}</p>
            </div>
            <div className="process-step">
              <h3>{t("Báo giá & Hợp đồng", "Quotation & Contract")}</h3>
              <p>{t(
                "Cung cấp báo giá chi tiết, đàm phán điều khoản hợp đồng minh bạch và có lợi nhất.",
                "Provide detailed quotations and negotiate transparent and most advantageous contract terms."
              )}</p>
            </div>
            <div className="process-step">
              <h3>{t("Lắp đặt & Chuyển giao", "Installation & Training")}</h3>
              <p>{t(
                "Triển khai lắp đặt đúng tiêu chuẩn, Chuyển giao, đào tạo, hướng dẫn sử dụng cho toàn bộ đội ngũ vận hành.",
                "Implement installation according to standards and provide training on usage for the entire operating team."
              )}</p>
            </div>
            <div className="process-step">
              <h3 className="h4">{t("Bảo hành & Hỗ trợ", "Warranty & Support")}</h3>
              <p>{t(
                "Bảo hành chính hãng, bảo trì định kỳ và hỗ trợ kỹ thuật xuyên suốt vòng đời thiết bị.",
                "Manufacturer's warranty, regular maintenance, and technical support throughout the equipment's lifecycle."
              )}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="section-header fade-in-up">
            <span className="overline">{t("Khách hàng nói gì", "What Customers Say")}</span>
            <h2>{t("Được tin tưởng bởi hàng trăm bệnh viện", "Trusted by Hundreds of Hospitals")}</h2>
            <p>{t("Cảm nhận của đối tác và khách hàng đã hợp tác cùng HAMEDCO", "Feedback from partners and customers who have collaborated with HAMEDCO.")}</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card fade-in-up stagger-1">
              <blockquote>{t(
                "Hệ thống MRI 1.5T BlueSeal do HAMEDCO triển khai hoạt động rất ổn định. Công nghệ không helium giúp bệnh viện chúng tôi tiết kiệm đáng kể chi phí vận hành.",
                "The 1.5T BlueSeal MRI system deployed by HAMEDCO operates very stably. The helium-free technology helps our hospital save significantly on operating costs."
              )}</blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar"><img src="/assets/images/testimonials/avatar-1.webp" alt="Author" width="48" height="48" loading="lazy" /></div>
                <div><div className="testimonial-name">TS. BS. Nguyễn Thanh H.</div><div className="testimonial-role">{t("Khoa Chẩn đoán hình ảnh — BV Đa khoa Quốc tế", "Department of Diagnostic Imaging — International General Hospital")}</div></div>
              </div>
            </div>
            <div className="testimonial-card fade-in-up stagger-2">
              <blockquote>{t(
                "Các thiết bị can thiệp mạch của Philips chất lượng vượt trội. Chúng tôi đặc biệt hài lòng với sự hỗ trợ kỹ thuật và quy trình bảo hành chính hãng từ HAMEDCO.",
                "Philips' interventional cardiology devices are of outstanding quality. We are particularly pleased with the technical support and genuine warranty service provided by HAMEDCO."
              )}</blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar"><img src="/assets/images/testimonials/avatar-2.webp" alt="Author" width="48" height="48" loading="lazy" /></div>
                <div><div className="testimonial-name">PGS. TS. Phạm Văn M.</div><div className="testimonial-role">{t("Trưởng khoa Tim mạch — BV Trung ương", "Head of Cardiology Department - Central Hospital")}</div></div>
              </div>
            </div>
            <div className="testimonial-card fade-in-up stagger-3">
              <blockquote>{t(
                "Hệ thống theo dõi bệnh nhân trung tâm (Patient Monitoring) của Philips giúp khoa Hồi sức cấp cứu kiểm soát tình trạng bệnh nhân toàn diện và cảnh báo sớm cực kỳ chính xác.",
                "Philips' Patient Monitoring system enables the Intensive Care Unit to comprehensively monitor patient conditions and provide highly accurate early warning systems."
              )}</blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar"><img src="/assets/images/testimonials/avatar-3.webp" alt="Author" width="48" height="48" loading="lazy" /></div>
                <div><div className="testimonial-name">BS. Lê Thị K.</div><div className="testimonial-role">{t("Trưởng khoa ICU — BV Tỉnh", "Head of ICU Department — Provincial Hospital")}</div></div>
              </div>
            </div>
            <div className="testimonial-card fade-in-up stagger-4">
              <blockquote>{t(
                "Trải nghiệm công nghệ AI SmartSpeed của Philips giúp rút ngắn thời gian chụp MRI tới 50%, giảm sự khó chịu cho bệnh nhân rõ rệt. Đội ngũ HAMEDCO đào tạo bài bản.",
                "Experience Philips' AI SmartSpeed ​​technology, which shortens MRI scan times by up to 50% and significantly reduces patient discomfort. The HAMEDCO team provided very thorough training."
              )}</blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar"><img src="/assets/images/testimonials/avatar-4.webp" alt="Author" width="48" height="48" loading="lazy" /></div>
                <div><div className="testimonial-name">BSCKI. Vũ Đức A.</div><div className="testimonial-role">{t("Phó khoa CĐHA — BV Quân Y 103", "Deputy Head of Diagnostic Imaging - Military Hospital 103")}</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ═══ FAQ ═══ */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header fade-in-up">
            <span className="overline">{t("Câu hỏi thường gặp", "Frequently Asked Questions")}</span>
            <h2>{t("Giải đáp thắc mắc", "Answering Questions")}</h2>
            <p>{t(
              "Những câu hỏi phổ biến nhất về sản phẩm và dịch vụ của HAMEDCO",
              "The most frequently asked questions about HAMEDCO's products and services."
            )}</p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* ═══ CTA + INQUIRY FORM ═══ */}
      <section className="cta-section section-lg">
        <div className="container">
          <div className="split">
            <div className="cta-content fade-in-up">
              <span className="overline" style={{ color: "var(--color-accent)" }}>{t("Liên hệ ngay", "Contact Us")}</span>
              <h2>{t("Bạn cần tư vấn giải pháp thiết bị y tế?", "Need consultation for medical equipment solutions?")}</h2>
              <p>{t(
                "Hãy để lại thông tin, đội ngũ chuyên gia của HAMEDCO sẽ liên hệ tư vấn miễn phí trong vòng 24 giờ.",
                "Leave your information, and HAMEDCO's expert team will contact you for a free consultation within 24 hours."
              )}</p>
              <div className="flex gap-4 flex-wrap" style={{ marginTop: "12px" }}>
                <div className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem" }}>
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  +84 86 9009 486
                </div>
                <div className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem" }}>
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  info@hamedco.vn
                </div>
              </div>
            </div>
            <div className="inquiry-form fade-in-up stagger-2">
              <h3 style={{ color: "var(--color-white)", marginBottom: "20px", fontSize: "1.25rem" }}>{t("Yêu cầu tư vấn nhanh", "Quick Consultation Request")}</h3>
              <form>
                <div className="form-group">
                  <label className="form-label" htmlFor="cta-name">{t("Họ và tên *", "Full Name *")}</label>
                  <input type="text" id="cta-name" className="form-input" placeholder="Nguyễn Văn A" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="cta-phone">{t("Số điện thoại *", "Phone Number *")}</label>
                  <input type="tel" id="cta-phone" className="form-input" placeholder="0912 345 678" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="cta-email">Email</label>
                  <input type="email" id="cta-email" className="form-input" placeholder="email@company.com" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="cta-message">{t("Nội dung quan tâm", "Area of Interest")}</label>
                  <textarea id="cta-message" className="form-input form-textarea" placeholder={t("Thiết bị cần tư vấn, số lượng, thời gian...", "Equipment needed, quantity, timeline...")} rows={3}></textarea>
                </div>
                <button type="submit" className="btn btn-accent btn-lg" style={{ width: "100%" }}>{t("Gửi yêu cầu tư vấn", "Submit Request")}</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
