import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2, PhoneCall } from "lucide-react";
import { siteConfig } from "@/content/site";
import { LeadForm } from "@/components/lead-form";
import { SoftTexture, WaveTexture } from "@/components/wave-texture";
import type { ReactNode } from "react";
import { WaveServiceIcon } from "@/components/wave-service-icon";
import { Marble, MarbleIcon } from "@/components/marble";

type Service = (typeof siteConfig.services)[number];

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#062A60] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,42,96,0.96),rgba(6,42,96,0.86),rgba(0,119,200,0.56))]" />
      <WaveTexture />
      <div data-motion-group className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-28">
        <div data-motion-reveal className="max-w-3xl">
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
            <Link href="/contact" className="btn-primary inline-flex min-h-14 items-center justify-center gap-2 bg-[#F58220] px-7 font-bold text-white hover:bg-[#cf690d]">
              {siteConfig.hero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${siteConfig.company.phoneHref}`} className="btn-secondary inline-flex min-h-14 items-center justify-center border border-white/40 bg-white px-7 font-bold text-[#062A60] hover:bg-[#eaf3fb]">
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
  aside,
}: {
  eyebrow: string;
  title: string;
  text: string;
  highlights?: readonly string[];
  aside?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#062A60] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(6,42,96,0.97),rgba(0,119,200,0.76))]" />
      <WaveTexture />
      <div data-motion-group className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:px-8">
        <div data-motion-reveal>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#F58220]">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-extrabold leading-tight md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-white/86">{text}</p>
        </div>
        {aside ?? (
          <div data-motion-reveal className="motion-card relative overflow-hidden rounded-[18px] rounded-br-[58px] rounded-tl-[58px] border border-white/18 bg-white/10 p-5 shadow-[0_22px_65px_rgba(0,0,0,0.18)]">
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
        )}
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
  variant?: "white" | "soft" | "navy";
}) {
  const paragraphs = typeof body === "string" ? [body] : body ?? [];
  const isSoft = variant === "soft";
  const isNavy = variant === "navy";
  const sectionClass = isSoft ? "bg-[#f5f7fb]" : isNavy ? "bg-[#062A60] text-white" : "bg-white";
  const titleClass = isNavy ? "text-white" : "text-[#062A60]";
  const bodyClass = isNavy ? "text-white/82" : "text-[#4e5f70]";

  return (
    <section className={`relative overflow-hidden px-5 py-16 lg:px-8 lg:py-24 ${sectionClass}`}>
      {isSoft ? <SoftTexture /> : null}
      {isNavy ? (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,119,200,0.24),transparent_42%),radial-gradient(circle_at_84%_18%,rgba(245,130,32,0.16),transparent_24%)]" />
          <WaveTexture />
        </>
      ) : null}
      <div className="relative mx-auto max-w-7xl">
        <div data-motion-reveal className="max-w-3xl">
          {eyebrow ? <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#F58220]">{eyebrow}</p> : null}
          <h2 className={`mt-4 text-balance text-3xl font-extrabold leading-tight md:text-5xl ${titleClass}`}>{title}</h2>
          <div className={`mt-6 space-y-4 text-base font-medium leading-8 ${bodyClass}`}>
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
    <div data-motion-group className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => {
        const card = (
          <article data-motion-reveal className="card-service group relative h-full overflow-hidden rounded-[20px] rounded-br-[34px] border border-[#dce6ef] bg-[linear-gradient(165deg,#ffffff,#eef5fb)] p-7 shadow-[0_18px_45px_rgba(6,42,96,0.12)] hover:shadow-[0_24px_54px_rgba(6,42,96,0.16)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(0,119,200,0.14),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.62),transparent_38%)]" />
            <div className="absolute bottom-0 left-7 right-7 h-[3px] bg-[linear-gradient(90deg,#F58220,rgba(245,130,32,0.08))]" />
            <div className="relative">
              <div className="mb-7 grid h-16 w-16 place-items-center rounded-full bg-[#F58220] text-white shadow-[0_14px_28px_rgba(245,130,32,0.24)] transition duration-300 group-hover:scale-[1.03]">
                <WaveServiceIcon slug={service.slug} className="h-8 w-8" />
              </div>
              <h2 className="text-xl font-extrabold leading-tight text-[#062A60]">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[#5c6875]">{service.text}</p>
              {linked ? (
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#0077C8]">
                  View service
                  <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
                </span>
              ) : null}
            </div>
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
    <div data-motion-group className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <article
          data-motion-reveal
          key={item}
          className={`motion-card group relative overflow-hidden rounded-[18px] rounded-br-[26px] border border-[#dbe6f0] bg-[linear-gradient(165deg,#ffffff,#edf5fb)] p-5 shadow-[0_16px_38px_rgba(6,42,96,0.10)] hover:shadow-[0_22px_46px_rgba(6,42,96,0.14)] ${
            index % 3 === 1 ? "lg:-translate-y-1" : ""
          }`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(0,119,200,0.12),transparent_28%)]" />
          <div className="absolute bottom-0 left-5 right-5 h-[3px] bg-[linear-gradient(90deg,#F58220,rgba(245,130,32,0.06))]" />
          <div className="relative flex min-h-24 items-start gap-4">
            <span
              aria-hidden="true"
              className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#F58220]/30 bg-[#fff5eb] text-[#F58220]"
            >
              <CheckCircle2 className="h-4 w-4" />
            </span>
            <p className="text-sm font-bold leading-7 text-[#33475b]">{item}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function WaveAreaGrid({ items }: { items: readonly string[] }) {
  return (
      <div data-motion-group className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <Marble
            key={item}
            className={`p-6 ${getWaveAreaCardOffset(index)}`}
            contentClassName="flex min-h-[11.5rem] flex-col justify-between"
          >
            <MarbleIcon>
              <WaveAreaIcon area={item} className="h-8 w-8 text-white" />
            </MarbleIcon>
            <div className="mt-7">
              <div className="mb-4 h-px w-14 bg-white/35" />
              <h3 className="text-xl font-extrabold leading-tight text-white">{item}</h3>
            </div>
          </Marble>
        ))}
      </div>
  );
}

export function DualCallToAction() {
  return (
    <div data-motion-group className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
      <Link
        data-motion-reveal
        href="/contact#lead-form"
        className="btn-primary inline-flex min-h-14 items-center justify-center gap-3 bg-[#F58220] px-7 font-extrabold text-white shadow-[0_14px_30px_rgba(245,130,32,0.24)] hover:bg-[#cf690d]"
      >
        <CalendarDays className="h-5 w-5" aria-hidden="true" />
        Schedule a Conversation
      </Link>
      <a
        data-motion-reveal
        href={`tel:${siteConfig.company.phoneHref}`}
        className="btn-secondary inline-flex min-h-14 items-center justify-center gap-3 border border-[#062A60]/20 bg-white px-7 font-extrabold text-[#062A60] shadow-[0_12px_26px_rgba(6,42,96,0.10)] hover:border-[#0077C8]/40 hover:bg-[#eef7fd]"
      >
        <PhoneCall className="h-5 w-5 text-[#0077C8]" aria-hidden="true" />
        Call Now
      </a>
    </div>
  );
}

export function ValueGrid({
  items,
  variant = "light",
}: {
  items: readonly { title: string; text: string }[];
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  return (
    <div data-motion-group className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <article
          data-motion-reveal
          key={item.title}
          className={
            isDark
              ? "motion-card relative overflow-hidden border border-white/16 bg-white/8 p-6 shadow-[0_18px_42px_rgba(0,0,0,0.18)]"
              : "motion-card group relative overflow-hidden rounded-[18px] rounded-br-[28px] border border-[#dce5ef] bg-[linear-gradient(160deg,#ffffff,#eef5fb)] p-6 shadow-[0_14px_34px_rgba(6,42,96,0.10)]"
          }
        >
          <div
            className={
              isDark
                ? "absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.12),transparent_30%)]"
                : "absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(0,119,200,0.12),transparent_30%)]"
            }
          />
          <div className="relative">
            {isDark ? null : <div className="mb-5 h-[3px] w-12 bg-[linear-gradient(90deg,#F58220,#0077C8)]" />}
            <h3 className={`text-lg font-extrabold ${isDark ? "text-white" : "text-[#062A60]"}`}>{item.title}</h3>
            <p className={`mt-3 text-sm font-medium leading-7 ${isDark ? "text-white/78" : "text-[#5c6875]"}`}>{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function getWaveAreaCardOffset(index: number) {
  return index % 2 === 1 ? "xl:translate-y-4" : "";
}

function WaveAreaIcon({ area, className = "h-8 w-8" }: { area: string; className?: string }) {
  const iconClass = "fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round";

  switch (area) {
    case "Written":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
          <path className={iconClass} d="M12 13h24v22H12z" />
          <path className={iconClass} d="M18 20h12M18 26h12M18 32h8" />
          <path className={iconClass} d="m31 12 5 5" />
        </svg>
      );
    case "Automation & AI":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
          <rect className={iconClass} x="14" y="14" width="20" height="20" rx="5" />
          <path className={iconClass} d="M24 10v4M24 34v4M10 24h4M34 24h4M16 16l2.5 2.5M29.5 29.5 32 32M32 16l-2.5 2.5M18.5 29.5 16 32" />
          <path className={iconClass} d="M20 24h8M24 20v8" />
        </svg>
      );
    case "Voice":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
          <path className={iconClass} d="M24 12a5 5 0 0 1 5 5v8a5 5 0 0 1-10 0v-8a5 5 0 0 1 5-5Z" />
          <path className={iconClass} d="M15 24a9 9 0 0 0 18 0" />
          <path className={iconClass} d="M24 33v5M19 38h10" />
          <path className={iconClass} d="M11 20h2M35 20h2" />
        </svg>
      );
    case "Electronic":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
          <path className={iconClass} d="M10 16h15v10H10z" />
          <path className={iconClass} d="m10 16 7.5 6 7.5-6" />
          <path className={iconClass} d="M29 14h9v6h-9zM29 24h9v6h-9zM29 34h9v0" />
          <path className={iconClass} d="M14 31h10M10 35h15" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
          <circle className={iconClass} cx="24" cy="24" r="12" />
          <path className={iconClass} d="M24 18v12M18 24h12" />
        </svg>
      );
  }
}

export function ProcessSteps({
  steps,
  variant = "light",
}: {
  steps: readonly string[];
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  return (
    <div data-motion-group className="grid gap-4">
      {steps.map((step, index) => (
        <article
          data-motion-reveal
          key={step}
          className={`motion-card group relative overflow-hidden rounded-[22px] rounded-br-[34px] border p-6 shadow-[0_16px_38px_rgba(6,42,96,0.12)] ${
            isDark
              ? "border-white/16 bg-white/8 text-white shadow-[0_18px_42px_rgba(0,0,0,0.18)]"
              : "border-[#dce6ef] bg-[linear-gradient(165deg,#ffffff,#edf5fb)] text-[#33475b]"
          } ${index % 2 === 1 ? "lg:ml-10" : ""}`}
        >
          <div
            className={
              isDark
                ? "absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.10),transparent_26%)]"
                : "absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(0,119,200,0.12),transparent_28%)]"
            }
          />
          <div className="relative grid gap-5 sm:grid-cols-[74px_1fr] sm:items-center">
            <div
              className={
                isDark
                  ? "grid h-16 w-16 place-items-center rounded-[20px] rounded-br-[24px] rounded-tl-[24px] border border-white/20 bg-white/10 text-lg font-extrabold text-white"
                  : "grid h-16 w-16 place-items-center rounded-[20px] rounded-br-[24px] rounded-tl-[24px] bg-[#062A60] text-lg font-extrabold text-white shadow-[0_14px_28px_rgba(6,42,96,0.18)]"
              }
            >
              {index + 1}
            </div>
            <div>
              <div className={`mb-3 h-px w-16 ${isDark ? "bg-white/22" : "bg-[#cddfed]"}`} />
              <p className={`text-base font-bold leading-7 ${isDark ? "text-white/84" : "text-[#33475b]"}`}>{step}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function PromiseBand() {
  return (
    <section className="relative overflow-hidden bg-[#062A60] px-5 py-16 text-white lg:px-8 lg:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,119,200,0.24),transparent_46%),linear-gradient(45deg,rgba(245,130,32,0.17),transparent_58%)]" />
      <div data-motion-group className="relative mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.95fr_0.9fr] md:items-center">
        <div data-motion-reveal className="max-w-2xl">
          <h2 className="text-balance text-3xl font-extrabold leading-tight md:text-5xl">{siteConfig.promise.heading}</h2>
        </div>
        <div data-motion-reveal className="max-w-xl md:justify-self-end">
          <p className="text-base font-bold uppercase tracking-[0.18em] text-[#F58220] md:text-lg">{siteConfig.promise.eyebrow}</p>
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
      <div data-motion-group className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div data-motion-reveal className="max-w-xl">
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
    <div data-motion-reveal className="relative">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] rounded-br-[76px] rounded-tl-[76px] bg-white shadow-[0_26px_80px_rgba(0,0,0,0.26)] ring-1 ring-white/20">
        <Image
          src="/images/wave-hero-generated.png"
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

export function ChallengeBoard({
  title,
  body,
  items,
}: {
  title: string;
  body: readonly string[];
  items: readonly string[];
}) {
  return (
    <div data-motion-group className="grid gap-6 lg:grid-cols-[0.84fr_1.16fr] lg:items-stretch">
      <article data-motion-reveal className="motion-card relative overflow-hidden rounded-[24px] rounded-br-[72px] bg-[#062A60] p-8 text-white shadow-[0_24px_70px_rgba(6,42,96,0.18)]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,119,200,0.22),transparent_42%),radial-gradient(circle_at_72%_16%,rgba(245,130,32,0.20),transparent_34%)]" />
        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F58220]">Communication gap</p>
          <h3 className="mt-4 text-3xl font-extrabold leading-tight">{title}</h3>
          <div className="mt-5 space-y-4 text-base font-medium leading-8 text-white/82">
            {body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
      <div className="grid gap-4 sm:grid-cols-2 sm:auto-rows-fr">
        {items.map((item, index) => (
          <article
            data-motion-reveal
            key={item}
            className="motion-card group relative h-full min-h-[138px] overflow-hidden border border-[#d7e3ef] bg-[linear-gradient(180deg,#ffffff,#f4f8fc)] p-5 shadow-[0_16px_38px_rgba(6,42,96,0.10)] hover:shadow-[0_22px_46px_rgba(6,42,96,0.14)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_16%,rgba(0,119,200,0.12),transparent_26%),linear-gradient(160deg,rgba(255,255,255,0.96),rgba(242,247,252,0.92))]" />
            <div className="absolute -right-7 top-4 h-20 w-20 rounded-full border border-[#c9dbeb]/65" />
            <div className="absolute bottom-0 left-5 right-5 h-[3px] bg-[linear-gradient(90deg,#F58220,rgba(245,130,32,0.08))]" />
            <div className="relative flex h-full items-center gap-4 pr-10">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[18px] rounded-br-[22px] rounded-tl-[22px] bg-[#062A60] text-white shadow-[0_14px_28px_rgba(6,42,96,0.18)] ring-1 ring-[#0077C8]/22 transition duration-300 group-hover:scale-[1.03]">
                <ChallengeSignalIcon kind={getChallengeKind(item)} className="h-7 w-7" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-lg font-extrabold leading-7 text-[#173556]">{item}</p>
              </div>
              <span className="absolute right-0 top-1 text-xs font-extrabold tracking-[0.24em] text-[#8aa3bb]">
                {(index + 1).toString().padStart(2, "0")}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

type ChallengeKind =
  | "callbacks"
  | "responses"
  | "staff"
  | "messages"
  | "systems"
  | "leads";

function getChallengeKind(item: string): ChallengeKind {
  switch (item) {
    case "Missed callbacks":
      return "callbacks";
    case "Delayed responses":
      return "responses";
    case "Overwhelmed office staff":
      return "staff";
    case "Unanswered emails and texts":
      return "messages";
    case "Disconnected communication systems":
      return "systems";
    case "Lost leads and frustrated customers":
      return "leads";
    default:
      return "systems";
  }
}

function ChallengeSignalIcon({
  kind,
  className = "h-7 w-7",
}: {
  kind: ChallengeKind;
  className?: string;
}) {
  const baseClass = "fill-none stroke-current stroke-[2.4] stroke-linecap-round stroke-linejoin-round";

  switch (kind) {
    case "callbacks":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
          <path className={baseClass} d="M14 17.5c0 9.5 7 17 16.5 17h2.5" />
          <path className={baseClass} d="M17 11h6v8h-6zM31 29h6v8h-6z" />
          <path className={baseClass} d="m29 15 5 5-5 5" />
        </svg>
      );
    case "responses":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
          <circle className={baseClass} cx="24" cy="24" r="11" />
          <path className={baseClass} d="M24 18v7l4 3" />
          <path className={baseClass} d="M34 14h6v6" />
          <path className={baseClass} d="M40 20a16 16 0 0 0-4.4-6.1" />
        </svg>
      );
    case "staff":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
          <circle className={baseClass} cx="24" cy="19" r="6" />
          <path className={baseClass} d="M12 35c2.7-5 6.9-7.5 12-7.5S33.3 30 36 35" />
          <path className={baseClass} d="M11 21a13 13 0 0 1 26 0" />
          <path className={baseClass} d="M9 22v6M39 22v6" />
        </svg>
      );
    case "messages":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
          <path className={baseClass} d="M10 15h18v12H10z" />
          <path className={baseClass} d="m10 15 9 7 9-7" />
          <path className={baseClass} d="M29 22h9v10h-5l-4 4z" />
          <path className={baseClass} d="M32.5 26h2M32.5 29h2" />
        </svg>
      );
    case "systems":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
          <rect className={baseClass} x="9" y="12" width="11" height="11" rx="2" />
          <rect className={baseClass} x="28" y="25" width="11" height="11" rx="2" />
          <path className={baseClass} d="m21 21 4-4" />
          <path className={baseClass} d="m18 30 4-4" />
          <path className={baseClass} d="m25 28 4-4" />
        </svg>
      );
    case "leads":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
          <circle className={baseClass} cx="20" cy="20" r="7" />
          <path className={baseClass} d="M14 35c1.9-4.4 5.2-6.5 10-6.5" />
          <path className={baseClass} d="M30 18h8M34 14v8" />
          <path className={baseClass} d="M28 30 39 19" />
        </svg>
      );
  }
}

export function HighlightStack({ items }: { items: readonly string[] }) {
  return (
    <div data-motion-group className="flex flex-col gap-4 lg:pt-4">
      {items.map((item, index) => (
        <div
          data-motion-reveal
          key={item}
          className={`motion-card group relative overflow-hidden border border-[#d9e5ef] bg-[linear-gradient(180deg,#ffffff,#f4f8fc)] px-5 py-4 shadow-[0_14px_34px_rgba(6,42,96,0.10)] hover:shadow-[0_18px_40px_rgba(6,42,96,0.14)] ${getHighlightCardLayout(
            index,
          )}`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_50%,rgba(0,119,200,0.10),transparent_26%)] opacity-80 transition duration-300 group-hover:opacity-100" />
          <div className="relative flex items-start gap-4">
            <span
              aria-hidden="true"
              className="mt-[0.72rem] h-2.5 w-2.5 shrink-0 rounded-full bg-[#F58220] shadow-[0_0_0_5px_rgba(245,130,32,0.12)]"
            />
            <p className="pr-5 text-sm font-bold leading-7 text-[#33475b]">{item}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function DifferenceSection({
  eyebrow,
  title,
  body,
  items,
  variant = "white",
}: {
  eyebrow: string;
  title: string;
  body: readonly string[];
  items: readonly string[];
  variant?: "white" | "soft";
}) {
  const isSoft = variant === "soft";

  return (
    <section className={`relative overflow-hidden px-5 py-16 lg:px-8 lg:py-24 ${isSoft ? "bg-[#f5f7fb]" : "bg-white"}`}>
      {isSoft ? <SoftTexture /> : null}
      <div className="relative mx-auto max-w-7xl">
        <div data-motion-group className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
          <div data-motion-reveal className="space-y-6">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#F58220]">{eyebrow}</p>
              <h2 className="mt-4 text-balance text-3xl font-extrabold leading-tight text-[#062A60] md:text-5xl">{title}</h2>
              <div className="mt-6 space-y-4 text-base font-medium leading-8 text-[#4e5f70]">
                {body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <article className="max-w-[29rem] border-l-4 border-[#F58220] bg-white p-7 shadow-[0_18px_45px_rgba(6,42,96,0.12)]">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0077C8]">WAVE standard</p>
              <h3 className="mt-4 text-2xl font-extrabold leading-tight text-[#062A60]">
                Communication should keep moving after the first touchpoint.
              </h3>
            </article>
          </div>
          <div className="lg:pt-8">
            <HighlightStack items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}

function getHighlightCardLayout(index: number) {
  const layouts = [
    "w-full md:w-fit md:max-w-[27rem] lg:ml-0",
    "w-full md:w-fit md:max-w-[31rem] lg:ml-10",
    "w-full md:w-fit md:max-w-[28rem] lg:ml-4",
    "w-full md:w-fit md:max-w-[30rem] lg:ml-14",
    "w-full md:w-fit md:max-w-[26rem] lg:ml-8",
    "w-full md:w-fit md:max-w-[32rem] lg:ml-16",
  ];

  return layouts[index % layouts.length];
}

export function MediaFeature({
  title,
  body,
  image,
  placeholder,
  align = "right",
}: {
  title: string;
  body: readonly string[];
  image?: { src: string; alt: string };
  placeholder?: { eyebrow: string; title: string; text: string };
  align?: "left" | "right";
}) {
  const media = (
    <div className="relative aspect-[16/11] overflow-hidden rounded-[22px] rounded-br-[72px] rounded-tl-[72px] border border-[#dbe5ef] bg-white shadow-[0_18px_45px_rgba(6,42,96,0.12)]">
      {image ? (
        <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 36vw, 100vw" className="object-cover" />
      ) : (
        <div className="relative h-full overflow-hidden bg-[linear-gradient(135deg,#062A60,#0077C8)] p-8 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.22),transparent_18%),linear-gradient(125deg,transparent_0_34%,rgba(255,255,255,0.12)_34.2%,transparent_34.7%_64%,rgba(245,130,32,0.16)_64.2%,transparent_64.8%)]" />
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F58220]">{placeholder?.eyebrow}</p>
              <h3 className="mt-4 max-w-sm text-3xl font-extrabold leading-tight">{placeholder?.title}</h3>
            </div>
            <p className="max-w-md text-base font-medium leading-8 text-white/84">{placeholder?.text}</p>
          </div>
        </div>
      )}
    </div>
  );

  const copy = (
    <div className="space-y-4 text-base font-medium leading-8 text-[#4e5f70]">
      <h3 className="text-3xl font-extrabold leading-tight text-[#062A60]">{title}</h3>
      {body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
      {align === "left" ? media : copy}
      {align === "left" ? copy : media}
    </div>
  );
}
