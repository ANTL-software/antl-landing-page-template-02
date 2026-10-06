import type { DanceStudioSite } from "../../../types/danceStudio.types";
import { Link } from "react-router-dom";
import { StudioLink } from "../studioLink/StudioLink";
import "./siteHeader.scss";

type SiteHeaderProps = { site: DanceStudioSite };

export function SiteHeader({ site }: SiteHeaderProps) {
  return <header className="studio-header"><nav aria-label="Navigation principale"><div className="studio-header__links">{site.navigation.map((item) => <StudioLink link={item} key={item.label} />)}<Link to="/account">Espace adhérent</Link></div><p>{site.address}</p><StudioLink className="studio-header__brand" link={{ label: site.brand, href: "#top" }} /></nav></header>;
}
