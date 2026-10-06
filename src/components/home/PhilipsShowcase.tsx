"use client";

import { useLocale } from "@/components/LocaleProvider";

export default function PhilipsShowcase() {
  const { t } = useLocale();

  return (
    <section className="section bg-gray-50 philips-partnership" id="philips-partnership">
      <div className="container">
        <div className="section-header fade-in-up">
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "rgba(11, 94, 215, 0.1)", color: "#0B5ED7", padding: "8px 24px", borderRadius: "100px", fontWeight: 700, fontSize: "0.8125rem", textTransform: "uppercase" as const, letterSpacing: "0.08em", margin: "0 auto 24px auto", border: "1px solid rgba(11, 94, 215, 0.2)" }}>
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
            <span>{t("Nhà phân phối Philips Healthcare", "Philips Healthcare Distributor")}</span>
          </div>
          <div style={{ margin: "8px 0 32px", display: "flex", justifyContent: "center" }}>
            <img src="https://medicaldialogues.in/wp-content/uploads/2015/08/Philips_Logo_09.png" alt="Philips Logo" width="350" style={{ objectFit: "contain" }} />
          </div>
          <h2 style={{ whiteSpace: "pre-line" }}>{t("HAMEDCO – Nhà phân phối Philips Healthcare\ntại Việt Nam", "HAMEDCO – Philips Healthcare Distributor\nin Vietnam")}</h2>
          <p>{t(
            "Tự hào là nhà phân phối của Philips tại Việt Nam, HAMEDCO đồng hành đưa hệ sinh thái y khoa tiên tiến cùng các giải pháp công nghệ hiện đại đến các bệnh viện và cơ sở y tế trên toàn quốc",
            "Proud to be Philips' distributor in Vietnam, HAMEDCO helps bring an advanced healthcare ecosystem and modern medical technologies to hospitals and healthcare facilities nationwide."
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
  );
}
