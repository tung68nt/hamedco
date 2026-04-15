"use client";

import Link from "next/link";
import PageHero from "../../components/layout/PageHero";
import { useLocale } from "../../components/LocaleProvider";

/* ─── Data ─────────────────────────────────────────────────── */

const CENTRAL_HOSPITALS = [
  { name: "Bệnh viện Bạch Mai", short: "BV Bạch Mai", domain: "bachmai.gov.vn", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_BachMaiHospital.png" },
  { name: "Bệnh viện Hữu Nghị", short: "BV Hữu Nghị", domain: "benhvienvietduc.org", logo: "/assets/images/partners/hữu-nghị-việt-đức-logo.jpg" },
  { name: "Bệnh viện K", short: "BV K", domain: "benhvienk.vn", logo: "/assets/images/partners/k-ddg.png" },
  { name: "Bệnh viện Phụ Sản TW", short: "BV Phụ Sản TW", domain: "benhviemphusan.org.vn", logo: "/assets/images/partners/phu-san-tw.png" },
  { name: "Bệnh viện Nhiệt đới TW", short: "BV Nhiệt đới TW", domain: "benhviennhietdoi.vn", logo: "/assets/images/partners/nhiet-doi-tw.png" },
  { name: "Bệnh viện Saint Paul", short: "BV Saint Paul", domain: "benhvienstpaul.vn", logo: "/assets/images/partners/saint-paul.png" },
  { name: "Bệnh viện Thanh Nhàn", short: "BV Thanh Nhàn", domain: "benhvien thanhnhan.vn", logo: "/assets/images/partners/thanh-nhan.png" },
  { name: "Bệnh viện Nhi Hà Nội", short: "BV Nhi Hà Nội", domain: "benhviennhi.org.vn", logo: "/assets/images/partners/nhi-hn.png" },
  { name: "Bệnh viện 108", short: "BV 108", domain: "benhvien108.vn", logo: "/assets/images/partners/108-wiki.jpg" },
  { name: "Bệnh viện 175", short: "BV 175", domain: "benhvien175.vn", logo: "/assets/images/partners/175-ddg.png" },
  { name: "Bệnh viện 103 - HVQY", short: "BV 103 HVQY", domain: "benhvien103.vn", logo: "/assets/images/partners/103-official.png" },
  { name: "Bệnh viện 198", short: "BV 198", domain: "benhvien198.vn", logo: "/assets/images/partners/198-bvcp.png" },
];

const PROVINCIAL_HOSPITALS = [
  { name: "Sở Y tế Hà Nội", short: "SYT Hà Nội", domain: "soyte.hanoi.gov.vn", logo: "/assets/images/partners/sohanoi-ddg.png" },
  { name: "Sở Y tế TP.HCM", short: "SYT HCM", domain: "medinet.gov.vn", logo: "/assets/images/partners/sotphcm-ddg.png" },
  { name: "Sở Y tế Đà Nẵng", short: "SYT Đà Nẵng", domain: "soyte.danang.gov.vn", logo: "/assets/images/partners/sodanang-ddg.png" },
  { name: "BV ĐK tỉnh Thừa Thiên Huế", short: "BVĐK Huế", domain: "huef.com.vn", logo: "/assets/images/partners/hue-ddg.png" },
  { name: "BV Trung ương Thái Nguyên", short: "BV TW Thái Nguyên", domain: "bvtiepthai.vn", logo: "/assets/images/partners/thai-nguyen.png" },
  { name: "BV ĐK tỉnh Tuyên Quang", short: "BVĐK Tuyên Quang", domain: "benhvientuyenchuong.vn", logo: "/assets/images/partners/tuyen-quang.png" },
  { name: "BV ĐK tỉnh Phú Thọ", short: "BVĐK Phú Thọ", domain: "benhvienphutho.vn", logo: "/assets/images/partners/phu-tho.png" },
  { name: "BV ĐK tỉnh Thanh Hóa", short: "BVĐK Thanh Hóa", domain: "bvdktinhtranhhoa.vn", logo: "/assets/images/partners/thanhhoa-ddg.png" },
  { name: "BV ĐK Quốc tế Hải Phòng", short: "BVĐK QTHP", domain: "hpavn.vn", logo: "/assets/images/partners/hiyeu-phong.png" },
];

const PRIVATE_HOSPITALS = [
  { name: "Bệnh viện Phenikaa", short: "Phenikaa", domain: "phenikaa-hospital.vn", logo: "/assets/images/partners/phenikaa.png" },
  { name: "Bệnh viện Hợp Lực", short: "BV Hợp Lực", domain: "benhvienhupluc.vn", logo: "/assets/images/partners/hop-luc.png" },
  { name: "Bệnh viện Quốc tế Thái Nguyên", short: "BV QT Thái Nguyên", domain: "taihuehospital.vn", logo: "/assets/images/partners/quoc-te-tn.png" },
  { name: "Bệnh viện Sakura", short: "Sakura", domain: "benhvien-sakura.vn", logo: "/assets/images/partners/sakura.png" },
];

const CASE_STUDIES = [
  {
    id: "cs-1",
    tag: { vi: "Chẩn đoán hình ảnh", en: "Medical Imaging" },
    title: { vi: "Lắp đặt 21 máy siêu âm Doppler màu 4 đầu dò cho Cục Y tế Bộ Công An", en: "Installation of 21 Color Doppler Ultrasound Systems with 4 Probes for Vietnam Ministry of Police" },
    desc: { vi: "Dự án đầu tư mua sắm trang thiết bị cho các bệnh viện, bệnh xá thuộc Công an nhân dân — triển khai lắp đặt toàn bộ 21 hệ thống siêu âm Doppler màu 4 đầu dò tại các cơ sở y tế trực thuộc Bộ Công an trên toàn quốc.", en: "Investment project to procure medical equipment for hospitals and clinics under the People's Police — deployment of 21 color Doppler ultrasound systems with 4 probes across all police medical facilities nationwide." },
    stats: [
      { label: { vi: "Thiết bị", en: "Units" }, value: "21" },
      { label: { vi: "Đầu dò", en: "Probes" }, value: "4/ máy" },
      { label: { vi: "Đơn vị triển khai", en: "Sites" }, value: "21" },
    ],
    image: "/assets/images/projects/ultrasound-install.webp",
  },
  {
    id: "cs-2",
    tag: { vi: "Chẩn đoán hình ảnh", en: "Medical Imaging" },
    title: { vi: "Lắp đặt 5 máy siêu âm cho Viện Bảo vệ và Chăm sóc sức khỏe cán bộ TW", en: "Installation of 5 Ultrasound Systems for Central Presidential Health Protection Institute" },
    desc: { vi: "Cung cấp và lắp đặt 5 máy siêu âm chuyên dụng phục vụ khám và điều trị tại Viện Bảo vệ và Chăm sóc sức khỏe cán bộ TW — đảm bảo tiêu chuẩn kỹ thuật cao nhất phục vụ cán bộ cao cấp.", en: "Supply and installation of 5 specialized ultrasound systems for medical examination and treatment at the Central Presidential Health Protection Institute — meeting the highest technical standards for senior officials." },
    stats: [
      { label: { vi: "Thiết bị", en: "Units" }, value: "5" },
      { label: { vi: "Năm", en: "Year" }, value: "2024" },
      { label: { vi: "Loại hình", en: "Type" }, value: "Siêu âm chuyên dụng" },
    ],
    image: "/assets/images/projects/ultrasound-install.webp",
  },
  {
    id: "cs-3",
    tag: { vi: "Chẩn đoán hình ảnh", en: "Medical Imaging" },
    title: { vi: "Lắp đặt 16 máy siêu âm cho Dự án BV Quân y 175 giai đoạn 2", en: "Installation of 16 Ultrasound Systems for Military Hospital 175 Phase 2" },
    desc: { vi: "Cung cấp và lắp đặt 16 máy siêu âm cho dự án đầu tư nội thất công trình và thiết bị y tế giai đoạn 2 cho Bệnh viện Quân y 175 (1.000 giường) — đồng bộ hóa hệ thống chẩn đoán hình ảnh hiện đại.", en: "Supply and installation of 16 ultrasound systems for Phase 2 of the medical facility and interior project at Military Hospital 175 (1,000 beds) — modernizing diagnostic imaging capabilities." },
    stats: [
      { label: { vi: "Thiết bị", en: "Units" }, value: "16" },
      { label: { vi: "Năm", en: "Year" }, value: "2025" },
      { label: { vi: "Quy mô", en: "Scale" }, value: "1.000 giường" },
    ],
    image: "/assets/images/projects/ultrasound-install.webp",
  },
  {
    id: "cs-4",
    tag: { vi: "Phòng mổ & CĐHA", en: "OR & Diagnostic Imaging" },
    title: { vi: "Hệ thống CT 64/128 lát, X-quang, C-arm cho BV Quân y 175", en: "CT 64/128 Slice, X-ray, C-arm Systems for Military Hospital 175" },
    desc: { vi: "Cung cấp và lắp đặt hệ thống thiết bị chẩn đoán hình ảnh cao cấp: hệ thống CT 64/128 lát, hệ thống X-quang treo trần, X-quang kỹ thuật số di động, C-arm phòng mổ, hệ thống chụp mạch số hóa xóa nền cho Dự án BV Quân y 175 giai đoạn 2.", en: "Supply and installation of advanced diagnostic imaging equipment: CT 64/128 slice system, ceiling-mounted X-ray, portable digital X-ray, C-arm for OR, and digital subtraction angiography system for Military Hospital 175 Phase 2." },
    stats: [
      { label: { vi: "Hệ thống CT", en: "CT Systems" }, value: "1" },
      { label: { vi: "X-quang treo trần", en: "Ceiling X-ray" }, value: "2" },
      { label: { vi: "C-arm", en: "C-arm Units" }, value: "2" },
    ],
    image: "/assets/images/projects/operating-room.webp",
  },
  {
    id: "cs-5",
    tag: { vi: "Chẩn đoán hình ảnh", en: "Medical Imaging" },
    title: { vi: "Cung cấp 23 máy siêu âm cho Bệnh viện Bạch Mai", en: "Supply of 23 Ultrasound Systems for Bach Mai Hospital" },
    desc: { vi: "Dự án mua sắm máy siêu âm cho các đơn vị chuyên môn của Bệnh viện Bạch Mai — trang bị 23 hệ thống siêu âm đa dạng phục vụ các khoa chuyên môn khác nhau, nâng cao năng lực chẩn đoán hình ảnh toàn diện.", en: "Procurement project for ultrasound systems for specialized departments of Bach Mai Hospital — equipping 23 ultrasound systems serving various departments, comprehensively enhancing diagnostic imaging capabilities." },
    stats: [
      { label: { vi: "Thiết bị", en: "Units" }, value: "23" },
      { label: { vi: "Năm", en: "Year" }, value: "2025" },
      { label: { vi: "Đơn vị", en: "Departments" }, value: "Đa khoa" },
    ],
    image: "/assets/images/projects/diagnostic-handover.webp",
  },
  {
    id: "cs-6",
    tag: { vi: "Trang thiết bị y tế", en: "Medical Equipment" },
    title: { vi: "Thiết bị buồng bệnh cho Dự án BV Quân y 175 giai đoạn 2", en: "Ward Equipment for Military Hospital 175 Phase 2" },
    desc: { vi: "Cung cấp và lắp đặt thiết bị buồng bệnh hoàn chỉnh cho dự án đầu tư nội thất công trình và thiết bị y tế giai đoạn 2 cho Bệnh viện Quân y 175 — đảm bảo tiêu chuẩn về giường bệnh, tủ bên giường và các trang thiết bị phục vụ người bệnh.", en: "Supply and installation of complete ward equipment for Phase 2 of the medical facility and interior project at Military Hospital 175 — ensuring standards for hospital beds, bedside cabinets and patient care equipment." },
    stats: [
      { label: { vi: "Năm", en: "Year" }, value: "2024" },
      { label: { vi: "Quy mô", en: "Scale" }, value: "1.000 giường" },
      { label: { vi: "Loại", en: "Type" }, value: "Thiết bị buồng bệnh" },
    ],
    image: "/assets/images/projects/operating-room.webp",
  },
  {
    id: "cs-7",
    tag: { vi: "Chẩn đoán hình ảnh", en: "Medical Imaging" },
    title: { vi: "Lắp đặt 10 máy siêu âm cho Cơ sở 2 Bệnh viện Bạch Mai", en: "Installation of 10 Ultrasound Systems for Bach Mai Hospital Branch 2" },
    desc: { vi: "Cung cấp và lắp đặt 10 máy siêu âm cho dự án đầu tư xây dựng mới cơ sở 2 của Bệnh viện Bạch Mai — đánh dấu bước tiến quan trọng trong việc hiện đại hóa hệ thống chẩn đoán hình ảnh của bệnh viện tuyến trung ương hàng đầu.", en: "Supply and installation of 10 ultrasound systems for the new construction project of Bach Mai Hospital Branch 2 — marking a significant step in modernizing the diagnostic imaging system of the leading central hospital." },
    stats: [
      { label: { vi: "Thiết bị", en: "Units" }, value: "10" },
      { label: { vi: "Năm", en: "Year" }, value: "2025" },
      { label: { vi: "Cơ sở", en: "Facility" }, value: "Cơ sở 2" },
    ],
    image: "/assets/images/projects/ultrasound-install.webp",
  },
];

/* ─── Hospital Logo Card ────────────────────────────────────── */
function HospitalCard({ name, short, logo }: { name: string; short: string; logo?: string }) {
  const initials = short.replace(/BV |SYT |HT /g, "").substring(0, 2).toUpperCase();
  
  return (
    <div className="hospital-card">
      <div className="hospital-logo-wrapper">
        {logo ? (
          <img 
            src={logo} 
            alt={name}
            className="hospital-logo-img fade-in"
            loading="lazy"
            onError={(e) => {
              // Hide image and show initials wrapper if load fails
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden-initials');
            }}
          />
        ) : null}
        <div className={`hospital-logo-placeholder ${logo ? 'hidden-initials' : ''}`}>
          <span>{initials}</span>
        </div>
      </div>
      <div className="hospital-name">{name}</div>
    </div>
  );
}

/* ─── Client Group ──────────────────────────────────────────── */
function ClientGroup({ title, icon, items }: { title: string; icon: React.ReactNode; items: { name: string; short: string; logo?: string }[] }) {
  return (
    <div className="client-group fade-in-up">
      <div className="client-group-header">
        <span className="client-group-icon">{icon}</span>
        <h3 className="client-group-title">{title}</h3>
      </div>
      <div className="hospital-grid">
        {items.map((h) => <HospitalCard key={h.name} name={h.name} short={h.short} logo={h.logo} />)}
      </div>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function PartnersPage() {
  const { t, locale } = useLocale();

  return (
    <>
      <PageHero
        title={t("Đối tác & Khách hàng", "Partners & Clients")}
        description={t(
          "Hơn 20 năm kiến tạo niềm tin – Hàng trăm dự án y tế thành công trên toàn quốc. Sự tin tưởng từ các tập đoàn y tế hàng đầu thế giới và các bệnh viện tuyến trung ương tại Việt Nam chính là thước đo chính xác nhất cho uy tín, năng lực và triết lý kinh doanh bền vững của HAMEDCO.",
          "Over 20 years building trust – Hundreds of successful healthcare projects nationwide. The trust from the world's leading healthcare corporations and Vietnam's central-level hospitals is the most accurate measure of HAMEDCO's reputation, capability, and sustainable business philosophy."
        )}
        breadcrumbs={[{ label: t("Đối tác", "Partners") }]}
      />

      {/* ═══ INTRO TAGLINE ═══ */}
      <section className="section bg-white">
        <div className="container">
          <div className="partners-intro fade-in-up">
            <p className="partners-intro-text">
              {t(
                "Sự tin tưởng từ các tập đoàn y tế hàng đầu thế giới và các bệnh viện tuyến trung ương tại Việt Nam chính là thước đo chính xác nhất cho uy tín, năng lực và triết lý kinh doanh bền vững của HAMEDCO.",
                "The trust from the world's leading healthcare corporations and Vietnam's central-level hospitals is the most accurate measure of HAMEDCO's reputation, capability, and sustainable business philosophy."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 1: PHILIPS FLAGSHIP PARTNER ═══ */}
      <section className="section bg-gray-50 philips-section">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <span className="overline">{t("Đối tác chiến lược toàn cầu", "Global Strategic Partner")}</span>
            <h2>{t("Nhà phân phối chính thức Philips Healthcare", "Official Philips Healthcare Distributor")}</h2>
          </div>

          {/* Philips Feature Card */}
          <div className="philips-feature-card fade-in-up">
            <div className="philips-logo-showcase">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Philips_logo_new.svg/1280px-Philips_logo_new.svg.png"
                alt="Philips Healthcare"
                className="philips-logo-xl"
              />
              <div className="philips-badge">
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                {t("Đối tác Phân phối Chính thức", "Official Distribution Partner")}
              </div>
            </div>
            <div className="philips-feature-content">
              <p className="philips-positioning">
                {t(
                  "HAMEDCO tự hào là nhà phân phối chiến lược các hệ thống chẩn đoán hình ảnh và siêu âm của Philips tại thị trường Việt Nam.",
                  "HAMEDCO is proud to be the strategic distributor of Philips imaging and ultrasound systems in the Vietnamese market."
                )}
              </p>
              <div className="philips-stats">
                {[
                  { num: "20+", label: t("Năm hợp tác", "Years Together") },
                  { num: "500+", label: t("Hệ thống đã triển khai", "Systems Deployed") },
                  { num: "200+", label: t("Bệnh viện phục vụ", "Hospitals Served") },
                ].map((s) => (
                  <div className="philips-stat" key={s.label}>
                    <div className="philips-stat-num">{s.num}</div>
                    <div className="philips-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="partner-testimonial fade-in-up">
            <div className="testimonial-quote-icon">
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="testimonial-body">
              {t(
                "\"Thị trường thiết bị y tế Việt Nam đòi hỏi những tiêu chuẩn khắt khe về chuyên môn và dịch vụ bảo trì. Chúng tôi chọn HAMEDCO làm đối tác phân phối vì họ không chỉ có năng lực thầu xuất sắc mà còn sở hữu đội ngũ kỹ sư y sinh tận tâm, đảm bảo các thiết bị Philips luôn vận hành hoàn hảo nhất để phục vụ bệnh nhân.\"",
                "\"The Vietnamese medical equipment market demands strict standards of expertise and maintenance service. We chose HAMEDCO as our distribution partner because they not only have outstanding tendering capabilities but also possess a dedicated biomedical engineering team, ensuring Philips equipment always operates at its best to serve patients.\""
              )}
            </blockquote>
            <div className="testimonial-attribution">
              <div className="testimonial-avatar-placeholder">PH</div>
              <div>
                <div className="testimonial-author-name">[Tên đại diện – Đang cập nhật]</div>
                <div className="testimonial-author-role">{t("Đại diện Philips Healthcare Việt Nam", "Philips Healthcare Vietnam Representative")}</div>
              </div>
            </div>
          </div>

          {/* Customer Testimonial */}
          <div className="partner-testimonial fade-in-up">
            <div className="testimonial-quote-icon">
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="testimonial-body">
              {t(
                "\"Trong lĩnh vực chẩn đoán hình ảnh, thiết bị không chỉ là công cụ mà là 'con mắt thứ hai' của người thầy thuốc. Tôi đánh giá cao HAMEDCO ở khả năng thấu hiểu nhu cầu lâm sàng: họ không chỉ cung cấp những hệ thống siêu âm có độ phân giải hình ảnh tối ưu, mà còn mang đến một hệ sinh thái dịch vụ kỹ thuật chuyên nghiệp. Sự kết hợp giữa thiết bị chất lượng cao từ các hãng hàng đầu và sự đồng hành tận tụy của HAMEDCO chính là chìa khóa giúp chúng tôi tối ưu hóa chính xác kết quả chẩn đoán, đảm bảo an toàn cao nhất cho bệnh nhân.\"",
                "\"In the field of diagnostic imaging, equipment is not just a tool but the 'second eyes' of physicians. I highly appreciate HAMEDCO's ability to understand clinical needs: they not only provide ultrasound systems with optimal image resolution, but also deliver a professional technical service ecosystem. The combination of high-quality equipment from leading brands and HAMEDCO's dedicated partnership is the key to helping us precisely optimize diagnostic results and ensure the highest safety for patients.\""
              )}
            </blockquote>
            <div className="testimonial-attribution">
              <div className="testimonial-avatar-placeholder">NMH</div>
              <div>
                <div className="testimonial-author-name">TS.BS Nguyễn Minh Hải</div>
                <div className="testimonial-author-role">{t("Phó Giám đốc Trung tâm Siêu âm, Bệnh viện Quân y 103", "Deputy Director of Ultrasound Center, Military Hospital 103")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: KEY CLIENTS ═══ */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <span className="overline">{t("Khách hàng tiêu biểu", "Key Clients")}</span>
            <h2>{t("Được tin tưởng bởi các cơ sở y tế hàng đầu", "Trusted by Leading Healthcare Institutions")}</h2>
            <p>{t(
              "Từ bệnh viện tuyến trung ương đến các hệ thống y tế tư nhân hàng đầu, HAMEDCO đồng hành với những cơ sở y tế uy tín nhất Việt Nam.",
              "From central-level hospitals to leading private healthcare systems, HAMEDCO partners with Vietnam's most prestigious medical institutions."
            )}</p>
          </div>

          <div className="client-groups">
            <ClientGroup
              title={t("Bệnh viện Tuyến Trung ương", "National Central Hospitals")}
              items={CENTRAL_HOSPITALS}
              icon={
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
            />
            <ClientGroup
              title={t("Sở Y tế & Bệnh viện Tuyến Tỉnh", "Provincial Health Depts & Hospitals")}
              items={PROVINCIAL_HOSPITALS}
              icon={
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            />
            <ClientGroup
              title={t("Bệnh viện & Phòng khám Tư nhân", "Private Hospitals & Clinics")}
              items={PRIVATE_HOSPITALS}
              icon={
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3: CASE STUDIES ═══ */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <span className="overline">{t("Dự án tiêu biểu", "Case Studies")}</span>
            <h2>{t("Những dấu ấn triển khai nổi bật", "Landmark Project Implementations")}</h2>
            <p>{t(
              "Minh chứng cụ thể về năng lực thi công, quản lý dự án và bàn giao chuyên nghiệp của HAMEDCO.",
              "Concrete evidence of HAMEDCO's proven technical, project management, and handover capabilities."
            )}</p>
          </div>

          <div className="case-studies-list">
            {CASE_STUDIES.map((cs, i) => (
              <div className={`case-study-item fade-in-up ${i % 2 === 1 ? "reverse" : ""}`} key={cs.id}>
                <div className="case-study-image">
                  <img src={cs.image} alt={cs.title[locale]} loading="lazy" />
                  <span className="case-study-tag">{cs.tag[locale]}</span>
                </div>
                <div className="case-study-content">
                  <h3 className="case-study-title">{cs.title[locale]}</h3>
                  <p className="case-study-desc">{cs.desc[locale]}</p>
                  <div className="case-study-stats">
                    {cs.stats.map((s) => (
                      <div className="case-stat" key={s.label[locale]}>
                        <div className="case-stat-value">{s.value}</div>
                        <div className="case-stat-label">{s.label[locale]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4: CTA ═══ */}
      <section className="cta-section section-lg partners-cta">
        <div className="container">
          <div className="cta-content text-center fade-in-up">
            <span className="overline" style={{ color: "var(--color-accent)" }}>
              {t("Hợp tác cùng HAMEDCO", "Partner with HAMEDCO")}
            </span>
            <h2 className="display-sm">
              {t(
                "Cùng HAMEDCO nâng tầm chất lượng y tế của cơ sở bạn",
                "Let HAMEDCO Elevate Your Healthcare Facility's Quality"
              )}
            </h2>
            <p className="body-lg" style={{ maxWidth: 700, margin: "20px auto 40px" }}>
              {t(
                "Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng tư vấn cấu hình, lập dự toán và triển khai các gói thầu trang thiết bị y tế chuyên sâu nhất.",
                "Our expert team is always ready to consult on configurations, prepare estimates, and implement the most specialized medical equipment tender packages."
              )}
            </p>
            <Link href="/lien-he" className="btn btn-accent btn-xl">
              {t("Nhận tư vấn dự án ngay", "Get Project Consultation Now")}
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
