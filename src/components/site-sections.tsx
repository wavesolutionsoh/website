import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/content/site";
import { LeadForm } from "@/components/lead-form";
import { SoftTexture, WaveTexture } from "@/components/wave-texture";
import type { ReactNode } from "react";
import { WaveServiceIcon } from "@/components/wave-service-icon";

type Service = (typeof siteConfig.services)[number];

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#062A60] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,42,96,0.96),rgba(6,42,96,0.86),rgba(0,119,200,0.56))]" />
      <WaveTexture />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[#F58220]">
            {siteConfig.hero.eyebrow}
          </p>
          <h1 className="text-balance text-5xl font-extrabold leading-[1.02] tracking-normal md:text-6xl">
            {siteConfig.hero.heading}
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/88">
            {siteConfig.hero.subheading}
          </p>
          <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-white/78">
            {siteConfig.hero.supporting}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="inline-flex min-h-14 items-center justify-center gap-2 bg-[#F58220] px-7 font-bold text-white transition hover:bg-[#cf690d]">
              {siteConfig.hero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${siteConfig.company.phoneHref}`} className="inline-flex min-h-14 items-center justify-center border border-white/40 bg-white px-7 font-bold text-[#062A60] transition hover:bg-[#eaf3fb]">
              {siteConfig.hero.secondaryCta}
            </a>
          </div>
        </div>
        <HeroImage />
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  highlights = siteConfig.waveAreas,
}: {
  eyebrow: string;
  title: string;
  text: string;
  highlights?: readonly string[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#062A60] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(6,42,96,0.97),rgba(0,119,200,0.76))]" />
      <WaveTexture />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#F58220]">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-extrabold leading-tight md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-white/86">{text}</p>
        </div>
        <div className="relative overflow-hidden rounded-[18px] rounded-br-[58px] rounded-tl-[58px] border border-white/18 bg-white/10 p-5 shadow-[0_22px_65px_rgba(0,0,0,0.18)]">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F58220]">WAVE</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white/10 px-4 py-3 text-sm font-bold text-white">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F58220]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionBand({
  eyebrow,
  title,
  body,
  children,
  variant = "white",
}: {
  eyebrow?: string;
  title: string;
  body?: readonly string[] | string;
  children?: ReactNode;
  variant?: "white" | "soft";
}) {
  const paragraphs = typeof body === "string" ? [body] : body ?? [];

  return (
    <section className={`relative overflow-hidden px-5 py-16 lg:px-8 lg:py-24 ${variant === "soft" ? "bg-[#f5f7fb]" : "bg-white"}`}>
      {variant === "soft" ? <SoftTexture /> : null}
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {eyebrow ? <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#F58220]">{eyebrow}</p> : null}
          <h2 className="mt-4 text-balance text-3xl font-extrabold leading-tight text-[#062A60] md:text-5xl">{title}</h2>
          <div className="mt-6 space-y-4 text-base font-medium leading-8 text-[#4e5f70]">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}

export function ServiceGrid({ services = siteConfig.services, linked = true }: { services?: readonly Service[]; linked?: boolean }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => {
        const card = (
          <article className="h-full border-b-4 border-[#F58220] bg-white p-7 shadow-[0_18px_45px_rgba(6,42,96,0.12)]">
            <div className="mb-7 grid h-16 w-16 place-items-center rounded-full bg-[#F58220] text-white">
              <WaveServiceIcon slug={service.slug} className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-extrabold leading-tight text-[#062A60]">{service.title}</h2>
            <p className="mt-4 text-sm leading-7 text-[#5c6875]">{service.text}</p>
            {linked ? (
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#0077C8]">
                View service
                <ArrowRight className="h-4 w-4" />
              </span>
            ) : null}
          </article>
        );

        return linked ? (
          <Link key={service.slug} href={`/services/${service.slug}`} className="block">
            {card}
          </Link>
        ) : (
          <div key={service.slug}>{card}</div>
        );
      })}
    </div>
  );
}

export function ItemGrid({ items }: { items: readonly string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item} className="flex min-h-24 items-start gap-3 bg-white p-5 shadow-[0_14px_34px_rgba(6,42,96,0.10)]">
          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#F58220]" />
          <p className="text-sm font-bold leading-6 text-[#33475b]">{item}</p>
        </div>
      ))}
    </div>
  );
}

export function ValueGrid({ items }: { items: readonly { title: string; text: string }[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <article key={item.title} className="border-l-4 border-[#F58220] bg-white p-6 shadow-[0_14px_34px_rgba(6,42,96,0.10)]">
          <h3 className="text-lg font-extrabold text-[#062A60]">{item.title}</h3>
          <p className="mt-3 text-sm font-medium leading-7 text-[#5c6875]">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export function ProcessSteps({ steps }: { steps: readonly string[] }) {
  return (
    <div className="grid gap-4">
      {steps.map((step, index) => (
        <div key={step} className="grid gap-4 bg-white p-5 shadow-[0_14px_34px_rgba(6,42,96,0.10)] sm:grid-cols-[64px_1fr] sm:items-center">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-[#062A60] text-lg font-extrabold text-white">{index + 1}</div>
          <p className="text-base font-bold leading-7 text-[#33475b]">{step}</p>
        </div>
      ))}
    </div>
  );
}

export function PromiseBand() {
  return (
    <section className="relative overflow-hidden bg-[#062A60] px-5 py-16 text-white lg:px-8 lg:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,119,200,0.24),transparent_46%),linear-gradient(45deg,rgba(245,130,32,0.17),transparent_58%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.72fr_1fr] md:items-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F58220]">{siteConfig.promise.eyebrow}</p>
        <div>
          <h2 className="text-balance text-3xl font-extrabold leading-tight md:text-5xl">{siteConfig.promise.heading}</h2>
          <p className="mt-5 text-base font-medium leading-8 text-white/84">{siteConfig.promise.text}</p>
        </div>
      </div>
    </section>
  );
}

export function LeadFormSection() {
  return (
    <section id="lead-form" className="relative overflow-hidden bg-[#062A60] px-5 py-20 text-white lg:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,119,200,0.20),transparent_42%),radial-gradient(circle_at_72%_16%,rgba(245,130,32,0.24),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="max-w-xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#F58220]">{siteConfig.form.eyebrow}</p>
          <h2 className="mt-4 text-balance text-4xl font-extrabold leading-tight md:text-5xl">
            {siteConfig.cta.heading}
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/84">{siteConfig.cta.text}</p>
          <div className="mt-8 border-l-4 border-[#F58220] bg-white/10 p-6">
            <p className="text-sm font-semibold leading-7 text-white/82">{siteConfig.form.text}</p>
          </div>
        </div>
        <LeadForm config={siteConfig.form} />
      </div>
    </section>
  );
}

function HeroImage() {
  return (
    <div className="relative">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] rounded-br-[76px] rounded-tl-[76px] bg-white shadow-[0_26px_80px_rgba(0,0,0,0.26)] ring-1 ring-white/20">
        <Image
          src="/images/wave-hero-receptionist.png"
          alt="Smiling virtual receptionist using a headset and laptop"
          fill
          priority
          sizes="(min-width: 1024px) 48vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,42,96,0.22),transparent_40%),linear-gradient(0deg,rgba(6,42,96,0.12),transparent_44%)]" />
      </div>
      <div className="absolute -bottom-8 left-8 hidden max-w-xs rounded-br-[34px] rounded-tl-[34px] bg-white p-5 text-[#102033] shadow-[0_18px_50px_rgba(6,42,96,0.20)] lg:block">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#F58220]">WAVE</p>
        <p className="mt-2 text-sm font-semibold leading-6 text-[#33475b]">
          {siteConfig.hero.waveDefinition}
        </p>
      </div>
    </div>
  );
}
