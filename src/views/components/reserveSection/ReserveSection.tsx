import type { DanceStudioSite } from "../../../types/danceStudio.types";
import { StudioLink } from "../studioLink/StudioLink";
import "./reserveSection.scss";

type ReserveSectionProps = { reserve: DanceStudioSite["reserve"] };

export function ReserveSection({ reserve }: ReserveSectionProps) {
  return <section className="studio-reserve" id="reserve"><div><h2>{reserve.title}</h2><p>{reserve.text}</p></div><StudioLink className="studio-button" link={reserve.cta} showArrow /></section>;
}
