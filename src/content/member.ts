import type { AccountTab, Course, MemberPlan, MemberState } from "../types/member";

export const memberContent = {
  brand: "Mouvement Studio.", subtitle: "Espace adhérent · démonstration",
  storageKey: "antl-template02-member-v1",
  tabs: [{ id: "overview", label: "Mon espace" }, { id: "schedule", label: "Planning des cours" }, { id: "bookings", label: "Mes réservations" }, { id: "membership", label: "Mon adhésion" }, { id: "billing", label: "Mes paiements" }, { id: "profile", label: "Mon profil" }] satisfies { id: AccountTab; label: string }[],
  plans: [
    { id: "discovery", name: "Découverte", price: 49, credits: 4, description: "4 cours par mois pour prendre ses marques." },
    { id: "regular", name: "Régulière", price: 89, credits: 8, description: "8 cours par mois pour progresser à son rythme." },
    { id: "passion", name: "Passion", price: 129, credits: 12, description: "12 cours par mois pour varier les disciplines." }
  ] satisfies MemberPlan[],
  cancellationHours: 12, extraCredits: { quantity: 5, price: 65 },
};

function dateAt(offset: number, hour: number): string {
  const date = new Date(); date.setDate(date.getDate() + offset); date.setHours(hour, 0, 0, 0); return date.toISOString();
}
export function createMemberCourses(): Course[] {
  return Array.from({ length: 7 }, (_, day) => [
    { id: `pole-${day}`, title: "Dancehall", level: "Débutant", instructor: "Camille", startsAt: dateAt(day + 1, 18), duration: 60, capacity: 8, occupied: day === 1 ? 8 : 4 + day % 3, room: "Studio Groove" },
    { id: `flow-${day}`, title: day % 2 ? "Souplesse" : "Afro fusion", level: "Tous niveaux", instructor: "Léa", startsAt: dateAt(day + 1, 19), duration: 60, capacity: 10, occupied: 5 + day % 4, room: "Salle Mouvement" },
    { id: `inter-${day}`, title: "Hip-hop freestyle", level: "Intermédiaire", instructor: "Camille", startsAt: dateAt(day + 1, 20), duration: 75, capacity: 8, occupied: day === 3 ? 8 : 3, room: "Studio Groove" }
  ]).flat();
}
export function createInitialMemberState(): MemberState {
  return { version: 1, profile: { firstName: "Julie", lastName: "Martin", email: "julie@example.com", phone: "06 00 00 00 00", emergencyContact: "Alex · 06 11 11 11 11", notifications: true }, planId: "regular", credits: 6, renewal: true,
    enrollments: [{ courseId: "pole-0", status: "confirmed" }, { courseId: "flow-2", status: "confirmed" }],
    invoices: [{ id: "DEMO-001", date: new Date().toISOString(), label: "Formule Régulière · mensualité", amount: 89 }] };
}
