"use client";

import { useLocale } from "@/components/LocaleProvider";

export default function WhyChooseUs() {
  const { t } = useLocale();

  return (
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
              <h3>{t("Chính hãng 100%", "100% Genuine")}</h3>
              <p>{t(
                "Cam kết phân phối sản phẩm chính hãng từ các nhà sản xuất hàng đầu thế giới. Hồ sơ pháp lý đầy đủ, bao gồm CO, CQ, giấy phép lưu hành trang thiết bị y tế theo quy định.",
                "Committed to distributing genuine products from world-leading manufacturers. Full legal documentation including CO, CQ, and medical device circulation permits as required."
              )}</p>
            </div>
          </div>
          <div className="why-item fade-in-up stagger-2">
            <div className="why-icon"><svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
            <div>
              <h3>{t("Phản hồi kỹ thuật 24/7", "24/7 Technical Response")}</h3>
              <p>{t(
                "Đội ngũ kỹ thuật chuyên sâu luôn sẵn sàng hỗ trợ 24/7. Chúng tôi cam kết phản hồi nhanh chóng và đưa ra phương án xử lý kịp thời, góp phần bảo đảm hệ thống thiết bị y tế vận hành ổn định, liên tục.",
                "Our expert technical team is always ready and available 24/7. We commit to rapid response and timely solutions, helping ensure medical equipment systems operate stably and continuously."
              )}</p>
            </div>
          </div>
          <div className="why-item fade-in-up stagger-3">
            <div className="why-icon"><svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg></div>
            <div>
              <h3>{t("Chuyển giao công nghệ chuyên sâu", "In-depth Technology Transfer")}</h3>
              <p>{t(
                "HAMEDCO đặc biệt chú trọng chuyển giao công nghệ chuẩn hóa với trọng tâm là đội ngũ kỹ sư, chuyên viên được đào tạo bài bản và khắt khe. Từ nền tảng chuyên môn vững chắc đó, chúng tôi cam kết hướng dẫn y bác sĩ vận hành chi tiết, giúp khai thác tối đa công năng thiết bị trong chẩn đoán và điều trị.",
                "HAMEDCO places special emphasis on standardized technology transfer, focusing on rigorously trained engineers and specialists. From that solid professional foundation, we commit to guiding doctors and medical staff in detailed equipment operation, maximizing device capabilities in diagnosis and treatment."
              )}</p>
            </div>
          </div>
          <div className="why-item fade-in-up stagger-4">
            <div className="why-icon"><svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg></div>
            <div>
              <h3>{t("Bảo hành và bảo trì toàn diện", "Comprehensive Warranty & Maintenance")}</h3>
              <p>{t(
                "Chính sách bảo hành chính hãng từ 12 đến 24 tháng. Đồng thời, chúng tôi xây dựng kế hoạch bảo trì định kỳ và duy trì kho linh kiện dự phòng, giúp rút ngắn thời gian xử lý khi phát sinh sự cố.",
                "Official manufacturer warranty from 12 to 24 months. We also develop periodic maintenance plans and maintain spare parts inventory to minimize resolution time when incidents occur."
              )}</p>
            </div>
          </div>
          <div className="why-item fade-in-up stagger-5">
            <div className="why-icon"><svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div>
            <div>
              <h3>{t("Hơn 20 năm kinh nghiệm thực chiến", "Over 20 Years of Practical Experience")}</h3>
              <p>{t(
                "Với hơn 20 năm đồng hành cùng ngành y tế Việt Nam, HAMEDCO thấu hiểu sâu sắc quy trình vận hành và nhu cầu thực tiễn của các bệnh viện, từ đó mang đến các giải pháp phù hợp và hiệu quả.",
                "With more than 20 years supporting Vietnam's healthcare sector, HAMEDCO deeply understands the operational processes and practical needs of hospitals, delivering tailored and effective solutions."
              )}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
