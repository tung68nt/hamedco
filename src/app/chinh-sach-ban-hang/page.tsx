import { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import "@/app/css/article.css";

export const metadata: Metadata = {
  title: "Chính sách bán hàng | HAMEDCO",
  description: "Chính sách bán hàng và cung ứng giải pháp của HAMEDCO - Minh bạch, Chuyên nghiệp, Tận tâm.",
  alternates: {
    canonical: "/chinh-sach-ban-hang",
  },
};

export default function SalesPolicyPage() {
  return (
    <>
      <PageHero
        title="Chính sách bán hàng"
        description="Tại HAMEDCO, chúng tôi không chỉ cung cấp thiết bị y tế, chúng tôi mang đến những giải pháp công nghệ tiên tiến nhất."
        breadcrumbs={[{ label: "Chính sách bán hàng" }]}
      />
      <main className="main-content">
        <section className="section bg-white">
          <div className="container" style={{ maxWidth: "900px" }}>
            <div className="article-content">
              <p className="lead">
                Tại <strong>HAMEDCO</strong>, chúng tôi không chỉ cung cấp thiết bị y tế, chúng tôi mang đến những giải pháp công nghệ tiên tiến nhất để tối ưu hóa hiệu quả chẩn đoán và điều trị. Chính sách bán hàng của chúng tôi được xây dựng dựa trên tôn chỉ: <strong>Minh bạch – Chuyên nghiệp – Tận tâm.</strong>
              </p>

              <h2>1. Cam kết chất lượng sản phẩm</h2>
              <ul>
                <li><strong>Chính hãng 100%:</strong> Toàn bộ sản phẩm (Máy siêu âm, thiết bị hồi sức, vật tư tiêu hao...) đều được nhập khẩu chính ngạch từ các thương hiệu hàng đầu: Philips Healthcare...</li>
                <li><strong>Hồ sơ pháp lý đầy đủ:</strong> Mọi thiết bị bàn giao tới khách hàng đều đi kèm:
                  <ul>
                    <li>Giấy chứng nhận xuất xứ (CO) và Giấy chứng nhận chất lượng (CQ).</li>
                    <li>Giấy phép lưu hành thiết bị y tế của Bộ Y tế Việt Nam.</li>
                    <li>Tài liệu hướng dẫn sử dụng (User Manual) tiếng Anh và tiếng Việt.</li>
                  </ul>
                </li>
              </ul>

              <h2>2. Quy trình tư vấn giải pháp chuyên sâu</h2>
              <p>Chúng tôi tin rằng mỗi cơ sở y tế đều có nhu cầu riêng biệt. Quy trình của HAMEDCO bao gồm:</p>
              <ul>
                <li><strong>Khảo sát & Phân tích:</strong> Đội ngũ chuyên gia kỹ thuật và bác sĩ lâm sàng của HAMEDCO sẽ trực tiếp khảo sát quy mô, lưu lượng bệnh nhân tại cơ sở để đề xuất cấu hình máy phù hợp nhất.</li>
                <li><strong>Demo trải nghiệm:</strong> Hỗ trợ bác sĩ trải nghiệm thực tế tính năng của thiết bị (đặc biệt là các dòng máy siêu âm cao cấp) trước khi đưa ra quyết định đầu tư.</li>
                <li><strong>Tối ưu ngân sách:</strong> Tư vấn lộ trình đầu tư phân kỳ hoặc giải pháp tài chính linh hoạt để bệnh viện đạt hiệu quả kinh tế cao nhất.</li>
              </ul>

              <h2>3. Chính sách giá và Báo giá</h2>
              <ul>
                <li><strong>Giá trị thực:</strong> Báo giá của HAMEDCO luôn phản ánh đúng giá trị công nghệ và dịch vụ hậu mãi đi kèm. Chúng tôi cam kết mức giá cạnh tranh nhất cho các dòng sản phẩm cùng phân khúc.</li>
                <li><strong>Tính minh bạch:</strong> Báo giá đã bao gồm các loại thuế (VAT), chi phí vận chuyển, lắp đặt và đào tạo chuyển giao công nghệ.</li>
                <li><strong>Hiệu lực báo giá:</strong> Thông tin báo giá thường có hiệu lực trong vòng 30 ngày để hỗ trợ khách hàng trong việc phê duyệt ngân sách dự án.</li>
              </ul>

              <h2>4. Hợp đồng và Điều khoản thanh toán</h2>
              <ul>
                <li><strong>Tính pháp lý:</strong> Mọi giao dịch đều được thực hiện thông qua hợp đồng kinh tế minh bạch, tuân thủ đúng quy định pháp luật Việt Nam.</li>
                <li><strong>Thanh toán linh hoạt:</strong> Chấp nhận hình thức chuyển khoản qua ngân hàng. Áp dụng tiến độ thanh toán theo giai đoạn (Tạm ứng - Giao hàng - Nghiệm thu) giúp khách hàng chủ động nguồn vốn.</li>
              </ul>

              <h2>5. Chuyển giao công nghệ & Đào tạo</h2>
              <p>Đây là sự khác biệt lớn của HAMEDCO:</p>
              <ul>
                <li><strong>Hướng dẫn vận hành:</strong> Sau khi lắp đặt, kỹ sư của chúng tôi sẽ tổ chức các buổi đào tạo tại chỗ cho bác sĩ và kỹ thuật viên cho đến khi làm chủ được thiết bị.</li>
                <li><strong>Cập nhật kiến thức:</strong> Định kỳ tổ chức các buổi Workshop, hội thảo chuyên môn phối hợp cùng hãng (Philips) để cập nhật các tính năng và kỹ thuật chẩn đoán mới nhất cho khách hàng.</li>
              </ul>

              <h2>6. Bảo mật thông tin dự án</h2>
              <p>HAMEDCO cam kết bảo mật tuyệt đối mọi thông tin liên quan đến kế hoạch đầu tư, cấu hình thiết bị và các điều khoản thương mại của quý khách hàng đối với các bên không liên quan.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}