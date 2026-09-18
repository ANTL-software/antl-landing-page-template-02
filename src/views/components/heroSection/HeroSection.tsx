import type { DanceStudioSite } from "../../../types/danceStudio.types";
import { StudioLink } from "../studioLink/StudioLink";
import "./heroSection.scss";

type HeroSectionProps = { hero: DanceStudioSite["hero"] };

export function HeroSection({ hero }: HeroSectionProps) {
  return <section className="studio-hero" id="top"><div className="studio-hero__image"><img alt={hero.image.alt} src={hero.image.src} style={{ objectPosition: hero.image.position }} /><div className="studio-hero__shade" /><div className="studio-hero__content"><h1>{hero.title}</h1><StudioLink className="studio-button" link={hero.cta} showArrow /></div></div></section>;
}
