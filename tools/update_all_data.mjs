import fs from 'fs';

let content = fs.readFileSync('src/data/products.ts', 'utf8');

const upgrades = {
  'lumify': {
    features: [
      {
        title: { vi: "Đầu dò thông minh 3 trong 1", en: "3-in-1 Smart Transducers" },
        desc: { vi: "Phạm vi đầy đủ các đánh giá lâm sàng với các đầu dò Convex (C5-2), Linear (L12-4) và Sector (S4-1) kết nối qua cáp USB-C hoặc Micro-USB.", en: "Full range of clinical assessments with Convex (C5-2), Linear (L12-4) and Sector (S4-1) transducers connecting via USB-C or Micro-USB." }
      },
      {
        title: { vi: "Siêu âm từ xa Lumify with Reacts", en: "Reacts Tele-ultrasound" },
        desc: { vi: "Nền tảng hội chẩn trực tuyến video - audio theo thời gian thực (real-time video and audio collaboration) giúp các bác sĩ từ xa có thể tham gia vào ca siêu âm trực tiếp.", en: "Real-time video and audio collaboration platform allows remote doctors to join the live ultrasound exam." }
      },
      {
        title: { vi: "Quản lý dữ liệu HIPAA", en: "HIPAA-compliant Data Management" },
        desc: { vi: "Quản lý bảo mật thông tin bệnh nhân cấp cao, gửi dữ liệu thẳng tới hệ thống PACS của bệnh viện thông qua mạng DICOM an toàn.", en: "Advanced patient information security management, sending data directly to the hospital's PACS system over secure DICOM networks." }
      },
      {
        title: { vi: "Cập nhật ứng dụng miễn phí", en: "Free App Updates" },
        desc: { vi: "Tải ứng dụng Lumify từ Google Play hoặc Apple App Store và nhận các bản cập nhật phần mềm liên tục miễn phí.", en: "Download the Lumify app from Google Play or Apple App Store and receive continuous software updates for free." }
      }
    ],
    specifications: [
      { label: { vi: "Nền tảng hỗ trợ", en: "Supported OS" }, value: { vi: "Android và iOS", en: "Android & iOS" } },
      { label: { vi: "Chiều dài cáp", en: "Cable Length" }, value: { vi: "Khách hàng có thể tháo rời/thay thế", en: "User detachable/replaceable" } },
      { label: { vi: "Chế độ siêu âm", en: "Imaging Modes" }, value: { vi: "2D, Color Doppler, M-mode, PW Doppler", en: "2D, Color Doppler, M-mode, PW Doppler" } },
      { label: { vi: "Chuẩn chống nước", en: "Waterproof standard" }, value: { vi: "IP67 (Đầu dò có thể nhúng lỏng)", en: "IP67 (Transducer submersible)" } },
      { label: { vi: "Pin dự phòng", en: "Battery" }, value: { vi: "Sử dụng nguồn điện của thiết bị di động", en: "Uses host device power" } }
    ]
  },
  'flash-5100-poc': {
    features: [
      {
        title: { vi: "Màn hình kép thông minh", en: "Smart Dual Display" },
        desc: { vi: "Màn hình hiển thị 21.5 inch kết hợp với giao diện cảm ứng 12 inch bên dưới giúp thao tác nhanh gấp 2 lần.", en: "21.5-inch display combined with a 12-inch lower touchscreen interface speeds up operation by 2x." }
      },
      {
        title: { vi: "Thiết kế chống nhiễm khuẩn", en: "Infection Control Design" },
        desc: { vi: "Bề mặt phẳng, không kẽ hở kết hợp cùng vật liệu kháng khuẩn giúp dễ dàng khử trùng với hóa chất bệnh viện.", en: "Flat, gapless surface combined with antibacterial materials makes it easy to disinfect with hospital chemicals." }
      },
      {
        title: { vi: "Pin hoạt động 2 giờ liên tục", en: "2-Hour Continuous Battery" },
        desc: { vi: "Công nghệ pin thông minh cho phép hệ thống duy trì hoạt động quét cả khi rút điện di chuyển dọc hành lang.", en: "Smart battery technology allows the system to continue scanning even when unplugged while moving down the hall." }
      },
      {
        title: { vi: "Khoá tự động (Auto-Lock)", en: "Auto-Lock Security" },
        desc: { vi: "Hệ thống tự khoá và bảo mật dữ liệu HIPAA ngay lập tức khi bác sĩ rời đi.", en: "The system auto-locks and secures HIPAA data instantly when the doctor leaves." }
      }
    ],
    specifications: [
      { label: { vi: "Kích thước màn hình chính", en: "Main Display Size" }, value: { vi: "21.5 inch HD", en: "21.5 inch HD" } },
      { label: { vi: "Màn hình điều khiển", en: "Control Screen" }, value: { vi: "12 inch cảm ứng", en: "12 inch touchscreen" } },
      { label: { vi: "Thời lượng Pin", en: "Battery Life" }, value: { vi: "Lên tới 2 giờ quét liên tục", en: "Up to 2 hours of continuous scanning" } },
      { label: { vi: "Cổng cắm đầu dò", en: "Transducer Ports" }, value: { vi: "4 cổng hoạt động linh hoạt", en: "4 active flexible ports" } },
      { label: { vi: "Công nghệ AutoSCAN", en: "AutoSCAN Tech" }, value: { vi: "Tối ưu hóa hình ảnh một chạm", en: "One-touch image optimization" } }
    ]
  },
  'epiq-cvx': {
    features: [
      {
        title: { vi: "Công nghệ kết xuất nSIGHT", en: "nSIGHT Architecture" },
        desc: { vi: "Cấu trúc tạo ảnh đột phá vượt xa siêu âm truyền thống. Nắm bắt lượng lớn dữ liệu âm thanh và tập trung lại thông qua tính toán cực hạn (extreme computation).", en: "Groundbreaking imaging architecture goes beyond traditional ultrasound. Captures massive amounts of acoustic data and optimally focuses them through extreme computation." }
      },
      {
        title: { vi: "Kết xuất TrueVue cực thực", en: "TrueVue Photorealistic Rendering" },
        desc: { vi: "Công nghệ độc quyền Philips TrueVue cùng AutoStrain, AI 3D/4D cho phép dựng hình cấu trúc tim 3D với nguồn sáng ảo, mang lại độ phân giải chiều sâu chưa từng có.", en: "Philips exclusive TrueVue with AutoStrain and 3D/4D AI allows 3D heart rendering with a virtual light source, delivering unprecedented depth perception." }
      },
      {
        title: { vi: "HeartModel AI định lượng tự động", en: "HeartModel AI Auto-Quantification" },
        desc: { vi: "Tự động phân vùng và định lượng thể tích thất trái (LV) và nhĩ trái (LA) trên siêu âm 3D theo chuẩn hội tim mạch, chỉ mất vài giây.", en: "Automatic segmentation and quantification of LV and LA volumes on 3D ultrasound following cardiology standards in just seconds." }
      },
      {
        title: { vi: "Màn hình MaxVue", en: "MaxVue High-Def Display" },
        desc: { vi: "Tăng 38% diện tích hiển thị siêu âm, cho phép dễ dàng nhìn thấy hình ảnh từ khoảng cách xa trong phòng thông tim (Cath lab).", en: "Increases ultrasound viewing area by 38%, making it easy to view images from a distance in the Cath lab." }
      }
    ],
    specifications: [
      { label: { vi: "Cấu trúc hệ thống", en: "System Architecture" }, value: { vi: "Độc quyền Philips nSIGHT", en: "Exclusive Philips nSIGHT" } },
      { label: { vi: "Màn hình chính", en: "Main Display" }, value: { vi: "24-inch OLED HD cực nét", en: "24-inch OLED HD ultra-sharp" } },
      { label: { vi: "Phần mềm tim mạch AI", en: "AI Config" }, value: { vi: "AutoStrain LV/RV/LA, HeartModel 3D", en: "AutoStrain LV/RV/LA, HeartModel 3D" } },
      { label: { vi: "Hỗ trợ đầu dò TEE", en: "TEE Support" }, value: { vi: "Siêu âm thực quản X8-2t, X7-2t (xMatrix)", en: "Transesophageal X8-2t, X7-2t (xMatrix)" } },
      { label: { vi: "Chế độ Echo Navigator", en: "Echo Navigator" }, value: { vi: "Tích hợp trực tiếp máy chụp mạch (Cath Lab/Hybrid OR)", en: "Direct integration with Angio system (Cath Lab/Hybrid OR)" } }
    ]
  },
  'affiniti-70': {
    features: [
      {
        title: { vi: "Đầu dò PureWave thế hệ mới", en: "Next-gen PureWave Transducers" },
        desc: { vi: "Sử dụng tinh thể PureWave (đơn tinh thể) cho độ xuyên thấu cực lớn và dải băng thông rộng, giải quyết bài toán siêu âm khó trên bệnh nhân béo phì.", en: "PureWave (single crystal) provides ultimate penetration and broad bandwidth, solving difficult ultrasound challenges on obese patients." }
      },
      {
        title: { vi: "Đàn hồi mô Shear Wave", en: "Shear Wave Elastography" },
        desc: { vi: "Định lượng độ cứng của nhu mô gan, tuyến giáp, vú không xâm lấn, mang lại cơ sở tin cậy mạnh mẽ trong chẩn đoán xơ hóa.", en: "Non-invasive quantitative stiffness measurement of liver parenchyma, thyroid, breast, providing a highly reliable basis for fibrosis staging." }
      },
      {
        title: { vi: "Auto Doppler", en: "Auto Doppler" },
        desc: { vi: "Tự động tối ưu hóa góc màu, cổng thu và phổ Doppler với 1 nút bấm, giảm 68% thao tác gõ phím.", en: "Automatically optimizes color box angle, sample volume, and Doppler spectrum with 1 button, reducing keystrokes by 68%." }
      },
      {
        title: { vi: "Độ ồn cực thấp (Thì thầm)", en: "Library-quiet Operation" },
        desc: { vi: "Các quạt tản nhiệt thiết kế đặc biệt phát ra âm thanh cực nhỏ, tạo môi trường yên tĩnh tối đa cho bệnh nhân ở không gian chật hẹp.", en: "Specially designed cooling fans emit minimal noise, creating a maximally quiet environment for patients." }
      }
    ],
    specifications: [
      { label: { vi: "Màn hình", en: "Display" }, value: { vi: "Màn hình phẳng 21.5-inch gấp gập", en: "Fold-down 21.5-inch flat panel" } },
      { label: { vi: "Đầu dò", en: "Transducers" }, value: { vi: "Tương thích đầy đủ C5-1, L12-5, S5-1, eL18-4", en: "Fully compatible C5-1, L12-5, S5-1, eL18-4" } },
      { label: { vi: "Đàn hồi mô", en: "Elastography" }, value: { vi: "Strain Elastography & Shear Wave (ARFI)", en: "Strain Elastography & Shear Wave (ARFI)" } },
      { label: { vi: "Thời gian khởi động", en: "Boot time" }, value: { vi: "< 90 giây từ lúc cắm điện", en: "< 90 seconds from cold boot" } },
      { label: { vi: "CEUS", en: "CEUS" }, value: { vi: "Tích hợp siêu âm cản quang", en: "Contrast Enhanced Ultrasound Integrated" } }
    ]
  }
};

for (const [id, upgrade] of Object.entries(upgrades)) {
  const startIdx = content.indexOf(`id: "${id}"`);
  if (startIdx === -1) continue;
  
  const featStart = content.indexOf('features:', startIdx);
  let endBlock = content.indexOf('},', content.indexOf('specifications: [', featStart));
  // Find the exact end of the specifications array:
  const specsStart = content.indexOf('specifications:', startIdx);
  if (specsStart !== -1) {
     const endBracket = content.indexOf(']', specsStart);
     endBlock = content.indexOf('}', endBracket);
     
     const replacementStr = `features: ${JSON.stringify(upgrade.features, null, 6).slice(6)},
    specifications: ${JSON.stringify(upgrade.specifications, null, 6).slice(6)}
  `;
     
     content = content.substring(0, featStart) + replacementStr + content.substring(endBlock);
  }
}

fs.writeFileSync('src/data/products.ts', content);
