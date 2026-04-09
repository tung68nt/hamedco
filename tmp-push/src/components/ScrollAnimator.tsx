"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ScrollAnimator — replaces GSAP ScrollTrigger.
 * Observes all `.fade-in-up` elements and adds `.is-visible`
 * when they enter the viewport. Re-runs on pathname change.
 */
export default function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver;

    // Small delay to allow Next.js to inject new DOM nodes
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".fade-in-up:not(.is-visible)");
      if (!elements.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target); // animate once
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
      );

      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  return null; // renderless component
}
