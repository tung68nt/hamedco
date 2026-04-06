/* ============================================================
   HAMEDCO — Philips Ultrasound Product Catalog
   Danh mục sản phẩm siêu âm Philips chính thức
   ============================================================ */

export const PHILIPS_PRODUCTS = [
  {
    id: "lumify",
    slug: "lumify",
    name: "Lumify",
    subtitle: {
      vi: "Hệ thống siêu âm cầm tay",
      en: "Exceptional portable ultrasound system for Android"
    },
    category: "handheld",
    categoryLabel: { vi: "Siêu âm cầm tay", en: "Handheld Ultrasound" },
    brand: "Philips Healthcare",
    description: {
      vi: "Philips Lumify kết hợp đầu dò chất lượng cao, nhẹ và ứng dụng siêu âm trực quan, mang khả năng chẩn đoán đến thiết bị Android, IOS tương thích. Thu thập dữ liệu lâm sàng quan trọng nhanh chóng tại điểm chăm sóc: cấp cứu, hồi sức, tại giường bệnh và phòng khám.",
      en: "Philips Lumify combines high-quality, lightweight transducers and an intuitive ultrasound app to bring diagnostic capabilities to your compatible Android and iOS devices. Acquire critical clinical data quickly and easily at the point of care: for emergency medicine and critical care, at bedside and in office practice."
    },
    longDescription: {
      vi: "Hệ thống siêu âm cầm tay Lumify mang đến hình ảnh chẩn đoán vượt trội ngay tức thì. Thiết bị hỗ trợ đa nền tảng (Android & IOS) cùng cơ chế cắm-là-chạy (plug-and-play), chỉ cần tải ứng dụng, cắm đầu dò vào smartphone và bắt đầu siêu âm. Phù hợp cho thăm khám cấp cứu, hồi sức tích cực, và bác sĩ gia đình.",
      en: "The Lumify handheld ultrasound system delivers exceptional diagnostic imaging instantly. Supporting cross-platform (Android & iOS) with a plug-and-play mechanism, simply download the app, plug the transducer into your smartphone, and start scanning. Ideal for emergency care, ICU, and family physician practice."
    },
    images: [
      "https://images.philips.com/is/image/philipsconsumer/336e5b51b6a84f048c78a7ee0144e2cf?wid=1024&$jpglarge$",
      "https://images.philips.com/is/image/philipsconsumer/a567675034c540989063a77c0145a328?wid=1024&$jpglarge$",
      "https://images.philips.com/is/image/philipsconsumer/231a3823e7494dfca17aa77c015190b0?wid=1024&$jpglarge$",
      "https://images.philips.com/is/image/philipsconsumer/05b65839ca45463cb383a77c0145a6bd?wid=1024&$jpglarge$"
    ],
    thumbnail: "https://images.philips.com/is/image/philipsconsumer/336e5b51b6a84f048c78a7ee0144e2cf?wid=1024&$jpglarge$",
    sourceUrl: "https://www.usa.philips.com/healthcare/product/HC795005/lumify",
    videoUrl: "https://www.youtube.com/watch?v=6B8VnHNU7C8",
    highlights: {
      vi: ["Siêu âm di động trên smartphone/tablet", "Đầu dò nhẹ, chất lượng cao", "Ứng dụng trực quan, dễ sử dụng", "Hỗ trợ cấp cứu và chăm sóc tại giường"],
      en: ["Mobile ultrasound on smartphone/tablet", "Lightweight, high-quality transducers", "Intuitive app, easy to use", "Emergency and bedside care support"]
    },
    features: [
      {
        title: { vi: "Hình ảnh vượt trội (Exceptional Imaging)", en: "Exceptional Imaging" },
        desc: { vi: "Đầu dò chất lượng cao mang DNA của Philips tích hợp vào thiết bị di động.", en: "High-quality transducers with Philips DNA integrated into a portable mobile device." },
        image: "https://images.philips.com/is/image/philipsconsumer/336e5b51b6a84f048c78a7ee0144e2cf?wid=1024&$jpglarge$"
      },
      {
        title: { vi: "Tối ưu hóa đầu dò (Transducer Optimization)", en: "Transducer Optimization" },
        desc: { vi: "14 preset tùy chỉnh (Bụng, Tim, FAST, MSK...) giúp tối ưu hóa chẩn đoán cho từng bộ phận.", en: "14 customized presets (Abdominal, Cardiac, FAST, MSK...) helping optimize diagnosis for each organ." }
      },
      {
        title: { vi: "Hợp tác tức thì (Instant Collaboration)", en: "Instant Collaboration" },
        desc: { vi: "Siêu âm từ xa tích hợp nền tảng Reacts cho phép hội chẩn trực tuyến theo thời gian thực.", en: "Integrated tele-ultrasound powered by the Reacts platform for real-time collaboration." }
      }
    ],
    documents: [
      { label: "Lumify 5.1 iOS Brochure", size: "1.4 MB", url: "https://www.documents.philips.com/assets/20250701/a0a69c9f60f041569522b30d003780d2.pdf" },
      { label: "Lumify Handheld Ultrasound for Android", size: "6.60 MB", url: "https://www.documents.philips.com/assets/20250709/edeb29c4bcb54049a971b3150044f565.pdf" },
      { label: "Lumify Device Compatibility List", size: "146.38 KB", url: "https://www.documents.philips.com/assets/20250811/40c397e620e74ac7b1ceb33601451281.pdf" }
    ],
    specifications: [
      { label: { vi: "Nền tảng hỗ trợ", en: "Supported Platforms" }, value: { vi: "Android và iOS (iPhone/iPad)", en: "Android and iOS (iPhone/iPad)" } },
      { label: { vi: "Chứng nhận & Bảo hành", en: "Cert & Warranty" }, value: { vi: "Chính hãng Philips, bảo hành mở rộng", en: "Official Philips, extended warranty" } },
      { label: { vi: "Chia sẻ trực tuyến", en: "Tele-ultrasound" }, value: { vi: "Tích hợp chia sẻ thời gian thực Lumify with Reacts", en: "Integrated real-time sharing with Lumify Reacts" } }
    ]
  },
  {
    id: "innosight",
    slug: "innosight",
    name: "InnoSight",
    subtitle: {
      vi: "Hệ thống siêu âm compact",
      en: "Compact ultrasound system"
    },
    category: "compact",
    categoryLabel: { vi: "Siêu âm compact", en: "Compact Ultrasound" },
    brand: "Philips Healthcare",
    description: {
      vi: "Philips InnoSight cho phép quét bệnh nhân tại nhiều điểm chăm sóc lâm sàng hơn. Hệ thống siêu âm compact và di động cao với thiết kế công thái học đổi mới và tính linh hoạt lâm sàng, phù hợp cho phòng khám, bệnh viện.",
      en: "Philips InnoSight ultrasound system allows you to scan patients in more of the clinical places you deliver care. The compact & highly portable InnoSight ultrasound system, with its innovative ergonomic design and clinical versatility, allows you to bring ultrasound to patients, whether in the office, clinic, or hospital."
    },
    longDescription: {
      vi: "InnoSight xóa bỏ khoảng cách giữa các hệ thống siêu âm di động và phòng khám cố định. Với màn hình 29.4cm (11.6 inch) sáng rõ và có thể mang theo như một chiếc máy tính bảng cỡ lớn, InnoSight cung cấp hình ảnh chất lượng cao để thăm khám nhanh tại mọi nơi. Giao diện chạm cực nhạy cùng các phần mềm nâng cao giúp đẩy nhanh tiến độ chẩn đoán cận lâm sàng.",
      en: "InnoSight bridges the gap between portable clinical ultrasound systems and traditional cart-based machines. With a highly visible 29.4cm (11.6 inch) display that can be carried like a large tablet, InnoSight provides high-quality imaging for quick exams anywhere. Its highly responsive touch interface and advanced software accelerate clinical diagnostics."
    },
    images: [
      "https://images.philips.com/is/image/philipsconsumer/4183db5e85b7488fb8ffab4200f41473?wid=1024&$jpglarge$",
      "https://images.philips.com/is/image/philipsconsumer/2169262dae7f428eb415ab4200f41a1e?wid=1024&$jpglarge$",
      "https://images.philips.com/is/image/philipsconsumer/15e762303e9b42aa8f5cab4200f417f2?wid=1024&$jpglarge$"
    ],
    thumbnail: "https://images.philips.com/is/image/philipsconsumer/be498d224f7b425481c4a7a501361abf?wid=1024&$jpglarge$",
    sourceUrl: "https://www.usa.philips.com/healthcare/product/HC795001/innosight-compact-ultrasound-system",
    videoUrl: "https://www.youtube.com/watch?v=FGecw8WW3Ws",
    highlights: {
      vi: ["Thiết kế compact, di động cao", "Công thái học đổi mới", "Đa dạng ứng dụng lâm sàng", "Màn hình HD 29.4cm"],
      en: ["Compact, highly portable design", "Innovative ergonomics", "Versatile clinical applications", "29.4cm HD display"]
    },
    features: [
      {
        title: { vi: "Giao diện trực quan", en: "Intuitive User Interface" },
        desc: { vi: "Quy trình làm việc hợp lý, giảm thiểu thời gian đào tạo với các phím tùy chỉnh.", en: "Streamlined workflow that reduces the learning curve with customizable keys." },
        image: "https://images.philips.com/is/image/philipsconsumer/4183db5e85b7488fb8ffab4200f41473?wid=1024&$jpglarge$"
      },
      {
        title: { vi: "Tính di động cao", en: "Enhanced Mobility" },
        desc: { vi: "Thiết kế tablet nhẹ (2.5kg), pin dự phòng 1.5 giờ và khởi động tức thì.", en: "Lightweight (2.5 kg) ergonomic tablet design with 1.5-hour battery backup." }
      },
      {
        title: { vi: "Công nghệ tối ưu iSCAN", en: "iSCAN Optimization Technology" },
        desc: { vi: "Tự động tinh chỉnh hình ảnh siêu âm 2D ngay lập tức chỉ với một nút chạm.", en: "Automatically adjust 2D ultrasound images instantly with a single touch button." }
      },
      {
        title: { vi: "Thời lượng pin dài", en: "Long lasting battery" },
        desc: { vi: "Cho phép làm việc dã chiến liên tục nhờ thiết kế pin dung lượng lớn tích hợp.", en: "Allows continuous field work thanks to the built-in high capacity battery design." }
      }
    ],
    documents: [
      { label: "InnoSight Product Brochure", size: "3.2 MB", url: "#" }
    ],
    specifications: [
      { label: { vi: "Kích thước màn hình", en: "Display Size" }, value: { vi: "29.4 cm (11.6 inch) cảm ứng HD", en: "29.4 cm (11.6 inch) HD touchscreen" } },
      { label: { vi: "Giao diện", en: "Interface" }, value: { vi: "Giao diện người dùng dựa trên thao tác vuốt chạm thông minh", en: "Smart gesture-based touch user interface" } },
      { label: { vi: "Ứng dụng", en: "Applications" }, value: { vi: "Tổng quát, mạch máu, cơ xương khớp", en: "General, vascular, musculoskeletal" } }
    ]
  },
  {
    id: "flash-5100-poc",
    slug: "flash-5100-poc",
    name: "Flash 5100 POC",
    subtitle: {
      vi: "Hệ thống siêu âm Point-of-Care",
      en: "Point of care ultrasound system"
    },
    category: "poc",
    categoryLabel: { vi: "Siêu âm tại điểm chăm sóc", en: "Point-of-Care Ultrasound" },
    brand: "Philips Healthcare",
    description: {
      vi: "Flash 5100 POC mang đến hiệu suất hàng đầu của Philips và quy trình trực quan cho siêu âm đa chuyên khoa tại điểm chăm sóc. Hướng dẫn từng bước giúp người dùng ở mọi trình độ thực hiện chẩn đoán hình ảnh xuất sắc, đẩy nhanh chẩn đoán chính xác.",
      en: "Flash Ultrasound System 5100 Point of Care delivers Philips top-of-the-line performance and intuitive workflow for multispecialty point of care. Intuitive next-step guidance empowers users of varying experience levels to efficiently perform exceptional imaging, helping accelerate a confident diagnosis."
    },
    longDescription: {
      vi: "Từ người mới bắt đầu đến chuyên gia siêu âm giàu kinh nghiệm, tất cả đều cần thông tin nhanh chóng và chính xác tại Điểm chăm sóc (POC). Hệ thống Flash 5100 POC cung cấp hiệu suất hàng đầu từ Philips cùng luồng công việc vô cùng trực quan. Các hướng dẫn từng bước thông minh giúp hạn chế sai sót, thiết lập cực nhanh và hỗ trợ chẩn đoán chính xác cho các ca cấp cứu phức tạp nhất.",
      en: "From beginners to experienced sonographers, everyone needs fast and accurate information at the Point of Care. The Flash 5100 POC system delivers top-tier performance from Philips with an incredibly intuitive workflow. Smart step-by-step guidance minimizes errors, allows lightning-fast setup, and supports confident diagnosis in the most complex emergency cases."
    },
    images: [
      "https://images.philips.com/is/image/philipsconsumer/9f6f590956da4a49a7c8b2de00f82bd8?wid=1024&$jpglarge$",
      "https://images.philips.com/is/image/philipsconsumer/8e169c25efaa48fcb8eeb2de00f8262d?wid=1024&$jpglarge$",
      "https://images.philips.com/is/image/philipsconsumer/5ec815208777482480eab2de00f826a1?wid=1024&$jpglarge$"
    ],
    thumbnail: "https://images.philips.com/is/image/philipsconsumer/c2fb3b05c6ee4c21aa4eb2e5012859f3?$jpglarge$",
    sourceUrl: "https://www.usa.philips.com/healthcare/product/795158/flash-ultrasound-system-5100-poc-point-of-care-ultrasound-sy",
    videoUrl: "https://www.youtube.com/watch?v=tDSJW3WQ628",
    highlights: {
      vi: ["Hiệu suất hàng đầu Philips", "Hướng dẫn trực quan từng bước", "Đa chuyên khoa POC", "Preset tùy chỉnh linh hoạt"],
      en: ["Philips top-of-the-line performance", "Intuitive next-step guidance", "Multispecialty POC", "Customizable presets"]
    },
    features: [
      {
        title: { vi: "Thiết kế bền bỉ & Compact", en: "Rugged & Compact Design" },
        desc: { vi: "Bàn đẩy thẳng đứng lướt nhẹ trong không gian hẹp; màn hình cảm ứng 21.5-inch chống lóa.", en: "Vertical cart design that glides into tight spaces; features a 21.5-inch glove-compatible touchscreen." },
        image: "https://images.philips.com/is/image/philipsconsumer/9f6f590956da4a49a7c8b2de00f82bd8?wid=1024&$jpglarge$"
      },
      {
        title: { vi: "Hiệu suất chuyên dụng", en: "Purpose-Built Performance" },
        desc: { vi: "Chất lượng hình ảnh vượt trội trong thiết kế tinh giản, tối ưu cho cấp cứu và hồi sức.", en: "Exceptional image quality in a simplified design, optimized for emergency and critical care." }
      }
    ],
    documents: [
      { label: "Flash Ultrasound System 5100 POC Brochure", size: "3.2 MB", url: "https://www.documents.philips.com/assets/20250507/2f2a82833fe24c4985a2b2d6012af27d.pdf" },
      { label: "EcoPassport Flash Ultrasound System 5100 POC and 5100 POC Pro", size: "1.1 MB", url: "https://www.documents.philips.com/assets/20250507/4fa74198bf24442eae48b2d601117005.pdf" }
    ],
    specifications: [
      { label: { vi: "Chuyên khoa mục tiêu", en: "Target Specialties" }, value: { vi: "Cấp cứu, Hồi sức, Gây mê, Khám tại giường", en: "Emergency, ICU, Anesthesia, Point of Care" } },
      { label: { vi: "Tùy biến", en: "Customizability" }, value: { vi: "Tùy biến giao diện (Presets) cho từng bác sĩ", en: "Custom user presets for each physician" } }
    ]
  },
  {
    id: "flash-5100-poc-pro",
    slug: "flash-5100-poc-pro",
    name: "Flash 5100 POC Pro",
    subtitle: {
      vi: "Hệ thống siêu âm POC nâng cao",
      en: "Advanced point-of-care ultrasound system"
    },
    category: "poc",
    categoryLabel: { vi: "Siêu âm tại điểm chăm sóc", en: "Point-of-Care Ultrasound" },
    brand: "Philips Healthcare",
    description: {
      vi: "Flash 5100 POC Pro mang đến hiệu suất hàng đầu và quy trình trực quan cho siêu âm đa chuyên khoa tại điểm chăm sóc, bao gồm khả năng tim mạch nâng cao với tính năng AutoStrain EF để đánh giá tim nhanh chóng.",
      en: "Flash 5100 POC Pro delivers Philips top-of-the-line performance and intuitive workflow for multispecialty point of care, including advanced cardiac capabilities. The next-step guidance for features such as AutoStrain EF for cardiac assessment empowers users of varying experience levels."
    },
    longDescription: {
      vi: "Phiên bản nâng cấp ngoạn mục của dòng Flash. Flash 5100 POC Pro kế thừa toàn bộ sức mạnh của phiên bản tiêu chuẩn, đồng thời bổ sung các tính năng nâng cao chuyên sâu cho Tim mạch. Với công nghệ AutoStrain EF, máy tự động phân tích và đo đạc chức năng tim trong chớp mắt, giúp rút ngắn thời gian vàng trong hồi sức tuần hoàn cấp cứu.",
      en: "A spectacular upgrade of the Flash series. Flash 5100 POC Pro inherits all the power of the standard version while adding deeply advanced Cardiac features. With AutoStrain EF technology, the machine automatically analyzes and measures cardiac function in a blink, shortening the golden time during emergency circulatory resuscitation."
    },
    images: [
      "https://images.philips.com/is/image/philipsconsumer/8daf4a8adfbf4af3b54ab2e40049245f?wid=1024&$jpglarge$",
      "https://images.philips.com/is/image/philipsconsumer/b214c2c8d05d49c8bca4b2de00f81c19?wid=1024&$jpglarge$",
      "https://images.philips.com/is/image/philipsconsumer/a0b2f440ce0e4858b4e0b2de00f81cb7?wid=1024&$jpglarge$"
    ],
    thumbnail: "https://images.philips.com/is/image/philipsconsumer/8daf4a8adfbf4af3b54ab2e40049245f?wid=1024&$jpglarge$",
    sourceUrl: "https://www.usa.philips.com/healthcare/product/795404/flash-ultrasound-system-5100-poc-pro-advanced-point-of-care-",
    videoUrl: "https://www.youtube.com/watch?v=tDSJW3WQ628",
    highlights: {
      vi: ["Tim mạch nâng cao với AutoStrain EF", "Hiệu suất hàng đầu", "Hướng dẫn trực quan", "Đa chuyên khoa POC"],
      en: ["Advanced cardiac with AutoStrain EF", "Top-of-the-line performance", "Intuitive guidance", "Multispecialty POC"]
    },
    features: [
      {
        title: { vi: "Hiệu suất đỉnh cao", en: "Top-of-the-Line Performance" },
        desc: { vi: "Cung cấp các thuật toán hiệu suất cao nhất của Philips và quy trình làm việc trực quan.", en: "Delivers Philips' highest-performing algorithms and intuitive workflow for multispecialty POC." },
        image: "https://images.philips.com/is/image/philipsconsumer/8daf4a8adfbf4af3b54ab2e40049245f?wid=1024&$jpglarge$"
      },
      {
        title: { vi: "Đánh giá tim nâng cao (AutoStrain EF)", en: "Advanced Cardiac (AutoStrain EF)" },
        desc: { vi: "Tiêu chuẩn hóa và đơn giản hóa các phép đo Phân suất Tống máu và Strain.", en: "Standardizes and simplifies Strain and Ejection Fraction measurements." }
      }
    ],
    documents: [
      { label: "Flash 5100 POC Pro Detail Sheet", url: "#" }
    ],
    specifications: [
      { label: { vi: "Nâng cấp so với tiêu chuẩn", en: "Upgrade vs Standard" }, value: { vi: "Cấu hình AI Tim mạch (AutoStrain EF)", en: "Cardiac AI Config (AutoStrain EF)" } },
      { label: { vi: "Môi trường phù hợp", en: "Suitable Environment" }, value: { vi: "Khoa Tim mạch cấp cứu, ICU chuyên sâu", en: "Emergency Cardiology, Intensive ICU" } }
    ]
  },
  {
    id: "compact-5300",
    slug: "compact-5300",
    name: "Compact 5300 Series",
    subtitle: {
      vi: "Hệ thống siêu âm compact cao cấp",
      en: "Premium compact ultrasound system"
    },
    category: "compact",
    categoryLabel: { vi: "Siêu âm compact", en: "Compact Ultrasound" },
    brand: "Philips Healthcare",
    description: {
      vi: "Philips Compact 5300 Series tích hợp hiệu suất quét mạnh mẽ vào hệ thống di động, giúp bạn nhanh chóng đạt được kết quả cần thiết trong chẩn đoán hình ảnh tổng quát, POC và Sản phụ khoa.",
      en: "The Philips Compact 5300 Series packs powerful scanning performance into a portable system to help you quickly reach the answers you need across general imaging, point of care and OB/GYN clinical settings."
    },
    longDescription: {
      vi: "Hiệu suất mạnh mẽ nay được thu gọn thành một thiết kế tối ưu với Philips Compact 5300 Series. Thiết kế để mang lại quy trình làm việc mượt mà và trực quan, máy hỗ trợ chuẩn đoán tự tin và hiệu quả từ phòng cấp cứu, phòng mổ cho đến chăm sóc bệnh nhân tại giường. Sự kết hợp giữa công nghệ đầu dò PureWave, kiến trúc nền tảng mạnh mẽ mượn từ các dòng Affiniti & EPIQ cao cấp và thiết kế đoạt giải thưởng đem đến một giải pháp hoàn mỹ.",
      en: "Powerful performance is now compacted with the Philips Compact 5300 Series. Designed to provide a smooth and intuitive workflow, it supports confident and efficient diagnoses from the ER, OR to bedside patient care. The combination of PureWave transducer technology, a robust platform architecture borrowed from premium Affiniti & EPIQ lines, and an award-winning design offers a pristine solution."
    },
    images: [
      "https://images.philips.com/is/image/philipsconsumer/4190811865814a78b89caf540122196e?wid=1024&$jpglarge$",
      "https://images.philips.com/is/image/philipsconsumer/c41021a07d614632b7b1af03010ef3da?wid=1024&$jpglarge$",
      "https://images.philips.com/is/image/philipsconsumer/1ab1424149f947c58f22af540123b744?wid=1024&$jpglarge$"
    ],
    thumbnail: "https://images.philips.com/is/image/philipsconsumer/4190811865814a78b89caf540122196e?wid=1024&$jpglarge$",
    sourceUrl: "https://www.usa.philips.com/healthcare/product/HC795136/5000-series-hc795136-premium-compact-ultrasound-system",
    videoUrl: null,
    highlights: {
      vi: ["Hiệu suất quét mạnh mẽ", "Di động, compact", "Chẩn đoán hình ảnh tổng quát", "Sản phụ khoa OB/GYN"],
      en: ["Powerful scanning performance", "Portable, compact", "General imaging", "OB/GYN applications"]
    },
    features: [
      {
        title: { vi: "Đưa việc chăm sóc đến nơi cần thiết (Bring care where needed)", en: "Bring care where needed" },
        desc: { vi: "Được thiết kế để mạnh mẽ và đáng tin cậy. Compact 5300 Series sở hữu tính di động cao đoạt giải thưởng thiết kế (iF Design Award và Red Dot). Có thể quét liên tục 2 giờ với pin mở rộng, cùng màn hình cảm ứng 10 inch điều chỉnh dễ dàng.", en: "Designed to be robust and reliable. Compact 5300 Series offers award-winning mobility (recipient of both the iF Design Award and the Red Dot Product Design Award). Quickly boot up from transport mode for up to 2 hours of scanning with extended batteries." },
        image: "https://images.philips.com/is/image/philipsconsumer/4190811865814a78b89caf540122196e?wid=1024&$jpglarge$"
      },
      {
        title: { vi: "Tối ưu hóa hiệu suất lâm sàng (Streamline your clinical efficiency)", en: "Streamline your clinical efficiency" },
        desc: { vi: "Bao gồm hàng loạt tính năng tự động để tối ưu luồng công việc như Auto Measure dựa trên AI. Công nghệ iSCAN cho phép tối ưu hình ảnh chỉ qua một lần chạm trên chế độ 2D và Doppler.", en: "The Philips Compact 5300 Series includes an array of automation features to help streamline workflows. iSCAN and iOPTIMIZE provide automatic image optimization in 2D and Doppler modes at the push of a button." },
        image: "https://images.philips.com/is/image/philipsconsumer/1ab1424149f947c58f22af540123b744?wid=1024&$jpglarge$"
      },
      {
        title: { vi: "Hỗ trợ chẩn đoán chính xác (Supports your ability to reach a definitive diagnosis)", en: "Supports your ability to reach a definitive diagnosis" },
        desc: { vi: "Tích hợp công nghệ cao cấp và kiến trúc nền tảng mạnh mẽ. Compact 5300 cung cấp sự linh hoạt và quy trình làm việc tiêu chuẩn hóa phù hợp để chẩn đoán tại giường cho mọi chuyên khoa trong bệnh viện.", en: "Compact 5300 Series offers application range, flexibility and standardized workflow suitable for bedside diagnostics across all hospital departments with access to cutting-edge technologies like Auto Measure." },
        image: "https://images.philips.com/is/image/philipsconsumer/2733af402a274a4296b4af03010ef91a?wid=1024&$jpglarge$"
      },
      {
        title: { vi: "Khả năng tiên tiến và thường quy (Access routine and advanced capabilities)", en: "Access routine and advanced capabilities" },
        desc: { vi: "Chụp ảnh tự tin với các tính năng như 2D/3D/4D và siêu âm đàn hồi mô ở chuyên khoa tim mạch, sản phụ khoa. Live xPlane giúp hiển thị hình ảnh 2 mặt cắt độ phân giải cao đồng thời.", en: "Image confidently with routine and advanced capabilities such as 2D/3D/4D imaging and strain elastography across all general imaging, cardiac and OB/GYN applications. Capture more complete views with Live xPlane Imaging." },
        image: "https://images.philips.com/is/image/philipsconsumer/5ff9c15b6a4c441e80f7b2ed010aa079?wid=1024&$jpglarge$"
      },
      {
        title: { vi: "Nhìn rõ hơn trong mọi tình huống (See more, see clearly)", en: "See more, see clearly across clinical scenarios" },
        desc: { vi: "Auto Measure được AI hỗ trợ mang lại kết quả nhất quán và tiết kiệm 50% thời gian đánh giá tim mạch định kỳ. Cho phép hình dung với ít bước thao tác hơn bằng giải pháp đầu dò PureWave V9-2.", en: "AI-empowered Auto Measure offers consistent results and approximately 50% time-savings for routine cardiac measurements. For OB/GYN, visualize with fewer steps using the PureWave V9-2 one-transducer solution." },
        image: "https://images.philips.com/is/image/philipsconsumer/ec9d504809dd45388f1aaf54013eb2fd?wid=1024&$jpglarge$"
      },
      {
        title: { vi: "Quen thuộc và dễ sử dụng (Familiarity streamlines how you work)", en: "Familiarity streamlines how you’re able to work" },
        desc: { vi: "Kế thừa cấu trúc nền tảng, đầu dò và giao diện người dùng chung với toàn bộ dòng máy siêu âm Philips (Compact 5000, EPIQ và Affiniti), giúp làm quen nha chóng và dễ dàng đào tạo liên thông.", en: "Leverage the shared architecture, transducers and user interface across all of Philips’ ultrasound family (Compact 5000 Series, EPIQ and Affiniti) for easier system cross-training and seamless integration." },
        image: "https://images.philips.com/is/image/philipsconsumer/70fd4d9d28e347708bcab2e5012858cd?wid=1024&$jpglarge$"
      }
    ],
    documents: [
      { label: "Compact Ultrasound System 5000 Series for OB/GYN", size: "4.48 MB", url: "https://www.documents.philips.com/assets/20250314/1ba1869f72094c56ab2cb2a00172af55.pdf" },
      { label: "Product Brochure", size: "597.19 KB", url: "https://www.documents.philips.com/assets/20260204/5000d9f945094d65969db3e700c123a2.pdf" },
      { label: "Compact Ultrasound System 5000 Series for point of care", size: "4.90 MB", url: "https://www.documents.philips.com/assets/20250314/3da2091320c648558183b2a00172bf84.pdf" }
    ],
    clinicalImages: [
      { url: "https://images.philips.com/is/image/philipsconsumer/1992cd8bb67d45f386e1b2900035cfb7?wid=1024&$jpglarge$", caption: "Fetal face shown using TrueVue using V9-2 transducer" },
      { url: "https://images.philips.com/is/image/philipsconsumer/c399c9153ee24cf0ba7ab28f01690445?wid=1024&$jpglarge$", caption: "Fetal profile shown using V9-2 transducer" },
      { url: "https://images.philips.com/is/image/philipsconsumer/38b46fed8ad04d5f812bb2900035d05f?wid=1024&$jpglarge$", caption: "2D image of uterus using V9-2 transducer" },
      { url: "https://images.philips.com/is/image/philipsconsumer/cd4acd17cb644c52b439b2900034fe5b?wid=1024&$jpglarge$", caption: "VSD evaluation using Color Compare with S12-4 transducer" }
    ],
    specifications: [
      { label: { vi: "Hệ thống Compact (D x R x C)", en: "Compact System (W x D x H)" }, value: { vi: "41.1 cm x 40.6 cm x 8.6 cm", en: "16.2 in x 16.0 in x 3.4 in" } },
      { label: { vi: "Kích thước đế xe đẩy", en: "Cart Base Dimension" }, value: { vi: "48.8 cm x 48.8 cm", en: "19.2 in x 19.2 in" } },
      { label: { vi: "Khả năng nâng hạ (Vertical adjustment)", en: "Vertical Adjustment" }, value: { vi: "82 cm - 100.1 cm", en: "32.2 in - 39.3 in" } },
      { label: { vi: "Bánh xe", en: "Wheels" }, value: { vi: "Bốn bánh xe 5 inch khóa linh hoạt (hai bánh sau bao gồm cơ chế khóa lái steering lock)", en: "Four 5” locking swivel wheels, rear two wheels include steering lock mechanism" } }
    ]
  },
  {
    id: "compact-5500",
    slug: "compact-5500",
    name: "Compact 5500 Series",
    subtitle: {
      vi: "Hệ thống siêu âm compact cao cấp",
      en: "Premium compact ultrasound system"
    },
    category: "compact",
    categoryLabel: { vi: "Siêu âm compact", en: "Compact Ultrasound" },
    brand: "Philips Healthcare",
    description: {
      vi: "Philips Compact 5500 Series tích hợp hiệu suất mạnh mẽ vào thiết kế compact. Có sẵn trong cấu hình chẩn đoán hình ảnh tổng quát, POC, tim mạch và Sản phụ khoa. Chất lượng hình ảnh sánh ngang hệ thống cart cao cấp Philips. Compact không thỏa hiệp.",
      en: "Philips Compact 5500 Series packs powerful performance into a compact design. Available in general imaging, point of care, cardiac and OB/GYN configurations. It offers image quality comparable to Philips premium cart-based systems. Compact without compromise."
    },
    longDescription: {
      vi: "Không thỏa hiệp về chất lượng. Dòng máy siêu âm Philips Compact 5500 Series tích hợp các chức năng cốt lõi của siêu âm dòng xe đẩy cao cấp (cart-based) vào trong một thiết kế di động đáng kinh ngạc. Cho dù ở môi trường lâm sàng tim mạch, sản phụ khoa hay điểm chăm sóc y tế (POC), hệ thống cung cấp hình ảnh siêu rõ nét cùng giao diện trực quan hỗ trợ mọi chẩn đoán phức tạp nhất.",
      en: "Compact without compromise. The Philips Compact Ultrasound System 5500 Series packs the core functionalities of premium cart-based ultrasound into an incredibly portable design. Whether in cardiac, OB/GYN, or point of care (POC) clinical settings, the system provides exceptionally clear imaging along with an intuitive interface to support even the most complex diagnoses."
    },
    images: [
      "https://images.philips.com/is/image/philipsconsumer/da60a87f54924c7f8a7eaf8c009d01f8?wid=1024&$jpglarge$",
      "https://images.philips.com/is/image/philipsconsumer/1992cd8bb67d45f386e1b2900035cfb7?wid=1024&$jpglarge$",
      "https://images.philips.com/is/image/philipsconsumer/6c1fb034e14146f99c64af51015de83b?wid=1024&$jpglarge$"
    ],
    thumbnail: "https://images.philips.com/is/image/philipsconsumer/b08df8f2ed9b4e0da169af6b010dc807?$jpglarge$",
    sourceUrl: "https://www.usa.philips.com/healthcare/product/HC795140/5000-series-hc795140-premium-compact-ultrasound-system",
    videoUrl: "https://www.youtube.com/watch?v=6B8VnHNU7C8",
    highlights: {
      vi: ["Chất lượng hình ảnh cao cấp", "Tim mạch + POC + OB/GYN", "Compact không thỏa hiệp", "Workflow chuyên nghiệp"],
      en: ["Premium image quality", "Cardiac + POC + OB/GYN", "Compact without compromise", "Professional workflow"]
    },
    features: [
      {
        title: { vi: "Chẩn đoán xác định nhanh chóng", en: "Definitive diagnosis" },
        desc: { vi: "Tích hợp công nghệ tiên tiến từ các dòng xe đẩy cao cấp vào thiết kế nhỏ gọn.", en: "Packs powerful performance and advanced tech from premium systems into a compact design." },
        image: "https://images.philips.com/is/image/philipsconsumer/da60a87f54924c7f8a7eaf8c009d01f8?wid=1024&$jpglarge$"
      },
      {
        title: { vi: "Hiệu quả lâm sàng vượt trội", en: "Clinical efficiency" },
        desc: { vi: "Giao diện trực quan tương đương các dòng máy cao cấp giúp làm việc mượt mà.", en: "Features the same intuitive UI as premium Philips systems, minimizing learning curve." }
      }
    ],
    documents: [
      { label: "Compact 5500 Series Product Page", url: "https://www.usa.philips.com/healthcare/product/HC795140" },
      { label: "Cardiac Capabilities Brochure", size: "3.2 MB", url: "#" }
    ],
    clinicalImages: [
      { url: "https://images.philips.com/is/image/philipsconsumer/1992cd8bb67d45f386e1b2900035cfb7?wid=1024&$jpglarge$", caption: "Cardiac 4-chamber view" },
      { url: "https://images.philips.com/is/image/philipsconsumer/c399c9153ee24cf0ba7ab28f01690445?wid=1024&$jpglarge$", caption: "Vascular flow evaluation" },
      { url: "https://images.philips.com/is/image/philipsconsumer/38b46fed8ad04d5f812bb2900035d05f?wid=1024&$jpglarge$", caption: "General abdominal ultrasound" }
    ],
    specifications: [
      { label: { vi: "Cấu hình lâm sàng", en: "Clinical Configurations" }, value: { vi: "Tổng quát, Tim mạch, Sản phụ khoa, POC", en: "General, Cardiac, OB/GYN, POC" } },
      { label: { vi: "Đầu dò hỗ trợ", en: "Supported Transducers" }, value: { vi: "Tương thích hệ sinh thái Philips đa dạng", en: "Compatible with diverse Philips ecosystem" } },
      { label: { vi: "Giao diện hiển thị", en: "Display Interface" }, value: { vi: "Màn hình cảm ứng cường lực, điều khiển linh hoạt", en: "Tempered touchscreen, flexible control" } },
      { label: { vi: "Thiết kế & Di chuyển", en: "Design & Mobility" }, value: { vi: "Hỗ trợ xe đẩy Cart linh hoạt, 4 bánh xe khóa", en: "Supports flexible Cart, 4 locking wheels" } }
    ]
  },
  {
    id: "affiniti-30",
    slug: "affiniti-30",
    name: "Affiniti 30",
    subtitle: {
      vi: "Hệ thống siêu âm đa năng",
      en: "Ultrasound system"
    },
    category: "cart",
    categoryLabel: { vi: "Siêu âm cart", en: "Cart-based Ultrasound" },
    brand: "Philips Healthcare",
    description: {
      vi: "Affiniti 30 được thiết kế để giúp bạn nổi bật và đi trước với các đổi mới đáp ứng nhu cầu thực hành siêu âm bận rộn. Hệ thống cung cấp hiệu suất và giao diện trực quan cho chẩn đoán nhanh chóng, tự tin.",
      en: "Designed to set you apart and help you stay ahead with innovation that responds to the needs of a busy ultrasound practice. Delivers balanced performance and intuitive user interface for quick, confident diagnosis."
    },
    images: [
      "https://images.philips.com/is/image/philipsconsumer/30d2d3a778c14a2a8932af8e00e84b9e?wid=1024&$jpglarge$",
      "https://images.philips.com/is/image/philipsconsumer/66c5eb6b3d904a678c5fa8c800ed1d52?wid=1024&$jpglarge$"
    ],
    thumbnail: "https://images.philips.com/is/image/philipsconsumer/b7c9c61d56ce43709baba8d40089e927?$jpglarge$",
    sourceUrl: "https://www.usa.philips.com/healthcare/product/HC795218/affiniti-30-ultrasound-system",
    videoUrl: "https://www.youtube.com/watch?v=IpK-Ia2pQ1s",
    highlights: {
      vi: ["Đổi mới cho thực hành bận rộn", "Giao diện trực quan", "Hiệu suất cân bằng", "Chẩn đoán nhanh chóng"],
      en: ["Innovation for busy practice", "Intuitive interface", "Balanced performance", "Quick diagnosis"]
    },
    longDescription: {
      vi: "Hệ thống siêu âm Philips Affiniti 30 được thiết kế đặc biệt nhằm mang lại hiệu quả thăm khám tối ưu cho các trung tâm y tế bận rộn. Kế thừa những tinh hoa từ nền tảng Affiniti cao cấp, máy đảm bảo sự đồng bộ trong quy trình làm việc và đem lại chất lượng hình ảnh đáng kinh ngạc, từ bụng tổng quát, sản phụ khoa đến siêu âm mạch máu.",
      en: "The Philips Affiniti 30 ultrasound system is specially designed to deliver optimal exam efficiency for busy medical centers. Inheriting the essence of the premium Affiniti platform, it ensures synchronization in workflow and delivers incredible image quality, from general abdominal, OB/GYN to vascular ultrasound."
    },
    features: [
      {
        title: { vi: "Hiệu suất cân bằng", en: "Balanced performance" },
        desc: { vi: "Giao diện đơn giản, trực quan giúp chẩn đoán nhanh chóng và tự tin.", en: "Designed for busy practices needing a simplified yet intuitive interface." },
        image: "https://images.philips.com/is/image/philipsconsumer/30d2d3a778c14a2a8932af8e00e84b9e?wid=1024&$jpglarge$"
      },
      {
        title: { vi: "Hình ảnh Flow Viewer", en: "Flow Viewer" },
        desc: { vi: "Hình ảnh 3D mô phỏng dòng chảy mạch máu giúp quan sát cấu trúc tốt hơn.", en: "Provides a 3D-like visualization of blood flow for better appreciation of vessel architecture." }
      }
    ],
    documents: [
      { label: "Product brochure: Affiniti 30 for Women's Health Care", size: "1.2 MB", url: "https://www.documents.philips.com/assets/20170713/ee63a7683cd344ec8973a7af011bbf36.pdf" },
      { label: "Flyer: Philips Affiniti ultrasound is a smart investment", size: "2.5 MB", url: "https://www.documents.philips.com/assets/20170523/6a068f7c63b543c09f4fa77c0159333b.PDF" },
      { label: "Infographic: Philips Affiniti ultrasound", size: "1 MB", url: "https://www.documents.philips.com/assets/20170523/9d4e1577bdb0457e8446a77c015a1c4d.pdf" }
    ],
    specifications: [
      { label: { vi: "Màn hình chính", en: "Main Monitor" }, value: { vi: "21.5 inch LCD độ phân giải cao", en: "21.5-inch high-resolution LCD" } },
      { label: { vi: "Màn hình điều khiển", en: "Control Panel" }, value: { vi: "12 inch cảm ứng đa điểm", en: "12-inch multi-touch screen" } }
    ]
  },
  {
    id: "affiniti-50",
    slug: "affiniti-50",
    name: "Affiniti 50",
    subtitle: {
      vi: "Thiết kế cho thực hành hàng ngày",
      en: "Designed for your everyday"
    },
    category: "cart",
    categoryLabel: { vi: "Siêu âm cart", en: "Cart-based Ultrasound" },
    brand: "Philips Healthcare",
    description: {
      vi: "Affiniti 50 cung cấp hình ảnh ấn tượng và giá trị vượt trội cho khả năng lâm sàng đa dạng. Được thiết kế cho thực hành hàng ngày với chất lượng hình ảnh và workflow chuyên nghiệp.",
      en: "Provides stunning imaging and exceptional value for versatile clinical capabilities. Designed for your everyday with professional image quality and workflow."
    },
    images: [
      "https://images.philips.com/is/image/philipsconsumer/e74a87376c6c4c6f937aaf8200d6efda?wid=1024&$jpglarge$"
    ],
    thumbnail: "https://images.philips.com/is/image/philipsconsumer/b7c9c61d56ce43709baba8d40089e927?$jpglarge$",
    sourceUrl: "https://www.usa.philips.com/healthcare/product/HC795208/affiniti-50-ultrasound-system",
    videoUrl: "https://www.youtube.com/watch?v=IpK-Ia2pQ1s",
    highlights: {
      vi: ["Hình ảnh ấn tượng", "Giá trị vượt trội", "Đa dạng lâm sàng", "Cho thực hành hàng ngày"],
      en: ["Stunning imaging", "Exceptional value", "Versatile clinical", "For everyday practice"]
    },
    longDescription: {
      vi: "Hiệu năng bền bỉ đáp ứng khối lượng công việc khổng lồ. Philips Affiniti 50 là dòng siêu âm tích hợp công nghệ đầu dò độc quyền và cấu trúc chẩn đoán chính xác cao (Precision Beamforming), cung cấp khả năng đánh giá lâm sàng đa dạng bao gồm siêu âm đàn hồi mô và phân tích tim mạch cơ bản.",
      en: "Durable performance meets extreme workloads. The Philips Affiniti 50 is an ultrasound system integrating proprietary transducer technology and Precision Beamforming architecture, providing versatile clinical assessments including tissue elastography and basic cardiac analysis."
    },
    features: [
      {
        title: { vi: "Công nghệ iSCAN tối ưu", en: "iSCAN Optimization" },
        desc: { vi: "Tự động tinh chỉnh hình ảnh 2D và Doppler ngay lập tức chỉ với một nút chạm.", en: "Real-time pixel-by-pixel optimization for consistent image quality at the push of a button." },
        image: "https://images.philips.com/is/image/philipsconsumer/e74a87376c6c4c6f937aaf8200d6efda?wid=1024&$jpglarge$"
      },
      {
        title: { vi: "Hình ảnh Flow Viewer", en: "Flow Viewer" },
        desc: { vi: "Cung cấp cái nhìn 3D mô phỏng kiến trúc mạch máu cho độ nhạy dòng chảy cao.", en: "Enhanced blood flow visualization for complex vascular anatomy." }
      },
      {
        title: { vi: "Siêu âm tương phản (CEUS)", en: "Contrast Enhanced Ultrasound" },
        desc: { vi: "Khả năng tiên tiến giúp đánh giá tổn thương gan và các bộ phận khác.", en: "Advanced capabilities for liver and lesion characterization." }
      }
    ],
    documents: [
      { label: "EPIQ Elite & Affiniti ultrasound Vascular flyer", size: "1.5 MB", url: "https://www.documents.philips.com/assets/20230823/c717079f784c4620a184b067014fd67d.pdf" },
      { label: "EPIQ Elite & Affiniti ultrasound Interventional Radiology flyer", size: "1.2 MB", url: "https://www.documents.philips.com/assets/20230823/edb4b78f9bd744cb849fb067014fd155.pdf" },
      { label: "EPIQ Elite & Affiniti Pediatric flyer", size: "1.8 MB", url: "https://www.documents.philips.com/assets/20230823/752a90cd7bd646758be4b067014fdc63.pdf" }
    ],
    specifications: [
      { label: { vi: "Công nghệ nổi bật", en: "Highlight Tech" }, value: { vi: "Precision Beamforming, Strain Elastography", en: "Precision Beamforming, Strain Elastography" } }
    ]
  },
  {
    id: "affiniti-70",
    slug: "affiniti-70",
    name: "Affiniti 70",
    subtitle: {
      vi: "Thiết kế cho thực hành hàng ngày",
      en: "Designed for your everyday"
    },
    category: "cart",
    categoryLabel: { vi: "Siêu âm cart", en: "Cart-based Ultrasound" },
    brand: "Philips Healthcare",
    description: {
      vi: "Affiniti 70 là hệ thống tiên tiến nhất trong dòng Affiniti, mang đến bộ tính năng cao cấp nhất. Kết hợp mạnh mẽ giữa hiệu suất và workflow cho chẩn đoán nhanh chóng, tự tin.",
      en: "The Affiniti 70 ultrasound system offers a powerful combination of performance and workflow for quick, confident diagnosis. The most advanced in the Affiniti family, delivering a suite of premium features."
    },
    images: [
      "https://images.philips.com/is/image/philipsconsumer/f7cda87f54924c7f8a7eaf8c009d01f8?wid=1024&$jpglarge$",
      "https://images.philips.com/is/image/philipsconsumer/246f684c91c74f7eaf9aa8c800ee06a3?wid=1024&$jpglarge$"
    ],
    thumbnail: "https://images.philips.com/is/image/philipsconsumer/eb74e50882194b3c8f85a8d40090875e?$jpglarge$",
    sourceUrl: "https://www.usa.philips.com/healthcare/product/HC795210/affiniti-70-ultrasound-system",
    videoUrl: "https://www.youtube.com/watch?v=IpK-Ia2pQ1s",
    highlights: {
      vi: ["Tiên tiến nhất dòng Affiniti", "Tính năng cao cấp", "Hiệu suất + Workflow", "Chẩn đoán tự tin"],
      en: ["Most advanced Affiniti", "Premium features", "Performance + Workflow", "Confident diagnosis"]
    },
    longDescription: {
      vi: "Đỉnh cao của dòng Affiniti. Hệ thống siêu âm Philips Affiniti 70 được trang bị đầu dò PureWave (đơn tinh thể) cung cấp khả năng đâm xuyên xuất sắc, khắc phục khó khăn trên những bệnh nhân có thể trạng khó thăm khám. Hệ thống còn tích hợp công nghệ Shear Wave Elastography (đàn hồi mô sóng biến dạng) tân tiến nhất.",
      en: "The pinnacle of the Affiniti series. The Philips Affiniti 70 ultrasound system is equipped with PureWave (single crystal) transducers, providing excellent penetration to overcome difficulties in technically challenging patients. The system also integrates the most advanced Shear Wave Elastography technology."
    },
    features: [
      {
        title: { vi: "Công nghệ tinh thể PureWave", en: "PureWave crystal technology" },
        desc: { vi: "Bước tiến lớn nhất trong công nghệ đầu dò cho hình ảnh vượt trội trên bệnh nhân khó thăm khám.", en: "The biggest step forward in transducer technology for exceptional imaging even on difficult patients." },
        image: "https://images.philips.com/is/image/philipsconsumer/f7cda87f54924c7f8a7eaf8c009d01f8?wid=1024&$jpglarge$"
      },
      {
        title: { vi: "Hiển thị MaxVue HD", en: "MaxVue HD display" },
        desc: { vi: "Màn hình 21.5-inch HD cung cấp thêm 33% diện tích hiển thị hình ảnh.", en: "A 21.5\" HD display that provides 33% more display area for immersive imaging." }
      }
    ],
    documents: [
      { label: "EPIQ Elite & Affiniti ultrasound Vascular flyer", size: "1.5 MB", url: "https://www.documents.philips.com/assets/20230823/c717079f784c4620a184b067014fd67d.pdf" },
      { label: "EPIQ Elite & Affiniti ultrasound Interventional Radiology flyer", size: "1.2 MB", url: "https://www.documents.philips.com/assets/20230823/edb4b78f9bd744cb849fb067014fd155.pdf" },
      { label: "EPIQ Elite & Affiniti Pediatric flyer", size: "1.8 MB", url: "https://www.documents.philips.com/assets/20230823/752a90cd7bd646758be4b067014fdc63.pdf" }
    ],
    specifications: [
      { label: { vi: "Đầu dò chuyên biệt", en: "Specialized Transducers" }, value: { vi: "PureWave C5-1, L12-3, eL18-4", en: "PureWave C5-1, L12-3, eL18-4" } }
    ]
  },
  {
    id: "affiniti-cvx",
    slug: "affiniti-cvx",
    name: "Affiniti CVx",
    subtitle: {
      vi: "Siêu âm tim thế hệ mới",
      en: "Next dimension in echocardiography"
    },
    category: "cardiac",
    categoryLabel: { vi: "Siêu âm tim mạch", en: "Cardiac Ultrasound" },
    brand: "Philips Healthcare",
    description: {
      vi: "Affiniti CVx mang đến chiều hướng mới trong siêu âm tim với khả năng AI-based đẩy mạnh chẩn đoán hình ảnh tim mạch. Được thiết kế cho thực hành siêu âm tim chuyên sâu.",
      en: "Affiniti CVx brings the next dimension in echocardiography with AI-based capabilities to propel cardiovascular imaging. Designed for dedicated echocardiography practice."
    },
    images: [
      "https://images.philips.com/is/image/philipsconsumer/592e3788937443348a80adcf01135216?wid=1024&$jpglarge$",
      "https://images.philips.com/is/image/philipsconsumer/abd36de39bb0425e94c5ae2a0144b9fa?wid=1024&$jpglarge$",
      "https://images.philips.com/is/image/philipsconsumer/9185ffed13e24e8e9718ac2b00a330ea?wid=1024&$jpglarge$"
    ],
    thumbnail: "https://images.philips.com/is/image/philipsconsumer/592e3788937443348a80adcf01135216?wid=1024&$jpglarge$",
    sourceUrl: "https://www.usa.philips.com/healthcare/product/795190/affiniti-cvx-everyday-ultrasound-system",
    videoUrl: "https://www.youtube.com/watch?v=IpK-Ia2pQ1s",
    highlights: {
      vi: ["AI-based tim mạch", "Siêu âm tim thế hệ mới", "Echocardiography chuyên sâu", "Chẩn đoán hình ảnh tiên tiến"],
      en: ["AI-based cardiology", "Next-gen echocardiography", "Dedicated echo practice", "Advanced imaging diagnostics"]
    },
    longDescription: {
      vi: "Philips Affiniti CVx mở ra một thế giới mới cho bác sĩ tim mạch. Tích hợp các thuật toán trí tuệ nhân tạo (AI), hệ thống tự động hóa quá trình đo lường cấu trúc và chức năng tim (AutoStrain, AutoMeasure). Thiết kế tập trung vào giải phẫu tim đem lại quy trình làm việc trơn tru và báo cáo siêu âm tim cao cấp.",
      en: "The Philips Affiniti CVx opens a new world for cardiologists. Integrating artificial intelligence (AI) algorithms, the system automates the measurement of cardiac structure and function (AutoStrain, AutoMeasure). The design focuses on cardiac anatomy, delivering a smooth workflow and premium echocardiography reports."
    },
    features: [
      {
        title: { vi: "Tự động hóa AI (AutoStrain)", en: "AI Automation (AutoStrain)" },
        desc: { vi: "Đưa ra các phép đo định lượng về cấu trúc và chức năng tim một cách nhanh chóng, chính xác.", en: "Automates the measurement of cardiac structure and function for consistent results." },
        image: "https://images.philips.com/is/image/philipsconsumer/592e3788937443348a80adcf01135216?wid=1024&$jpglarge$"
      },
      {
        title: { vi: "Giao diện cấu hình linh hoạt", en: "Configurable Interface" },
        desc: { vi: "Thiết kế 'walk-up' giúp giảm thiểu các thao tác bấm nút, hợp lý hóa quy trình siêu âm tim.", en: "Configurable user interface designed to minimize button presses and streamline cardiac exams." }
      }
    ],
    documents: [
      { label: "Affiniti CVx Product Overview", url: "#" },
      { label: "AI in Echocardiography Whitepaper", url: "#" }
    ],
    clinicalImages: [
      { url: "https://images.philips.com/is/image/philipsconsumer/abd36de39bb0425e94c5ae2a0144b9fa?wid=1024&$jpglarge$", caption: "AutoStrain LV assessment" },
      { url: "https://images.philips.com/is/image/philipsconsumer/9185ffed13e24e8e9718ac2b00a330ea?wid=1024&$jpglarge$", caption: "TrueVue 3D mitral valve" }
    ],
    specifications: [
      { label: { vi: "Trọng tâm ứng dụng", en: "Core Application" }, value: { vi: "Tim mạch chuyên sâu, AI Echocardiography", en: "Advanced Cardiology, AI Echocardiography" } }
    ]
  },
  {
    id: "epiq-cvx",
    slug: "epiq-cvx",
    name: "EPIQ CVx",
    subtitle: {
      vi: "Hệ thống siêu âm tim cao cấp",
      en: "Premium cardiology ultrasound system"
    },
    category: "cardiac",
    categoryLabel: { vi: "Siêu âm tim mạch", en: "Cardiac Ultrasound" },
    brand: "Philips Healthcare",
    description: {
      vi: "EPIQ CVx là nền tảng siêu âm tim mạch cao cấp nhất của Philips — đổi mới, modular với giải pháp chẩn đoán tiên tiến cho các ca tim mạch phức tạp nhất.",
      en: "EPIQ CVx is Philips' premium cardiology ultrasound platform — innovative, modular with advanced diagnostic solutions for the most complex cardiovascular cases."
    },
    images: [
      "https://images.philips.com/is/image/philipsconsumer/09deb85123eb4a98b04fb14f01513c0a?wid=1024&$jpglarge$",
      "https://images.philips.com/is/image/philipsconsumer/ae994d787589496aa913b0d00163ca5d?wid=1024&$jpglarge$",
      "https://images.philips.com/is/image/philipsconsumer/c1435efd194646cdad3bb14f01532d69?wid=1024&$jpglarge$"
    ],
    thumbnail: "https://images.philips.com/is/image/philipsconsumer/3543d4dd7d054e568bb0a8d40092f69f?$jpglarge$",
    sourceUrl: "https://www.usa.philips.com/healthcare/product/HC795231/epiq-cvx-premium-cardiology-ultrasound-system",
    videoUrl: "https://www.youtube.com/watch?v=seUKIvhQoHY",
    highlights: {
      vi: ["Cao cấp nhất Philips", "Nền tảng modular", "Ca tim mạch phức tạp", "Giải pháp chẩn đoán tiên tiến"],
      en: ["Philips' most premium", "Modular platform", "Complex cardiovascular cases", "Advanced diagnostic solutions"]
    },
    longDescription: {
      vi: "Đạt đến đẳng cấp tối thượng trong siêu âm tim mạch. EPIQ CVx kế thừa nền tảng cấu trúc nSIGHT danh tiếng của Philips, thay thế giới hạn của công nghệ tạo chùm tia truyền thống bằng khả năng xử lý song song khối lượng dữ liệu khổng lồ. Kết quả là hình ảnh sắc nét đến cấp độ điểm ảnh ở tần số khung hình cực cao, tối quan trọng trong can thiệp tim và chẩn đoán cấu trúc.",
      en: "Reaching the ultimate tier of cardiovascular ultrasound. EPIQ CVx inherits the renowned Philips nSIGHT architecture, bypassing the limits of traditional beamforming with massive parallel data processing. The result is pixel-level sharpness at ultra-high frame rates, vital during structural heart interventions."
    },
    features: [
      {
        title: { vi: "Kiến trúc hình ảnh nSIGHT Plus", en: "nSIGHT Plus Architecture" },
        desc: { vi: "Xử lý song song dữ liệu lớn cho độ phân giải cực cao và tốc độ khung hình vượt trội.", en: "Processes vast amounts of acoustic data, providing high image resolution and frame rates." },
        image: "https://images.philips.com/is/image/philipsconsumer/09deb85123eb4a98b04fb14f01513c0a?wid=1024&$jpglarge$"
      },
      {
        title: { vi: "Trực quan hóa TrueVue 3D", en: "TrueVue 3D Visualization" },
        desc: { vi: "Công nghệ dựng ảnh quang học 3D giúp quan sát chi tiết giải phẫu tim sống động.", en: "Provides photorealistic 3D imaging with a virtual light source for enhanced insight." }
      },
      {
        title: { vi: "Đầu dò xMATRIX", en: "xMATRIX Transducers" },
        desc: { vi: "Hỗ trợ thu thập thể tích linh hoạt với 2D, 3D, xPlane trực tiếp trên một đầu dò.", en: "Enables versatile volume acquisition and various modes from a single probe." }
      }
    ],
    documents: [
      { label: "X11-4t Product Brochure", size: "2.1 MB", url: "https://www.documents.philips.com/assets/20240425/5501a1a1fa774e93a440b15d0186a001.pdf" },
      { label: "EPIQ CVx/CVxi Product Overview Ultrasound", size: "6.8 MB", url: "https://www.documents.philips.com/assets/20240502/240d371246504779bca2b164016b35c5.pdf" },
      { label: "EPIQ CVx/CVxi Feature and User Experience", size: "4.5 MB", url: "https://www.documents.philips.com/assets/20181113/f1efc848a59b4c118da6a99700902ab7.pdf" }
    ],
    specifications: [
      { label: { vi: "Nền tảng xử lý", en: "Processing Platform" }, value: { vi: "nSIGHT Architecture", en: "nSIGHT Architecture" } }
    ]
  },
  {
    id: "epiq-elite",
    slug: "epiq-elite",
    name: "EPIQ Elite",
    subtitle: {
      vi: "Hiệu suất được tái định nghĩa",
      en: "Performance redefined"
    },
    category: "premium",
    categoryLabel: { vi: "Siêu âm cao cấp", en: "Premium Ultrasound" },
    brand: "Philips Healthcare",
    description: {
      vi: "EPIQ Elite Elevate cung cấp hình ảnh chất lượng cao và thông tin lâm sàng tùy chỉnh giúp bác sĩ đưa ra kết quả kịp thời, tự tin cho nhiều bệnh nhân hơn trên toàn thế giới. Với trí tuệ nhân tạo tiên tiến và hiệu suất vượt trội.",
      en: "EPIQ Elite Elevate provides high-quality imaging and tailored clinical information to help clinicians deliver timely, confident answers to more patients worldwide. With advanced intelligence and an exceptional level of performance, EPIQ Elite meets the demands of today's most challenging practices."
    },
    images: [
      "https://images.philips.com/is/image/philipsconsumer/0fcef27f42a74975b38db0bd017fe30d?wid=1024&$jpglarge$",
      "https://images.philips.com/is/image/philipsconsumer/28ceafe652cb4bcea28bb05901289ef0?wid=1024&$jpglarge$",
      "https://images.philips.com/is/image/philipsconsumer/341c0220b91747e1a5cdb0590128a05f?wid=1024&$jpglarge$"
    ],
    thumbnail: "https://images.philips.com/is/image/philipsconsumer/0fcef27f42a74975b38db0bd017fe30d?wid=1024&$jpglarge$",
    sourceUrl: "https://www.usa.philips.com/healthcare/product/HC795098/epiq-elite-a-new-class-of-premium-ultrasound-has-arrived",
    videoUrl: "https://www.youtube.com/watch?v=seUKIvhQoHY",
    highlights: {
      vi: ["AI tiên tiến tích hợp", "Hiệu suất vượt trội", "Hình ảnh chất lượng cao nhất", "Cho ca lâm sàng phức tạp nhất"],
      en: ["Advanced AI integrated", "Exceptional performance", "Highest quality imaging", "For the most challenging cases"]
    },
    longDescription: {
      vi: "Trải nghiệm tầm nhìn siêu việt. EPIQ Elite đại diện cho thiết bị siêu âm tổng quát cao cấp hàng đầu thế giới từ Philips. Với các giải pháp đo ni đóng giày cho chẩn đoán Mạch máu (Ultimate Ultrasound for Vascular) và Siêu âm Gan toàn diện (Liver Ultrasound), hệ thống tự tin tháo gỡ được những ca lâm sàng rắc rối nhất ở cơ địa khó và độ sâu lớn.",
      en: "Experience superior vision. EPIQ Elite represents Philips' flagship premium general ultrasound system. With tailor-made solutions such as Ultimate Ultrasound for Vascular and comprehensive Liver Ultrasound, the system confidently unravels the most complex clinical cases in difficult body types and extreme depths."
    },
    features: [
      {
        title: { vi: "Nền tảng nSIGHT mới", en: "Next-gen nSIGHT Platform" },
        desc: { vi: "Mang lại độ phân giải không gian và thời gian vượt trội cho các ca chẩn đoán khó.", en: "Reconstructs superior spatial resolution at high frame rates for definitive diagnosis." },
        image: "https://images.philips.com/is/image/philipsconsumer/0fcef27f42a74975b38db0bd017fe30d?wid=1024&$jpglarge$"
      },
      {
        title: { vi: "SmartSpeed AI", en: "SmartSpeed AI" },
        desc: { vi: "Thuật toán AI nâng cao giúp giảm nhiễu và tăng cường chi tiết hình ảnh.", en: "Integrates AI tools to assist in image acquisition and analysis for consistent quality." }
      },
      {
        title: { vi: "Giải pháp Mạch máu đỉnh cao", en: "Ultimate Vascular Solution" },
        desc: { vi: "Thiết kế chuyên sâu cho thăm khám mạch máu với độ nhạy Doppler cực cao.", en: "Tailor-made solutions for the most challenging vascular clinical cases." }
      }
    ],
    documents: [
      { label: "EPIQ Elite General Brochure", url: "#" },
      { label: "Ultimate Ultrasound for Liver Data Sheet", url: "#" }
    ],
    clinicalImages: [
      { url: "https://images.philips.com/is/image/philipsconsumer/28ceafe652cb4bcea28bb05901289ef0?wid=1024&$jpglarge$", caption: "C5-1 Fetal Heart Color Flow" },
      { url: "https://images.philips.com/is/image/philipsconsumer/9c3745eb039842b5887fa8c800cbfeb6?wid=1024&$jpglarge$", caption: "3D TrueVue Fetal Imaging" }
    ],
    specifications: [
      { label: { vi: "Nền tảng sức mạnh", en: "Core Platform" }, value: { vi: "nSIGHT thế hệ mới + AI tích hợp", en: "Next-gen nSIGHT + Integrated AI" } },
      { label: { vi: "Đầu dò cấu trúc", en: "Structural Transducers" }, value: { vi: "Hỗ trợ PureWave và công nghệ xMatrix", en: "PureWave and xMatrix technology compatible" } }
    ]
  }
];

// Product categories for filtering
const PRODUCT_CATEGORIES = [
  { id: "all", label: { vi: "Tất cả", en: "All" } },
  { id: "handheld", label: { vi: "Siêu âm cầm tay", en: "Handheld" } },
  { id: "compact", label: { vi: "Siêu âm compact", en: "Compact" } },
  { id: "poc", label: { vi: "Point-of-Care", en: "Point-of-Care" } },
  { id: "cart", label: { vi: "Siêu âm cart", en: "Cart-based" } },
  { id: "cardiac", label: { vi: "Tim mạch", en: "Cardiac" } },
  { id: "premium", label: { vi: "Cao cấp", en: "Premium" } }
];
