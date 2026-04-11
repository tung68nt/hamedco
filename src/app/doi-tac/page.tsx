"use client";

import Link from "next/link";
import PageHero from "../../components/layout/PageHero";
import { useLocale } from "../../components/LocaleProvider";

/* ─── Data ─────────────────────────────────────────────────── */

const CENTRAL_HOSPITALS = [
  { name: "Bệnh viện Bạch Mai", short: "BV Bạch Mai", domain: "bachmai.gov.vn", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_BachMaiHospital.png" },
  { name: "BV Hữu nghị Việt Đức", short: "Việt Đức", domain: "benhvienvietduc.org", logo: "/assets/images/partners/hữu-nghị-việt-đức-logo.jpg" },
  { name: "Bệnh viện Chợ Rẫy", short: "BV Chợ Rẫy", domain: "choray.vn", logo: "/assets/images/partners/choray-ddg.png" },
  { name: "BV TW Quân đội 108", short: "Quân đội 108", domain: "benhvien108.vn", logo: "/assets/images/partners/108-wiki.jpg" },
  { name: "Bệnh viện 103", short: "BV 103", domain: "benhvien103.vn", logo: "/assets/images/partners/103-official.png" },
  { name: "Bệnh viện 175", short: "BV 175", domain: "benhvien175.vn", logo: "/assets/images/partners/175-ddg.png" },
  { name: "Bệnh viện K", short: "BV K", domain: "benhvienk.vn", logo: "/assets/images/partners/k-ddg.png" },
  { name: "BV Phổi Trung ương", short: "BV Phổi TW", domain: "bvptw.org", logo: "/assets/images/partners/phoitw-official.svg" },
];

const PROVINCIAL_HOSPITALS = [
  { name: "Sở Y tế Hà Nội", short: "SYT Hà Nội", domain: "soyte.hanoi.gov.vn", logo: "/assets/images/partners/sohanoi-ddg.png" },
  { name: "Sở Y tế TP.HCM", short: "SYT HCM", domain: "medinet.gov.vn", logo: "/assets/images/partners/sotphcm-ddg.png" },
  { name: "Sở Y tế Đà Nẵng", short: "SYT Đà Nẵng", domain: "soyte.danang.gov.vn", logo: "/assets/images/partners/sodanang-ddg.png" },
  { name: "BV ĐK tỉnh Nghệ An", short: "BVĐK Nghệ An", domain: "benhviendakhoanghean.vn", logo: "/assets/images/partners/nghean-official.png" },
  { name: "BV ĐK tỉnh Thanh Hóa", short: "BVĐK Thanh Hóa", domain: "bvdktinhtranhhoa.vn", logo: "/assets/images/partners/thanhhoa-ddg.png" },
  { name: "BV ĐK tỉnh Quảng Nam", short: "BVĐK Quảng Nam", domain: "bvdkquangnam.vn", logo: "/assets/images/partners/quangnam-official.png" },
  { name: "BV ĐK tỉnh Bình Dương", short: "BVĐK Bình Dương", domain: "benhvienbinhduong.org.vn", logo: "/assets/images/partners/bình-dương-logo.png" },
  { name: "BV ĐK tỉnh Đồng Nai", short: "BVĐK Đồng Nai", domain: "benhviendongnai.com.vn", logo: "https://benhviendongnai.com.vn/wp-content/uploads/2022/08/logo.svg" },
];

const PRIVATE_HOSPITALS = [
  { name: "Hệ thống BV Tâm Anh", short: "Tâm Anh", domain: "tamanhhospital.vn", logo: "/assets/images/partners/tamanh-ddg.png" },
  { name: "Hệ thống BV Vinmec", short: "Vinmec", domain: "vinmec.com", logo: "/assets/images/partners/vinmec-logo.svg" },
  { name: "Hệ thống BV Hoàn Mỹ", short: "Hoàn Mỹ", domain: "hoanmy.com", logo: "/assets/images/partners/hoanmy-ddg.png" },
  { name: "Hệ thống BV Thu Cúc", short: "Thu Cúc", domain: "benhvienthucuc.vn", logo: "/assets/images/partners/thucuc-official.png" },
  { name: "BV Đa khoa Quốc tế", short: "BV Quốc tế", domain: "vih.vn", logo: "/assets/images/partners/vih-official.jpg" },
  { name: "Phòng khám Medlatec", short: "Medlatec", domain: "medlatec.vn", logo: "https://medlatec.vn/images/logo.png" },
];

const CASE_STUDIES = [
  {
    id: "cs-1",
    tag: { vi: "Chẩn đoán hình ảnh", en: "Medical Imaging" },
    title: { vi: "Lắp đặt hệ thống siêu âm Philips EPIQ Elite tại BV Bạch Mai", en: "Philips EPIQ Elite Ultrasound Installation at Bach Mai Hospital" },
    desc: { vi: "Triển khai toàn bộ hệ thống siêu âm chuyên sâu Philips EPIQ Elite cho Khoa Chẩn đoán hình ảnh — bao gồm hiệu chuẩn, đào tạo 30+ kỹ thuật viên và bàn giao vận hành đầy đủ theo tiêu chuẩn nhà sản xuất.", en: "Full deployment of Philips EPIQ Elite advanced ultrasound system for the Diagnostic Imaging Department — including calibration, training 30+ technicians, and complete operational handover per manufacturer standards." },
    stats: [
      { label: { vi: "Thiết bị", en: "Units" }, value: "6" },
      { label: { vi: "Kỹ thuật viên đào tạo", en: "Trained Staff" }, value: "30+" },
      { label: { vi: "Thời gian triển khai", en: "Deploy Time" }, value: "45 ngày" },
    ],
    image: "/assets/images/projects/ultrasound-install.webp",
  },
  {
    id: "cs-2",
    tag: { vi: "Phòng mổ", en: "Operating Room" },
    title: { vi: "Cung cấp đồng bộ thiết bị phòng mổ vô khuẩn cho BV Việt Đức", en: "Sterile OR Equipment Package for Viet Duc Hospital" },
    desc: { vi: "Gói thầu thiết bị phòng mổ vô khuẩn toàn diện — bao gồm đèn mổ LED tích hợp camera 4K, bàn mổ đa năng điều khiển điện, hệ thống khí y tế và panel điều khiển phòng mổ — đáp ứng tiêu chuẩn phòng mổ quốc tế ISO Class 7.", en: "Comprehensive sterile OR equipment package — including 4K integrated LED surgical lights, multi-function electric operating tables, medical gas systems, and OR control panels — meeting international ISO Class 7 OR standards." },
    stats: [
      { label: { vi: "Phòng mổ", en: "ORs" }, value: "12" },
      { label: { vi: "Giá trị hợp đồng", en: "Contract Value" }, value: "45 tỷ" },
      { label: { vi: "Thời gian triển khai", en: "Deploy Time" }, value: "60 ngày" },
    ],
    image: "/assets/images/projects/operating-room.webp",
  },
  {
    id: "cs-3",
    tag: { vi: "Gói thầu tỉnh", en: "Provincial Tender" },
    title: { vi: "Gói thầu thiết bị CĐHA trị giá 85 tỷ tại Sở Y tế Nghệ An", en: "85B VND Diagnostic Imaging Equipment Tender for Nghe An Health Dept." },
    desc: { vi: "Thắng thầu và triển khai thành công gói thiết bị chẩn đoán hình ảnh cho 8 bệnh viện tuyến tỉnh tại Nghệ An, bao gồm máy X-quang kỹ thuật số, máy siêu âm 4D và hệ thống RIS/PACS đồng bộ theo chuẩn HL7 FHIR.", en: "Successfully won and deployed diagnostic imaging equipment for 8 provincial hospitals in Nghe An, including digital X-ray, 4D ultrasound, and HL7 FHIR-compliant RIS/PACS systems." },
    stats: [
      { label: { vi: "Bệnh viện", en: "Hospitals" }, value: "8" },
      { label: { vi: "Giá trị gói thầu", en: "Tender Value" }, value: "85 tỷ" },
      { label: { vi: "Thiết bị triển khai", en: "Units Deployed" }, value: "120+" },
    ],
    image: "/assets/images/projects/diagnostic-handover.webp",
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
          "Hơn 20 năm kiến tạo niềm tin – Hàng trăm dự án y tế thành công trên toàn quốc.",
          "Over 20 years building trust – Hundreds of successful healthcare projects nationwide."
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
