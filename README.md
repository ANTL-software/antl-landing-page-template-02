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

Le thème actif est choisi par `site.theme.className`. Ses tokens de couleur sont regroupés dans `.theme-dance-studio`, au début de `src/views/layouts/danceStudioPage/danceStudioPage.scss`. Les images et leurs cadrages desktop sont configurés dans le même fichier de contenu, via `image.src` et `image.position`.

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
3. Choisir ou créer le thème dans le fichier de styles du layout.
4. Réordonner ou désactiver les sections dans `site.sections`.
5. Remplacer les visuels locaux et régler leurs cadrages depuis `src/content/danceStudio.ts` lorsque le client les fournit.
6. Ne conserver que les sections utiles à son parcours ; le template ne force ni catalogue, ni blog, ni paiement.

## Modules optionnels

Le template ne contient pas de paiement activé par défaut : aucun produit, prix ou compte Stripe client n'est encore défini. Lorsqu'un projet le justifie, exporter le module autonome dans ce dépôt :

```sh
cd ../antl-site-payments
npm run export:site -- --target ../antl-landing-page-template-02 --ui react
```

Configurer ensuite exclusivement les identifiants Stripe du client, les offres et le traitement métier du webhook, conformément à `PAYMENTS_SETUP.md` généré par l'export. Le navigateur ne doit transmettre qu'un `offerId`.

## Référence design

La composition s'inspire de [Moody Dance Studio](https://www.figma.com/site/vjc4uqkPa4BjF9MD5uk74O/Moody-Dance-Studio--Community-), par Figma Community. Les contenus, la marque et les visuels de démonstration sont des placeholders originaux. Les deux images sont locales, versionnées dans `src/assets/` et doivent être remplacées par les visuels du client lors d'une personnalisation.
