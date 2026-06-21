import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/json-ld";
import { SiteFrame } from "@/components/site-chrome";
import { ChallengeBoard, DifferenceSection, PageHero, PromiseBand, SectionBand } from "@/components/site-sections";
import { siteConfig } from "@/content/site";
import { buildBreadcrumbSchema, buildMetadata, buildWebPageSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Why WAVE",
  description: "Why WAVE Solutions exists and how it helps businesses complete the communication loop.",
  path: "/why-wave",
  image: "/images/why-wave-marble-board.png",
});

export default function WhyWavePage() {
  return (
    <SiteFrame>
      <JsonLd
        data={[
          buildWebPageSchema({
            name: "Why WAVE Solutions",
            description: "Why WAVE Solutions exists and how it helps businesses complete the communication loop.",
            path: "/why-wave",
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Why WAVE", path: "/why-wave" },
          ]),
        ]}
      />
      <PageHero
        eyebrow={siteConfig.why.eyebrow}
        title={siteConfig.why.heading}
        text={siteConfig.why.body[0]}
        aside={
          <div data-motion-reveal className="marble motion-card relative aspect-[4/3] min-h-[18rem] shadow-[0_26px_70px_rgba(0,0,0,0.24)]">
            <Image
              src="/images/why-wave-marble-board.png"
              alt="Glossy blue marble tic-tac-toe board with a check mark followed by eight X marks"
              fill
              priority
              sizes="(min-width: 1024px) 36vw, 92vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,42,96,0.12),transparent_36%),linear-gradient(0deg,rgba(6,42,96,0.18),transparent_45%)]" />
          </div>
        }
      />
      <SectionBand title="The communication gaps WAVE was built to solve" body={siteConfig.why.body.slice(1)} variant="soft">
        <ChallengeBoard title="Most communication loss happens after the first response." body={[siteConfig.why.body[1], siteConfig.why.body[2]]} items={siteConfig.why.challenges} />
      </SectionBand>
      <DifferenceSection
        eyebrow={siteConfig.difference.eyebrow}
        title={siteConfig.difference.heading}
        body={siteConfig.difference.body}
        items={siteConfig.difference.items}
        showStandardCard={false}
      />
      <PromiseBand />
    </SiteFrame>
  );
}
