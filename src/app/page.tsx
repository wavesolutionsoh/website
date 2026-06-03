import { ArrowRight, Bot, CalendarCheck, Headphones, PhoneCall } from "lucide-react";
import Image from "next/image";
import siteConfig from "../content/site-config.json";
import { LeadForm } from "@/components/lead-form";

const iconMap = {
  Headphones,
  PhoneCall,
  Bot,
  CalendarCheck,
};

type IconKey = keyof typeof iconMap;

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] text-[#102033]">
      <TopBar />
      <SiteHeader />
      <Hero />
      <ServiceCards />
      <ConversionSection />
      <SiteFooter />
    </main>
  );
}

function TopBar() {
  return (
    <div className="bg-[#062A60] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-3 text-xs font-semibold sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <span>{siteConfig.company.location}</span>
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          <a href={`mailto:${siteConfig.company.email}`} className="hover:text-[#F58220]">
            {siteConfig.company.email}
          </a>
          <a href={`tel:${siteConfig.company.phoneHref}`} className="hover:text-[#F58220]">
            {siteConfig.company.phone}
          </a>
        </div>
      </div>
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="border-b border-[#d9e1ea] bg-white">
      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#" className="relative block h-20 w-44" aria-label={`${siteConfig.company.name} home`}>
          <Image src="/images/wave-logo.png" alt={siteConfig.company.name} fill priority className="object-contain object-left" />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-bold uppercase tracking-[0.08em] text-[#243a53] md:flex">
          {siteConfig.navigation.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-[#0077C8]">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#lead-form"
          className="inline-flex min-h-12 items-center justify-center bg-[#F58220] px-5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(245,130,32,0.26)] transition hover:bg-[#cf690d]"
        >
          Request Info
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#062A60] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,42,96,0.96),rgba(6,42,96,0.86),rgba(0,119,200,0.56))]" />
      <HeroTexture />
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
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#lead-form" className="inline-flex min-h-14 items-center justify-center gap-2 bg-[#F58220] px-7 font-bold text-white transition hover:bg-[#cf690d]">
              {siteConfig.hero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </a>
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

function HeroTexture() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 opacity-[0.16] [background-image:radial-gradient(circle_at_16%_32%,rgba(255,255,255,0.42)_0_1px,transparent_2px),radial-gradient(circle_at_76%_38%,rgba(245,130,32,0.32)_0_1px,transparent_2px),linear-gradient(115deg,transparent_0_18%,rgba(255,255,255,0.12)_18.2%,transparent_18.8%_42%,rgba(255,255,255,0.08)_42.2%,transparent_42.8%)] [background-size:78px_78px,112px_112px,260px_260px]" />
      <svg className="absolute right-0 top-10 h-[78%] w-[58%] min-w-[620px] text-white opacity-[0.13]" viewBox="0 0 760 560" fill="none">
        <path d="M92 318C170 236 226 244 306 296C395 354 485 338 668 156" stroke="currentColor" strokeWidth="2" strokeDasharray="8 14" />
        <path d="M120 182C220 128 297 152 362 224C441 312 532 314 672 260" stroke="#F58220" strokeWidth="2" strokeDasharray="5 16" />
        <path d="M140 410C248 352 346 370 420 416C506 470 590 448 696 374" stroke="currentColor" strokeWidth="2" strokeDasharray="10 18" />
        <g opacity="0.9">
          <circle cx="92" cy="318" r="20" stroke="currentColor" strokeWidth="2" />
          <path d="M84 312h16v12H84zM84 312l8 7 8-7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </g>
        <g opacity="0.9">
          <circle cx="306" cy="296" r="22" stroke="currentColor" strokeWidth="2" />
          <path d="M298 286c3 20 18 20 22 13l-6-5-4 4c-4-2-7-5-9-10l4-3-5-7-2 8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </g>
        <g opacity="0.9">
          <circle cx="668" cy="156" r="20" stroke="#F58220" strokeWidth="2" />
          <path d="M660 150h16v12h-16zM660 150l8 7 8-7" stroke="#F58220" strokeWidth="2" strokeLinejoin="round" />
        </g>
        <g opacity="0.8">
          <circle cx="420" cy="416" r="18" stroke="currentColor" strokeWidth="2" />
          <path d="M413 409h14v10h-14zM413 409l7 6 7-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
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
          Written, Automation & AI, Voice, and Electronic support in one communication workflow.
        </p>
      </div>
    </div>
  );
}

function ServiceCards() {
  return (
    <section id="services" className="relative z-10 -mt-16 px-5 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {siteConfig.services.map((service) => {
          const Icon = iconMap[service.icon as IconKey] ?? Headphones;
          return (
            <article key={service.title} className="border-b-4 border-[#F58220] bg-white p-8 shadow-[0_18px_45px_rgba(6,42,96,0.12)]">
              <div className="mb-7 grid h-16 w-16 place-items-center rounded-full bg-[#F58220] text-white">
                <Icon className="h-8 w-8" />
              </div>
              <h2 className="text-xl font-extrabold leading-tight text-[#062A60]">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[#5c6875]">{service.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ConversionSection() {
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

function SiteFooter() {
  return (
    <footer className="border-t border-[#d9e1ea] bg-white px-5 py-14 text-[#102033] lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <div className="relative h-16 w-40 bg-white p-2">
            <Image src="/images/wave-logo.png" alt={siteConfig.company.name} fill className="object-contain p-2" />
          </div>
          <p className="mt-6 max-w-md text-sm font-medium leading-7 text-[#4e5f70]">{siteConfig.footer.summary}</p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#0077C8]">Contact</h2>
          <div className="mt-5 space-y-3 text-sm font-semibold text-[#33475b]">
            <p>{siteConfig.company.location}</p>
            <p>{siteConfig.company.phone}</p>
            <p>{siteConfig.company.email}</p>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#0077C8]">Service Focus</h2>
          <p className="mt-5 text-sm font-medium leading-7 text-[#4e5f70]">{siteConfig.footer.serviceNote}</p>
        </div>
      </div>
    </footer>
  );
}
