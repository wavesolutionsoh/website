import type { Metadata } from "next";
import { SiteFrame } from "@/components/site-chrome";
import { ItemGrid, PageHero, ProcessSteps, PromiseBand, SectionBand, ServiceGrid } from "@/components/site-sections";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Wave Solutions Services",
  description: "Answering services, virtual receptionist services, customer follow-up, AI support, and communication management.",
};

export default function ServicesPage() {
  return (
    <SiteFrame>
      <PageHero eyebrow={siteConfig.servicesIntro.eyebrow} title={siteConfig.servicesIntro.heading} text={siteConfig.servicesIntro.text} />
      <SectionBand title="Service areas" variant="soft">
        <ServiceGrid />
      </SectionBand>
      <SectionBand title="What these services support" body={siteConfig.approach.body.slice(0, 2)}>
        <ProcessSteps steps={siteConfig.approach.process} />
      </SectionBand>
      <SectionBand eyebrow={siteConfig.difference.eyebrow} title={siteConfig.difference.heading} body={siteConfig.difference.body}>
        <ItemGrid items={siteConfig.difference.items} />
      </SectionBand>
      <PromiseBand />
    </SiteFrame>
  );
}
