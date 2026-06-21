import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { SiteFrame } from "@/components/site-chrome";
import { DualCallToAction, PageHero, PromiseBand, SectionBand, ValueGrid, WaveAreaGrid } from "@/components/site-sections";
import { siteConfig } from "@/content/site";
import Image from "next/image";
import { buildBreadcrumbSchema, buildMetadata, buildWebPageSchema } from "@/lib/seo";
import { SoftTexture } from "@/components/wave-texture";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "About WAVE Solutions LLC, its communication focus, mission, values, and founder story.",
  path: "/about",
  image: "/images/wave-logo.png",
});

export default function AboutPage() {
  return (
    <SiteFrame>
      <JsonLd
        data={[
          buildWebPageSchema({
            type: "AboutPage",
            name: "About WAVE Solutions LLC",
            description: "About WAVE Solutions LLC, its communication focus, mission, values, and founder story.",
            path: "/about",
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <PageHero
        eyebrow={siteConfig.about.eyebrow}
        title={siteConfig.about.heading}
        text={siteConfig.about.body[0]}
        aside={
          <div className="relative overflow-hidden rounded-[24px] rounded-br-[72px] rounded-tl-[72px] border border-white/18 bg-white/10 p-8 shadow-[0_22px_65px_rgba(0,0,0,0.18)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.16),transparent_18%),linear-gradient(145deg,rgba(255,255,255,0.04),rgba(255,255,255,0.12))]" />
            <div className="relative flex min-h-[20rem] items-center justify-center rounded-[18px] bg-white/95 p-8 shadow-[inset_0_0_0_1px_rgba(6,42,96,0.06)]">
              <Image
                src="/images/wave-logo.png"
                alt="WAVE Solutions LLC logo"
                width={520}
                height={520}
                sizes="(min-width: 1024px) 28vw, 70vw"
                className="h-auto w-full max-w-[18rem] object-contain lg:max-w-[20rem]"
                priority
              />
            </div>
          </div>
        }
      />
      <SectionBand title="Built around the WAVE communication areas" body={siteConfig.about.body.slice(1)}>
        <WaveAreaGrid items={siteConfig.waveAreas} />
        <DualCallToAction />
      </SectionBand>
      <SectionBand eyebrow={siteConfig.missionVisionValues.eyebrow} title="Clarity, consistency, and confidence." body={[siteConfig.missionVisionValues.mission, siteConfig.missionVisionValues.vision]} variant="navy">
        <ValueGrid items={siteConfig.missionVisionValues.values} variant="dark" />
      </SectionBand>
      <section className="relative overflow-hidden bg-[#f5f7fb] px-5 py-16 lg:px-8 lg:py-24">
        <SoftTexture />
        <div className="relative mx-auto max-w-7xl">
          <div data-motion-group className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-12">
            <div data-motion-reveal className="space-y-4 text-base font-medium leading-8 text-[#4e5f70]">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#F58220]">{siteConfig.founder.eyebrow}</p>
              <h2 className="text-balance text-3xl font-extrabold leading-tight text-[#062A60] md:text-5xl">
                {siteConfig.founder.heading}
              </h2>
              {siteConfig.founder.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div
              data-motion-reveal
              className="relative aspect-[4/5] overflow-hidden rounded-[22px] rounded-br-[72px] rounded-tl-[72px] border border-[#dbe5ef] bg-white shadow-[0_18px_45px_rgba(6,42,96,0.12)]"
            >
              <Image
                src="/images/lilly_headshot.jpg"
                alt="Lilly Hedrich, founder of WAVE Solutions LLC"
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>
      <PromiseBand />
    </SiteFrame>
  );
}
