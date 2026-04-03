"use client";

import { useEffect } from "react";

/**
 * ScrollAnimator — replaces GSAP ScrollTrigger.
 * Observes all `.fade-in-up` elements and adds `.is-visible`
 * when they enter the viewport.
 */
export default function ScrollAnimator() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-up");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
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

    return () => observer.disconnect();
  }, []);

  return null; // renderless component
}
