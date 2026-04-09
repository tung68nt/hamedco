/* ============================================================
   HAMEDCO — Philips MRI Product Catalog
   Danh mục sản phẩm MRI Philips chính thức
   ============================================================ */

export const MRI_PRODUCTS = [
  {
    id: 'mr-5300',
    slug: '782110-mr-5300',
    name: 'MR 5300',
    subtitle: {
      vi: 'Hệ thống cộng hưởng từ 1.5T',
      en: '1.5T MRI System'
    },
    deviceType: 'mri',
    priceTier: 'pho-thong',
    brand: 'Philips Healthcare',
    description: {
      vi: 'MR 5300 giúp chuyển đổi năng suất MR — nhanh chóng, dễ dàng và tự tin. Trang bị nam châm BlueSeal tiên tiến, Compressed SENSE và SmartSpeed để tăng tốc quy trình.',
      en: 'Transform MR productivity. Quickly. Easily. Confidently. Equipped with advanced BlueSeal magnet, Compressed SENSE and SmartSpeed for accelerated workflows.'
    },
    longDescription: {
      vi: 'MR 5300 là hệ thống MRI 1.5T được thiết kế để tối ưu hóa năng suất hàng ngày. Nam châm BlueSeal hoạt động không cần helium bổ sung, giảm đáng kể chi phí vận hành. Công nghệ Compressed SENSE tăng tốc quét lên đến 50%, trong khi SmartSpeed mang đến chất lượng hình ảnh vượt trội với thời gian quét ngắn hơn.',
      en: 'MR 5300 is a 1.5T MRI system designed to optimize daily productivity. The BlueSeal magnet operates without additional helium, significantly reducing operating costs. Compressed SENSE technology accelerates scanning by up to 50%, while SmartSpeed delivers superior image quality with shorter scan times.'
    },
    images: [
      '/assets/images/products/mr-5300.png',
    ],
    thumbnail: '/assets/images/products/mr-5300.png',
    sourceUrl: 'https://www.usa.philips.com/healthcare/product/782110/mr-5300-transform-mr-productivity-quickly-easily-confidently',
    videoUrl: null,
    highlights: {
      vi: [
        'Nam châm BlueSeal không helium',
        'Compressed SENSE tăng tốc 50%',
        'SmartSpeed cho chất lượng cao',
        'Chi phí vận hành thấp'
      ],
      en: [
        'Helium-free BlueSeal magnet',
        'Compressed SENSE 50% faster',
        'SmartSpeed for high quality',
        'Low operating costs'
      ]
    },
    features: [
      {
        title: { vi: 'Nam châm BlueSeal', en: 'BlueSeal Magnet' },
        desc: {
          vi: 'Nam châm kín hoàn toàn hoạt động với chỉ 7 lít micro-helium (so với 1,500 lít thông thường), loại bỏ rủi ro quench và chi phí bổ sung helium.',
          en: 'Fully sealed magnet operates with just 7 liters of micro-helium (vs 1,500 liters conventionally), eliminating quench risk and helium top-up costs.'
        },
      },
      {
        title: { vi: 'Compressed SENSE', en: 'Compressed SENSE' },
        desc: {
          vi: 'Công nghệ lấy mẫu nén tiên tiến giúp tăng tốc quét 2D và 3D lên đến 50% mà không giảm chất lượng hình ảnh.',
          en: 'Advanced compressed sensing technology accelerates 2D and 3D scanning by up to 50% without compromising image quality.'
        },
      },
    ],
    documents: [
      { label: 'BlueSeal Magnet Brochure', url: 'https://www.documents.philips.com/assets/20210121/27235e0da9124800a627acb700f3163b.pdf' },
    ],
    specifications: [
      { label: { vi: 'Từ trường', en: 'Field Strength' }, value: { vi: '1.5 Tesla', en: '1.5 Tesla' } },
      { label: { vi: 'Nam châm', en: 'Magnet' }, value: { vi: 'BlueSeal (7L micro-helium)', en: 'BlueSeal (7L micro-helium)' } },
      { label: { vi: 'Tăng tốc', en: 'Acceleration' }, value: { vi: 'Compressed SENSE + SmartSpeed', en: 'Compressed SENSE + SmartSpeed' } },
    ]
  },
  {
    id: 'ingenia-ambition-1.5t-s',
    slug: 'HC781359-ingenia-ambition-1-5t-s',
    name: 'Ingenia Ambition 1.5T S',
    subtitle: {
      vi: 'Hệ thống cộng hưởng từ 1.5T',
      en: '1.5T MRI System'
    },
    deviceType: 'mri',
    priceTier: 'tam-trung',
    brand: 'Philips Healthcare',
    description: {
      vi: 'Ingenia Ambition 1.5T S giúp vận hành MR hiệu quả hàng ngày, hoàn toàn không cần helium. Trang bị nam châm BlueSeal cách mạng và trải nghiệm nghe-nhìn nhập vai cho bệnh nhân.',
      en: 'Excel in your daily MR services, helium-free. Equipped with revolutionary BlueSeal magnet and immersive audio-visual patient experience.'
    },
    longDescription: {
      vi: 'Dựa trên nam châm BlueSeal cách mạng hoàn toàn kín, Ingenia Ambition S mang đến vận hành MR không helium hiệu quả hơn. Hệ thống cung cấp chất lượng hình ảnh tuyệt vời với Compressed SENSE cho tất cả giải phẫu. Thời gian khám nhanh hơn nhờ quy trình thiết lập bệnh nhân có hướng dẫn tại bore.',
      en: 'Based on the revolutionary fully sealed BlueSeal magnet, Ingenia Ambition S delivers more productive helium-free MR operations. The system provides superb image quality with Compressed SENSE for all anatomies. Overall exam time is improved by simplifying patient setup at the bore with guided setup.'
    },
    images: [
      '/assets/images/products/ingenia-ambition-1.5t-s.png',
    ],
    thumbnail: '/assets/images/products/ingenia-ambition-1.5t-s.png',
    sourceUrl: 'https://www.philips.com.au/healthcare/product/HC781359/ingenia-ambition-excel-in-your-daily-mr-services-helium-free',
    videoUrl: null,
    highlights: {
      vi: [
        'Nam châm BlueSeal không helium',
        'Compressed SENSE toàn giải phẫu',
        'Thiết lập bệnh nhân có hướng dẫn',
        'Trải nghiệm nghe-nhìn nhập vai'
      ],
      en: [
        'Helium-free BlueSeal magnet',
        'Compressed SENSE for all anatomies',
        'Guided patient setup',
        'Immersive audio-visual experience'
      ]
    },
    features: [
      {
        title: { vi: 'Nam châm BlueSeal kín hoàn toàn', en: 'Fully Sealed BlueSeal Magnet' },
        desc: {
          vi: 'Vận hành MR không cần bổ sung helium, giảm đáng kể chi phí vận hành và tác động môi trường.',
          en: 'MR operations without helium top-ups, significantly reducing operational costs and environmental impact.'
        },
      },
      {
        title: { vi: 'Compressed SENSE', en: 'Compressed SENSE' },
        desc: {
          vi: 'Tăng tốc quét 2D và 3D cho tất cả giải phẫu, giúp giảm thời gian khám tổng thể.',
          en: 'Accelerates 2D and 3D scanning for all anatomies, helping reduce overall exam time.'
        },
      },
    ],
    documents: [
      { label: 'Ingenia Ambition Product Brochure', url: 'https://www.documents.philips.com/assets/20250815/e94547b493814a33b385b33a0083fd80.pdf' },
      { label: 'Product Brochure', url: 'https://www.documents.philips.com/assets/20230113/ad0ac111c49a47cd95fbaf890142124a.pdf' },
    ],
    specifications: [
      { label: { vi: 'Từ trường', en: 'Field Strength' }, value: { vi: '1.5 Tesla', en: '1.5 Tesla' } },
      { label: { vi: 'Nam châm', en: 'Magnet' }, value: { vi: 'BlueSeal (kín hoàn toàn)', en: 'BlueSeal (fully sealed)' } },
      { label: { vi: 'Tăng tốc', en: 'Acceleration' }, value: { vi: 'Compressed SENSE', en: 'Compressed SENSE' } },
      { label: { vi: 'Trải nghiệm bệnh nhân', en: 'Patient Experience' }, value: { vi: 'Ambient Experience (tùy chọn)', en: 'Ambient Experience (optional)' } },
    ]
  },
  {
    id: 'ingenia-ambition-1.5t-x',
    slug: 'HC781356-ingenia-ambition-1-5t-x',
    name: 'Ingenia Ambition 1.5T X',
    subtitle: {
      vi: 'Hệ thống cộng hưởng từ 1.5T cao cấp',
      en: 'Premium 1.5T MRI System'
    },
    deviceType: 'mri',
    priceTier: 'tam-trung',
    brand: 'Philips Healthcare',
    description: {
      vi: 'Ingenia Ambition 1.5T X mang đến vận hành MR không helium với hiệu suất cao hơn, chất lượng hình ảnh sắc nét hơn 80% và tốc độ quét nhanh gấp 3 lần với SmartSpeed Precise.',
      en: 'Ingenia Ambition 1.5T X delivers more productive helium-free MR operations with up to 80% higher sharpness and up to 3x faster scans with SmartSpeed Precise.'
    },
    longDescription: {
      vi: 'Dựa trên nam châm BlueSeal cách mạng, Ingenia Ambition X mang đến chất lượng hình ảnh vượt trội với độ sắc nét cao hơn 80%, ngay cả với bệnh nhân khó chụp. Hệ thống thực hiện khám MRI nhanh gấp 3 lần với tăng tốc SmartSpeed Precise cho tất cả giải phẫu. Thêm vào đó, trải nghiệm nghe-nhìn nhập vai giúp bệnh nhân thư giãn và hướng dẫn họ qua quá trình chụp MR.',
      en: 'Based on the revolutionary fully sealed BlueSeal magnet, Ingenia Ambition X delivers superb image quality with up to 80% higher sharpness, even for challenging patients. The system performs MRI exams up to 3x faster with SmartSpeed Precise accelerations for all anatomies. An immersive audio-visual experience helps calm patients and guides them through MR exams.'
    },
    images: [
      '/assets/images/products/ingenia-ambition-1.5t-x.png',
    ],
    thumbnail: '/assets/images/products/ingenia-ambition-1.5t-x.png',
    sourceUrl: 'https://www.philips.com.au/healthcare/product/HC781356/ingenia-ambition-excel-in-your-daily-mr-services-helium-free',
    videoUrl: null,
    highlights: {
      vi: [
        'Độ sắc nét cao hơn 80%',
        'Nhanh gấp 3x với SmartSpeed Precise',
        'Nam châm BlueSeal không helium',
        'Trải nghiệm Ambient Experience'
      ],
      en: [
        'Up to 80% higher sharpness',
        '3x faster with SmartSpeed Precise',
        'Helium-free BlueSeal magnet',
        'Ambient Experience'
      ]
    },
    features: [
      {
        title: { vi: 'SmartSpeed Precise', en: 'SmartSpeed Precise' },
        desc: {
          vi: 'Tăng tốc quét MRI lên gấp 3 lần cho mọi giải phẫu mà vẫn duy trì chất lượng hình ảnh vượt trội.',
          en: 'Accelerates MRI scanning up to 3x for all anatomies while maintaining superior image quality.'
        },
      },
      {
        title: { vi: 'Chất lượng hình ảnh vượt trội', en: 'Superior Image Quality' },
        desc: {
          vi: 'Độ sắc nét hình ảnh cao hơn 80% ngay cả ở bệnh nhân khó chụp, nhờ công nghệ gradient và RF tiên tiến.',
          en: 'Up to 80% higher image sharpness even for challenging patients, thanks to advanced gradient and RF technology.'
        },
      },
    ],
    documents: [
      { label: 'Ingenia Ambition Product Brochure', url: 'https://www.documents.philips.com/assets/20250815/e94547b493814a33b385b33a0083fd80.pdf' },
    ],
    specifications: [
      { label: { vi: 'Từ trường', en: 'Field Strength' }, value: { vi: '1.5 Tesla', en: '1.5 Tesla' } },
      { label: { vi: 'Nam châm', en: 'Magnet' }, value: { vi: 'BlueSeal (kín hoàn toàn)', en: 'BlueSeal (fully sealed)' } },
      { label: { vi: 'Tăng tốc', en: 'Acceleration' }, value: { vi: 'SmartSpeed Precise (gấp 3x)', en: 'SmartSpeed Precise (up to 3x)' } },
      { label: { vi: 'Độ sắc nét', en: 'Sharpness' }, value: { vi: 'Cao hơn tới 80%', en: 'Up to 80% higher' } },
    ]
  },
  {
    id: 'ingenia-elition-3.0t-s',
    slug: 'HC781357-ingenia-elition-3-0t-s',
    name: 'Ingenia Elition 3.0T S',
    subtitle: {
      vi: 'Hệ thống cộng hưởng từ 3.0T',
      en: '3.0T MRI System'
    },
    deviceType: 'mri',
    priceTier: 'cao-cap',
    brand: 'Philips Healthcare',
    description: {
      vi: 'Ingenia Elition 3.0T S mang đến chất lượng hình ảnh tuyệt vời và thực hiện khám MRI nhanh hơn 50%. Compressed SENSE tăng tốc quét 2D và 3D cho năng suất cao.',
      en: '3.0T imaging at your fingertips. Ingenia Elition 3.0T S delivers superb image quality and performs MRI exams up to 50% faster.'
    },
    longDescription: {
      vi: 'Ingenia Elition S cung cấp chất lượng hình ảnh 3.0T tuyệt vời và thực hiện khám MRI nhanh hơn 50%. Compressed SENSE tăng tốc quét 2D và 3D. Năng suất cao nhờ các khả năng hình ảnh tiên tiến như SmartExam, 4D Multi-Transmit và ScanWise Implant, từ sự kết hợp giữa thiết kế gradient và RF mới cùng công nghệ tăng tốc.',
      en: 'The Ingenia Elition S delivers superb 3.0T image quality and performs MRI exams up to 50% faster. Compressed SENSE accelerates in both 2D and 3D scanning. High productivity is achieved with advanced imaging capabilities such as SmartExam, 4D Multi-Transmit and ScanWise Implant, from a combination of new gradient and RF designs plus acceleration technologies.'
    },
    images: [
      '/assets/images/products/ingenia-elition-3.0t-s.png',
    ],
    thumbnail: '/assets/images/products/ingenia-elition-3.0t-s.png',
    sourceUrl: 'https://www.philips.com.au/healthcare/product/HC781357/ingenia-elition-30t-s-30t-imaging-at-your-fingertips',
    videoUrl: null,
    highlights: {
      vi: [
        'MRI 3.0T nhanh hơn 50%',
        'Compressed SENSE 2D/3D',
        '4D Multi-Transmit',
        'ScanWise Implant'
      ],
      en: [
        '50% faster 3.0T MRI',
        'Compressed SENSE 2D/3D',
        '4D Multi-Transmit',
        'ScanWise Implant'
      ]
    },
    features: [
      {
        title: { vi: 'Compressed SENSE', en: 'Compressed SENSE' },
        desc: {
          vi: 'Tăng tốc quét 2D và 3D, giúp giảm 50% thời gian khám MRI.',
          en: 'Accelerates 2D and 3D scanning, helping reduce MRI exam time by 50%.'
        },
      },
      {
        title: { vi: '4D Multi-Transmit', en: '4D Multi-Transmit' },
        desc: {
          vi: 'Điều chỉnh trường RF theo từng bệnh nhân ở cả 3 chiều, đảm bảo chất lượng hình ảnh đồng nhất.',
          en: 'Adjusts the RF field per patient in all 3 dimensions, ensuring consistent image quality.'
        },
      },
      {
        title: { vi: 'ScanWise Implant', en: 'ScanWise Implant' },
        desc: {
          vi: 'Đơn giản hóa quy trình quét bệnh nhân có cấy ghép kim loại, tuân thủ điều kiện quét an toàn.',
          en: 'Simplifies scanning for patients with implants, ensuring compliance with safe scan conditions.'
        },
      },
    ],
    documents: [],
    specifications: [
      { label: { vi: 'Từ trường', en: 'Field Strength' }, value: { vi: '3.0 Tesla', en: '3.0 Tesla' } },
      { label: { vi: 'Tăng tốc', en: 'Acceleration' }, value: { vi: 'Compressed SENSE', en: 'Compressed SENSE' } },
      { label: { vi: 'RF', en: 'RF' }, value: { vi: '4D Multi-Transmit', en: '4D Multi-Transmit' } },
      { label: { vi: 'Cấy ghép', en: 'Implant' }, value: { vi: 'ScanWise Implant', en: 'ScanWise Implant' } },
    ]
  },
  {
    id: 'ingenia-elition-3.0t-x',
    slug: 'HC781358-ingenia-elition-3-0t-x',
    name: 'Ingenia Elition 3.0T X',
    subtitle: {
      vi: 'Hệ thống cộng hưởng từ 3.0T cao cấp',
      en: 'Premium 3.0T MRI System'
    },
    deviceType: 'mri',
    priceTier: 'cao-cap',
    brand: 'Philips Healthcare',
    description: {
      vi: 'Ingenia Elition 3.0T X — Bước đột phá cách mạng về chất lượng chẩn đoán và tốc độ. Kết hợp thiết kế gradient và RF tiên tiến với các kỹ thuật hình ảnh MR đỉnh cao.',
      en: 'A revolutionary breakthrough in diagnostic quality — and speed. Combines cutting-edge gradient and RF designs with state-of-the-art MR imaging techniques.'
    },
    longDescription: {
      vi: 'Ingenia Elition X cung cấp các kỹ thuật hình ảnh MR tiên tiến nhất, đồng thời thiết lập tiêu chuẩn mới cho nghiên cứu lâm sàng ở 3.0T. Hệ thống đạt chất lượng hình ảnh tuyệt vời và thực hiện khám MRI nhanh hơn 50%. Thời gian khám nhanh nhờ cải thiện quy trình thiết lập bệnh nhân không chạm, kết hợp với tăng tốc quét 2D và 3D. Trải nghiệm nghe-nhìn nhập vai giúp bệnh nhân thư giãn.',
      en: 'The Ingenia Elition X offers cutting-edge MR imaging techniques while setting new standards for clinical research in 3.0T imaging. The system delivers superb image quality and performs MRI exams up to 50% faster. Fast overall exam-time is achieved by improving patient setup at the bore with touchless guided patient setup, combined with accelerations in both 2D and 3D scanning.'
    },
    images: [
      '/assets/images/products/ingenia-elition-3.0t-x.png',
    ],
    thumbnail: '/assets/images/products/ingenia-elition-3.0t-x.png',
    sourceUrl: 'https://www.philips.com.au/healthcare/product/HC781358/ingenia-elition-30t-x',
    videoUrl: null,
    highlights: {
      vi: [
        'Đột phá chất lượng chẩn đoán',
        'Nhanh hơn 50% với tăng tốc AI',
        'Thiết lập bệnh nhân không chạm',
        'Nghiên cứu lâm sàng 3.0T'
      ],
      en: [
        'Breakthrough diagnostic quality',
        '50% faster with AI acceleration',
        'Touchless patient setup',
        '3.0T clinical research'
      ]
    },
    features: [
      {
        title: { vi: 'Chất lượng chẩn đoán đột phá', en: 'Breakthrough Diagnostic Quality' },
        desc: {
          vi: 'Thiết kế gradient và RF tiên tiến mang đến hình ảnh 3.0T chi tiết chưa từng có, hỗ trợ cả lâm sàng và nghiên cứu.',
          en: 'Advanced gradient and RF designs deliver unprecedented 3.0T imaging detail, supporting both clinical and research applications.'
        },
      },
      {
        title: { vi: 'Thiết lập bệnh nhân không chạm', en: 'Touchless Guided Patient Setup' },
        desc: {
          vi: 'Cải thiện tốc độ thiết lập bệnh nhân với hướng dẫn tự động, giảm thời gian khám tổng thể.',
          en: 'Improves patient setup speed with automated guidance, reducing overall exam time.'
        },
      },
    ],
    documents: [],
    specifications: [
      { label: { vi: 'Từ trường', en: 'Field Strength' }, value: { vi: '3.0 Tesla', en: '3.0 Tesla' } },
      { label: { vi: 'Gradient', en: 'Gradient' }, value: { vi: 'Thiết kế gradient tiên tiến', en: 'Advanced gradient design' } },
      { label: { vi: 'Tăng tốc', en: 'Acceleration' }, value: { vi: 'SmartSpeed + Compressed SENSE', en: 'SmartSpeed + Compressed SENSE' } },
      { label: { vi: 'Thiết lập', en: 'Setup' }, value: { vi: 'Hướng dẫn không chạm', en: 'Touchless guided setup' } },
    ]
  },
  {
    id: 'mr-7700',
    slug: 'HCNMRF429-mr-7700',
    name: 'MR 7700',
    subtitle: {
      vi: 'Hệ thống cộng hưởng từ 3.0T đỉnh cao',
      en: 'Ultimate 3.0T MRI System'
    },
    deviceType: 'mri',
    priceTier: 'cao-cap',
    brand: 'Philips Healthcare',
    description: {
      vi: 'MR 7700 — Hiệu suất và độ chính xác chưa từng có. Hệ thống MRI 3.0T đỉnh cao của Philips với khả năng Multi-Nuclei, SmartSpeed Precise và Compressed SENSE AI.',
      en: 'Unmatched performance and precision. Philips\' ultimate 3.0T MRI system with Multi-Nuclei capability, SmartSpeed Precise and Compressed SENSE AI.'
    },
    longDescription: {
      vi: 'MR 7700 là hệ thống MRI 3.0T cao cấp nhất của Philips, mang đến hiệu suất và độ chính xác chưa từng có. Với khả năng chụp Multi-Nuclei (đa hạt nhân), hệ thống mở rộng ranh giới MR vượt xa hydrogen thông thường — bao gồm Sodium (23Na), Phosphorus (31P) và Carbon (13C). Được thiết kế cho cả lâm sàng đỉnh cao và nghiên cứu tiên tiến.',
      en: 'MR 7700 is Philips\' most advanced 3.0T MRI system, delivering unmatched performance and precision. With Multi-Nuclei imaging capability, the system extends MR boundaries beyond conventional hydrogen — including Sodium (23Na), Phosphorus (31P) and Carbon (13C). Designed for both top-tier clinical work and advanced research.'
    },
    images: [
      '/assets/images/products/mr-7700.png',
    ],
    thumbnail: '/assets/images/products/mr-7700.png',
    sourceUrl: 'https://www.philips.com.au/healthcare/product/HCNMRF429/mr-7700',
    videoUrl: null,
    highlights: {
      vi: [
        'Hình ảnh Multi-Nuclei (đa hạt nhân)',
        'SmartSpeed Precise AI',
        'DWI độ phân giải cực cao',
        'DTI 196 hướng'
      ],
      en: [
        'Multi-Nuclei imaging',
        'SmartSpeed Precise AI',
        'Ultra-high resolution DWI',
        'DTI 196 directions'
      ]
    },
    features: [
      {
        title: { vi: 'Hình ảnh Multi-Nuclei', en: 'Multi-Nuclei Imaging' },
        desc: {
          vi: 'Mở rộng ranh giới MR vượt xa hydrogen — bao gồm Sodium (23Na), Phosphorus (31P) và Carbon (13C) cho nghiên cứu chuyên sâu.',
          en: 'Extends MR boundaries beyond hydrogen — including Sodium (23Na), Phosphorus (31P) and Carbon (13C) for advanced research.'
        },
      },
      {
        title: { vi: 'DWI/DTI độ phân giải cực cao', en: 'Ultra-High Resolution DWI/DTI' },
        desc: {
          vi: 'DWI với giá trị b lên đến 10,000 và DTI 196 hướng cho phép phân tích vi cấu trúc chi tiết nhất từ trước đến nay.',
          en: 'DWI with b-values up to 10,000 and DTI with 196 directions enable the most detailed microstructure analysis ever.'
        },
      },
    ],
    documents: [
      { label: 'MR 7700 Product Brochure', url: 'https://www.documents.philips.com/assets/20230629/730b1db814834d7e8a9db0300143eff9.pdf' },
    ],
    specifications: [
      { label: { vi: 'Từ trường', en: 'Field Strength' }, value: { vi: '3.0 Tesla', en: '3.0 Tesla' } },
      { label: { vi: 'Multi-Nuclei', en: 'Multi-Nuclei' }, value: { vi: '23Na, 31P, 13C', en: '23Na, 31P, 13C' } },
      { label: { vi: 'DWI', en: 'DWI' }, value: { vi: 'b-value lên đến 10,000', en: 'b-value up to 10,000' } },
      { label: { vi: 'DTI', en: 'DTI' }, value: { vi: '196 hướng', en: '196 directions' } },
      { label: { vi: 'Tăng tốc', en: 'Acceleration' }, value: { vi: 'SmartSpeed Precise + Compressed SENSE AI', en: 'SmartSpeed Precise + Compressed SENSE AI' } },
    ]
  },
];
