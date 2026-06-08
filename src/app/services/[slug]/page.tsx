import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFrame } from "@/components/site-chrome";
import { ItemGrid, PageHero, ProcessSteps, PromiseBand, SectionBand, ServiceGrid } from "@/components/site-sections";
import { getService, siteConfig } from "@/content/site";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return siteConfig.services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | Wave Solutions LLC`,
    description: service.text,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <SiteFrame>
      <PageHero eyebrow={siteConfig.servicesIntro.eyebrow} title={service.title} text={service.text} highlights={siteConfig.difference.items.slice(0, 4)} />
      <SectionBand title="Part of a complete communication layer" body={siteConfig.difference.body} variant="soft">
        <ItemGrid items={siteConfig.difference.items} />
      </SectionBand>
      <SectionBand title="How Wave keeps communication moving" body={siteConfig.approach.body.slice(0, 1)}>
        <ProcessSteps steps={siteConfig.approach.process} />
      </SectionBand>
      <SectionBand title="Related services" variant="soft">
        <ServiceGrid services={siteConfig.services.filter((item) => item.slug !== service.slug).slice(0, 3)} />
      </SectionBand>
      <PromiseBand />
    </SiteFrame>
  );
}
