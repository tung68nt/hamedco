"use client";

import PageHero from "../../components/layout/PageHero";
import HistoryTimeline from "../../components/about/HistoryTimeline";
import LeadershipMessage from "../../components/about/LeadershipMessage";
import CoreValues from "../../components/about/CoreValues";
import StatsSection from "../../components/about/StatsSection";
import { useLocale } from "../../components/LocaleProvider";
import Link from "next/link";

export default function AboutPage() {
  const { t } = useLocale();

  return (
    <>
      {/* ═══ PAGE HERO ═══ */}
      <PageHero
        title={t("Về HAMEDCO", "About HAMEDCO")}
        description={t(
          "Hơn 20 năm tận tâm vì sự nghiệp chăm sóc sức khỏe cộng đồng – Đối tác tin cậy của Philips Healthcare tại Việt Nam.",
          "Over 20 years of dedication to public healthcare – The trusted partner of Philips Healthcare in Vietnam."
        )}
        breadcrumbs={[{ label: t("Giới thiệu", "About Us") }]}
        image="/assets/images/hero/hero-banner.webp"
      />

      {/* ═══ COMPANY OVERVIEW ═══ */}
      <section className="section bg-white about-overview">
        <div className="container">
          <div className="split items-center">
            <div className="fade-in-up">
              <span className="overline">{t("Tầm nhìn & Sứ mệnh", "Vision & Mission")}</span>
              <h2>{t(
                "Đồng hành cùng nền y tế Việt Nam vươn tầm quốc tế",
                "Accompanying Vietnam's Healthcare to International Standards"
              )}</h2>
              <p className="body-lg" style={{ margin: "24px 0" }}>
                {t(
                  "Thành lập từ năm 2005, HAMEDCO đã không ngừng nỗ lực để mang những giải pháp y tế tiên tiến nhất về Việt Nam. Chúng tôi tin rằng công nghệ hiện đại, khi kết hợp với sự tận tâm và chuyên môn cao, sẽ tạo nên những thay đổi mang tính bước ngoặt trong chẩn đoán và điều trị.",
                  "Founded in 2005, HAMEDCO has continuously strived to bring the most advanced medical solutions to Vietnam. We believe that modern technology, combined with dedication and expertise, will create breakthrough changes in diagnosis and treatment."
                )}
              </p>
              <div className="vision-mission-cards">
                <div className="vm-card">
                  <h4>{t("Sứ mệnh", "Mission")}</h4>
                  <p>{t(
                    "Cung cấp các thiết bị y tế chính hãng, chất lượng cao và giải pháp kỹ thuật tối ưu nhằm nâng cao năng lực khám chữa bệnh cho các bệnh viện.",
                    "Providing genuine, high-quality medical equipment and optimal technical solutions to enhance the examination and treatment capabilities of hospitals."
                  )}</p>
                </div>
                <div className="vm-card">
                  <h4>{t("Tầm nhìn", "Vision")}</h4>
                  <p>{t(
                    "Trở thành nhà cung cấp giải pháp y tế số và thiết bị y tế công nghệ cao hàng đầu tại khu vực.",
                    "Becoming a leading provider of digital healthcare solutions and high-tech medical equipment in the region."
                  )}</p>
                </div>
              </div>
            </div>
            <div className="about-overview-image fade-in-up stagger-2">
              <img src="/assets/images/about/about-office.webp" alt="HAMEDCO Office" className="radius-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS SECTION ═══ */}
      <StatsSection />

      {/* ═══ HISTORY TIMELINE ═══ */}
      <section className="section bg-gray-50 history-section">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <span className="overline">{t("Hành trình phát triển", "Our Journey")}</span>
            <h2>{t("20 Năm xây dựng và trưởng thành", "20 Years of Growth and Development")}</h2>
            <p>{t(
              "Từ những bước đi đầu tiên cho đến vị thế nhà phân phối chiến lược của Philips Healthcare.",
              "From our first steps to becoming a strategic distributor for Philips Healthcare."
            )}</p>
          </div>
          <HistoryTimeline />
        </div>
      </section>

      {/* ═══ LEADERSHIP MESSAGE ═══ */}
      <section className="section bg-white leadership-section">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <span className="overline">{t("Ban lãnh đạo", "Leadership")}</span>
            <h2>{t("Đội ngũ dẫn dắt tâm huyết", "Dedicated Leadership Team")}</h2>
            <p>{t(
              "Sự kết hợp giữa tầm nhìn kinh doanh và thấu hiểu sâu sắc chuyên môn kỹ thuật.",
              "The combination of business vision and deep technical expertise."
            )}</p>
          </div>
          <LeadershipMessage />
        </div>
      </section>

      {/* ═══ CORE VALUES ═══ */}
      <CoreValues />

      {/* ═══ CTA SECTION ═══ */}
      <section className="cta-section section-lg">
        <div className="container">
          <div className="cta-content text-center fade-in-up">
            <h2 className="display-sm">{t("Cùng HAMEDCO kiến tạo tương lai y tế", "Let's Build the Future of Healthcare Together")}</h2>
            <p className="body-lg" style={{ maxWidth: "800px", margin: "20px auto 40px" }}>
              {t(
                "Bạn đang tìm kiếm giải pháp thiết bị y tế tối ưu cho cơ sở của mình? Hãy để đội ngũ chuyên gia của chúng tôi tư vấn và đồng hành cùng bạn.",
                "Are you looking for optimal medical equipment solutions for your facility? Let our experts consult and accompany you."
              )}
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/lien-he" className="btn btn-accent btn-lg">{t("Liên hệ tư vấn", "Contact Us")}</Link>
              <Link href="/san-pham" className="btn btn-outline-white btn-lg">{t("Xem sản phẩm", "View Products")}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
