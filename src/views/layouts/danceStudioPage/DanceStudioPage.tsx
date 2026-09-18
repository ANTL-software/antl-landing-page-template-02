import type { CSSProperties, ReactNode } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDanceStudioPage } from "../../../hooks/useDanceStudioPage";
import type { DanceStudioSite, StudioSectionId } from "../../../types/danceStudio.types";
import "./danceStudioPage.scss";

type StudioPageStyle = CSSProperties & Record<"--studio-stage-image", string>;

type StudioLinkProps = { className?: string; link: { label: string; href: string }; showArrow?: boolean };

function StudioLink({ className, link, showArrow = false }: StudioLinkProps) {
  const content = <>{link.label}{showArrow ? <FiArrowUpRight aria-hidden="true" /> : null}</>;

  if (link.href.startsWith("#")) {
    return <Link className={className} to={{ pathname: "/", search: `?section=${link.href.slice(1)}` }}>{content}</Link>;
  }

  return <a className={className} href={link.href}>{content}</a>;
}

function StudioButton({ link }: { link: { label: string; href: string } }) {
  return <StudioLink className="studio-button" link={link} showArrow />;
}

function StudioHeader({ site }: { site: DanceStudioSite }) {
  return <header className="studio-header"><nav aria-label="Navigation principale"><div className="studio-header__links">{site.navigation.map((item) => <StudioLink link={item} key={item.label} />)}</div><p>{site.address}</p><StudioLink className="studio-header__brand" link={{ label: site.brand, href: "#top" }} /></nav></header>;
}

function Ticker({ items }: { items: readonly string[] }) {
  return <div className="studio-ticker" aria-label="Actualités"><div>{[...items, ...items].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}</div></div>;
}

function HeroSection({ site }: { site: DanceStudioSite }) {
  return <><section className="studio-hero" id="top"><div className="studio-hero__image" role="img" aria-label={site.hero.imageAlt}><h1>{site.hero.title}</h1><StudioButton link={site.hero.cta} /></div></section><Ticker items={site.ticker} /></>;
}

function VisionSection({ site }: { site: DanceStudioSite }) {
  return <section className="studio-split" id="vision"><div className="studio-split__image" role="img" aria-label="Danseuse en mouvement" /><div className="studio-split__copy"><p className="studio-label">{site.vision.eyebrow}</p><h2>{site.vision.title}</h2><p>{site.vision.text}</p><StudioButton link={site.vision.cta} /></div></section>;
}

function ClassesSection({ site }: { site: DanceStudioSite }) {
  return <section className="studio-classes" id="cours"><div className="studio-classes__heading"><p className="studio-label">{site.classes.eyebrow}</p><h2>{site.classes.title}</h2><p>{site.classes.text}</p><StudioButton link={site.classes.cta} /></div><div className="studio-classes__list">{site.classes.items.map((item) => <article key={item.number}><p>{item.number}</p><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>;
}

function FoundersSection({ site }: { site: DanceStudioSite }) {
  return <section className="studio-founders" id="fondateurs"><div className="studio-founders__intro"><p className="studio-label">{site.founders.eyebrow}</p><blockquote>{site.founders.quote}</blockquote></div><div className="studio-founders__grid">{site.founders.people.map((person) => <article className={`studio-founder studio-founder--${person.crop}`} key={person.name}><div role="img" aria-label={`Portrait de ${person.name}`} /><p>{person.name}<small>{person.role}</small></p></article>)}</div></section>;
}

function ReserveSection({ site }: { site: DanceStudioSite }) {
  return <section className="studio-reserve" id="reserve"><div><h2>{site.reserve.title}</h2><p>{site.reserve.text}</p></div><StudioButton link={site.reserve.cta} /></section>;
}

function StudioFooter({ site }: { site: DanceStudioSite }) {
  return <footer className="studio-footer"><h2>Mov.<br />Stu.</h2><div><p>Email<br /><a href={`mailto:${site.footer.email}`}>{site.footer.email}</a></p><p>Téléphone<br /><a href={`tel:${site.footer.phone.replaceAll(" ", "")}`}>{site.footer.phone}</a></p></div><div><p>{site.footer.city}</p><p>© 2026 {site.brand}</p></div></footer>;
}

const sectionComponents: Record<StudioSectionId, (site: DanceStudioSite) => ReactNode> = {
  hero: (site) => <HeroSection site={site} />,
  vision: (site) => <VisionSection site={site} />,
  classes: (site) => <ClassesSection site={site} />,
  founders: (site) => <FoundersSection site={site} />,
  reserve: (site) => <ReserveSection site={site} />,
};

export function DanceStudioPage() {
  const { site } = useDanceStudioPage();
  const style: StudioPageStyle = { "--studio-stage-image": `url(${import.meta.env.BASE_URL}assets/dance-stage.jpg)` };

  return <main className={`dance-studio ${site.themeClassName}`} style={style}><StudioHeader site={site} />{site.sections.filter((section) => section.enabled).map((section) => <div key={section.id}>{sectionComponents[section.id](site)}</div>)}<StudioFooter site={site} /></main>;
}

export function DanceNotFoundPage() {
  const { site } = useDanceStudioPage();

  return <main className={`dance-studio ${site.themeClassName} dance-not-found`}><StudioHeader site={site} /><section><p className="studio-label">404</p><h1>Cette scène est vide.</h1><p>La page que vous cherchez ne fait plus partie de la programmation.</p><StudioButton link={{ label: "Retour à l'accueil", href: "#top" }} /></section><StudioFooter site={site} /></main>;
}
