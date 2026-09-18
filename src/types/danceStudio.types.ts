export type StudioSectionId = "hero" | "vision" | "classes" | "founders" | "reserve";

export type StudioSection = { id: StudioSectionId; enabled: boolean };

export type StudioLink = { label: string; href: string };

export type StudioFeature = { title: string; text: string; number: string };

export type Founder = { name: string; role: string; crop: "top" | "center" };

export type DanceStudioSite = {
  themeClassName: string;
  brand: string;
  address: string;
  navigation: readonly StudioLink[];
  hero: { title: string; cta: StudioLink; imageAlt: string };
  ticker: readonly string[];
  vision: { eyebrow: string; title: string; text: string; cta: StudioLink };
  classes: { eyebrow: string; title: string; text: string; cta: StudioLink; items: readonly StudioFeature[] };
  founders: { eyebrow: string; quote: string; people: readonly Founder[] };
  reserve: { title: string; text: string; cta: StudioLink };
  footer: { email: string; phone: string; city: string };
  sections: readonly StudioSection[];
};
