import type { Metadata } from "next";
import { SiteFrame } from "@/components/site-chrome";
import { ItemGrid, PageHero, SectionBand, ServiceGrid } from "@/components/site-sections";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Who Wave Solutions Serves",
  description: "Service businesses and professional teams that rely on timely customer communication.",
};

export default function IndustriesPage() {
  return (
    <SiteFrame>
      <PageHero eyebrow={siteConfig.industries.eyebrow} title={siteConfig.industries.heading} text={siteConfig.industries.body} />
      <SectionBand title="Businesses that rely on timely communication" variant="soft">
        <ItemGrid items={siteConfig.industries.items} />
      </SectionBand>
      <SectionBand eyebrow={siteConfig.servicesIntro.eyebrow} title="Support that can follow the customer conversation">
        <ServiceGrid services={siteConfig.services.slice(0, 3)} />
      </SectionBand>
    </SiteFrame>
  );
}
