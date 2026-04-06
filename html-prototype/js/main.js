/* ============================================================
   HAMEDCO — Main JavaScript
   Navigation, Scroll Effects, Counters, Animations
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNav();
  initScrollAnimations();
  initCounterAnimation();
  initScrollToTop();
  initLangSwitcher();
  initLightbox();
  initFaqAccordion();
  initHeroCarousel();
  initContactFab();
  initHomeProducts();
});

/* ── Sticky Header with Shadow ──────────────────────────── */
function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });
}

/* ── Mobile Navigation Toggle ───────────────────────────── */
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.nav-mobile');
  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    toggle.classList.toggle('active');
    toggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      mobileNav.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      toggle.focus();
    }
  });

  // Close on link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* ── Scroll Animations (Intersection Observer) ──────────── */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in-up');
  if (!elements.length) return;

  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ── Counter Animation ──────────────────────────────────── */
function initCounterAnimation() {
  // Skip if GSAP animations will handle counters
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') return;

  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-counter'), 10);
    const duration = 2000;
    const start = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out curve
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(el => observer.observe(el));
}

/* ── Scroll to Top ──────────────────────────────────────── */
function initScrollToTop() {
  // Old scroll-top button
  const oldBtn = document.querySelector('.scroll-top');
  if (oldBtn) {
    window.addEventListener('scroll', () => {
      oldBtn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    oldBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // New floating-top button (shows on scroll)
  const topBtn = document.getElementById('floatingTop');
  if (topBtn) {
    window.addEventListener('scroll', () => {
      topBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
  }
}

/* ── Language Switcher ──────────────────────────────────── */
function initLangSwitcher() {
  const switcher = document.querySelector('.lang-switcher');
  if (!switcher) return;

  const btn = switcher.querySelector('.lang-btn');
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = switcher.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
  });

  document.addEventListener('click', () => {
    switcher.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });

  // Close lang dropdown on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && switcher.classList.contains('open')) {
      switcher.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });

  // Use manual i18n system (no Google Translate)
  // i18n.js handles translation logic via applyTranslation() and updateLangSwitcherUI()

  switcher.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', () => {
      const lang = option.getAttribute('data-lang');
      
      // Apply translation without page reload
      if (typeof applyTranslation === 'function') {
        applyTranslation(lang);
        updateLangSwitcherUI(lang);
      }
      
      switcher.classList.remove('open');
    });
  });
}

