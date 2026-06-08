import type { Metadata } from "next";
import { SiteFrame } from "@/components/site-chrome";
import { ItemGrid, PageHero, PromiseBand, SectionBand, ValueGrid } from "@/components/site-sections";
import { siteConfig } from "@/content/site";
import Image from "next/image";

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
      <SectionBand eyebrow={siteConfig.founder.eyebrow} title={siteConfig.founder.heading} body={siteConfig.founder.body.slice(0, 4)}>
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] rounded-br-[72px] rounded-tl-[72px] border border-[#dbe5ef] bg-white shadow-[0_18px_45px_rgba(6,42,96,0.12)]">
            <Image
              src="/images/founder-placeholder.svg"
              alt="Founder headshot placeholder"
              fill
              sizes="(min-width: 1024px) 30vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-4 text-base font-medium leading-8 text-[#4e5f70]">
            {siteConfig.founder.body.slice(4).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </SectionBand>
      <PromiseBand />
    </SiteFrame>
  );
}
