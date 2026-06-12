"use client";

import { useEffect } from "react";

const revealSelector = "[data-motion-reveal]";

export function MotionController() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-motion-root]");

    if (!root) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observed = new WeakSet<Element>();
    const cleanupTimers = new Set<number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);

          const target = entry.target as HTMLElement;
          const staggerIndex = Number(target.style.getPropertyValue("--stagger-index")) || 0;
          const cleanupTimer = window.setTimeout(
            () => {
              target.classList.remove("reveal-element", "is-visible");
              target.classList.add("motion-entered");
              target.style.removeProperty("--stagger-index");
              cleanupTimers.delete(cleanupTimer);
            },
            700 + staggerIndex * 60,
          );

          cleanupTimers.add(cleanupTimer);
        });
      },
      {
        rootMargin: "0px 0px -8%",
        threshold: 0.12,
      },
    );

    const registerTargets = () => {
      const targets = Array.from(root.querySelectorAll<HTMLElement>(revealSelector));

      targets.forEach((target) => {
        if (observed.has(target)) {
          return;
        }

        const group = target.closest("[data-motion-group]") as HTMLElement | null;
        const groupTargets = group ? Array.from(group.querySelectorAll<HTMLElement>(revealSelector)) : [target];
        const staggerIndex = Math.max(0, groupTargets.indexOf(target));

        target.style.setProperty("--stagger-index", String(staggerIndex));
        target.classList.add("reveal-element");
        observed.add(target);

        if (reducedMotion.matches) {
          target.classList.remove("reveal-element");
          target.classList.add("motion-entered");
        } else {
          observer.observe(target);
        }
      });

      root.classList.add("motion-ready");
    };

    registerTargets();

    const mutationObserver = new MutationObserver(registerTargets);
    mutationObserver.observe(root, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      cleanupTimers.forEach((timer) => window.clearTimeout(timer));
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
