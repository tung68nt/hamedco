export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "tin-cong-ty" | "nganh-y-te" | "kien-thuc";
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  updatedAt?: string;
  coverImage: string;
  content: string;
  tags: string[];
  relatedPosts?: string[];
  seo?: {
    title?: string;
    description?: string;
    canonical?: string;
    metaRobots?: "index,follow" | "noindex,follow" | "noindex,nofollow";
    faq?: Array<{ question: string; answer: string }>;
  };
}

export const BLOG_CATEGORIES = [
  { id: "tin-cong-ty", name: { vi: "Tin công ty", en: "Company News" }, slug: "tin-cong-ty" },
  { id: "nganh-y-te", name: { vi: "Ngành y tế", en: "Healthcare Industry" }, slug: "nganh-y-te" },
  { id: "kien-thuc", name: { vi: "Kiến thức", en: "Knowledge" }, slug: "kien-thuc" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "huong-dan-chon-may-sieu-am-phu-hop",
    title: "Hướng dẫn chọn máy siêu âm phù hợp cho phòng khám",
    subtitle: "Những tiêu chí quan trọng khi lựa chọn hệ thống siêu âm cho cơ sở y tế của bạn",
    category: "kien-thuc",
    author: {
      name: "HAMEDCO",
      avatar: "/assets/images/authors/hamedco.png",
    },
    publishedAt: "2026-03-15",
    updatedAt: "2026-03-15",
    coverImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=450&fit=crop",
    content: `
## Tổng quan

Việc lựa chọn máy siêu âm phù hợp là quyết định quan trọng ảnh hưởng đến chất lượng chẩn đoán và hiệu quả vận hành của phòng khám. Bài viết này sẽ hướng dẫn bạn các tiêu chí cần cân nhắc.

## 1. Xác định nhu cầu sử dụng

Trước tiên, bạn cần xác định rõ:
- Các chuyên khoa nào sẽ sử dụng máy (sản phụ khoa, tim mạch, chẩn đoán chung...)
- Số lượng bệnh nhân trung bình mỗi ngày
- Không gian phòng khám có giới hạn không

## 2. Các loại máy siêu âm

### Máy siêu âm cầm tay (Handheld)
- **Ưu điểm**: Di động, chi phí thấp, dễ sử dụng
- **Phù hợp**: Phòng khám nhỏ, cấp cứu, y tế di động

### Máy siêu âm di động (Portable)
- **Ưu điểm**: Linh hoạt, chất lượng hình ảnh tốt
- **Phù hợp**: Phòng khám đa khoa, bệnh viện tuyến dưới

### Máy siêu âm chuyên dụng (Cart-based)
- **Ưu điểm**: Chất lượng hình ảnh cao nhất, nhiều tính năng
- **Phù hợp**: Bệnh viện lớn, chuyên khoa sâu

## 3. Tiêu chí lựa chọn quan trọng

### Chất lượng hình ảnh
Độ phân giải và khả năng hiển thị hình ảnh là yếu tố hàng đầu. Nên chọn máy có công nghệ hình ảnh tiên tiến như PureWave, xMATRIX.

### Tính năng AI
Các tính năng AI hỗ trợ chẩn đoán ngày càng trở nên quan trọng, giúp:
- Tự động đo lường
- Phát hiện bất thường
- Hỗ trợ ra quyết định lâm sàng

### Chi phí sở hữu toàn diện
Ngoài giá mua, cần tính đến:
- Chi phí bảo trì, bảo dưỡng
- Chi phí vật tư tiêu hao
- Tuổi thọ thiết bị

## Kết luận

Việc chọn máy siêu âm cần dựa trên nhu cầu thực tế và ngân sách của cơ sở y tế. HAMEDCO sẵn sàng tư vấn miễn phí để giúp bạn đưa ra quyết định phù hợp nhất.
    `.trim(),
    tags: ["máy siêu âm", "chọn mua thiết bị", "phòng khám", "y tế"],
    relatedPosts: ["2", "3"],
    seo: {
      title: "Hướng dẫn chọn máy siêu âm phù hợp | HAMEDCO",
      description: "Tìm hiểu các tiêu chí quan trọng để chọn máy siêu âm phù hợp cho phòng khám. Tư vấn từ chuyên gia HAMEDCO về công nghệ và ngân sách.",
      faq: [
        {
          question: "Chi phí trung bình của một máy siêu âm là bao nhiêu?",
          answer: "Chi phí máy siêu âm dao động từ 100 triệu VNĐ (máy cầm tay) đến hàng tỷ VNĐ (máy chuyên dụng cao cấp), tùy thuộc vào tính năng và thương hiệu."
        },
        {
          question: "Thời gian bảo hành máy siêu âm là bao lâu?",
          answer: "Thông thường thời gian bảo hành từ 12-24 tháng, một số hãng có gói bảo hành mở rộng lên đến 5 năm."
        }
      ]
    }
  },
  {
    id: "2",
    slug: "cong-nghe-ai-trong-chuan-doan-hinh-anh",
    title: "Ứng dụng AI trong chẩn đoán hình ảnh y tế",
    subtitle: "Công nghệ AI đang cách mạng hóa ngành chẩn đoán hình ảnh như thế nào",
    category: "nganh-y-te",
    author: {
      name: "HAMEDCO",
    },
    publishedAt: "2026-03-10",
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=450&fit=crop",
    content: `
## Giới thiệu

Trí tuệ nhân tạo (AI) đang tạo ra bước đột phá lớn trong lĩnh vực chẩn đoán hình ảnh y tế, giúp bác sĩ phát hiện bệnh sớm hơn và chính xác hơn.

## Các ứng dụng AI phổ biến

### 1. Phát hiện ung thư
AI có khả năng phân tích hình ảnh X-quang, CT, MRI để phát hiện các dấu hiệu ung thư sớm với độ chính xác cao.

### 2. Hỗ trợ siêu âm tim
Các thuật toán AI giúp đo lường chức năng tim mạch tự động, giảm thời gian khám và tăng tính nhất quán.

### 3. Chẩn đoán bệnh võng mạc
AI được sử dụng rộng rãi trong sàng lọc bệnh võng mạc đái tháo đường.

## Lợi ích của AI trong y tế

- **Tăng tốc độ chẩn đoán**: Xử lý hình ảnh trong vài giây
- **Nâng cao độ chính xác**: Giảm thiểu sai sót do con người
- **Hỗ trợ bác sĩ**: Cung cấp second opinion tự động
- **Tiết kiệm chi phí**: Sàng lọc quy mô lớn với chi phí thấp
    `.trim(),
    tags: ["AI", "chẩn đoán hình ảnh", "công nghệ y tế", "machine learning"],
    seo: {
      title: "Ứng dụng AI trong chẩn đoán hình ảnh | HAMEDCO",
      description: "Khám phá cách AI đang cách mạng hóa chẩn đoán hình ảnh y tế. Từ phát hiện ung thư đến hỗ trợ siêu âm tim.",
    }
  },
  {
    id: "3",
    slug: "hamedco-khai-truong-trung-tam-moi",
    title: "HAMEDCO khai trương trung tâm dịch vụ tại Hà Nội",
    subtitle: "Mở rộng mạng lưới hỗ trợ kỹ thuật đến gần hơn với khách hàng miền Bắc",
    category: "tin-cong-ty",
    author: {
      name: "HAMEDCO",
    },
    publishedAt: "2026-03-01",
    coverImage: "https://images.unsplash.com/photo-1586773860418-d37222d8f0a7?w=800&h=450&fit=crop",
    content: `
## Thông báo chính thức

HAMEDCO vui mừng thông báo khai trương Trung tâm Dịch vụ và Hỗ trợ Kỹ thuật tại Hà Nội, đánh dấu bước tiến quan trọng trong chiến lược mở rộng dịch vụ trên toàn quốc.

## Thông tin trung tâm

**Địa chỉ**: Tầng 8, Tòa nhà Center Building, 1 Nguyễn Huy Tự, Đống Đa, Hà Nội

**Giờ hoạt động**: 8:00 - 18:00 (Thứ 2 - Thứ 7)

**Hotline**: 024 3588 8888

## Dịch vụ tại trung tâm

- Hỗ trợ kỹ thuật 24/7
- Đào tạo sử dụng thiết bị
- Bảo trì và bảo dưỡng định kỳ
- Kho phụ tùng chính hãng

## Cam kết

Với trung tâm mới, HAMEDCO cam kết:
- Thời gian phản hồi kỹ thuật tại miền Bắc: ≤ 4 giờ
- Đội ngũ kỹ sư được đào tạo chính hãng Philips
- Phục vụ 365 ngày/năm
    `.trim(),
    tags: ["tin tức", "HAMEDCO", "mở rộng", "dịch vụ"],
    seo: {
      title: "HAMEDCO khai trương trung tâm dịch vụ tại Hà Nội | HAMEDCO",
      description: "HAMEDCO khai trương trung tâm dịch vụ và hỗ trợ kỹ thuật tại Hà Nội, mở rộng mạng lưới hỗ trợ khách hàng miền Bắc.",
    }
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return BLOG_POSTS.filter(post => post.category === category);
}

export function getRelatedPosts(currentPostId: string, limit = 3): BlogPost[] {
  const currentPost = BLOG_POSTS.find(p => p.id === currentPostId);
  if (!currentPost?.relatedPosts) return BLOG_POSTS.slice(0, limit);
  
  return BLOG_POSTS.filter(p => currentPost.relatedPosts?.includes(p.id)).slice(0, limit);
}
