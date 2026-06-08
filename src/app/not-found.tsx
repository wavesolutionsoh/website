import Link from "next/link";
import { SiteFrame } from "@/components/site-chrome";
import { PageHero, SectionBand } from "@/components/site-sections";
import { siteConfig } from "@/content/site";

export default function NotFound() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Page not found"
        title="This Wave Solutions page is not available."
        text="Use the links below to get back to the main website sections."
        highlights={siteConfig.waveAreas}
      />
      <SectionBand title="Continue exploring Wave Solutions" variant="soft">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Industries", href: "/industries" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-white p-5 text-sm font-extrabold uppercase tracking-[0.08em] text-[#062A60] shadow-[0_14px_34px_rgba(6,42,96,0.10)] transition hover:text-[#0077C8]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </SectionBand>
    </SiteFrame>
  );
}
