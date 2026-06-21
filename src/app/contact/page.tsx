import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/json-ld";
import { SiteFrame } from "@/components/site-chrome";
import { ItemGrid, LeadFormSection, PageHero } from "@/components/site-sections";
import { siteConfig } from "@/content/site";
import { SoftTexture } from "@/components/wave-texture";
import { buildBreadcrumbSchema, buildMetadata, buildWebPageSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Start a conversation with WAVE Solutions about answering services and virtual receptionist support.",
  path: "/contact",
  image: "/images/contact-virtual-assistant-network.png",
});

export default function ContactPage() {
  return (
    <SiteFrame>
      <JsonLd
        data={[
          buildWebPageSchema({
            type: "ContactPage",
            name: "Contact WAVE Solutions LLC",
            description: "Start a conversation with WAVE Solutions about answering services and virtual receptionist support.",
            path: "/contact",
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
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
      <section className="relative overflow-hidden bg-[#f5f7fb] px-5 py-16 lg:px-8 lg:py-24">
        <SoftTexture />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-12">
            <div className="order-1 space-y-4 text-base font-medium leading-8 text-[#4e5f70] lg:order-2">
              <h2 className="text-3xl font-extrabold leading-tight text-[#062A60] md:text-5xl">Public contact information</h2>
              <p>{siteConfig.footer.summary}</p>
            </div>
            <div className="order-2 grid gap-5 sm:grid-cols-3 lg:order-3 lg:grid-cols-1">
              <a href={`tel:${siteConfig.company.phoneHref}`} className="relative overflow-hidden rounded-[18px] rounded-br-[26px] border border-[#dce6ef] bg-[linear-gradient(160deg,#ffffff,#edf5fb)] p-7 text-sm font-extrabold leading-7 text-[#062A60] shadow-[0_16px_38px_rgba(6,42,96,0.10)]">
                <span className="absolute inset-y-0 left-0 w-1 bg-[#F58220]" />
                {siteConfig.company.phone}
              </a>
              <a href={`mailto:${siteConfig.company.email}`} className="relative overflow-hidden rounded-[18px] rounded-br-[26px] border border-[#dce6ef] bg-[linear-gradient(160deg,#ffffff,#edf5fb)] p-7 text-sm font-extrabold leading-7 text-[#062A60] shadow-[0_16px_38px_rgba(6,42,96,0.10)]">
                <span className="absolute inset-y-0 left-0 w-1 bg-[#0077C8]" />
                {siteConfig.company.email}
              </a>
              <div className="relative overflow-hidden rounded-[18px] rounded-br-[26px] border border-[#dce6ef] bg-[linear-gradient(160deg,#ffffff,#edf5fb)] p-7 text-sm font-extrabold leading-7 text-[#062A60] shadow-[0_16px_38px_rgba(6,42,96,0.10)]">
                <span className="absolute inset-y-0 left-0 w-1 bg-[#062A60]" />
                {siteConfig.company.location}
              </div>
            </div>
            <div className="order-3 relative aspect-[16/11] overflow-hidden rounded-[22px] rounded-br-[72px] rounded-tl-[72px] border border-[#dbe5ef] bg-white shadow-[0_18px_45px_rgba(6,42,96,0.12)] lg:order-1">
              <Image
                src="/images/generated/contact-communication-desk.png"
                alt="Professional communication desk with laptop, office phone, smartphone, and multi-channel support interface panels"
                fill
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="order-4 lg:order-4">
              <ItemGrid items={siteConfig.approach.process.slice(0, 3)} columns="stack" variant="dark" />
            </div>
          </div>
        </div>
      </section>
      <LeadFormSection />
    </SiteFrame>
  );
}
