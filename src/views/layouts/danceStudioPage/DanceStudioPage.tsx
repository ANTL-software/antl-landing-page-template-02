import type { ReactNode } from "react";
import { useDanceStudioPage } from "../../../hooks/useDanceStudioPage";
import type { DanceStudioSite, StudioSectionId } from "../../../types/danceStudio.types";
import { ClassesSection, FoundersSection, HeroSection, ReserveSection, SiteFooter, SiteHeader, StudioLink, Ticker, VisionSection } from "../../components";
import "./danceStudioPage.scss";

const sectionComponents: Record<StudioSectionId, (site: DanceStudioSite) => ReactNode> = {
  hero: (site) => <><HeroSection hero={site.hero} /><Ticker items={site.ticker} /></>,
  vision: (site) => <VisionSection vision={site.vision} />,
  classes: (site) => <ClassesSection classes={site.classes} />,
  founders: (site) => <FoundersSection founders={site.founders} />,
  reserve: (site) => <ReserveSection reserve={site.reserve} />,
};

export function DanceStudioPage() {
  const { site } = useDanceStudioPage();
  return <main className={`dance-studio ${site.theme.className}`}><SiteHeader site={site} />{site.sections.filter((section) => section.enabled).map((section) => <div key={section.id}>{sectionComponents[section.id](site)}</div>)}<SiteFooter brand={site.brand} footer={site.footer} /></main>;
}

export function DanceNotFoundPage() {
  const { site } = useDanceStudioPage();

  return <main className={`dance-studio ${site.theme.className} dance-not-found`}><SiteHeader site={site} /><section><p className="studio-label">404</p><h1>Cette scène est vide.</h1><p>La page que vous cherchez ne fait plus partie de la programmation.</p><StudioLink className="studio-button" link={{ label: "Retour à l'accueil", href: "#top" }} showArrow /></section><SiteFooter brand={site.brand} footer={site.footer} /></main>;
}
