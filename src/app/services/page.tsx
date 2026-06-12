import type { Metadata } from "next";
import { SiteFrame } from "@/components/site-chrome";
import { ItemGrid, MediaFeature, PageHero, ProcessSteps, PromiseBand, SectionBand, ServiceGrid } from "@/components/site-sections";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "WAVE Solutions Services",
  description: "Answering services, virtual receptionist services, customer follow-up, AI support, and communication management.",
};

export default function ServicesPage() {
  return (
    <SiteFrame>
      <PageHero eyebrow={siteConfig.servicesIntro.eyebrow} title={siteConfig.servicesIntro.heading} text={siteConfig.servicesIntro.text} />
      <SectionBand title="Service areas" variant="soft">
        <MediaFeature
          title="Each service is part of one communication layer, not a separate disconnected task."
          body={[siteConfig.servicesIntro.text]}
          placeholder={{
            eyebrow: "Services image",
            title: "Communication support service set",
            text: "Placeholder for the services overview image covering calls, coordination, follow-up, AI support, and communication management.",
          }}
        />
        <div className="mt-10">
          <ServiceGrid />
        </div>
      </SectionBand>
      <SectionBand title="What these services support" body={siteConfig.approach.body.slice(0, 2)} variant="navy">
        <ProcessSteps steps={siteConfig.approach.process} variant="dark" />
      </SectionBand>
      <SectionBand eyebrow={siteConfig.difference.eyebrow} title={siteConfig.difference.heading} body={siteConfig.difference.body} variant="soft">
        <ItemGrid items={siteConfig.difference.items} />
      </SectionBand>
      <PromiseBand />
    </SiteFrame>
  );
}
