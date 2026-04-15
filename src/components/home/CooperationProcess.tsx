"use client";

import { useLocale } from "@/components/LocaleProvider";

export default function CooperationProcess() {
  const { t } = useLocale();

  return (
    <section className="process-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <span className="overline">{t("Quy trình hợp tác", "Collaboration Process")}</span>
          <h2>{t("4 bước để sở hữu thiết bị y tế chất lượng", "4 steps to owning quality medical equipment")}</h2>
          <p>{t(
            "Quy trình chuyên nghiệp, minh bạch — từ tư vấn đến bàn giao vận hành",
            "Professional and transparent process — from consultation to handover and operation."
          )}</p>
        </div>

        <div className="process-timeline fade-in-up">
          <div className="process-card">
            <div className="process-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
            </div>
            <h3>{t("Tư vấn & Khảo sát", "Consulting & Surveying")}</h3>
            <p>{t(
              "Đội ngũ chuyên gia đến khảo sát thực tế, phân tích nhu cầu và đề xuất giải pháp phù hợp.",
              "Our team of experts conducts on-site surveys, analyzes needs, and proposes suitable solutions."
            )}</p>
          </div>

          <div className="process-connector">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </div>

          <div className="process-card">
            <div className="process-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
            </div>
            <h3>{t("Báo giá & Hợp đồng", "Quotation & Contract")}</h3>
            <p>{t(
              "Cung cấp báo giá chi tiết, đàm phán điều khoản hợp đồng minh bạch và có lợi nhất.",
              "Provide detailed quotations and negotiate transparent and most advantageous contract terms."
            )}</p>
          </div>

          <div className="process-connector">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </div>

          <div className="process-card">
            <div className="process-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.83-2.02a.75.75 0 01-.01-1.42l10.68-3.73a.75.75 0 01.95.95l-3.73 10.68a.75.75 0 01-1.42-.01l-2.02-5.83a.75.75 0 00-.46-.46z" /><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L15.5 11.09" /></svg>
            </div>
            <h3>{t("Lắp đặt & Chuyển giao", "Installation & Training")}</h3>
            <p>{t(
              "Triển khai lắp đặt đúng tiêu chuẩn. Chuyển giao, đào tạo, hướng dẫn sử dụng cho toàn bộ đội ngũ vận hành.",
              "Implement installation according to standards and provide training on usage for the entire operating team."
            )}</p>
          </div>

          <div className="process-connector">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </div>

          <div className="process-card">
            <div className="process-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
            </div>
            <h3>{t("Bảo hành & Hỗ trợ", "Warranty & Support")}</h3>
            <p>{t(
              "Bảo hành chính hãng, bảo trì định kỳ và hỗ trợ kỹ thuật xuyên suốt vòng đời thiết bị.",
              "Manufacturer's warranty, regular maintenance, and technical support throughout the equipment's lifecycle."
            )}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