/* ── Lightbox ───────────────────────────────────────────── */
function initLightbox() {
  const lightbox = document.querySelector('.lightbox');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  let triggerEl = null; // Store the element that opened the lightbox

  document.querySelectorAll('[data-lightbox]').forEach(img => {
    img.addEventListener('click', () => {
      triggerEl = img;
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      // Focus the close button for keyboard access
      if (closeBtn) closeBtn.focus();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) {
      closeLightbox();
    }
    // Focus trap inside lightbox
    if (e.key === 'Tab' && lightbox.classList.contains('open')) {
      const focusables = lightbox.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    // Return focus to the trigger element
    if (triggerEl) {
      triggerEl.focus();
      triggerEl = null;
    }
  }
}

/* ── FAQ Accordion ──────────────────────────────────────── */
/* ── Hero Carousel ──────────────────────────────────────── */
function initHeroCarousel() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (slides.length < 2) return;

  let current = 0;
  let interval;

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function goTo(i) {
    slides[current].classList.remove('active');
    slides[current].setAttribute('aria-hidden', 'true');
    if (dots[current]) {
      dots[current].classList.remove('active');
      dots[current].setAttribute('aria-current', 'false');
    }
    current = (i + slides.length) % slides.length;
    slides[current].classList.add('active');
    slides[current].setAttribute('aria-hidden', 'false');
    if (dots[current]) {
      dots[current].classList.add('active');
      dots[current].setAttribute('aria-current', 'true');
    }
  }

  function startAutoplay() {
    if (prefersReducedMotion) return; // Don't auto-advance if user prefers reduced motion
    interval = setInterval(() => goTo(current + 1), 5000);
  }

  // Set initial ARIA states
  slides.forEach((slide, i) => {
    slide.setAttribute('aria-hidden', i === 0 ? 'false' : 'true');
    slide.setAttribute('role', 'group');
    slide.setAttribute('aria-roledescription', 'slide');
    slide.setAttribute('aria-label', `Slide ${i + 1} / ${slides.length}`);
  });

  dots.forEach((dot, i) => {
    dot.setAttribute('aria-current', i === 0 ? 'true' : 'false');
    dot.addEventListener('click', () => {
      clearInterval(interval);
      goTo(i);
      startAutoplay();
    });
  });

  startAutoplay();
}

/* ── Floating CTA Toggle ───────────────────────────────── */
function initContactFab() {
  const cta = document.getElementById('floatingCta');
  if (!cta) return;

  const toggle = cta.querySelector('.floating-toggle');
  if (!toggle) return;

  const iconOpen = '<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>';
  const iconClosed = '<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>';
  const label = toggle.querySelector('.toggle-label');

  function updateToggle() {
    const isOpen = cta.classList.contains('open');
    toggle.querySelector('svg').outerHTML = isOpen ? iconOpen : iconClosed;
    toggle.setAttribute('aria-expanded', isOpen);
    if (label) label.textContent = isOpen ? 'Đóng' : 'Liên hệ';
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    cta.classList.toggle('open');
    updateToggle();
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!cta.contains(e.target) && cta.classList.contains('open')) {
      cta.classList.remove('open');
      updateToggle();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cta.classList.contains('open')) {
      cta.classList.remove('open');
      updateToggle();
      toggle.focus();
    }
  });
}

/* ── FAQ Accordion ──────────────────────────────────────── */
function initFaqAccordion() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');

      // Close all and set aria-expanded=false
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        const b = i.querySelector('.faq-question');
        if (b) b.setAttribute('aria-expanded', 'false');
      });

      // Toggle current
      if (!wasOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });

    // Allow Enter and Space to activate
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });
}

/* ── Home Products Grid (Philips Ultrasound) ────────────── */
function initHomeProducts() {
  const grid = document.getElementById('homeProductsGrid');
  if (!grid || typeof PHILIPS_PRODUCTS === 'undefined') return;

  const lang = getCurrentLang ? getCurrentLang() : 'vi';

  function renderProducts(currentLang) {
    // Show 6 featured products on homepage
    const featured = PHILIPS_PRODUCTS.slice(0, 6);
    grid.innerHTML = featured.map((product, i) => {
      const subtitle = product.subtitle[currentLang] || product.subtitle.vi;
      const desc = product.description[currentLang] || product.description.vi;
      const category = product.categoryLabel[currentLang] || product.categoryLabel.vi;
      const detailLabel = currentLang === 'en' ? 'Details' : 'Chi ti\u1EBFt';
      
      return `
        <article class="card product-card fade-in-up stagger-${i + 1}">
          <img src="${product.thumbnail}" alt="${product.name} - ${subtitle}" class="card-image" loading="lazy" onerror="this.src='assets/images/products/placeholder.webp'">
          <div class="card-body">
            <span class="product-brand">Philips Healthcare</span>
            <h3 class="card-title"><a href="chi-tiet.html?id=${product.slug}">${product.name}</a></h3>
            <p class="card-text">${desc.substring(0, 120)}${desc.length > 120 ? '...' : ''}</p>
            <span class="product-category-tag" style="display:inline-block;background:rgba(11,94,215,0.08);color:#0B5ED7;padding:4px 10px;border-radius:6px;font-size:0.75rem;font-weight:600;margin-bottom:8px;">${category}</span>
            <a href="chi-tiet.html?id=${product.slug}" class="card-link">
              ${detailLabel}
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
        </article>
      `;
    }).join('');
  }

  renderProducts(lang);

  // Re-render on language change
  document.addEventListener('langchange', (e) => {
    renderProducts(e.detail.lang);
  });
}
