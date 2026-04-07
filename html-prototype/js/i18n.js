/* ============================================================
   HAMEDCO — Bilingual CMS (VI/EN)
   Hệ thống quản lý nội dung song ngữ độc lập
   Ưu tiên bản dịch manual, không dùng Google Translate
   ============================================================ */

const I18N_TRANSLATIONS = {
  en: {
    // === TOP BAR ===
    "topbar.address": "5th Floor, Vimeco, Pham Hung, Cau Giay, Hanoi",
    "topbar.hours": "Mon – Fri: 08:00 – 17:00 | Sat: 08:00 – 11:45",

    // === HERO ===
    "hero.badge": "Authorized Distributor of Philips Healthcare in Vietnam",
    "hero.title": "Advanced Healthcare<br>Solutions by Philips",
    "hero.desc": "Pioneering diagnostic imaging technology and intelligent clinical monitoring. HAMEDCO is the authorized distributor bringing Philips Connected Care ecosystem to hundreds of hospitals nationwide.",

    // === STATS ===
    "stats.experience": "Years of Experience",
    "stats.partners": "International Partners",
    "stats.products": "Products",
    "stats.projects": "Deployed Projects",

    // === ABOUT ===
    "about.overline": "ABOUT HAMEDCO",
    "about.title": "Leading Medical Equipment Solutions Provider in Vietnam – Strategic Partner of Philips",
    "about.desc": "Established in 2005, <strong>Hanoi Medical Equipment and Supplies Joint Stock Company (HAMEDCO)</strong> is the authorized distributor of Philips Healthcare in Vietnam. With over 20 years of experience, we have positioned ourselves as a trusted partner to hundreds of hospitals and healthcare facilities nationwide through the provision of state-of-the-art imaging diagnostics and critical care solutions.",

    // === PRODUCTS ===
    "products.overline": "Featured Products",
    "products.title": "Philips Ultrasound & Diagnostic Imaging Solutions",
    "products.desc": "Leading the smart ultrasound era, Philips offers a comprehensive range of solutions – from flexible handheld devices to high-performance specialized systems – meeting clinical needs at every level. In Vietnam, HAMEDCO is the authorized distributor of Philips, bringing the Connected Care ecosystem to hundreds of hospitals and healthcare facilities nationwide.",

    // === SERVICES ===
    "services.overline": "Services",
    "services.title": "Comprehensive Solutions",
    "services.desc": "Partnering with clients from consultation, deployment to maintenance — ensuring optimal equipment operation",
    "services.consulting.title": "Solution Consulting",
    "services.consulting.desc": "Analyzing needs and proposing the most suitable equipment solutions for each specialty and facility scale.",
    "services.deployment.title": "Deployment & Installation",
    "services.deployment.desc": "Professional technical team, standards-compliant installation per manufacturer specifications, complete operational handover.",
    "services.maintenance.title": "Maintenance & Warranty",
    "services.maintenance.desc": "Official manufacturer warranty, scheduled preventive maintenance, rapid repairs — ensuring maximum uptime.",
    "services.training.title": "Technology Transfer & User Training",
    "services.training.desc": "Implementing technology transfer programs and equipment training for medical staff, ensuring proper operation procedures, effective feature utilization and optimal clinical application throughout the equipment lifecycle.",

    // === PHILIPS PARTNERSHIP ===
    "philips.badge": "Authorized Philips Healthcare Distributor",
    "philips.title": "HAMEDCO – Philips Healthcare Distributor in Vietnam",
    "philips.desc": "Proud to be the authorized distributor of Philips in Vietnam, HAMEDCO partners to bring advanced medical ecosystems and modern technology solutions to hospitals and healthcare facilities nationwide",

    // === WHY CHOOSE US ===
    "why.overline": "WHY CHOOSE HAMEDCO?",
    "why.title": "Trusted Partner of Hundreds of Hospitals Nationwide",
    "why.desc": "We are committed to delivering comprehensive medical equipment solutions with outstanding service quality.",
    "why.item1.title": "1. 100% Genuine Guarantee",
    "why.item1.desc": "Committed to distributing genuine products from leading manufacturers (Philips). Complete with CO-CQ certificates, import licenses and medical device circulation permits (TTBYT) in accordance with current regulations.",
    "why.item2.title": "2. 24/7 Technical Response",
    "why.item2.desc": "Our specialized technical team is always ready. We commit to responding and providing solutions 24/7 to ensure healthcare systems operate smoothly.",
    "why.item3.title": "3. In-depth Technology Transfer",
    "why.item3.desc": "Beyond supplying equipment, HAMEDCO focuses on systematic training and technology transfer. Detailed operational guidance for medical staff to optimize equipment capabilities in diagnosis and treatment.",
    "why.item4.title": "4. Comprehensive Warranty & Maintenance",
    "why.item4.desc": "Official manufacturer warranty from 12–24 months. Scheduled preventive maintenance and on-site spare parts inventory, minimizing downtime when issues arise.",
    "why.item5.title": "5. 20+ Years of Hands-on Experience",
    "why.item5.desc": "With over 20 years alongside Vietnam's healthcare sector, HAMEDCO deeply understands the operational processes and practical needs of Vietnamese hospitals, delivering optimal solutions in both functionality and cost.",

    // === PROCESS ===
    "process.step1.title": "Consultation & Survey",
    "process.step1.desc": "Expert team conducts on-site assessment, analyzes needs and proposes suitable solutions.",
    "process.step2.title": "Quotation & Contract",
    "process.step2.desc": "Detailed quotation preparation, transparent contract negotiation with the most favorable terms.",
    "process.step3.title": "Installation & Handover",
    "process.step3.desc": "Standards-compliant installation, technology transfer, training and user guidance for the entire operations team.",

    // === FOOTER ===
    "footer.hours": "Mon – Fri: 08:00 – 17:00 | Sat: 08:00 – 11:45",
    "footer.badge.support": "Quick 24/7 Support",

    // === NAVIGATION ===
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.products": "Products",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.news": "News",
    "nav.contact": "Contact",
    "nav.quote": "Request Quote"
  }
};

