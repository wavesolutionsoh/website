import type { Metadata } from "next";
import Image from "next/image";
import { Fragment, type ReactElement } from "react";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { SiteFrame } from "@/components/site-chrome";
import { SoftTexture } from "@/components/wave-texture";
import {
  DualCallToAction,
  IconBulletList,
  MediaFeature,
  PageHero,
  ProcessSplit,
  ProcessSteps,
  PromiseBand,
  SectionBand,
  ServiceGrid,
} from "@/components/site-sections";
import {
  serviceLayoutPresets,
  type ServiceLayoutPreset,
  type ServiceSectionKey,
} from "@/content/service-layouts";
import { getService, siteConfig, type ServiceSlug } from "@/content/site";
import { buildBreadcrumbSchema, buildMetadata, buildServiceSchema, buildWebPageSchema } from "@/lib/seo";

type Service = (typeof siteConfig.services)[number];

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type ServiceImageAsset = {
  src: string;
  alt: string;
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

  const heroImage = serviceHeroImages[service.slug];

  return buildMetadata({
    title: service.title,
    description: service.text,
    path: `/services/${service.slug}`,
    image: heroImage.src,
  });
}

const serviceHeroImages: Record<ServiceSlug, ServiceImageAsset> = {
  "answering-services": {
    src: "/images/generated/service-answering-practice.png",
    alt: "Professional answering service setup with desk phone, laptop, headset, and call handling interface cues",
  },
  "virtual-receptionist-services": {
    src: "/images/generated/service-virtual-receptionist-hero-man.png",
    alt: "Smiling young virtual receptionist wearing a headset while working at a laptop with phone, message, and email support cues",
  },
  "customer-follow-up": {
    src: "/images/generated/service-customer-follow-up-practice.png",
    alt: "Laptop and smartphone showing connected follow-up activity across calls, messages, email, and scheduling",
  },
  "ai-powered-communication-support": {
    src: "/images/generated/service-ai-support-practice.png",
    alt: "Human-centered AI communication support workflow with automation panels around a professional workstation",
  },
  "communication-management": {
    src: "/images/communication-management-loop.png",
    alt: "Dotted circular communication loop connecting phone, email, and web icons",
  },
};

const serviceFeatureImages: Record<ServiceSlug, ServiceImageAsset> = {
  "answering-services": {
    src: "/images/generated/service-answering-secondary.png",
    alt: "Professional answering service workstation with desk phone, headset, callback notes, and organized call log interface",
  },
  "virtual-receptionist-services": {
    src: "/images/generated/service-virtual-receptionist-secondary.png",
    alt: "Virtual receptionist support workspace with appointment scheduling and communication coordination on screen",
  },
  "customer-follow-up": {
    src: "/images/generated/service-customer-follow-up-secondary-v2.png",
    alt: "Customer follow-up workspace with checklist, callback notes, calendar planning, and a response tracking dashboard",
  },
  "ai-powered-communication-support": {
    src: "/images/generated/service-ai-support-secondary.png",
    alt: "AI-assisted communication workflow on a laptop with response suggestions and automation routing in a modern office",
  },
  "communication-management": {
    src: "/images/generated/service-communication-management-secondary.png",
    alt: "Multi-channel communication management dashboard coordinating phone, email, SMS, and web inquiries",
  },
};

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const preset = serviceLayoutPresets[service.slug];
  const heroImage = serviceHeroImages[service.slug];
  const featureImage = serviceFeatureImages[service.slug];

  const sections: Record<ServiceSectionKey, ReactElement> = {
    intro: renderIntroSection(service, featureImage, preset),
    process: renderProcessSection(service, preset),
    standards: renderStandardsSection(preset),
    related: renderRelatedSection(service, preset),
    promise: <PromiseBand />,
  };

  return (
    <SiteFrame>
      <JsonLd
        data={[
          buildWebPageSchema({
            name: service.title,
            description: service.text,
            path: `/services/${service.slug}`,
          }),
          buildServiceSchema({
            name: service.title,
            description: service.text,
            path: `/services/${service.slug}`,
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
        ]}
      />
      <PageHero
        eyebrow={siteConfig.servicesIntro.eyebrow}
        title={service.title}
        text={service.text}
        highlights={service.supportPoints}
        alignTop
        actions={<DualCallToAction />}
        aside={
          <div
            data-motion-reveal
            className="marble motion-card relative aspect-[4/3] min-h-[18rem] shadow-[0_26px_70px_rgba(0,0,0,0.24)]"
          >
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 36vw, 92vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,42,96,0.08),transparent_34%),linear-gradient(0deg,rgba(6,42,96,0.16),transparent_44%)]" />
          </div>
        }
      />
      {preset.sectionOrder.map((key) => (
        <Fragment key={key}>{sections[key]}</Fragment>
      ))}
    </SiteFrame>
  );
}

