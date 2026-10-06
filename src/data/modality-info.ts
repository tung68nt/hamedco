export const MODALITY_INFO: Record<string, any> = {
  'sieu-am': {
    hero: {
      title: { vi: 'Hệ thống Siêu âm Philips', en: 'Philips Ultrasound Systems' },
      subtitle: { 
        vi: 'Chất lượng hình ảnh xuất sắc từ đầu dò thông minh, nền tảng phân tích AI đến các ứng dụng chuyên sâu cho Sản phụ khoa, Khám tổng quát và Tim mạch.',
        en: 'Excellent image quality from smart transducers, AI analysis platforms to advanced applications for OB/GYN, General Imaging and Cardiology.'
      },
      image: '/assets/images/products/epiq-elite.jpg'
    },
    features: [
      {
        icon: 'Ai',
        title: { vi: 'Tích hợp Trí tuệ Nhân tạo', en: 'AI Integration' },
        desc: { vi: 'Phân tích hình ảnh siêu âm tự động với độ chính xác cao, rút ngắn quy trình đo đạc.', en: 'Automated ultrasound image analysis with high accuracy, shortening measurement workflow.' }
      },
      {
        icon: 'Transducer',
        title: { vi: 'Công nghệ đầu dò xMATRIX', en: 'xMATRIX Transducer Technology' },
        desc: { vi: 'Cấu trúc ma trận âm thanh đột phá cung cấp khả năng hiển thị 3D/4D tuyệt vời ở mọi mặt phẳng.', en: 'Breakthrough acoustic matrix design delivers superb 3D/4D visualization in all planes.' }
      },
      {
        icon: 'Portability',
        title: { vi: 'Thiết kế tinh gọn, di động', en: 'Compact, Mobile Design' },
        desc: { vi: 'Dòng Lumify và Compact cho phép siêu âm tại giường bệnh hoặc ngay tại hiện trường cấp cứu.', en: 'Lumify and Compact series enable ultrasound at bedside or directly in emergency scenes.' }
      }
    ]
  },
  'ct': {
    hero: {
      title: { vi: 'Hệ thống chụp cắt lớp vi tính CT Scanner', en: 'CT Scanner Systems' },
      subtitle: { 
        vi: 'Công nghệ chụp cắt lớp vi tính tiên tiến của Philips giúp tối ưu hóa liều tia, định vị bệnh nhân thông minh và mang lại độ nét hoàn hảo.',
        en: 'Philips advanced CT technology optimizes radiation dose, provides smart patient positioning, and delivers flawless clarity.'
      },
      image: '/assets/images/products/ct-5300.png'
    },
    features: [
      {
        icon: 'Dose',
        title: { vi: 'Tái tạo AI Precise Image', en: 'AI Precise Image' },
        desc: { vi: 'Giảm liều tia bức xạ đáng kể cho bệnh nhân nhưng vẫn nâng cao độ tương phản và loại bỏ nhiễu ảnh.', en: 'Significantly reduce radiation dose for patients while enhancing contrast and removing image noise.' }
      },
      {
        icon: 'Heart',
        title: { vi: 'Chụp tim mạch Precise Cardiac', en: 'Precise Cardiac' },
        desc: { vi: 'Khử rung và nhiễu do nhịp tim, mang lại hình ảnh mạch vành rõ nét ngay cả ở các bệnh nhân có nhịp tim cao.', en: 'Reduce motion artifacts from heart rate, delivering clear coronary imaging even in patients with high heart rates.' }
      },
      {
        icon: 'Shield',
        title: { vi: 'Cam kết Tube for Life', en: 'Tube for Life Guarantee' },
        desc: { vi: 'Bảo hành thay thế bóng phát tia X miễn phí trọn đời hệ thống, tiết kiệm hàng trăm nghìn USD chi phí vận hành.', en: 'Free X-ray tube replacement for the life of the system, saving hundreds of thousands of dollars in operating costs.' }
      }
    ]
  },
  'mri': {
    hero: {
      title: { vi: 'Hệ thống Cộng hưởng từ (MRI)', en: 'Magnetic Resonance Imaging (MRI)' },
      subtitle: { 
        vi: 'Khám phá thế hệ MRI hoàn toàn mới với công nghệ nam châm BlueSeal không bay hơi khí Helium, nâng cao tốc độ chụp và trải nghiệm bệnh nhân.',
        en: 'Discover the next generation of MRI with BlueSeal magnet technology (no helium boil-off), enhancing scanning speed and patient experience.'
      },
      image: '/assets/images/products/mr-7700.png'
    },
    features: [
      {
        icon: 'Magnet',
        title: { vi: 'BlueSeal Không Helium', en: 'Helium-Free BlueSeal' },
        desc: { vi: 'Công nghệ vi dòng giúp niêm phong hoàn toàn 7 lít Helium, không tốn chi phí nạp lại trong suốt vòng đời.', en: 'Micro-cooling technology completely seals 7 liters of Helium, requiring no refills over the system\'s lifetime.' }
      },
      {
        icon: 'Speed',
        title: { vi: 'Compressed SENSE', en: 'Compressed SENSE' },
        desc: { vi: 'Giảm hơn 50% thời gian quét bệnh nhân trong khi không đánh đổi tiêu chuẩn hình ảnh chẩn đoán.', en: 'Reduce patient scan times by over 50% without compromising diagnostic imaging standards.' }
      },
      {
        icon: 'Comfort',
        title: { vi: 'Trải nghiệm Thư giãn', en: 'In-Bore Experience' },
        desc: { vi: 'Lỗ gantry lớn, kết hợp hệ thống nghe nhìn giải trí ngay trong lồng chụp giúp giảm tỷ lệ gây mê sọ não.', en: 'Large bore design combined with in-bore audiovisual entertainment reduces the need for sedation.' }
      }
    ]
  },
  'x-quang': {
    hero: {
      title: { vi: 'Hệ thống X-quang Kỹ thuật số', en: 'Digital Radiography (X-ray)' },
      subtitle: { 
        vi: 'Từ máy X-quang di động cho đến hệ thống phòng chụp cố định với công nghệ xử lý ảnh UNIQUE 2, đảm bảo chẩn đoán chính xác ngay lần chụp đầu tiên.',
        en: 'From mobile X-ray to fixed radiography rooms with UNIQUE 2 image processing, ensuring accurate diagnosis on the first exposure.'
      },
      image: '/assets/images/products/philips-xray.png'
    },
    features: [
      {
        icon: 'Image',
        title: { vi: 'Công nghệ UNIQUE 2', en: 'UNIQUE 2 Technology' },
        desc: { vi: 'Xử lý hình ảnh vượt trội tự động điều chỉnh độ tương phản, làm rõ kể cả các vi tổn thương nhỏ nhất.', en: 'Superior image processing automatically adjusts contrast, revealing even the smallest micro-lesions.' }
      },
      {
        icon: 'Mobile',
        title: { vi: 'Thiết kế công thái học', en: 'Ergonomic Design' },
        desc: { vi: 'Cực kỳ nhẹ và linh hoạt với tay cầm Eleva, cho phép kỹ thuật viên di chuyển và định vị máy mà không tốn sức.', en: 'Ultra-lightweight and flexible with Eleva handle, allowing technicians to move and position with zero effort.' }
      },
      {
        icon: 'Dose',
        title: { vi: 'Quản lý liều tia thông minh', en: 'Smart Dose Management' },
        desc: { vi: 'Mang lại sự an toàn cho cả bệnh nhân lớn và nhi khoa thông qua lưới phân bổ chuẩn xác.', en: 'Ensures safety for both adult and pediatric patients through precise grid allocation.' }
      }
    ]
  }
};
