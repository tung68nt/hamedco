"use client";

import { useLocale } from "@/components/LocaleProvider";

export default function ServicesSection() {
  const { t } = useLocale();

  return (
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
  );
}
