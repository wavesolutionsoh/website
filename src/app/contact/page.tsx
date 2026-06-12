import type { Metadata } from "next";
import Image from "next/image";
import { SiteFrame } from "@/components/site-chrome";
import { ItemGrid, LeadFormSection, MediaFeature, PageHero, SectionBand } from "@/components/site-sections";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact WAVE Solutions LLC",
  description: "Start a conversation with WAVE Solutions about answering services and virtual receptionist support.",
};

export default function ContactPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow={siteConfig.form.eyebrow}
        title={siteConfig.form.heading}
        text={siteConfig.form.text}
        highlights={[siteConfig.company.phone, siteConfig.company.email, siteConfig.company.location]}
        aside={
          <div data-motion-reveal className="marble motion-card relative aspect-[4/3] min-h-[18rem] shadow-[0_26px_70px_rgba(0,0,0,0.24)]">
            <Image
              src="/images/contact-virtual-assistant-network.png"
              alt="Network of three professional virtual assistants working from organized home offices"
              fill
              priority
              sizes="(min-width: 1024px) 36vw, 92vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,42,96,0.08),transparent_34%),linear-gradient(0deg,rgba(6,42,96,0.16),transparent_44%)]" />
          </div>
        }
      />
      <LeadFormSection />
      <SectionBand title="Public contact information" body={[siteConfig.footer.summary]} variant="soft">
        <MediaFeature
          title="WAVE can be positioned as a visible communication layer for your business."
          body={[siteConfig.cta.text]}
          placeholder={{
            eyebrow: "Contact image",
            title: "Professional communication desk",
            text: "Placeholder for a support-oriented image that sits alongside the form and reinforces responsiveness without pulling focus from conversion.",
          }}
          align="left"
        />
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            <a href={`tel:${siteConfig.company.phoneHref}`} className="relative overflow-hidden rounded-[18px] rounded-br-[26px] border border-[#dce6ef] bg-[linear-gradient(160deg,#ffffff,#edf5fb)] p-6 text-sm font-extrabold leading-7 text-[#062A60] shadow-[0_16px_38px_rgba(6,42,96,0.10)]">
              <span className="absolute inset-y-0 left-0 w-1 bg-[#F58220]" />
              {siteConfig.company.phone}
            </a>
            <a href={`mailto:${siteConfig.company.email}`} className="relative overflow-hidden rounded-[18px] rounded-br-[26px] border border-[#dce6ef] bg-[linear-gradient(160deg,#ffffff,#edf5fb)] p-6 text-sm font-extrabold leading-7 text-[#062A60] shadow-[0_16px_38px_rgba(6,42,96,0.10)]">
              <span className="absolute inset-y-0 left-0 w-1 bg-[#0077C8]" />
              {siteConfig.company.email}
            </a>
            <div className="relative overflow-hidden rounded-[18px] rounded-br-[26px] border border-[#dce6ef] bg-[linear-gradient(160deg,#ffffff,#edf5fb)] p-6 text-sm font-extrabold leading-7 text-[#062A60] shadow-[0_16px_38px_rgba(6,42,96,0.10)]">
              <span className="absolute inset-y-0 left-0 w-1 bg-[#062A60]" />
              {siteConfig.company.location}
            </div>
          </div>
          <ItemGrid items={siteConfig.approach.process.slice(0, 3)} />
        </div>
      </SectionBand>
    </SiteFrame>
  );
}
