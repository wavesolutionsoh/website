import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteFrame } from "@/components/site-chrome";
import { ItemGrid, MediaFeature, PageHero, ProcessSteps, PromiseBand, SectionBand, ServiceGrid } from "@/components/site-sections";
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
    title: `${service.title} | WAVE Solutions LLC`,
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
      <PageHero
        eyebrow={siteConfig.servicesIntro.eyebrow}
        title={service.title}
        text={service.text}
        highlights={service.supportPoints}
        aside={
          service.slug === "communication-management" ? (
            <div data-motion-reveal className="marble motion-card relative aspect-[4/3] min-h-[18rem] shadow-[0_26px_70px_rgba(0,0,0,0.24)]">
              <Image
                src="/images/communication-management-loop.png"
                alt="Dotted circular communication loop connecting phone, email, and web icons"
                fill
                priority
                sizes="(min-width: 1024px) 36vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,42,96,0.08),transparent_34%),linear-gradient(0deg,rgba(6,42,96,0.16),transparent_44%)]" />
            </div>
          ) : undefined
        }
      />
      <SectionBand title="How this service fits the communication layer" body={siteConfig.difference.body} variant="soft">
        <MediaFeature
          title={`${service.title} in practice`}
          body={[service.text]}
          placeholder={{
            eyebrow: "Service image",
            title: service.title,
            text: `Placeholder for the ${service.title.toLowerCase()} image in the staging branch.`,
          }}
          align="left"
        />
        <div className="mt-10">
          <ItemGrid items={service.supportPoints} />
        </div>
      </SectionBand>
      <SectionBand title="How WAVE keeps communication moving" body={siteConfig.approach.body.slice(0, 2)} variant="navy">
        <ProcessSteps steps={siteConfig.approach.process} variant="dark" />
      </SectionBand>
      <SectionBand title="Shared support standards" body={[siteConfig.approach.body[2], siteConfig.approach.body[3]]} variant="soft">
        <ItemGrid items={siteConfig.difference.items.slice(0, 3)} />
      </SectionBand>
      <SectionBand title="Related services">
        <ServiceGrid services={siteConfig.services.filter((item) => item.slug !== service.slug).slice(0, 3)} />
      </SectionBand>
      <PromiseBand />
    </SiteFrame>
  );
}
