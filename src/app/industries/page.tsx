import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/json-ld";
import { SiteFrame } from "@/components/site-chrome";
import { DualCallToAction, ItemGrid, PageHero, SectionBand, ServiceGrid } from "@/components/site-sections";
import { siteConfig } from "@/content/site";
import { buildBreadcrumbSchema, buildCollectionPageSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Industries",
  description: "Service businesses and professional teams that rely on timely customer communication.",
  path: "/industries",
  image: "/images/industries-service-collage.png",
});

export default function IndustriesPage() {
  return (
    <SiteFrame>
      <JsonLd
        data={[
          buildCollectionPageSchema({
            name: "Who WAVE Solutions Serves",
            description: "Service businesses and professional teams that rely on timely customer communication.",
            path: "/industries",
            items: siteConfig.industries.items.map((item) => ({ name: item })),
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
          ]),
        ]}
      />
      <PageHero
        eyebrow={siteConfig.industries.eyebrow}
        title={siteConfig.industries.heading}
        text={siteConfig.industries.body}
        aside={
          <div data-motion-reveal className="marble motion-card relative aspect-[4/3] min-h-[18rem] shadow-[0_26px_70px_rgba(0,0,0,0.24)]">
            <Image
              src="/images/industries-service-collage.png"
              alt="Collage of service-industry objects including a hard hat, prepared meal, data clipboard, artwork, stethoscope, tools, keys, and legal scales"
              fill
              priority
              sizes="(min-width: 1024px) 36vw, 92vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,42,96,0.08),transparent_34%),linear-gradient(0deg,rgba(6,42,96,0.16),transparent_44%)]" />
          </div>
        }
      />
      <SectionBand title="Businesses that rely on timely communication" variant="soft">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-12">
          <div className="relative aspect-[16/11] overflow-hidden rounded-[22px] rounded-br-[72px] rounded-tl-[72px] border border-[#dbe5ef] bg-white shadow-[0_18px_45px_rgba(6,42,96,0.12)]">
            <Image
              src="/images/generated/industries-communication-workspace.png"
              alt="Organized communication workspace with a laptop dashboard, phone, headset, and service-business materials for multiple industries"
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,42,96,0.08),transparent_34%),linear-gradient(0deg,rgba(6,42,96,0.16),transparent_44%)]" />
          </div>
          <div className="space-y-4 pt-1 text-base font-medium leading-8 text-[#4e5f70]">
            <h3 className="text-3xl font-extrabold leading-tight text-[#062A60]">
              The same communication problem shows up across very different service teams.
            </h3>
            <p>{siteConfig.industries.body}</p>
          </div>
        </div>
        <div className="mt-10">
          <ItemGrid items={siteConfig.industries.items} />
        </div>
        <DualCallToAction />
      </SectionBand>
      <SectionBand eyebrow={siteConfig.servicesIntro.eyebrow} title="Support that can follow the customer conversation" variant="navy">
        <ServiceGrid services={siteConfig.services} />
      </SectionBand>
    </SiteFrame>
  );
}
