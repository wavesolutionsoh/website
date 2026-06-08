import type { Metadata } from "next";
import { SiteFrame } from "@/components/site-chrome";
import { ItemGrid, PageHero, PromiseBand, SectionBand, ValueGrid } from "@/components/site-sections";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "About Wave Solutions LLC",
  description: "About Wave Solutions LLC, its communication focus, mission, values, and founder story.",
};

export default function AboutPage() {
  return (
    <SiteFrame>
      <PageHero eyebrow={siteConfig.about.eyebrow} title={siteConfig.about.heading} text={siteConfig.about.body[0]} />
      <SectionBand title="Built around the WAVE communication areas" body={siteConfig.about.body.slice(1)}>
        <ItemGrid items={siteConfig.waveAreas} />
      </SectionBand>
      <SectionBand eyebrow={siteConfig.missionVisionValues.eyebrow} title="Clarity, consistency, and confidence." body={[siteConfig.missionVisionValues.mission, siteConfig.missionVisionValues.vision]} variant="soft">
        <ValueGrid items={siteConfig.missionVisionValues.values} />
      </SectionBand>
      <SectionBand eyebrow={siteConfig.founder.eyebrow} title={siteConfig.founder.heading} body={siteConfig.founder.body} />
      <PromiseBand />
    </SiteFrame>
  );
}
