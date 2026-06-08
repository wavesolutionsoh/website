import type { Metadata } from "next";
import { SiteFrame } from "@/components/site-chrome";
import { ItemGrid, LeadFormSection, PageHero, SectionBand } from "@/components/site-sections";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Wave Solutions LLC",
  description: "Start a conversation with Wave Solutions about answering services and virtual receptionist support.",
};

export default function ContactPage() {
  return (
    <SiteFrame>
      <PageHero eyebrow={siteConfig.form.eyebrow} title={siteConfig.form.heading} text={siteConfig.form.text} highlights={[siteConfig.company.phone, siteConfig.company.email, siteConfig.company.location]} />
      <LeadFormSection />
      <SectionBand title="Public contact information" body={[siteConfig.footer.summary]} variant="soft">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            <a href={`tel:${siteConfig.company.phoneHref}`} className="border-l-4 border-[#F58220] bg-white p-6 text-sm font-extrabold leading-7 text-[#062A60] shadow-[0_14px_34px_rgba(6,42,96,0.10)]">
              {siteConfig.company.phone}
            </a>
            <a href={`mailto:${siteConfig.company.email}`} className="border-l-4 border-[#0077C8] bg-white p-6 text-sm font-extrabold leading-7 text-[#062A60] shadow-[0_14px_34px_rgba(6,42,96,0.10)]">
              {siteConfig.company.email}
            </a>
            <div className="border-l-4 border-[#062A60] bg-white p-6 text-sm font-extrabold leading-7 text-[#062A60] shadow-[0_14px_34px_rgba(6,42,96,0.10)]">
              {siteConfig.company.location}
            </div>
          </div>
          <ItemGrid items={siteConfig.approach.process.slice(0, 3)} />
        </div>
      </SectionBand>
    </SiteFrame>
  );
}
