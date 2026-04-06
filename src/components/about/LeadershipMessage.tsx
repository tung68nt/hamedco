"use client";

import { useLocale } from "../LocaleProvider";

/**
 * LeadershipMessage — Management messages for the About page
 */
export default function LeadershipMessage() {
  const { t } = useLocale();

  return (
    <div className="leadership-message-wrapper">
      <div className="leadership-card fade-in-up">
        <div className="leader-image">
          <img src="/assets/images/placeholder/leader-director.webp" alt="General Director" />
        </div>
        <div className="leader-info">
          <span className="overline">{t("Thông điệp từ Ban lãnh đạo", "Leadership Message")}</span>
          <h3 className="leader-name">[Họ và tên – Đang cập nhật]</h3>
          <p className="leader-title">{t("Tổng Giám đốc", "General Director")}</p>
          <blockquote className="leader-quote">
            {t(
              "\"Tại HAMEDCO, chúng tôi không chỉ cung cấp thiết bị y tế. Chúng tôi cung cấp giải pháp toàn diện để cứu sống tính mạng con người. Với hơn 20 năm kinh nghiệm, chúng tôi cam kết mang những chuẩn mực y tế toàn cầu tới từng bệnh viện tại Việt Nam.\"",
              "\"At HAMEDCO, we do more than just supply medical equipment. We provide comprehensive solutions to save lives. With over 20 years of experience, we are committed to bringing global healthcare standards to every hospital in Vietnam.\""
            )}
          </blockquote>
        </div>
      </div>

      <div className="leadership-card reverse fade-in-up stagger-1">
        <div className="leader-image">
          <img src="/assets/images/placeholder/leader-tech.webp" alt="Technical Deputy Director" />
        </div>
        <div className="leader-info">
          <span className="overline">{t("Giải pháp Kỹ thuật", "Technical Solutions")}</span>
          <h3 className="leader-name">[Họ và tên – Đang cập nhật]</h3>
          <p className="leader-title">{t("Phó Giám đốc Kỹ thuật", "Technical Deputy Director")}</p>
          <blockquote className="leader-quote">
            {t(
              "\"Sự tin cậy của thiết bị y tế là yếu tố sống còn. Đội ngũ kỹ thuật của HAMEDCO luôn túc trực 24/7 để đảm bảo rằng mọi hệ thống đều vận hành với hiệu suất tối ưu nhất, phục vụ công tác chẩn đoán và điều trị chính xác.\"",
              "\"The reliability of medical equipment is vital. HAMEDCO's technical team is available 24/7 to ensure that every system operates at peak performance, serving accurate diagnosis and treatment.\""
            )}
          </blockquote>
        </div>
      </div>
    </div>
  );
}
