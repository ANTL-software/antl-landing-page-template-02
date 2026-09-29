# Réservations du site

## Mode statique

Le site garde un front-end statique. Configurer le compte Cal.com ou Calendly du client, ses services, horaires et calendriers connectés, puis remplacer `bookingUrl` dans `src/booking/static-config.ts`. Utiliser `BookingProviderEmbed` ou un simple lien. Le prestataire externe héberge la logique et verrouille les créneaux ; aucune clé n'est stockée dans le site.

## Démonstration locale

Le fichier `src/booking/demo.ts` et le composant `BookingDemo` servent seulement aux templates antl. Ils requièrent `@js-temporal/polyfill` et mémorisent les créneaux dans le navigateur. Les remplacer avant toute livraison par l’un des deux modes ci-dessous.

## Mode dynamique

Installer `pg` et `@js-temporal/polyfill`, provisionner une base PostgreSQL puis appliquer `server/booking/schema.sql`. Copier les règles du client dans `server/booking/dynamic-config.ts` : fuseau IANA, ressources, services, jours, plages horaires et fermetures exceptionnelles.

Créer un `Pool` PostgreSQL, puis connecter le handler aux fonctions HTTP du site :

```ts
import { Pool } from "pg";
import { createBookingHandler } from "./server/booking/handler.js";
import { createDynamicBookingService } from "./server/booking/server.js";
import { bookingSetup } from "./server/booking/dynamic-config.js";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const bookingHandler = createBookingHandler(createDynamicBookingService(pool, bookingSetup));

export async function GET(request: Request) {
  return bookingHandler(request);
}

export async function POST(request: Request) {
  return bookingHandler(request);
}
```

Le routeur doit exposer les chemins `/api/booking/availability`, `/api/booking/reservations` et `/api/booking/reservations/:id/cancel` à ce handler. Monter l'adaptateur du framework choisi autour de ce contrat `Request` / `Response`.

La contrainte PostgreSQL refuse toute réservation confirmée qui chevauche une autre réservation de la même ressource, y compris lors de deux requêtes simultanées. Conserver le jeton de gestion seulement dans l'email de confirmation et mettre en place un envoi transactionnel depuis `createBooking` vers l'outil email du client. Ne pas retourner ce jeton au navigateur.

