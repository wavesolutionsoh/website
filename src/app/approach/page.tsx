import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/json-ld";
import { SiteFrame } from "@/components/site-chrome";
import { PageHero, ProcessSteps, PromiseBand, SectionBand, ValueGrid } from "@/components/site-sections";
import { siteConfig } from "@/content/site";
import { buildBreadcrumbSchema, buildMetadata, buildWebPageSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Approach",
  description: "How WAVE Solutions works as a communication extension of your business.",
  path: "/approach",
  image: "/images/approach-whiteboard-marble.png",
});

export default function ApproachPage() {
  return (
    <SiteFrame>
      <JsonLd
        data={[
          buildWebPageSchema({
            name: "WAVE Solutions Approach",
            description: "How WAVE Solutions works as a communication extension of your business.",
            path: "/approach",
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Approach", path: "/approach" },
          ]),
        ]}
      />
      <PageHero
        eyebrow={siteConfig.approach.eyebrow}
        title={siteConfig.approach.heading}
        text={siteConfig.approach.body[0]}
        aside={
          <div data-motion-reveal className="marble motion-card relative aspect-[4/3] min-h-[18rem] shadow-[0_26px_70px_rgba(0,0,0,0.24)]">
            <Image
              src="/images/approach-whiteboard-marble.png"
              alt="Glossy strategic planning whiteboard with connected notes and collaborative ideas"
              fill
              priority
              sizes="(min-width: 1024px) 36vw, 92vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,42,96,0.08),transparent_34%),linear-gradient(0deg,rgba(6,42,96,0.16),transparent_44%)]" />
          </div>
        }
      />
      <SectionBand title="A collaborative communication process" body={siteConfig.approach.body.slice(1, 3)} variant="soft">
        <ValueGrid items={siteConfig.approach.pillars} />
      </SectionBand>
      <SectionBand title="How customer interactions move forward" body={siteConfig.approach.body.slice(3)} variant="navy">
        <ProcessSteps steps={siteConfig.approach.process} variant="dark" />
      </SectionBand>
      <PromiseBand />
    </SiteFrame>
  );
}
