# antl — Landing Page Template 02

Template de site vitrine réutilisable d'antl, inspiré de la maquette Figma « Moody Dance Studio ». Il privilégie une composition éditoriale à fort contraste, des grands visuels et une adaptation mobile native.

## Architecture modulaire

- React 19, Vite 7 et TypeScript strict
- SCSS natif : aucune bibliothèque visuelle imposée
- `src/content/danceStudio.ts` est la configuration d'un client : marque, textes, CTA, thème et sections
- `src/types/` décrit les contrats de contenu et de composition
- `src/hooks/` prépare l'état consommé par les layouts
- `src/views/components/` contient chaque section, le header, footer et liens réutilisables
- `src/views/layouts/danceStudioPage/` orchestre l'ordre des sections et contient l'écran 404
- `src/utils/styles/` centralise les mixins et styles globaux

### Composer une page

L'ordre dans `site.sections` est l'ordre réel d'affichage. Déplacer un bloc ne demande aucune modification de composant : déplacer simplement sa ligne. Une section peut être retirée sans suppression de code avec `enabled: false`.

```ts
sections: [
  { id: "hero", enabled: true },
  { id: "founders", enabled: true },
  { id: "classes", enabled: false },
]
```

La palette et les polices sont directement éditables dans `site.theme` (`palette` et `typography`) ; elles sont injectées comme variables CSS à la racine de la page. La classe `.theme-dance-studio` conserve les valeurs de repli. Les images et leurs cadrages desktop sont configurés dans le même fichier de contenu, via `image.src` et `image.position`.

## Démarrer

```sh
npm install
npm run dev
```

Pour la livraison :

```sh
npm run build
```

## Démo et GitHub Pages

Le template utilise `HashRouter` : une URL de démo telle que `/#/page-introuvable` rend l'écran 404 en conservant le design du site. Ce choix évite de dépendre des réécritures d'URL côté serveur et fonctionne sur GitHub Pages.

Le fichier `public/404.html` redirige les accès directs à une URL inconnue vers le routeur ; Vite publie également les assets avec des chemins relatifs. Le déploiement statique consiste à publier le contenu de `dist/`.

## Personnaliser un site client

1. Dupliquer ce dossier dans le dépôt du site client.
2. Remplacer la configuration dans `src/content/danceStudio.ts` : nom, navigation, textes, sections et coordonnées.
3. Modifier `site.theme.palette` et `site.theme.typography` pour appliquer les couleurs et polices du client.
4. Réordonner ou désactiver les sections dans `site.sections`.
5. Remplacer les visuels locaux et régler leurs cadrages depuis `src/content/danceStudio.ts` lorsque le client les fournit.
6. Ne conserver que les sections utiles à son parcours ; le template ne force ni catalogue, ni blog, ni paiement.

## Modules optionnels

### Espace adhérent de démonstration

Accessible via « Espace adhérent » dans le header ou `/#/account`. Démo générique sans personnalisation pour un prospect : profil fictif, planning dancehall, afro fusion, hip-hop freestyle et souplesse sur sept jours, réservation et annulation, liste d'attente, formules mensuelles, crédits, renouvellement, recharge et historique de paiements fictifs avec justificatifs téléchargeables.

Le contenu et les offres sont configurés dans `src/content/member.ts`, les contrats dans `src/types/member.ts` et les actions dans `src/hooks/useMemberAccount.ts`. Le layout et son SCSS restent isolés sous `src/views/layouts/memberAccount/`.

Les données sont conservées en localStorage sous une clé propre à la démo. Le bouton de réinitialisation permet de rejouer le scénario. Aucun login réel, email ou prélèvement n'est effectué. Une livraison nécessite un backend d'authentification, des réservations collectives avec capacité serveur, des adhésions persistées et les webhooks du module de paiement. L'espace adhérent simule ces opérations indépendamment du composant de cours d'essai `BookingDemo` déjà présent sur la vitrine.

Parcours de présentation : réserver un cours, rejoindre un cours complet, annuler et voir le crédit revenir, changer de formule, recharger le carnet, télécharger un justificatif, modifier les coordonnées et recharger la page pour vérifier la persistance.

Le template ne contient pas de paiement activé par défaut : aucun produit, prix ou compte Stripe client n'est encore défini. Lorsqu'un projet le justifie, exporter le module autonome dans ce dépôt :

```sh
cd ../antl-site-payments
npm run export:site -- --target ../antl-landing-page-template-02 --ui react
```

Configurer ensuite exclusivement les identifiants Stripe du client, les offres et le traitement métier du webhook, conformément à `PAYMENTS_SETUP.md` généré par l'export. Le navigateur ne doit transmettre qu'un `offerId`.

## Vérification responsive

Contrôler la vitrine, la réservation, la page 404 et les six onglets adhérent en 320×568, 390×844, 430×932, 768×1024, 1024×768, 1440×900 et 844×390 (paysage). Vérifier l'absence de débordement horizontal, le cadrage des images, les cibles tactiles d'au moins 44px (48px pour la réservation), les champs à 16px et les modales accessibles sur écran bas. Les tests de dimensions dans le navigateur de développement ne remplacent pas une recette sur Safari iOS et Android réels.

## Référence design

La composition s'inspire de [Moody Dance Studio](https://www.figma.com/site/vjc4uqkPa4BjF9MD5uk74O/Moody-Dance-Studio--Community-), par Figma Community. Les contenus, la marque et les visuels de démonstration sont des placeholders originaux. Les deux images sont locales, versionnées dans `src/assets/` et doivent être remplacées par les visuels du client lors d'une personnalisation.
