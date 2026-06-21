import type { ServiceSlug } from "@/content/site";

export type ServiceSectionKey = "intro" | "process" | "standards" | "related" | "promise";

export type ServiceIntroVariant =
  | "media-left-grid"
  | "media-right-rail"
  | "process-first"
  | "media-marble"
  | "channel-wide"
  | "copy-left-showcase";

export type ServiceProcessVariant =
  | "stagger"
  | "split-callout"
  | "compact-two-col"
  | "checklist-split";

export type ServiceStandardsVariant =
  | "grid-3"
  | "grid-2x2"
  | "stack"
  | "marble-3";

export type ServiceLayoutPreset = {
  intro: ServiceIntroVariant;
  process: ServiceProcessVariant;
  standards: ServiceStandardsVariant;
  showRelatedCta: boolean;
  sectionOrder: readonly ServiceSectionKey[];
};

export const serviceLayoutPresets: Record<ServiceSlug, ServiceLayoutPreset> = {
  "answering-services": {
    intro: "media-left-grid",
    process: "stagger",
    standards: "grid-3",
    showRelatedCta: false,
    sectionOrder: ["intro", "process", "standards", "related", "promise"],
  },
  "virtual-receptionist-services": {
    intro: "media-right-rail",
    process: "split-callout",
    standards: "grid-2x2",
    showRelatedCta: true,
    sectionOrder: ["intro", "process", "standards", "related", "promise"],
  },
  "customer-follow-up": {
    intro: "copy-left-showcase",
    process: "stagger",
    standards: "stack",
    showRelatedCta: false,
    sectionOrder: ["intro", "process", "standards", "related", "promise"],
  },
  "ai-powered-communication-support": {
    intro: "copy-left-showcase",
    process: "compact-two-col",
    standards: "marble-3",
    showRelatedCta: false,
    sectionOrder: ["intro", "process", "standards", "related", "promise"],
  },
  "communication-management": {
    intro: "copy-left-showcase",
    process: "checklist-split",
    standards: "grid-2x2",
    showRelatedCta: false,
    sectionOrder: ["intro", "process", "standards", "related", "promise"],
  },
};
