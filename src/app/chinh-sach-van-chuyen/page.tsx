import { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import "@/app/css/article.css";

export const metadata: Metadata = {
  title: "Chính sách vận chuyển | HAMEDCO",
  description: "Chính sách vận chuyển và lắp đặt của HAMEDCO - Chuyên nghiệp, an toàn và đúng tiến độ.",
  alternates: {
    canonical: "/chinh-sach-van-chuyen",
  },
};

export default function ShippingPolicyPage() {
  return (
    <>
      <PageHero
        title="Chính sách vận chuyển"
        description="HAMEDCO cam kết mang đến dịch vụ vận chuyển chuyên nghiệp, an toàn và đúng tiến độ cho mọi dự án y tế trên toàn quốc."
        breadcrumbs={[{ label: "Chính sách vận chuyển" }]}
      />
      <main className="main-content">
        <section className="section bg-white">
          <div className="container" style={{ maxWidth: "900px" }}>
            <div className="article-content">
              <p className="lead">
                <strong>HAMEDCO</strong> cam kết mang đến dịch vụ vận chuyển chuyên nghiệp, an toàn và đúng tiến độ cho mọi dự án y tế trên toàn quốc. Chúng tôi hiểu rằng mỗi thiết bị y tế đều là một tài sản giá trị lớn, đòi hỏi quy trình xử lý đặc biệt từ kho bãi đến phòng khám.
              </p>

              <h2>1. Phạm vi và Chi phí vận chuyển</h2>
              <ul>
                <li><strong>Phạm vi:</strong> Cung cấp dịch vụ vận chuyển và giao hàng tận nơi tới tất cả các tỉnh thành trên toàn lãnh thổ Việt Nam.</li>
                <li><strong>Chi phí:</strong> <strong>Miễn phí hoàn toàn</strong> chi phí vận chuyển và lắp đặt đối với các dòng máy siêu âm, thiết bị chẩn đoán hình ảnh và hồi sức cấp cứu của Philips trong phạm vi nội thành Hà Nội và TP. Hồ Chí Minh.
                  <ul>
                    <li>Đối với các khu vực khác, mức phí vận chuyển (nếu có) sẽ được thỏa thuận minh bạch trong hợp đồng dựa trên khoảng cách và đặc thù thiết bị.</li>
                  </ul>
                </li>
              </ul>

              <h2>2. Tiêu chuẩn đóng gói và Bảo quản</h2>
              <p>Để đảm bảo an toàn tuyệt đối cho các linh kiện điện tử nhạy cảm:</p>
              <ul>
                <li><strong>Đóng gói chuẩn hãng:</strong> Thiết bị luôn được giữ nguyên đai, nguyên kiện trong thùng gỗ hoặc thùng carton chuyên dụng từ nhà sản xuất Philips.</li>
                <li><strong>Chống chấn động:</strong> Sử dụng các vật liệu giảm chấn, chống sốc và cảm biến độ ẩm (đối với các thiết bị đặc thù) để bảo vệ bo mạch và đầu dò siêu âm.</li>
                <li><strong>Phương tiện vận chuyển:</strong> Sử dụng xe tải chuyên dụng có hệ thống giảm xóc thủy lực, đảm bảo thiết bị không bị rung lắc mạnh trong suốt quá trình di chuyển.</li>
              </ul>

              <h2>3. Thời gian giao hàng</h2>
              <ul>
                <li><strong>Hàng có sẵn tại kho:</strong> Giao hàng trong vòng <strong>24 - 48 giờ</strong> kể từ khi hoàn tất thủ tục đơn hàng.</li>
                <li><strong>Hàng nhập khẩu theo dự án:</strong> Thời gian giao hàng dao động từ <strong>4 - 8 tuần</strong> (theo quy trình nhập khẩu chính hãng từ Philips). HAMEDCO cam kết cập nhật lộ trình hàng hóa liên tục để bệnh viện chủ động kế hoạch khai trương hoặc đưa vào sử dụng.</li>
              </ul>

              <h2>4. Quy trình Lắp đặt và Nghiệm thu</h2>
              <p>Việc vận chuyển chỉ được coi là hoàn tất khi thiết bị đã sẵn sàng hoạt động:</p>
              <ul>
                <li><strong>Lắp đặt chuyên nghiệp:</strong> Đội ngũ kỹ sư của HAMEDCO trực tiếp thực hiện lắp đặt, cấu hình hệ thống và kiểm tra các thông số kỹ thuật tại hiện trường.</li>
                <li><strong>Bàn giao lâm sàng:</strong> Thực hiện đo đạc, kiểm tra hình ảnh thực tế và ký biên bản nghiệm thu cùng bác sĩ chuyên trách.</li>
                <li><strong>Vệ sinh khu vực:</strong> Đảm bảo khu vực lắp đặt sạch sẽ, thu gom vật liệu đóng gói sau khi hoàn thành.</li>
              </ul>

              <h2>5. Trách nhiệm và Bảo hiểm hàng hóa</h2>
              <ul>
                <li><strong>Bảo hiểm 100%:</strong> HAMEDCO chịu trách nhiệm hoàn toàn về các rủi ro (mất mát, hư hỏng, trầy xước) phát sinh trong quá trình vận chuyển từ kho của chúng tôi đến địa điểm bàn giao.</li>
                <li><strong>Kiểm tra tại chỗ:</strong> Khi nhận hàng, Quý khách vui lòng cùng nhân viên giao hàng kiểm tra tình trạng bên ngoài của kiện hàng. Nếu phát hiện bất kỳ dấu hiệu móp méo hoặc rách tem niêm phong, Quý khách có quyền từ chối nhận hàng và liên hệ ngay với Hotline: <strong>086 900 9486</strong>.</li>
              </ul>

              <h2>6. Lưu ý về mặt bằng lắp đặt</h2>
              <p>Để quá trình giao hàng diễn ra thuận lợi, Quý khách vui lòng hỗ trợ:</p>
              <ul>
                <li>Thông báo trước về địa hình (tầng cao, thang máy, kích thước cửa phòng khám).</li>
                <li>Đảm bảo nguồn điện và điều kiện môi trường (nhiệt độ, độ ẩm) đúng tiêu chuẩn kỹ thuật mà kỹ sư HAMEDCO đã tư vấn trước đó.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}