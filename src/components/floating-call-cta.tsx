"use client";

import { useEffect, useState } from "react";
import { PhoneCall } from "lucide-react";
import { siteConfig } from "@/content/site";

export function FloatingCallCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.85);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <a
      href={`tel:${siteConfig.company.phoneHref}`}
      aria-label={`Call WAVE at ${siteConfig.company.phone}`}
      title="Call WAVE"
      className={`group fixed bottom-5 left-5 z-50 grid h-16 w-16 place-items-center rounded-full border border-white/70 bg-[#F58220] text-white shadow-[0_18px_42px_rgba(6,42,96,0.28)] transition-[opacity,transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(6,42,96,0.34)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0077C8]/30 sm:bottom-7 sm:left-7 ${
        isVisible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-md bg-[#062A60] px-4 py-2 text-sm font-extrabold text-white opacity-0 shadow-[0_12px_28px_rgba(6,42,96,0.25)] transition-[opacity,transform] duration-200 ease-out group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:translate-x-1 group-focus-visible:opacity-100">
        Call WAVE
      </span>
      <PhoneCall className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
