/* ============================================================
   HAMEDCO — Philips CT Scanner Product Catalog
   Danh mục sản phẩm CT Philips chính thức
   ============================================================ */

export const CT_PRODUCTS = [
  {
    id: 'ct-3500',
    slug: 'HC728134-ct-3500',
    name: 'CT 3500',
    subtitle: {
      vi: 'Hệ thống chụp cắt lớp vi tính',
      en: 'Computed tomography scanner'
    },
    deviceType: 'ct',
    priceTier: 'pho-thong',
    brand: 'Philips Healthcare',
    description: {
      vi: 'Philips CT 3500 là hệ thống CT đáng tin cậy, hiệu suất cao, đáp ứng các mục tiêu lâm sàng, vận hành và tài chính. Tăng tốc các chương trình X-quang thường quy và sàng lọc khối lượng lớn.',
      en: 'Hardworking, reliable CT system to meet clinical, operational and financial objectives, accelerating routine radiology and high-volume screening programs.'
    },
    longDescription: {
      vi: 'CT 3500 được thiết kế để đáp ứng nhu cầu chụp CT thường quy với hiệu suất ổn định. Hệ thống tích hợp công nghệ tái tạo hình ảnh AI Precise Image giúp nâng cao chất lượng hình ảnh đồng thời giảm liều bức xạ. Với tốc độ quay nhanh và khả năng chụp lên đến 64 lát cắt, CT 3500 phù hợp cho phòng khám và bệnh viện tuyến đầu.',
      en: 'CT 3500 is designed to meet routine CT imaging needs with consistent performance. The system integrates AI-based Precise Image reconstruction technology to enhance image quality while reducing radiation dose. With fast rotation speed and up to 64-slice capability, CT 3500 is ideal for clinics and frontline hospitals.'
    },
    images: [
      '/assets/images/products/ct-3500.png',
    ],
    thumbnail: '/assets/images/products/ct-3500.png',
    sourceUrl: 'https://www.philips.com.ph/healthcare/product/HC728134/philips-ct-3500-hc728134-computed-tomography-scanner',
    videoUrl: null,
    highlights: {
      vi: [
        'Chụp cắt lớp lên đến 64 lát',
        'Tái tạo hình ảnh AI Precise Image',
        'Tốc độ quay 0.5 giây',
        'Chi phí vận hành tối ưu'
      ],
      en: [
        'Up to 64-slice scanning',
        'AI Precise Image reconstruction',
        '0.5s rotation speed',
        'Optimized operating costs'
      ]
    },
    features: [
      {
        title: { vi: 'Tái tạo hình ảnh AI Precise Image', en: 'AI Precise Image Reconstruction' },
        desc: {
          vi: 'Công nghệ tái tạo hình ảnh dựa trên AI giúp giảm nhiễu, tăng độ phân giải và mở rộng khả năng chẩn đoán — đồng thời giảm liều bức xạ cho bệnh nhân.',
          en: 'AI-based image reconstruction technology reduces noise, increases resolution and expands diagnostic capabilities — while reducing radiation dose to patients.'
        },
      },
      {
        title: { vi: 'Hiệu suất đáng tin cậy', en: 'Reliable Performance' },
        desc: {
          vi: 'Bóng X-quang dung lượng nhiệt 8.0 MHU cho phép hoạt động liên tục trong các chương trình sàng lọc khối lượng lớn mà không cần thời gian nghỉ.',
          en: 'X-ray tube with 8.0 MHU anode heat capacity enables continuous operation in high-volume screening programs without cooling downtime.'
        },
      },
    ],
    documents: [],
    specifications: [
      { label: { vi: 'Bóng X-quang', en: 'X-ray Tube' }, value: { vi: 'Dung lượng nhiệt anode 8.0 MHU', en: 'Anode heat capacity 8.0 MHU' } },
      { label: { vi: 'Công suất máy phát', en: 'Generator Power' }, value: { vi: '55 kW', en: '55 kW' } },
      { label: { vi: 'Số lát cắt', en: 'Slices' }, value: { vi: 'Lên đến 64 lát', en: 'Up to 64' } },
      { label: { vi: 'Vùng phủ', en: 'Coverage' }, value: { vi: '20 mm', en: '20 mm' } },
      { label: { vi: 'Tốc độ quay', en: 'Rotation Speed' }, value: { vi: 'Nhanh nhất 0.5 giây', en: 'Up to 0.5 s' } },
      { label: { vi: 'Đường kính lỗ gantry', en: 'Bore Size' }, value: { vi: '720 mm', en: '720 mm' } },
      { label: { vi: 'Điện áp kVp', en: 'kVp Stations' }, value: { vi: '70, 80, 100, 120, 140', en: '70, 80, 100, 120, 140' } },
    ]
  },
  {
    id: 'incisive-ct',
    slug: 'HC728143-incisive-ct',
    name: 'Incisive CT',
    subtitle: {
      vi: 'Hệ thống chụp cắt lớp vi tính',
      en: 'CT Scanner'
    },
    deviceType: 'ct',
    priceTier: 'tam-trung',
    brand: 'Philips Healthcare',
    description: {
      vi: 'Incisive CT mang đến trí tuệ ở mọi bước — từ thu nhận hình ảnh đến kết quả — trên toàn bộ phương diện tài chính, lâm sàng và vận hành. Bao gồm cam kết bảo hành bóng trọn đời Tube for Life.',
      en: 'Incisive CT offers intellect at every step, from acquisition through results, across financial, clinical, and operational fronts. Includes the unprecedented Tube for Life guarantee.'
    },
    longDescription: {
      vi: 'Incisive CT giúp tổ chức y tế đối mặt các thách thức cấp bách nhất. Hệ thống cung cấp trí tuệ nhân tạo tại mọi bước, với bóng vMRC 8 MHU và cam kết Tube for Life giúp giảm ước tính $420,000 chi phí vận hành. CT Smart Workflow với các công cụ AI cho phép tái tạo nhanh và định vị bệnh nhân tự động.',
      en: 'Incisive CT helps healthcare organizations address their most pressing challenges. The system provides intelligence at every step, with a vMRC tube (8 MHU) and the Tube for Life guarantee helping reduce estimated operating costs by $420,000. CT Smart Workflow with AI-enabled tools enables fast reconstruction and automatic patient positioning.'
    },
    images: [
      '/assets/images/products/incisive-ct.png',
    ],
    thumbnail: '/assets/images/products/incisive-ct.png',
    sourceUrl: 'https://www.philips.com.ph/healthcare/product/HC728143/incisive-ct-ct-scanner',
    videoUrl: null,
    highlights: {
      vi: [
        'Cam kết Tube for Life',
        'Lên đến 128 lát cắt',
        'CT Smart Workflow với AI',
        'Quay nhanh 0.35 giây'
      ],
      en: [
        'Tube for Life guarantee',
        'Up to 128 slices',
        'AI-powered CT Smart Workflow',
        '0.35s rotation speed'
      ]
    },
    features: [
      {
        title: { vi: 'Cam kết Tube for Life', en: 'Tube for Life Guarantee' },
        desc: {
          vi: 'Philips thay thế bóng vMRC miễn phí trong suốt vòng đời hệ thống — giúp giảm ước tính $420,000 chi phí vận hành và mang lại sự yên tâm tuyệt đối.',
          en: 'Philips replaces the vMRC tube at no cost over the life of the system — helping reduce estimated operating costs by $420,000 and providing complete peace of mind.'
        },
      },
      {
        title: { vi: 'Điều khiển bên bệnh nhân OnPlan', en: 'OnPlan Patient-Side Controls' },
        desc: {
          vi: 'Bảng điều khiển thông minh tại vị trí bệnh nhân thích nghi với từng kỹ thuật viên, giúp tối ưu hóa quy trình làm việc.',
          en: 'Smart patient-side gantry controls adapt to each operator, helping optimize workflow.'
        },
      },
      {
        title: { vi: 'CT Smart Workflow', en: 'CT Smart Workflow' },
        desc: {
          vi: 'Bộ công cụ AI cho phép chụp tim mạch không dao động và hỗ trợ các thủ thuật can thiệp. Tái tạo hình ảnh nhanh chóng với AI.',
          en: 'AI-enabled tools for motion-free cardiac imaging and interventional procedures. Fast image reconstruction with AI.'
        },
      },
      {
        title: { vi: 'Technology Maximizer', en: 'Technology Maximizer' },
        desc: {
          vi: 'Bảo vệ hệ thống khỏi lỗi thời với các bản cập nhật và đổi mới được lên kế hoạch trong suốt vòng đời sản phẩm.',
          en: 'Protects against obsolescence with planned updates and innovations over the system lifecycle.'
        },
      },
    ],
    documents: [
      { label: 'Tube for Life Brochure', size: '2.78 MB', url: 'https://www.documents.philips.com/assets/20190919/945738fc368a4427ad87aacd014974e4.pdf' },
      { label: 'Incisive CT Brochure', size: '16.92 MB', url: 'https://www.documents.philips.com/assets/20210909/7ac636963691415a8141ad9e0090e487.pdf' },
      { label: 'CT Smart Workflow Whitepaper', size: '3.06 MB', url: 'https://www.documents.philips.com/assets/20250513/e13f1950247a44029a7bb2dc0107222d.pdf' },
    ],
    specifications: [
      { label: { vi: 'Bóng X-quang', en: 'X-ray Tube' }, value: { vi: 'vMRC, dung lượng nhiệt 8 MHU', en: 'vMRC tube, 8 MHU capacity' } },
      { label: { vi: 'Điện áp kVp', en: 'kVp Settings' }, value: { vi: '70, 80, 100, 120, 140 kV', en: '70, 80, 100, 120, 140 kV' } },
      { label: { vi: 'Đường kính lỗ gantry', en: 'Bore Size' }, value: { vi: '72 cm', en: '72 cm' } },
      { label: { vi: 'Số lát cắt', en: 'Slices' }, value: { vi: 'Lên đến 128 lát', en: 'Up to 128' } },
      { label: { vi: 'Vùng phủ', en: 'Coverage' }, value: { vi: '40 mm', en: '40 mm' } },
      { label: { vi: 'Công suất máy phát', en: 'Generator Power' }, value: { vi: '80 kW', en: '80 kW' } },
      { label: { vi: 'Tốc độ quay', en: 'Rotation Speed' }, value: { vi: 'Nhanh nhất 0.35 giây', en: 'Up to 0.35 s' } },
    ]
  },
  {
    id: 'ct-5300',
    slug: 'HC728285-ct-5300',
    name: 'CT 5300',
    subtitle: {
      vi: 'Hệ thống chụp cắt lớp vi tính',
      en: 'CT Scanner'
    },
    deviceType: 'ct',
    priceTier: 'tam-trung',
    brand: 'Philips Healthcare',
    description: {
      vi: 'CT 5300 tận dụng AI để mở rộng năng lực lâm sàng và cải tiến quy trình, cung cấp công cụ ảo cho cộng tác thời gian thực, và dịch vụ từ xa để nâng cao hiệu suất và thời gian hoạt động.',
      en: 'CT 5300 leverages AI for new clinical capabilities and workflow advances, provides virtual tools for real-time collaboration, and offers remote services to enhance system performance and uptime.'
    },
    longDescription: {
      vi: 'Hệ thống CT 5300 được thiết kế để vượt qua các thách thức hình ảnh hiện tại, nâng cao năng lực đội ngũ y tế thông qua AI tích hợp toàn diện. Với công nghệ Precise Image (tái tạo AI), Precise Cardiac (bù trừ chuyển động tim) và CT Smart Workflow, hệ thống mang đến chất lượng hình ảnh vượt trội cho mọi ứng dụng.',
      en: 'The CT 5300 system is designed to overcome current imaging challenges and elevate clinical teams through comprehensive AI integration. With Precise Image (AI reconstruction), Precise Cardiac (motion compensation) and CT Smart Workflow, the system delivers superior image quality for all applications.'
    },
    images: [
      '/assets/images/products/ct-5300.png',
    ],
    thumbnail: '/assets/images/products/ct-5300.png',
    sourceUrl: 'https://www.philips.com.ph/healthcare/product/HC728285/ct-5300-hc728285-ct-scanner',
    videoUrl: null,
    highlights: {
      vi: [
        'AI Precise Image tái tạo hình ảnh',
        'Precise Cardiac cho tim mạch',
        'Camera AI định vị bệnh nhân',
        'Cam kết Tube for Life'
      ],
      en: [
        'AI Precise Image reconstruction',
        'Precise Cardiac imaging',
        'AI-enabled positioning camera',
        'Tube for Life guarantee'
      ]
    },
    features: [
      {
        title: { vi: 'Tái tạo AI Precise Image', en: 'AI Precise Image Reconstruction' },
        desc: {
          vi: 'Áp dụng tái tạo hình ảnh bằng AI để giảm liều tia, tăng chất lượng hình ảnh và mở rộng khả năng chẩn đoán tim mạch.',
          en: 'Applies AI-based image reconstruction to reduce dose, improve image quality and expand cardiac diagnostic capabilities.'
        },
      },
      {
        title: { vi: 'Precise Cardiac — Tim mạch nâng cao', en: 'Precise Cardiac — Advanced Cardiac' },
        desc: {
          vi: 'Tự động bù trừ chuyển động của tim trong quá trình quét, giúp quan sát mạch vành rõ nét hơn ngay cả khi bệnh nhân có nhịp tim cao.',
          en: 'Automatically compensates for cardiac motion during scanning, enabling clearer coronary visualization even with elevated heart rates.'
        },
      },
      {
        title: { vi: 'CT Smart Workflow', en: 'CT Smart Workflow' },
        desc: {
          vi: 'Bộ giải pháp AI giúp tối ưu hóa liều tia, tốc độ và chất lượng hình ảnh cho nhiều ứng dụng lâm sàng.',
          en: 'AI solution suite that optimizes dose, speed and image quality across multiple clinical applications.'
        },
      },
      {
        title: { vi: 'Camera AI định vị bệnh nhân', en: 'AI-Enabled Positioning Camera' },
        desc: {
          vi: 'Camera hỗ trợ AI giúp tiết kiệm thời gian, tăng độ chính xác và tính nhất quán trong việc định vị bệnh nhân.',
          en: 'AI-assisted camera saves time, increases accuracy and consistency in patient positioning.'
        },
      },
      {
        title: { vi: 'Collaboration Live', en: 'Collaboration Live' },
        desc: {
          vi: 'Công cụ ảo hỗ trợ cộng tác thời gian thực với chuyên gia từ xa để tối ưu hiệu suất hệ thống.',
          en: 'Virtual tools for real-time collaboration with remote experts to optimize system performance.'
        },
      },
    ],
    documents: [
      { label: 'CT 5300 Product Brochure', url: 'https://www.documents.philips.com/assets/20240223/f4561a9fab3b476cb1ddb11f017514f2.pdf' },
      { label: 'Tube for Life Brochure', url: 'https://www.documents.philips.com/assets/20190919/945738fc368a4427ad87aacd014974e4.pdf' },
      { label: 'Precise Image Technology Whitepaper', url: 'https://www.documents.philips.com/assets/20240223/4f2cbfa4d0df428f94bfb11f01751a87.pdf' },
      { label: 'Cardiac Imaging Whitepaper', url: 'https://www.documents.philips.com/assets/20240722/1749646e61c0400684fdb1b5015a7270.pdf' },
    ],
    specifications: [
      { label: { vi: 'Tái tạo hình ảnh', en: 'Image Reconstruction' }, value: { vi: 'AI Precise Image', en: 'AI Precise Image' } },
      { label: { vi: 'Tim mạch', en: 'Cardiac' }, value: { vi: 'Precise Cardiac (bù trừ chuyển động)', en: 'Precise Cardiac (motion compensation)' } },
      { label: { vi: 'Quy trình', en: 'Workflow' }, value: { vi: 'CT Smart Workflow + Camera AI', en: 'CT Smart Workflow + AI Camera' } },
      { label: { vi: 'Cam kết bóng', en: 'Tube Guarantee' }, value: { vi: 'Tube for Life', en: 'Tube for Life' } },
    ]
  },
  {
    id: 'spectral-ct-7500',
    slug: '728333-spectral-ct-7500',
    name: 'Spectral CT 7500',
    subtitle: {
      vi: 'Hệ thống CT phổ đầu dò',
      en: 'Spectral-detector CT scanner'
    },
    deviceType: 'ct',
    priceTier: 'cao-cap',
    brand: 'Philips Healthcare',
    description: {
      vi: 'Spectral CT 7500 cung cấp kết quả phổ và thông thường trong một lần quét duy nhất, với dữ liệu luôn sẵn sàng và không cần giao thức đặc biệt. Hỗ trợ chẩn đoán chính xác cho X-quang, tim mạch, ung bướu, thần kinh và cấp cứu.',
      en: 'Spectral CT 7500 provides detector-based spectral and conventional results in one scan, with always-on data and no special protocols. Supports confident diagnosis across radiology, cardiology, oncology, neurology, and ED/trauma.'
    },
    longDescription: {
      vi: 'Spectral CT 7500 là hệ thống CT phổ cao cấp nhất của Philips. Với khả năng luôn bật (always-on spectral), hệ thống thu thập dữ liệu phổ trong mỗi lần quét thông thường mà không cần giao thức đặc biệt. Kết quả phổ sẵn sàng trong vòng 60 giây, có thể xem trực tiếp trên PACS với Spectral Magic Glass. Giúp giảm 26% số lần chụp lại, rút ngắn 34% thời gian chẩn đoán.',
      en: 'Spectral CT 7500 is Philips\' most advanced spectral CT system. With always-on spectral capability, the system captures spectral data in every routine scan without special protocols. Spectral results are ready in under 60 seconds, viewable on PACS with Spectral Magic Glass. Reduces follow-up scans by 26% and diagnosis time by 34%.'
    },
    images: [
      '/assets/images/products/spectral-ct-7500.png',
    ],
    thumbnail: '/assets/images/products/spectral-ct-7500.png',
    sourceUrl: 'https://www.philips.com.ph/healthcare/product/728333/spectral-ct-7500-philips-all-new-spectral-detector-ct-7500',
    videoUrl: null,
    highlights: {
      vi: [
        'Quét phổ luôn bật (always-on)',
        '512 lát cắt, quay 0.27 giây',
        'Giảm 26% chụp lại',
        'Bore 800mm rộng nhất'
      ],
      en: [
        'Always-on spectral scanning',
        '512 slices, 0.27s rotation',
        '26% fewer follow-up scans',
        'Widest 800mm bore'
      ]
    },
    features: [
      {
        title: { vi: 'Phổ luôn bật (Always-on Spectral)', en: 'Always-on Spectral' },
        desc: {
          vi: 'Quét như thường, hoàn thành chụp ngực-bụng-chậu trong 2 giây không cần giao thức đặc biệt. Kết quả phổ sẵn sàng trong vòng 60 giây.',
          en: 'Scan as usual, complete chest-abdomen-pelvis in 2 seconds with no special protocols. Spectral results ready in under 60 seconds.'
        },
      },
      {
        title: { vi: 'Đánh giá tim mạch dưới 15 phút', en: 'Cardiac Evaluation Under 15 Minutes' },
        desc: {
          vi: 'Một lần quét phổ duy nhất bao gồm tưới máu và tăng cường muộn mà không tăng liều bức xạ.',
          en: 'Single spectral scan including perfusion and delayed enhancement without added radiation dose.'
        },
      },
      {
        title: { vi: 'Độ chính xác ung bướu', en: 'Oncology Certainty' },
        desc: {
          vi: 'Độ chính xác chẩn đoán phân biệt nang lành tính với tổn thương ác tính tăng lên 96% (so với 30% với CT thông thường).',
          en: 'Diagnostic certainty for differentiating benign cysts from malignant lesions increased to 96% (vs 30% with conventional CT).'
        },
      },
      {
        title: { vi: 'Thần kinh & Chấn thương', en: 'Neuro & Trauma' },
        desc: {
          vi: 'Phân biệt nhanh chóng chất xám/chất trắng và xuất huyết để đưa ra quyết định điều trị nhanh hơn.',
          en: 'Quickly differentiate gray/white matter and bleeding for faster, more accurate treatment decisions.'
        },
      },
    ],
    documents: [
      { label: 'Spectral CT 7500 Product Brochure', size: '9.62 MB', url: 'https://www.documents.philips.com/assets/20250227/e739375096184c549abeb29100f7304e.pdf' },
      { label: 'Spectral CT Clinical Publication Compendium', size: '5.79 MB', url: 'https://www.documents.philips.com/assets/20241119/6c1eff2cdbeb42f1a3e6b22d01535e5b.pdf' },
    ],
    specifications: [
      { label: { vi: 'Số lát cắt', en: 'Slices' }, value: { vi: '512', en: '512' } },
      { label: { vi: 'Công suất máy phát', en: 'Generator Power' }, value: { vi: '120 kW', en: '120 kW' } },
      { label: { vi: 'Đường kính lỗ gantry', en: 'Bore Size' }, value: { vi: '800 mm', en: '800 mm' } },
      { label: { vi: 'Tốc độ quay', en: 'Rotation Speed' }, value: { vi: '0.27 giây', en: '0.27 s' } },
      { label: { vi: 'Vùng phủ', en: 'Coverage' }, value: { vi: '80 mm', en: '80 mm' } },
      { label: { vi: 'kVp thông thường', en: 'Conventional kVp' }, value: { vi: '80, 100, 120, 140', en: '80, 100, 120, 140' } },
      { label: { vi: 'kVp phổ', en: 'Spectral kVp' }, value: { vi: '100, 120, 140', en: '100, 120, 140' } },
    ]
  },
];
