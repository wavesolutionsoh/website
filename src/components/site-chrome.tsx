import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { siteConfig } from "@/content/site";
import type { ReactNode } from "react";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#f5f7fb] text-[#102033]">
      <TopBar />
      <SiteHeader />
      {children}
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
      <div className="mx-auto flex min-h-28 max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-8">
        <Link href="/" className="relative block h-20 w-44 shrink-0" aria-label={`${siteConfig.company.name} home`}>
          <Image src="/images/wave-logo.png" alt={siteConfig.company.name} fill priority sizes="176px" className="object-contain object-left" />
        </Link>
        <nav className="hidden items-center gap-5 text-xs font-bold uppercase tracking-[0.08em] text-[#243a53] lg:flex xl:gap-7 xl:text-sm">
          {siteConfig.navigation.map((item) => (
            <div key={item.href} className="group relative py-4">
              <Link href={item.href} className="inline-flex items-center gap-1 hover:text-[#0077C8]">
                {item.label}
                {"children" in item ? <ChevronDown className="h-3.5 w-3.5" /> : null}
              </Link>
              {"children" in item ? (
                <div className="invisible absolute left-0 top-full z-30 w-72 border border-[#d9e1ea] bg-white p-3 opacity-0 shadow-[0_18px_45px_rgba(6,42,96,0.16)] transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} className="block px-4 py-3 text-xs leading-5 text-[#33475b] hover:bg-[#f5f7fb] hover:text-[#0077C8]">
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <Link
          href="/contact"
          className="inline-flex min-h-12 items-center justify-center bg-[#F58220] px-5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(245,130,32,0.26)] transition hover:bg-[#cf690d]"
        >
          Start Here
        </Link>
      </div>
      <details className="group border-t border-[#edf1f5] bg-white lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-[#243a53] marker:hidden">
          <span className="inline-flex items-center gap-2">
            <Menu className="h-4 w-4 text-[#0077C8]" />
            Menu
          </span>
          <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
        </summary>
        <nav className="grid border-t border-[#edf1f5] px-5 pb-5 text-sm font-bold text-[#243a53]">
          {siteConfig.navigation.map((item) => (
            <div key={item.href} className="border-b border-[#edf1f5] py-3">
              <Link href={item.href} className="block uppercase tracking-[0.08em] hover:text-[#0077C8]">
                {item.label}
              </Link>
              {"children" in item ? (
                <div className="mt-3 grid gap-2 border-l-2 border-[#F58220] pl-4 text-xs">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} className="py-1 font-semibold leading-5 text-[#5c6875] hover:text-[#0077C8]">
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
      </details>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-[#d9e1ea] bg-white px-5 py-14 text-[#102033] lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <div className="relative h-16 w-40 bg-white p-2">
            <Image src="/images/wave-logo.png" alt={siteConfig.company.name} fill sizes="160px" className="object-contain p-2" />
          </div>
          <p className="mt-6 max-w-md text-sm font-medium leading-7 text-[#4e5f70]">{siteConfig.footer.summary}</p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#0077C8]">Contact</h2>
          <div className="mt-5 space-y-3 text-sm font-semibold text-[#33475b]">
            <p>{siteConfig.company.location}</p>
            <a href={`tel:${siteConfig.company.phoneHref}`} className="block hover:text-[#0077C8]">
              {siteConfig.company.phone}
            </a>
            <a href={`mailto:${siteConfig.company.email}`} className="block hover:text-[#0077C8]">
              {siteConfig.company.email}
            </a>
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
