import type { Metadata } from "next";
import { SiteFrame } from "@/components/site-chrome";
import { ItemGrid, PageHero, PromiseBand, SectionBand } from "@/components/site-sections";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Why Wave Solutions",
  description: "Why Wave Solutions exists and how it helps businesses complete the communication loop.",
};

export default function WhyWavePage() {
  return (
    <SiteFrame>
      <PageHero eyebrow={siteConfig.why.eyebrow} title={siteConfig.why.heading} text={siteConfig.why.body[0]} />
      <SectionBand title="The communication gaps Wave was built to solve" body={siteConfig.why.body.slice(1)} variant="soft">
        <ItemGrid items={siteConfig.why.challenges} />
      </SectionBand>
      <SectionBand eyebrow={siteConfig.difference.eyebrow} title={siteConfig.difference.heading} body={siteConfig.difference.body}>
        <ItemGrid items={siteConfig.difference.items} />
      </SectionBand>
      <PromiseBand />
    </SiteFrame>
  );
}