// Store original Vietnamese content
const I18N_ORIGINALS = {};

/**
 * Initialize i18n system
 */
function initI18n() {
  // Get saved language preference
  const savedLang = localStorage.getItem('hamedco_lang') || 'vi';
  
  // Store all original VI content on first load
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    I18N_ORIGINALS[key] = el.innerHTML;
  });

  // Apply language if not Vietnamese
  if (savedLang !== 'vi') {
    applyTranslation(savedLang);
    updateLangSwitcherUI(savedLang);
  }
}

/**
 * Apply translation for a given language
 * @param {string} lang - Language code ('vi' or 'en')
 */
function applyTranslation(lang) {
  if (lang === 'vi') {
    // Restore original Vietnamese content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (I18N_ORIGINALS[key]) {
        el.innerHTML = I18N_ORIGINALS[key];
      }
    });
  } else if (lang === 'en' && I18N_TRANSLATIONS.en) {
    // Apply English translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (I18N_TRANSLATIONS.en[key]) {
        el.innerHTML = I18N_TRANSLATIONS.en[key];
      }
    });
  }

  // Save preference
  localStorage.setItem('hamedco_lang', lang);
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
  
  // Dispatch custom event for other components
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

/**
 * Update the language switcher button UI
 * @param {string} lang - Active language code
 */
function updateLangSwitcherUI(lang) {
  const flags = { vi: '🇻🇳', en: '🇬🇧' };
  const labels = { vi: 'VI', en: 'EN' };
  
  const flagEl = document.querySelector('.lang-flag');
  const labelEl = document.querySelector('.lang-label');
  
  if (flagEl) flagEl.textContent = flags[lang] || flags.vi;
  if (labelEl) labelEl.textContent = labels[lang] || labels.vi;
  
  // Update active state in dropdown
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });
}

/**
 * Get current language
 * @returns {string} Current language code
 */
function getCurrentLang() {
  return localStorage.getItem('hamedco_lang') || 'vi';
}

// Auto-init when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initI18n();
});
