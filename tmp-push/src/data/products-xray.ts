/* ============================================================
   HAMEDCO — Philips X-ray (Radiography) Product Catalog
   Danh mục sản phẩm X-quang Philips chính thức
   ============================================================ */

export const XRAY_PRODUCTS = [
  {
    id: 'digitaldiagnost-c90',
    slug: 'HC712034-digitaldiagnost-c90',
    name: 'DigitalDiagnost C90',
    subtitle: {
      vi: 'Hệ thống X-quang kỹ thuật số',
      en: 'Digital Radiography System'
    },
    deviceType: 'x-quang',
    priceTier: 'tam-trung',
    brand: 'Philips Healthcare',
    description: {
      vi: 'DigitalDiagnost C90 (Radiography 7000 C) mang đến hiệu suất quy trình cao với Eleva Tube Head, cấu hình phòng linh hoạt, quy trình không lưới với SkyFlow, và chẩn đoán chắc chắn nhờ xử lý ảnh UNIQUE 2.',
      en: 'High workflow efficiency with Eleva Tube Head, flexible room configurations, gridless workflow with SkyFlow, and confident diagnosis thanks to UNIQUE 2 image processing and Philips Bone Suppression.'
    },
    longDescription: {
      vi: 'Hệ thống DigitalDiagnost C90 cho phép xem nhiều bệnh nhân hơn mỗi ngày và rút ngắn thời gian chờ đợi bằng cách giảm thời gian chẩn đoán với các công cụ sáng tạo thúc đẩy hiệu quả quy trình. Camera trực tiếp trên đầu ống, cấu hình phòng đa dạng và công nghệ tự động hóa khám giúp đảm bảo thông lượng bệnh nhân vượt trội.',
      en: 'The DigitalDiagnost C90 system allows you to see more patients per day and shorten patient wait times by decreasing time to diagnosis with innovative tools that drive workflow efficiency. Live tube head camera, versatile room configurations, and exam automation technologies ensure outstanding patient throughput.'
    },
    images: [
      'https://images.philips.com/is/image/PhilipsConsumer/HC712034-IMS-en_AA?wid=1024&$jpglarge$',
    ],
    thumbnail: 'https://images.philips.com/is/image/PhilipsConsumer/HC712034-IMS-en_AA?wid=1024&$jpglarge$',
    sourceUrl: 'https://www.philips.com.au/healthcare/product/HC712034/digitaldiagnost-c90',
    videoUrl: null,
    highlights: {
      vi: [
        'Eleva Tube Head màn hình cảm ứng',
        'Quy trình không lưới SkyFlow',
        'Xử lý ảnh UNIQUE 2',
        'Tải trọng bệnh nhân 375 kg'
      ],
      en: [
        'Eleva Tube Head touchscreen',
        'SkyFlow gridless workflow',
        'UNIQUE 2 image processing',
        '375 kg patient load'
      ]
    },
    features: [
      {
        title: { vi: 'Eleva Tube Head', en: 'Eleva Tube Head' },
        desc: {
          vi: 'Đầu ống với màn hình LCD cảm ứng màu 12.1 inch, hiển thị dữ liệu bệnh nhân, ảnh preview, thông số máy phát và hình ảnh camera trực tiếp.',
          en: 'Tube head with 12.1-inch color LCD touch display showing patient data, preview images, generator settings and live camera image.'
        },
      },
      {
        title: { vi: 'Quy trình không lưới SkyFlow', en: 'SkyFlow Gridless Workflow' },
        desc: {
          vi: 'Loại bỏ lưới chống tán xạ vật lý nhờ xử lý phần mềm tiên tiến, giảm liều bức xạ và đơn giản hóa quy trình.',
          en: 'Eliminates the physical anti-scatter grid through advanced software processing, reducing radiation dose and simplifying workflow.'
        },
      },
      {
        title: { vi: 'Xử lý ảnh UNIQUE 2', en: 'UNIQUE 2 Image Processing' },
        desc: {
          vi: 'Công nghệ xử lý hình ảnh độc quyền của Philips mang đến chất lượng ảnh chẩn đoán nhất quán trong mọi điều kiện chụp.',
          en: 'Philips\' proprietary image processing technology delivers consistent diagnostic image quality across all exposure conditions.'
        },
      },
    ],
    documents: [
      { label: 'Instruction for Use', url: 'https://www.documents.philips.com/assets/Instruction%20for%20Use/20201023/b70a649d0e474d9da548ac5d002f8fb7.pdf' },
      { label: 'Product Overview', url: 'https://www.documents.philips.com/assets/20211215/c8796611efd94696b5b8adff00934cce.pdf' },
    ],
    specifications: [
      { label: { vi: 'Đầu ống Eleva', en: 'Eleva Tube Head' }, value: { vi: 'Màn hình LCD cảm ứng 12.1" (30.7 cm)', en: '12.1" (30.7 cm) LCD touch display' } },
      { label: { vi: 'Bàn tăng giảm chiều cao', en: 'Height Adjustable Table' }, value: { vi: '51.5 cm đến 91.5 cm', en: '51.5 cm to 91.5 cm' } },
      { label: { vi: 'Kích thước bàn', en: 'Tabletop Dimensions' }, value: { vi: '240 cm × 75 cm', en: '240 cm × 75 cm' } },
      { label: { vi: 'Tải trọng bệnh nhân', en: 'Patient Load' }, value: { vi: 'Tối đa 375 kg', en: 'Max 375 kg (826.7 lb)' } },
      { label: { vi: 'Máy phát', en: 'Generator' }, value: { vi: '65 kW hoặc 80 kW', en: '65 kW or 80 kW' } },
      { label: { vi: 'Bóng X-quang', en: 'X-ray Tube' }, value: { vi: 'Tối đa 150 kV, tiêu cự 0.6/1.2 mm', en: 'Max 150 kV, focal spot 0.6/1.2 mm' } },
      { label: { vi: 'Đầu dò SkyPlate Large', en: 'SkyPlate Large Detector' }, value: { vi: '35 cm × 43 cm, Cesium Iodide, 148 μm pixel', en: '35 cm × 43 cm, Cesium Iodide, 148 μm pixel' } },
      { label: { vi: 'Đầu dò cố định', en: 'Fixed Detector' }, value: { vi: '43 cm × 43 cm, Cesium Iodide', en: '43 cm × 43 cm, Cesium Iodide' } },
    ]
  },
  {
    id: 'combidiagnost-r90',
    slug: 'HC709031-combidiagnost-r90',
    name: 'CombiDiagnost R90',
    subtitle: {
      vi: 'Hệ thống X-quang kỹ thuật số đa chức năng (DRF)',
      en: 'Cross-functional Digital Radiography-Fluoroscopy (DRF) System'
    },
    deviceType: 'x-quang',
    priceTier: 'tam-trung',
    brand: 'Philips Healthcare',
    description: {
      vi: 'CombiDiagnost R90 (Fluoroscopy 7000 R) là hệ thống DRF đa chức năng kết hợp X-quang kỹ thuật số và soi huỳnh quang trong cùng một phòng. Hỗ trợ cả Radiography và Fluoroscopy linh hoạt.',
      en: 'CombiDiagnost R90 (Fluoroscopy 7000 R) is a cross-functional DRF system combining digital radiography and fluoroscopy in one room. Supports both Radiography and Fluoroscopy flexibly.'
    },
    longDescription: {
      vi: 'CombiDiagnost R90 kết hợp X-quang kỹ thuật số và soi huỳnh quang trong cùng một hệ thống, mang đến sự linh hoạt tối đa cho phòng chẩn đoán. Hệ thống hỗ trợ đầy đủ các ứng dụng soi huỳnh quang (dạ dày-ruột, tiết niệu, ERCP, tiêm dưới hướng dẫn) cùng X-quang chụp phim (sọ, xương sườn, cột sống, phổi, bụng). Bàn nghiêng -90°/+90° và nhiều tùy chọn đầu dò linh hoạt.',
      en: 'CombiDiagnost R90 combines digital radiography and fluoroscopy in one system, delivering maximum flexibility for the diagnostic room. The system supports full fluoroscopy applications (GI, urinary, ERCP, guided injections) as well as radiographic exams (skull, ribs, spine, lung, abdomen). Table tilt -90°/+90° and flexible detector options.'
    },
    images: [
      'https://images.philips.com/is/image/PhilipsConsumer/HC709031-IMS-en_AA?wid=1024&$jpglarge$',
    ],
    thumbnail: 'https://images.philips.com/is/image/PhilipsConsumer/HC709031-IMS-en_AA?wid=1024&$jpglarge$',
    sourceUrl: 'https://www.philips.com.vn/healthcare/product/HC709031/combidiagnost-r90-cross-functional-drf-system',
    videoUrl: null,
    highlights: {
      vi: [
        'X-quang + Soi huỳnh quang 2-trong-1',
        'Bàn nghiêng -90° đến +90°',
        'Tải trọng bệnh nhân 284 kg',
        'Đầu dò SkyPlate không dây'
      ],
      en: [
        'Radiography + Fluoroscopy 2-in-1',
        'Table tilt -90° to +90°',
        '284 kg patient load',
        'Wireless SkyPlate detectors'
      ]
    },
    features: [
      {
        title: { vi: 'Đa chức năng 2-trong-1', en: 'Cross-functional 2-in-1' },
        desc: {
          vi: 'Kết hợp X-quang kỹ thuật số và soi huỳnh quang trong cùng một phòng, tối ưu hóa diện tích và đầu tư thiết bị.',
          en: 'Combines digital radiography and fluoroscopy in one room, optimizing space and equipment investment.'
        },
      },
      {
        title: { vi: 'Eleva Tube Head', en: 'Eleva Tube Head' },
        desc: {
          vi: 'Đầu ống với màn hình LCD cảm ứng màu 12.1 inch, nút điều khiển mã màu và cảm biến phanh 3 trục.',
          en: 'Tube head with 12.1-inch color LCD touch display, color-coded control buttons and 3-axis brake-release sensor.'
        },
      },
      {
        title: { vi: 'Đầu dò SkyPlate không dây', en: 'Wireless SkyPlate Detectors' },
        desc: {
          vi: 'Đầu dò SkyPlate Large (35×43 cm) và Small (24×30 cm) sử dụng Cesium Iodide cho chất lượng ảnh tối ưu.',
          en: 'SkyPlate Large (35×43 cm) and Small (24×30 cm) detectors using Cesium Iodide for optimal image quality.'
        },
      },
    ],
    documents: [
      { label: 'Upgrade and Benefit Program', url: 'https://www.documents.philips.com/assets/20210107/bad032d279ea47cb9bedaca901516ca1.pdf' },
      { label: 'Product Overview', url: 'https://www.documents.philips.com/assets/20201229/b2de123e480547f89fd1aca0016bbe20.pdf' },
      { label: 'Brochure', url: 'https://www.documents.philips.com/assets/20201229/02b2ff5d7536411690d5aca0016e760a.pdf' },
    ],
    specifications: [
      { label: { vi: 'Công suất máy phát', en: 'Generator Power' }, value: { vi: '65 kW (tùy chọn 80 kW)', en: '65 kW (optional 80 kW)' } },
      { label: { vi: 'Bóng soi', en: 'Fluoroscopy Tube' }, value: { vi: 'SRM 0608, 800 kHU, tiêu cự 0.6/0.8', en: 'SRM 0608, 800 kHU, focal 0.6/0.8' } },
      { label: { vi: 'Bóng chụp', en: 'Radiography Tube' }, value: { vi: 'SRO 33100, 300 kHU, tiêu cự 0.6/1.2, 150 kV', en: 'SRO 33100, 300 kHU, focal 0.6/1.2, 150 kV' } },
      { label: { vi: 'Đầu dò động', en: 'Dynamic Flat Detector' }, value: { vi: '43×43 cm, 148 µm pixel, lên đến 30 fps', en: '43×43 cm, 148 µm pixel, up to 30 fps' } },
      { label: { vi: 'Góc nghiêng bàn', en: 'Table Tilt' }, value: { vi: '-90° đến +90°', en: '-90° to +90°' } },
      { label: { vi: 'Tải trọng bệnh nhân', en: 'Max Patient Weight' }, value: { vi: '284 kg', en: '284 kg (626 lbs)' } },
      { label: { vi: 'SkyPlate Large', en: 'SkyPlate Large' }, value: { vi: '35×43 cm, Cesium Iodide, 148 µm', en: '35×43 cm, Cesium Iodide, 148 µm' } },
      { label: { vi: 'SkyPlate Small', en: 'SkyPlate Small' }, value: { vi: '24×30 cm, Cesium Iodide', en: '24×30 cm, Cesium Iodide' } },
    ]
  },
];
