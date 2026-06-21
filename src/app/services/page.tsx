import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { SiteFrame } from "@/components/site-chrome";
import { ItemGrid, MediaFeature, PageHero, ProcessSteps, PromiseBand, SectionBand, ServiceGrid } from "@/components/site-sections";
import { siteConfig } from "@/content/site";
import { buildBreadcrumbSchema, buildCollectionPageSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description: "Answering services, virtual receptionist services, customer follow-up, AI support, and communication management.",
  path: "/services",
  image: "/images/generated/services-phone-notifications.png",
});

export default function ServicesPage() {
  return (
    <SiteFrame>
      <JsonLd
        data={[
          buildCollectionPageSchema({
            name: "WAVE Solutions Services",
            description: "Answering services, virtual receptionist services, customer follow-up, AI support, and communication management.",
            path: "/services",
            items: siteConfig.services.map((service) => ({
              name: service.title,
              path: `/services/${service.slug}`,
            })),
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <PageHero eyebrow={siteConfig.servicesIntro.eyebrow} title={siteConfig.servicesIntro.heading} text={siteConfig.servicesIntro.text} />
      <SectionBand title="Service areas" variant="soft">
        <MediaFeature
          title="Each service is part of one communication layer, not a separate disconnected task."
          body={[siteConfig.servicesIntro.text]}
          image={{
            src: "/images/generated/services-phone-notifications.png",
            alt: "Modern smartphone showing call, email, message, voicemail, and appointment notifications surrounded by connected tech interface elements",
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
