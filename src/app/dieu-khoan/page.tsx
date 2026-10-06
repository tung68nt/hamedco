import { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import "@/app/css/article.css";

export const metadata: Metadata = {
  title: "Điều khoản sử dụng | HAMEDCO",
  description: "Điều khoản và điều kiện sử dụng website của HAMEDCO - Công ty CP Vật tư và Thiết bị Y tế Hà Nội.",
  alternates: {
    canonical: "/dieu-khoan",
  },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Điều khoản sử dụng"
        description="Quý khách vui lòng đọc kỹ các điều khoản sau trước khi sử dụng website của HAMEDCO."
        breadcrumbs={[{ label: "Điều khoản sử dụng" }]}
      />
      <main className="main-content">
        <section className="section bg-white">
          <div className="container" style={{ maxWidth: "900px" }}>
            <div className="article-content">
              <p className="lead">
                Chào mừng quý khách đến với website của <strong>HAMEDCO</strong>. Việc quý khách truy cập và sử dụng website này đồng nghĩa với việc quý khách đã đọc, hiểu và hoàn toàn đồng ý tuân thủ các Điều khoản và Điều kiện dưới đây. Nếu quý khách không đồng ý với bất kỳ điều khoản nào, vui lòng ngừng sử dụng website.
              </p>

              <h2>1. Quyền sở hữu trí tuệ</h2>
              <p>Trừ trường hợp có quy định khác, <strong>HAMEDCO</strong> sở hữu toàn bộ quyền sở hữu trí tuệ đối với mọi nội dung, hình ảnh, tài liệu và dữ liệu trên website này. Tất cả các quyền này đều được bảo lưu và bảo vệ bởi pháp luật. Quý khách chỉ được phép xem, tải xuống (cho mục đích lưu trữ/nghiên cứu) và in ấn các nội dung từ website cho <strong>mục đích cá nhân</strong>, hoàn toàn tuân thủ các giới hạn được quy định trong bản Điều khoản này.</p>
              <p><strong>Quý khách KHÔNG ĐƯỢC PHÉP:</strong></p>
              <ul>
                <li>Sao chép, tái bản hoặc phân phối lại nội dung từ website này trên các nền tảng khác.</li>
                <li>Bán, cho thuê hoặc cấp phép lại các tài liệu/nội dung từ website.</li>
                <li>Sử dụng, khai thác nội dung trên website cho bất kỳ mục đích thương mại nào.</li>
                <li>Chỉnh sửa, thay đổi, hoặc tạo ra các tác phẩm phái sinh từ nội dung của website.</li>
              </ul>

              <h2>2. Quy định về sử dụng website (Hành vi bị cấm)</h2>
              <p>Khi sử dụng website, quý khách cam kết không thực hiện các hành vi sau:</p>
              <ul>
                <li>Sử dụng website theo cách thức có thể gây hỏng hóc, quá tải, suy yếu hệ thống hoặc cản trở việc truy cập của những người dùng khác.</li>
                <li>Sử dụng website cho các mục đích trái pháp luật, lừa đảo, hoặc gây tổn hại đến quyền và lợi ích hợp pháp của bất kỳ cá nhân, tổ chức nào.</li>
                <li>Phát tán, tải lên hoặc truyền gửi các phần mềm độc hại (virus, trojan, worm, spyware, rootkit...) lên hệ thống của website.</li>
                <li>Tiến hành các hoạt động thu thập dữ liệu tự động (như quét dữ liệu, khai thác, phân tích dữ liệu) khi chưa có sự chấp thuận bằng văn bản từ <strong>HAMEDCO</strong>.</li>
                <li>Sử dụng website để gửi các thông điệp quảng cáo, tiếp thị hoặc giao tiếp kinh doanh không mong muốn (spam).</li>
              </ul>

              <h2>3. Hạn chế truy cập và Bảo mật tài khoản</h2>
              <p>Một số khu vực trên website có thể bị hạn chế truy cập. <strong>HAMEDCO</strong> bảo lưu toàn quyền trong việc giới hạn quyền truy cập vào một số chuyên mục hoặc toàn bộ website theo quyết định của chúng tôi. Nếu quý khách được cấp tài khoản (ID) và mật khẩu để truy cập vào các khu vực hạn chế, quý khách có trách nhiệm bảo mật tuyệt đối thông tin đăng nhập của mình. Chúng tôi có quyền vô hiệu hóa tài khoản và mật khẩu của quý khách bất kỳ lúc nào mà không cần thông báo trước nếu phát hiện có dấu hiệu vi phạm.</p>

              <h2>4. Nội dung do người dùng cung cấp</h2>
              <p>"Nội dung người dùng" bao gồm mọi văn bản, hình ảnh, âm thanh, video mà quý khách đăng tải hoặc gửi lên website.</p>
              <ul>
                <li>Bằng việc cung cấp nội dung, quý khách cấp cho <strong>HAMEDCO</strong> quyền sử dụng, sao chép, điều chỉnh, xuất bản và phân phối các nội dung đó trên mọi phương tiện truyền thông một cách không độc quyền, miễn phí và vô thời hạn.</li>
                <li>Nội dung quý khách cung cấp phải hợp pháp, không vi phạm bản quyền của bên thứ ba, và không chứa các yếu tố có thể dẫn đến các vụ kiện tụng pháp lý.</li>
                <li>Chúng tôi có toàn quyền (nhưng không có nghĩa vụ bắt buộc) giám sát, chỉnh sửa hoặc xóa bỏ bất kỳ nội dung nào được gửi lên website mà chúng tôi cho là không phù hợp.</li>
              </ul>

              <h2>5. Tuyên bố miễn trừ trách nhiệm</h2>
              <p>Website này được cung cấp trên cơ sở <strong>"NGUYÊN TRẠNG" (As is)</strong>, không đi kèm bất kỳ sự đảm bảo hay cam kết nào, dù là tường minh hay ngụ ý. <strong>HAMEDCO</strong> không cam kết rằng:</p>
              <ul>
                <li>Website sẽ luôn hoạt động liên tục, không bị gián đoạn hay hoàn toàn không có lỗi kỹ thuật.</li>
                <li>Các thông tin, tài liệu trên website là hoàn toàn đầy đủ, chính xác tuyệt đối và cập nhật tức thời.</li>
              </ul>
              <p>Các thông tin trên website không cấu thành bất kỳ lời khuyên chuyên môn nào (về pháp lý, y tế, hay tài chính). Quý khách nên tham vấn các chuyên gia phù hợp trước khi đưa ra bất kỳ quyết định nào dựa trên thông tin tại website.</p>

              <h2>6. Giới hạn trách nhiệm pháp lý</h2>
              <p>Trong mọi trường hợp được pháp luật cho phép, <strong>HAMEDCO</strong> sẽ không chịu trách nhiệm đối với quý khách về:</p>
              <ul>
                <li>Bất kỳ thiệt hại gián tiếp, đặc biệt, hoặc mang tính hệ quả nào.</li>
                <li>Mọi tổn thất về kinh doanh, doanh thu, lợi nhuận, dữ liệu, hợp đồng, uy tín hoặc các khoản tiết kiệm dự kiến phát sinh từ việc sử dụng hoặc không thể sử dụng website này.</li>
              </ul>

              <h2>7. Bồi thường thiệt hại</h2>
              <p>Quý khách đồng ý bồi thường và giữ cho <strong>HAMEDCO</strong> không bị thiệt hại khỏi mọi khiếu nại, tổn thất, chi phí (bao gồm cả chi phí pháp lý) phát sinh do việc quý khách vi phạm bất kỳ quy định nào trong Điều khoản sử dụng này.</p>

              <h2>8. Xử lý vi phạm</h2>
              <p>Nếu quý khách vi phạm bất kỳ điều khoản nào, <strong>HAMEDCO</strong> có toàn quyền áp dụng các biện pháp xử lý bao gồm nhưng không giới hạn:</p>
              <ul>
                <li>Tạm đình chỉ hoặc chấm dứt vĩnh viễn quyền truy cập website của quý khách.</li>
                <li>Chặn địa chỉ IP của thiết bị vi phạm.</li>
                <li>Yêu cầu nhà cung cấp dịch vụ Internet chặn đường truyền truy cập của quý khách đến website.</li>
                <li>Tiến hành các thủ tục pháp lý để khởi kiện, yêu cầu bồi thường theo quy định của pháp luật.</li>
              </ul>

              <h2>9. Sửa đổi và Cập nhật</h2>
              <p><strong>HAMEDCO</strong> có quyền sửa đổi, cập nhật các Điều khoản và Điều kiện này vào bất kỳ lúc nào mà không cần thông báo trước. Các bản cập nhật sẽ có Hiệu lực ngay khi được đăng tải trên website. Quý khách có trách nhiệm thường xuyên kiểm tra trang này để nắm rõ các quy định mới nhất.</p>

              <h2>10. Chuyển giao quyền và nghĩa vụ</h2>
              <p><strong>HAMEDCO</strong> có quyền chuyển giao, ủy quyền hoặc ký kết hợp đồng phụ cho các quyền và nghĩa vụ của mình theo Điều khoản này mà không cần thông báo hay xin phép quý khách. Ngược lại, quý khách không được tự ý chuyển giao các quyền và nghĩa vụ của mình cho bất kỳ bên thứ ba nào.</p>

              <h2>11. Tính độc lập của các điều khoản</h2>
              <p>Nếu bất kỳ điều khoản nào trong bản thỏa thuận này bị cơ quan có thẩm quyền tuyên bố là vô hiệu hoặc không thể thi hành, các điều khoản còn lại vẫn sẽ giữ nguyên hiệu lực và tiếp tục được áp dụng.</p>

              <h2>12. Luật điều chỉnh và Thẩm quyền giải quyết</h2>
              <p>Các Điều khoản và Điều kiện này được điều chỉnh và giải thích theo quy định của <strong>Pháp luật nước Cộng hòa Xã hội Chủ nghĩa Việt Nam</strong>. Mọi tranh chấp phát sinh liên quan đến website sẽ được giải quyết tại Tòa án có thẩm quyền tại Việt Nam.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}