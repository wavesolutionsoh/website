import { SiteFrame } from "@/components/site-chrome";
import { HomeHero, ItemGrid, LeadFormSection, PromiseBand, SectionBand, ServiceGrid } from "@/components/site-sections";
import { siteConfig } from "@/content/site";

export default function Home() {
  return (
    <SiteFrame>
      <HomeHero />
      <section id="services" className="relative z-10 -mt-16 px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ServiceGrid services={siteConfig.services.slice(0, 3)} />
        </div>
      </section>
      <SectionBand eyebrow={siteConfig.why.eyebrow} title={siteConfig.why.heading} body={siteConfig.why.body.slice(0, 1)} variant="soft">
        <ItemGrid items={siteConfig.why.challenges.slice(0, 6)} />
      </SectionBand>
      <SectionBand eyebrow={siteConfig.difference.eyebrow} title={siteConfig.difference.heading} body={siteConfig.difference.body}>
        <ItemGrid items={siteConfig.difference.items} />
      </SectionBand>
      <PromiseBand />
      <LeadFormSection />
    </SiteFrame>
  );
}
