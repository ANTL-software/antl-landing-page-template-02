import type { DanceStudioSite } from "../../../types/danceStudio.types";
import "./siteFooter.scss";

type SiteFooterProps = { brand: string; footer: DanceStudioSite["footer"] };

export function SiteFooter({ brand, footer }: SiteFooterProps) {
  return <footer className="studio-footer"><h2>Mov.<br />Stu.</h2><div><p>Email<br /><a href={`mailto:${footer.email}`}>{footer.email}</a></p><p>Téléphone<br /><a href={`tel:${footer.phone.replaceAll(" ", "")}`}>{footer.phone}</a></p></div><div><p>{footer.city}</p><p>© 2026 {brand}</p></div></footer>;
}
