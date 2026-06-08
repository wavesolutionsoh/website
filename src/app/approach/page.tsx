import type { Metadata } from "next";
import { SiteFrame } from "@/components/site-chrome";
import { PageHero, ProcessSteps, PromiseBand, SectionBand, ValueGrid } from "@/components/site-sections";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Wave Solutions Approach",
  description: "How Wave Solutions works as a communication extension of your business.",
};

export default function ApproachPage() {
  return (
    <SiteFrame>
      <PageHero eyebrow={siteConfig.approach.eyebrow} title={siteConfig.approach.heading} text={siteConfig.approach.body[0]} />
      <SectionBand title="A collaborative communication process" body={siteConfig.approach.body.slice(1, 3)}>
        <ValueGrid items={siteConfig.approach.pillars} />
      </SectionBand>
      <SectionBand title="How customer interactions move forward" body={siteConfig.approach.body.slice(3)} variant="soft">
        <ProcessSteps steps={siteConfig.approach.process} />
      </SectionBand>
      <PromiseBand />
    </SiteFrame>
  );
}
