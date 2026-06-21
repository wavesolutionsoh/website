import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export const siteUrl = "https://website-red-one-65.vercel.app";
export const defaultTitle = "WAVE Solutions LLC | Professional Answering & Virtual Receptionist Services";
export const defaultDescription =
  "Professional answering, virtual receptionist, and communication support services for responsive service-based businesses.";
export const defaultOgImage = "/images/wave-hero-generated.png";
export const defaultKeywords = [
  "answering service",
  "virtual receptionist",
  "customer follow-up",
  "communication management",
  "service business support",
  "WAVE Solutions LLC",
] as const;

type MetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  image?: string;
};

type WebPageSchemaOptions = {
  type?: "WebPage" | "AboutPage" | "CollectionPage" | "ContactPage";
  name: string;
  description: string;
  path: string;
};

type CollectionPageSchemaOptions = {
  name: string;
  description: string;
  path: string;
  items: readonly { name: string; path?: string }[];
};

type ServiceSchemaOptions = {
  name: string;
  description: string;
  path: string;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, siteUrl).toString();
}

export function buildMetadata({
  title,
  description,
  path,
  keywords = defaultKeywords,
  image = defaultOgImage,
}: MetadataOptions): Metadata {
  const resolvedTitle = `${title} | ${siteConfig.company.name}`;
  const imageUrl = absoluteUrl(image);
  const pageUrl = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    keywords: [...keywords],
    openGraph: {
      title: resolvedTitle,
      description,
      url: pageUrl,
      siteName: siteConfig.company.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: resolvedTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [imageUrl],
    },
  };
}

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.company.name,
  url: siteUrl,
  logo: absoluteUrl("/images/wave-logo.png"),
  image: absoluteUrl(defaultOgImage),
  description: defaultDescription,
  email: siteConfig.company.email,
  telephone: siteConfig.company.phoneHref,
  areaServed: "US",
  address: {
    "@type": "PostalAddress",
    streetAddress: "PO Box 5041",
    addressLocality: "Willowick",
    addressRegion: "OH",
    postalCode: "44095",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: siteConfig.company.phoneHref,
    email: siteConfig.company.email,
    areaServed: "US",
    availableLanguage: "en",
  },
  serviceType: siteConfig.services.map((service) => service.title),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.company.name,
  url: siteUrl,
  inLanguage: "en-US",
  description: defaultDescription,
};

export function buildWebPageSchema({
  type = "WebPage",
  name,
  description,
  path,
}: WebPageSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.company.name,
      url: siteUrl,
    },
  };
}

export function buildCollectionPageSchema({
  name,
  description,
  path,
  items,
}: CollectionPageSchemaOptions) {
  return {
    ...buildWebPageSchema({
      type: "CollectionPage",
      name,
      description,
      path,
    }),
    mainEntity: {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => {
        const result: Record<string, unknown> = {
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
        };

        if (item.path) {
          result.item = absoluteUrl(item.path);
        }

        return result;
      }),
    },
  };
}

export function buildServiceSchema({ name, description, path }: ServiceSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: absoluteUrl(path),
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.company.name,
      url: siteUrl,
      telephone: siteConfig.company.phoneHref,
      email: siteConfig.company.email,
    },
    areaServed: "US",
    availableChannel: [
      {
        "@type": "ServiceChannel",
        servicePhone: siteConfig.company.phoneHref,
        serviceUrl: absoluteUrl(path),
      },
    ],
  };
}

export function buildBreadcrumbSchema(items: readonly BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