function renderIntroSection(
  service: Service,
  featureImage: ServiceImageAsset,
  preset: ServiceLayoutPreset,
) {
  const title = "How this service fits the communication layer";
  const body = siteConfig.difference.body;
  const practiceTitle = `${service.title} in practice`;

  switch (preset.intro) {
    case "media-left-grid":
      return (
        <section className="relative overflow-hidden bg-[#f5f7fb] px-5 py-16 lg:px-8 lg:py-24">
          <SoftTexture />
          <div className="relative mx-auto max-w-7xl">
            <div data-motion-reveal className="max-w-3xl">
              <h2 className="text-balance text-3xl font-extrabold leading-tight text-[#062A60] md:text-5xl">
                {title}
              </h2>
              <div className="mt-5 max-w-2xl space-y-3 text-base font-medium leading-7 text-[#4e5f70]">
                {body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div
              data-motion-group
              className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-10"
            >
              <FeatureImageCard image={featureImage} ratio="wide" />
              <div data-motion-reveal className="space-y-5 lg:pt-1">
                <div className="space-y-3">
                  <h3 className="text-3xl font-extrabold leading-tight text-[#062A60]">
                    {practiceTitle}
                  </h3>
                  <p className="text-base font-medium leading-7 text-[#4e5f70]">{service.text}</p>
                </div>
                <IconBulletList items={service.supportPoints} />
              </div>
            </div>
          </div>
        </section>
      );
    case "media-right-rail":
      return (
        <SectionBand title={title} body={body} variant="soft">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="space-y-6">
              <div className="space-y-4 text-base font-medium leading-8 text-[#4e5f70]">
                <h3 className="text-3xl font-extrabold leading-tight text-[#062A60]">{practiceTitle}</h3>
                <p>{service.text}</p>
              </div>
              <IconBulletList items={service.supportPoints} />
            </div>
            <FeatureImageCard image={featureImage} ratio="wide" />
          </div>
        </SectionBand>
      );
    case "process-first":
      return (
        <SectionBand title={title} body={body} variant="soft">
          <MediaFeature
            title={practiceTitle}
            body={[service.text]}
            image={featureImage}
            align="right"
            emphasis="wide-media"
          />
          <div className="mt-10">
            <IconBulletList items={service.supportPoints} columns="two-column" />
          </div>
        </SectionBand>
      );
    case "media-marble":
      return (
        <SectionBand title={title} body={body} variant="soft">
          <MediaFeature
            title={practiceTitle}
            body={[service.text]}
            image={featureImage}
            align="right"
            emphasis="wide-media"
          />
          <div className="mt-10">
            <IconBulletList items={service.supportPoints} columns="two-column" />
          </div>
        </SectionBand>
      );
    case "channel-wide":
      return (
        <SectionBand title={title} body={body} variant="soft">
          <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
            <div className="space-y-4 text-base font-medium leading-8 text-[#4e5f70]">
              <h3 className="text-3xl font-extrabold leading-tight text-[#062A60]">{practiceTitle}</h3>
              <p>{service.text}</p>
            </div>
            <div className="space-y-6">
              <FeatureImageCard image={featureImage} ratio="wide" />
              <IconBulletList items={service.supportPoints} columns="two-column" />
            </div>
          </div>
        </SectionBand>
      );
    case "copy-left-showcase":
      return renderCopyLeftShowcaseSection(service, featureImage, title, body, practiceTitle);
  }
}

function renderProcessSection(service: Service, preset: ServiceLayoutPreset) {
  const title = "How WAVE keeps communication moving";
  const body = siteConfig.approach.body.slice(0, 2);
  const processSteps = siteConfig.approach.process;
  const showProcessCta = preset.intro !== "copy-left-showcase";

  switch (preset.process) {
    case "stagger":
      return (
        <SectionBand title={title} body={body} variant="navy">
          <ProcessSteps steps={processSteps} variant="dark" />
          {showProcessCta ? <DualCallToAction /> : null}
        </SectionBand>
      );
    case "split-callout":
      return (
        <SectionBand title={title} body={body} variant="navy">
          <ProcessSplit
            title="Communication should keep moving after the first touchpoint."
            text={siteConfig.promise.text}
            steps={processSteps}
            actions={showProcessCta ? <DualCallToAction topSpacing="mt-0" /> : undefined}
          />
        </SectionBand>
      );
    case "compact-two-col":
      return (
        <SectionBand title={title} body={body} variant="navy">
          <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
            <div data-motion-reveal className="max-w-md space-y-4">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#F58220]">
                {siteConfig.promise.eyebrow}
              </p>
              <h3 className="text-3xl font-extrabold leading-tight text-white">
                {siteConfig.promise.heading}
              </h3>
              <p className="text-base font-medium leading-8 text-white/82">
                {siteConfig.promise.text}
              </p>
            </div>
            <ProcessSteps steps={processSteps} variant="dark" layout="two-column" />
          </div>
          {showProcessCta ? <DualCallToAction /> : null}
        </SectionBand>
      );
    case "checklist-split":
      return (
        <SectionBand title={title} body={body} variant="navy">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <IconBulletList items={service.supportPoints} variant="dark" />
            <ProcessSteps steps={processSteps} variant="dark" layout="compact" />
          </div>
          {showProcessCta ? <DualCallToAction /> : null}
        </SectionBand>
      );
  }
}

function renderStandardsSection(preset: ServiceLayoutPreset) {
  const title = "Shared support standards";
  const body = [siteConfig.approach.body[2], siteConfig.approach.body[3]];
  const standards = siteConfig.difference.items.slice(0, 3);

  return (
    <SectionBand title={title} body={body} variant="soft">
      {preset.standards === "grid-3" ? <IconBulletList items={standards} columns="two-column" /> : null}
      {preset.standards === "grid-2x2" ? (
        <IconBulletList items={standards} columns="two-column" />
      ) : null}
      {preset.standards === "stack" ? <IconBulletList items={standards} /> : null}
      {preset.standards === "marble-3" ? (
        <IconBulletList items={standards} columns="two-column" />
      ) : null}
    </SectionBand>
  );
}

function renderRelatedSection(service: Service, preset: ServiceLayoutPreset) {
  return (
    <SectionBand title="Related services">
      <ServiceGrid
        services={siteConfig.services.filter((item) => item.slug !== service.slug).slice(0, 3)}
      />
      {preset.showRelatedCta ? <DualCallToAction /> : null}
    </SectionBand>
  );
}

function renderCopyLeftShowcaseSection(
  service: Service,
  featureImage: ServiceImageAsset,
  title: string,
  body: readonly string[],
  practiceTitle: string,
) {
  return (
    <section className="relative overflow-hidden bg-[#f5f7fb] px-5 py-16 lg:px-8 lg:py-24">
      <SoftTexture />
      <div className="relative mx-auto max-w-7xl">
        <div
          data-motion-group
          className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-14"
        >
          <div data-motion-reveal className="max-w-2xl space-y-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#F58220]">
                {siteConfig.difference.eyebrow}
              </p>
              <h2 className="mt-4 text-balance text-3xl font-extrabold leading-tight text-[#062A60] md:text-5xl">
                {title}
              </h2>
            </div>
            <div className="space-y-4 text-base font-medium leading-8 text-[#4e5f70]">
              {body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-extrabold leading-tight text-[#062A60]">{practiceTitle}</h3>
              <p className="text-base font-medium leading-8 text-[#4e5f70]">{service.text}</p>
            </div>
            <DualCallToAction />
          </div>
          <div className="space-y-6 lg:pt-1">
            <FeatureImageCard image={featureImage} ratio="wide" />
            <div
              data-motion-reveal
              className="motion-card rounded-[22px] rounded-br-[34px] border border-[#dbe5ef] bg-[linear-gradient(165deg,#ffffff,#edf5fb)] p-6 shadow-[0_18px_45px_rgba(6,42,96,0.10)]"
            >
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0077C8]">
                Support focus
              </p>
              <div className="mt-5">
                <IconBulletList items={service.supportPoints} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureImageCard({
  image,
  ratio = "default",
}: {
  image: ServiceImageAsset;
  ratio?: "default" | "wide";
}) {
  return (
    <div
      data-motion-reveal
      className={`relative ${
        ratio === "wide" ? "aspect-[17/11]" : "aspect-[16/11]"
      } overflow-hidden rounded-[22px] rounded-br-[72px] rounded-tl-[72px] border border-[#dbe5ef] bg-white shadow-[0_18px_45px_rgba(6,42,96,0.12)]`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={ratio === "wide" ? "(min-width: 1024px) 44vw, 100vw" : "(min-width: 1024px) 36vw, 100vw"}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,42,96,0.06),transparent_36%),linear-gradient(0deg,rgba(6,42,96,0.10),transparent_46%)]" />
    </div>
  );
}
