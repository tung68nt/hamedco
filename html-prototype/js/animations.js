/* ============================================================
   HAMEDCO — GSAP Animations (Phase 4)
   60fps scroll-triggered animations using GSAP + ScrollTrigger
   PRD Requirement: "thiết kế UI/UX theo tiêu chuẩn quốc tế (60fps GSAP/Framer Motion)"
   ============================================================ */

(function () {
  'use strict';

  // Bail out if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Make everything visible immediately
    document.querySelectorAll('.fade-in-up').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  // Wait for GSAP to load
  function waitForGSAP(cb, retries) {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      cb();
    } else if (retries > 0) {
      setTimeout(() => waitForGSAP(cb, retries - 1), 100);
    }
  }

  waitForGSAP(function () {
    gsap.registerPlugin(ScrollTrigger);

    // ── Global defaults ────────────────────────────────────
    gsap.defaults({
      ease: 'power3.out',
      duration: 0.8
    });

    // ── Disable CSS transitions for GSAP-managed elements ──
    // Critically, we MUST disable the CSS transition so it doesn't fight GSAP's inline updates
    // and we must do this BEFORE creating gsap.from() tweens so GSAP reads target opacity as 1, not 0!
    document.querySelectorAll('.fade-in-up, .section-header *, .philips-bento-grid > *').forEach(el => {
      el.style.transition = 'none';
      if (el.classList.contains('fade-in-up')) {
        el.classList.add('is-visible');
      }
    });

    // ── Hero Content Entrance ──────────────────────────────
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      const heroTl = gsap.timeline({ delay: 0.3 });

      const heroBadge = heroContent.querySelector('.hero-badge');
      const heroH1 = heroContent.querySelector('h1');
      const heroP = heroContent.querySelector('p');
      const heroActions = heroContent.querySelector('.hero-actions');

      if (heroBadge) {
        heroTl.from(heroBadge, {
          y: 30, opacity: 0, duration: 0.6
        });
      }
      if (heroH1) {
        heroTl.from(heroH1, {
          y: 40, opacity: 0, duration: 0.8
        }, '-=0.3');
      }
      if (heroP) {
        heroTl.from(heroP, {
          y: 30, opacity: 0, duration: 0.7
        }, '-=0.4');
      }
      if (heroActions) {
        heroTl.from(heroActions.children, {
          y: 20, opacity: 0, duration: 0.5, stagger: 0.15,
          immediateRender: false,
          clearProps: 'all'
        }, '-=0.3');
      }

      // Hero dots
      const heroDots = document.querySelector('.hero-dots');
      if (heroDots) {
        heroTl.from(heroDots, {
          y: 20, opacity: 0, duration: 0.5
        }, '-=0.2');
      }
    }

    // ── Stats Counter (GSAP number tween) ──────────────────
    const statItems = document.querySelectorAll('.stat-item');
    if (statItems.length) {
      statItems.forEach((item, i) => {
        const numEl = item.querySelector('[data-counter]');
        if (!numEl) return;

        const target = parseInt(numEl.getAttribute('data-counter'), 10);

        // Animate the container in
        gsap.from(item, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.12,
          clearProps: 'all',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            once: true
          },
          onComplete: () => {
            item.style.opacity = '1';
            item.style.transform = 'none';
          }
        });

        // Animate the number
        const counter = { val: 0 };
        ScrollTrigger.create({
          trigger: numEl,
          start: 'top 90%',
          once: true,
          onEnter: () => {
            gsap.to(counter, {
              val: target,
              duration: 2,
              ease: 'power2.out',
              onUpdate: () => {
                numEl.textContent = Math.floor(counter.val);
              },
              onComplete: () => {
                numEl.textContent = target;
              }
            });
          }
        });
      });
    }

    // ── Section Headers ────────────────────────────────────
    document.querySelectorAll('.section-header').forEach(header => {
      const overline = header.querySelector('.overline');
      const h2 = header.querySelector('h2');
      const p = header.querySelector('p');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: header,
          start: 'top 80%',
          once: true
        }
      });

      if (overline) {
        tl.from(overline, { y: 20, opacity: 0, duration: 0.5 });
      }
      if (h2) {
        tl.from(h2, { y: 25, opacity: 0, duration: 0.6 }, '-=0.2');
      }
      if (p) {
        tl.from(p, { y: 20, opacity: 0, duration: 0.5 }, '-=0.3');
      }
    });

    // ── Product / Service Cards (Stagger Grid) ─────────────
    // Note: Exclude .stats-section .grid-4 — that has its own GSAP animation via .stat-item
    document.querySelectorAll('.products-grid, .testimonials-grid, .why-grid').forEach(grid => {
      const cards = grid.children;
      if (!cards.length) return;

      gsap.from(cards, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        clearProps: 'all',
        scrollTrigger: {
          trigger: grid,
          start: 'top 80%',
          once: true
        }
      });
    });

    // Generic grid-4 animations (but NOT inside stats section)
    document.querySelectorAll('.grid.grid-4').forEach(grid => {
      if (grid.closest('.stats-section')) return; // Skip stats — handled separately
      const cards = grid.children;
      if (!cards.length) return;

      gsap.from(cards, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        clearProps: 'all',
        scrollTrigger: {
          trigger: grid,
          start: 'top 80%',
          once: true
        }
      });
    });

    // ── Philips Bento Grid ─────────────────────────────────
    const philipsGrid = document.querySelector('.philips-bento-grid');
    if (philipsGrid) {
      gsap.from(philipsGrid.children, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        clearProps: 'all',
        scrollTrigger: {
          trigger: philipsGrid,
          start: 'top 80%',
          once: true
        }
      });
    }

    // ── Certificate Grid ───────────────────────────────────
    const certGrid = document.querySelector('.cert-grid');
    if (certGrid) {
      gsap.from(certGrid.children, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        scrollTrigger: {
          trigger: certGrid,
          start: 'top 80%',
          once: true
        }
      });
    }

    // ── Process Steps (Sequential with connector) ──────────
    const processSteps = document.querySelector('.process-steps');
    if (processSteps) {
      gsap.from(processSteps.children, {
        y: 40,
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: processSteps,
          start: 'top 80%',
          once: true
        }
      });
    }

    // ── FAQ Accordion Items ────────────────────────────────
    const faqList = document.querySelector('.faq-list');
    if (faqList) {
      gsap.from(faqList.children, {
        x: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: faqList,
          start: 'top 80%',
          once: true
        }
      });
    }

    // ── CTA Section (Parallax + Fade) ──────────────────────
    const ctaSection = document.querySelector('.cta-section');
    if (ctaSection) {
      const ctaContent = ctaSection.querySelector('.cta-content');
      const ctaForm = ctaSection.querySelector('.inquiry-form');

      if (ctaContent) {
        gsap.from(ctaContent, {
          x: -50,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ctaSection,
            start: 'top 75%',
            once: true
          }
        });
      }

      if (ctaForm) {
        gsap.from(ctaForm, {
          x: 50,
          opacity: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: ctaSection,
            start: 'top 75%',
            once: true
          }
        });
      }
    }

    // ── About Section (Split layout) ───────────────────────
    document.querySelectorAll('.split').forEach(split => {
      const left = split.children[0];
      const right = split.children[1];
      if (!left || !right) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: split,
          start: 'top 75%',
          once: true
        }
      });

      tl.from(left, { x: -40, opacity: 0, duration: 0.7 });
      tl.from(right, { x: 40, opacity: 0, duration: 0.7 }, '-=0.4');
    });

    // ── Footer CTA Bar ─────────────────────────────────────
    const footerCta = document.querySelector('.footer-cta-bar');
    if (footerCta) {
      gsap.from(footerCta, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: footerCta,
          start: 'top 90%',
          once: true
        }
      });
    }

    // ── Footer Grid Columns ────────────────────────────────
    const footerGrid = document.querySelector('.footer-grid');
    if (footerGrid) {
      gsap.from(footerGrid.children, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: footerGrid,
          start: 'top 90%',
          once: true
        }
      });
    }

    // ── Smooth Scroll Enhancement ──────────────────────────
    // Add smooth parallax to hero background
    const heroCarousel = document.querySelector('.hero-carousel');
    if (heroCarousel) {
      gsap.to(heroCarousel, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });
    }

  }, 50); // Retry 50 times (5 seconds max wait)
})();
