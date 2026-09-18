import danceFoundersImage from "../assets/dance-founders.png";
import danceHeroImage from "../assets/dance-hero.png";
import type { DanceStudioSite } from "../types/danceStudio.types";

export const danceStudioSite: DanceStudioSite = {
  theme: { id: "dance-studio", className: "theme-dance-studio" },
  brand: "Mouvement Studio.",
  address: "18 rue du Mouvement, Paris",
  navigation: [{ label: "Cours", href: "#cours" }, { label: "Le studio", href: "#vision" }],
  hero: { title: "Trouve ton\nélan.", cta: { label: "Réserver un cours", href: "#reserve" }, image: { src: danceHeroImage, alt: "Danseuse contemporaine sur une scène illuminée", position: "center" } },
  ticker: ["Libre. Expressif. Puissant. Bougez avec nous.", "Atelier chorégraphique ce samedi — places limitées", "Nouveaux cours de danse contemporaine"],
  vision: { eyebrow: "Notre vision", title: "Un espace pour bouger, créer et recommencer.", text: "Mouvement Studio réunit débutants, interprètes et curieux autour d'une pratique exigeante, bienveillante et profondément vivante.", cta: { label: "Découvrir le studio", href: "#fondateurs" }, image: { src: danceHeroImage, alt: "Danseuse en mouvement", position: "72% center" } },
  classes: { eyebrow: "Nos cours", title: "Chaque rythme a sa place.", text: "Contemporain, hip-hop, jazz et improvisation : des formats pensés pour progresser sans perdre le plaisir du mouvement.", cta: { label: "Voir les cours", href: "#reserve" }, items: [{ number: "01", title: "Contemporain", text: "Explorer l'amplitude, la présence et le poids du geste." }, { number: "02", title: "Hip-hop", text: "Ancrer sa technique et développer son propre style." }, { number: "03", title: "Improvisation", text: "Écouter le corps et transformer l'instant en mouvement." }] },
  founders: { eyebrow: "Les fondatrices", quote: "« La danse commence là où l'on ose prendre de la place. »", people: [{ name: "Sophia Bennett", role: "Fondatrice & professeure", image: { src: danceFoundersImage, alt: "Portrait de Sophia Bennett", position: "left center" } }, { name: "Alisa Morris", role: "Direction pédagogique", image: { src: danceFoundersImage, alt: "Portrait de Alisa Morris", position: "right center" } }] },
  reserve: { title: "Prêt·e à faire le premier pas ?", text: "Rejoignez un cours d'essai et découvrez le rythme qui vous ressemble.", cta: { label: "Réserver ma place", href: "mailto:bonjour@exemple.fr" } },
  footer: { email: "bonjour@exemple.fr", phone: "+33 1 42 00 00 00", city: "Paris, France" },
  sections: [{ id: "hero", enabled: true }, { id: "vision", enabled: true }, { id: "classes", enabled: true }, { id: "founders", enabled: true }, { id: "reserve", enabled: true }],
};
