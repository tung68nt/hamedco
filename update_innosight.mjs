import fs from 'fs';

const file = 'src/data/products.ts';
let content = fs.readFileSync(file, 'utf8');

const innosightReplacement = `
    features: [
      {
        title: { vi: "Giao diện cảm ứng trực quan (Intuitive Interface)", en: "Intuitive User Interface" },
        desc: { vi: "Màn hình cảm ứng 11.6 inch với giao diện tùy biến, giúp giảm tối đa đường cong học tập, tối ưu quy trình thao tác và thời gian chẩn đoán.", en: "11.6 inch touchscreen with customizable interface, minimizing the learning curve and streamlining operational workflow." },
        image: "https://images.philips.com/is/image/philipsconsumer/4183db5e85b7488fb8ffab4200f41473?wid=1024&$jpglarge$"
      },
      {
        title: { vi: "Tính di động cao và thiết kế công thái học", en: "Enhanced Mobility & Ergonomics" },
        desc: { vi: "Thiết kế dạng máy tính bảng nhỏ gọn, trọng lượng chỉ 2.46kg. Khởi động tức thì từ chế độ chờ (sleep mode) cùng pin dự phòng 1.5 giờ, lý tưởng cho cấp cứu và thăm khám tại giường.", en: "Compact tablet design weighing only 2.46kg. Instant boot-up from sleep mode alongside a 1.5-hour battery backup, ideal for emergency and bedside exams." }
      },
      {
        title: { vi: "Công nghệ tối ưu hóa iSCAN 2D", en: "iSCAN 2D Optimization Technology" },
        desc: { vi: "Tự động điều chỉnh các thông số quét theo thời gian thực (real-time) để tối ưu chất lượng hình ảnh siêu âm 2D ngay lập tức chỉ với một lần chạm (one-touch).", en: "Automatically adjusts scanning parameters in real-time to optimize 2D ultrasound image quality instantly with a single touch." }
      },
      {
        title: { vi: "Hỗ trợ đa dạng đầu dò chuyên sâu (Broadband Transducers)", en: "Comprehensive Broadband Transducers" },
        desc: { vi: "Kết nối tương thích với đầy đủ dải đầu dò: Convex C6-2, Linear L12-4, Transvaginal C9-4v, và Sector S4-2 đáp ứng siêu âm tổng quát, sản phụ khoa, cơ xương khớp và tim mạch cơ bản.", en: "Compatible with a full range of transducers: Convex C6-2, Linear L12-4, Transvaginal C9-4v, and Sector S4-2 covering general imaging, OB/GYN, musculoskeletal, and basic cardiology." }
      },
      {
        title: { vi: "Khả năng kết nối mở rộng (Advanced Connectivity)", en: "Advanced Connectivity" },
        desc: { vi: "Hỗ trợ Wi-Fi và Ethernet tích hợp DICOM đầy đủ, cho phép đồng bộ hóa dữ liệu mượt mà tới hệ thống PACS / HIS của bệnh viện ngay từ điểm chăm sóc bệnh nhân.", en: "Includes Wi-Fi, Ethernet, and full DICOM integration, allowing seamless data synchronization to the hospital's PACS / HIS directly from the point of care." }
      },
      {
        title: { vi: "Xe đẩy cơ động (Mobility Cart option)", en: "Mobility Cart Option" },
        desc: { vi: "Lắp đặt linh hoạt trên giá đỡ hoặc xe đẩy chuyên dụng có thể điều chỉnh độ cao từ 118.6cm đến 148.6cm, mở rộng khả năng tiếp cận trong môi trường bệnh viện.", en: "Flexible mounting on bedside brackets or dedicated mobility carts with adjustable heights (118.6cm - 148.6cm), extending the system's reach within hospital environments." }
      }
    ],
    documents: [
      { label: "InnoSight Product Brochure", size: "3.2 MB", url: "https://www.documents.philips.com/assets/20200706/13dc4620ebc44d1496c3abf000d53b6f.pdf" },
      { label: "InnoSight User Manual", size: "5.1 MB", url: "https://www.documents.philips.com/assets/20200625/a861ed8c7a864dc88963abe500fa145c.pdf" },
      { label: "InnoSight MTM Brochure", size: "1.4 MB", url: "https://www.documents.philips.com/assets/20200706/de51ead51e70478a8c5aabf000d5382b.pdf" }
    ],
    clinicalImages: [
      { url: "https://images.philips.com/is/image/philipsconsumer/2169262dae7f428eb415ab4200f41a1e?wid=1024&$jpglarge$", caption: "Fetal abdomen" },
      { url: "https://images.philips.com/is/image/philipsconsumer/15e762303e9b42aa8f5cab4200f417f2?wid=1024&$jpglarge$", caption: "Renal arcuate vessels" },
      { url: "https://images.philips.com/is/image/philipsconsumer/1dafb3dd462e48668701a7a201187049?wid=1024&$jpglarge$", caption: "Abdominal aorta" },
      { url: "https://images.philips.com/is/image/philipsconsumer/12192ad24e674e67809bab4200f4161e?wid=1024&$jpglarge$", caption: "Fetal heart" }
    ],
    specifications: [
      { label: { vi: "Kích thước màn hình", en: "Display Size" }, value: { vi: "29.4 cm (11.6 inch) cảm ứng HD chống chói (Anti-glare)", en: "29.4 cm (11.6 inch) anti-glare HD touchscreen" } },
      { label: { vi: "Trọng lượng thân máy (Tablet)", en: "Tablet Weight" }, value: { vi: "2.46 Kg", en: "2.46 Kg" } },
      { label: { vi: "Kích thước thân máy (D x R x C)", en: "Tablet Dimensions" }, value: { vi: "31.9 cm x 22.3 cm x 3.2 cm", en: "31.9 cm x 22.3 cm x 3.2 cm" } },
      { label: { vi: "Ứng dụng lâm sàng chính", en: "Core Applications" }, value: { vi: "Tổng quát, mạch máu, cơ xương khớp, sản phụ khoa y tế cấp cứu (POC)", en: "General, vascular, MSK, OB/GYN, Point of Care (POC)" } },
      { label: { vi: "Danh sách đầu dò hỗ trợ", en: "Supported Transducers" }, value: { vi: "C6-2 (Convex 128 elements), L12-4 (Linear 128 elements), C9-4v (TransVaginal 128 elements), S4-2 (Sector 64 elements)", en: "C6-2 (Convex 128 elements), L12-4 (Linear 128 elements), C9-4v (TransVaginal 128 elements), S4-2 (Sector 64 elements)" } },
      { label: { vi: "Thông số xe đẩy (Mobility Cart)", en: "Mobility Cart Specs" }, value: { vi: "Nặng 27.7kg, Rộng 48.6cm, Cao từ 118.6cm đến 148.6cm", en: "Weight 27.7kg, Width 48.6cm, Height 118.6cm to 148.6cm" } }
    ]
  },`;

const startIdx = content.indexOf('id: "innosight"');
if (startIdx !== -1) {
  const featStart = content.indexOf('features:', startIdx);
  const endBlock = content.indexOf('id: "flash-5100-poc"', featStart);
  if (featStart !== -1 && endBlock !== -1) {
    const endStr = content.lastIndexOf('},', endBlock);
    
    const newContent = content.substring(0, featStart) + innosightReplacement + content.substring(endStr + 2);
    fs.writeFileSync('src/data/products.ts', newContent);
    console.log("InnoSight updated!");
  }
}
