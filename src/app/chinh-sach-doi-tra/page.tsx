import { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import "@/app/css/article.css";

export const metadata: Metadata = {
  title: "Chính sách đổi hàng | HAMEDCO",
  description: "Chính sách đổi hàng và hoàn trả của HAMEDCO - Nhanh chóng, minh bạch và không làm gián đoạn công tác khám chữa bệnh.",
  alternates: {
    canonical: "/chinh-sach-doi-tra",
  },
};

export default function ReturnPolicyPage() {
  return (
    <>
      <PageHero
        title="Chính sách đổi hàng"
        description="Tại HAMEDCO, chúng tôi cam kết mang đến những thiết bị y tế đạt tiêu chuẩn chất lượng cao nhất."
        breadcrumbs={[{ label: "Chính sách đổi hàng" }]}
      />
      <main className="main-content">
        <section className="section bg-white">
          <div className="container" style={{ maxWidth: "900px" }}>
            <div className="article-content">
              <p className="lead">
                Tại <strong>HAMEDCO</strong>, chúng tôi cam kết mang đến những thiết bị y tế đạt tiêu chuẩn chất lượng cao nhất. Trong trường hợp sản phẩm gặp sự cố kỹ thuật hoặc không đúng theo thỏa thuận hợp đồng, chúng tôi sẵn sàng thực hiện chính sách đổi trả nhanh chóng để không làm gián đoạn công tác khám chữa bệnh của Quý đối tác.
              </p>

              <h2>1. Điều kiện đổi hàng hợp lệ</h2>
              <p>Quý khách được quyền yêu cầu đổi hàng khi sản phẩm thuộc một trong các trường hợp sau:</p>
              <ul>
                <li><strong>Lỗi do nhà sản xuất:</strong> Thiết bị gặp sự cố kỹ thuật không thể khắc phục được ngay, được xác nhận bởi đội ngũ kỹ sư của HAMEDCO hoặc đại diện hãng (Philips...).</li>
                <li><strong>Sai chủng loại, cấu hình:</strong> Sản phẩm được bàn giao không đúng với model, thông số kỹ thuật hoặc các phụ kiện đi kèm như đã thỏa thuận trong hợp đồng.</li>
                <li><strong>Hư hỏng do vận chuyển:</strong> Thiết bị bị trầy xước, nứt vỡ hoặc biến dạng trong quá trình vận chuyển từ kho của HAMEDCO đến địa điểm lắp đặt.</li>
              </ul>

              <h2>2. Yêu cầu đối với sản phẩm đổi trả</h2>
              <ul>
                <li><strong>Nguyên trạng:</strong> Thiết bị phải còn đầy đủ bao bì, thùng xốp, các chứng từ pháp lý đi kèm (hóa đơn, biên bản bàn giao, phiếu bảo hành).</li>
                <li><strong>Phụ kiện:</strong> Đầy đủ các linh kiện, phụ kiện và quà tặng kèm theo (nếu có).</li>
                <li><strong>Tình trạng:</strong> Không có dấu hiệu tự ý can thiệp, tháo dỡ hoặc sửa chữa bởi bên thứ ba không được ủy quyền.</li>
              </ul>

              <h2>3. Thời hạn tiếp nhận yêu cầu</h2>
              <ul>
                <li><strong>Đối với lỗi vận chuyển/Sai chủng loại:</strong> Quý khách cần phản hồi ngay tại thời điểm bàn giao hoặc trong vòng <strong>24 giờ</strong> kể từ khi ký biên bản giao nhận.</li>
                <li><strong>Đối với lỗi kỹ thuật ẩn:</strong> Tiếp nhận yêu cầu đổi mới trong vòng <strong>07 ngày</strong> kể từ ngày nghiệm thu bàn giao và hướng dẫn vận hành thành công.</li>
              </ul>

              <h2>4. Quy trình xử lý đổi hàng</h2>
              <p>Để đảm bảo tính minh bạch và nhanh chóng, quy trình được thực hiện qua 4 bước:</p>
              <ol>
                <li><strong>Tiếp nhận:</strong> Khách hàng liên hệ qua Hotline 086 900 9486 hoặc nhân viên kinh doanh phụ trách.</li>
                <li><strong>Giám định:</strong> Kỹ thuật viên HAMEDCO tiến hành kiểm tra, đánh giá tình trạng thực tế của máy tại cơ sở y tế.</li>
                <li><strong>Xác nhận:</strong> Lập biên bản xác nhận tình trạng lỗi và đủ điều kiện đổi trả theo chính sách.</li>
                <li><strong>Thực hiện:</strong> HAMEDCO tiến hành vận chuyển thiết bị thay thế tới lắp đặt và thu hồi thiết bị cũ trong vòng 2-5 ngày làm việc (tùy khu vực và tình trạng hàng hóa).</li>
              </ol>

              <h2>5. Chi phí đổi trả</h2>
              <ul>
                <li><strong>Lỗi từ phía HAMEDCO hoặc Nhà sản xuất:</strong> HAMEDCO chịu 100% chi phí vận chuyển, lắp đặt và các thủ tục liên quan đến việc đổi hàng.</li>
                <li><strong>Thay đổi nhu cầu từ phía Khách hàng:</strong> Trong trường hợp khách hàng muốn đổi sang dòng máy cao cấp hơn sau khi đã bàn giao, hai bên sẽ thỏa thuận chi phí phát sinh dựa trên thực tế sử dụng và giá trị chênh lệch của thiết bị.</li>
              </ul>

              <h2>6. Trường hợp không được đổi trả</h2>
              <ul>
                <li>Thiết bị đã qua thời hạn đổi trả quy định (07 ngày).</li>
                <li>Lỗi phát sinh do người sử dụng vận hành sai quy trình đã được đào tạo chuyển giao.</li>
                <li>Các sản phẩm thuộc danh mục vật tư tiêu hao đã mở bao bì sử dụng.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}