import type { DanceStudioSite } from "../../../types/danceStudio.types";
import { BookingDemo } from "../../../booking/react";
import "./reserveSection.scss";

type ReserveSectionProps = { reserve: DanceStudioSite["reserve"] };

export function ReserveSection({ reserve }: ReserveSectionProps) {
  return <section className="studio-reserve" id="reserve">
    <div><h2>{reserve.title}</h2><p>{reserve.text}</p><small>Démo du module antl site booking</small></div>
    <BookingDemo {...reserve.bookingDemo} className="studio-reserve__booking" />
  </section>;
}
