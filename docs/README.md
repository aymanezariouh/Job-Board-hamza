obBoard — intégration HTML/CSS complète depuis Stitch

Ce projet reprend toutes les maquettes du fichier Stitch fourni avec un CSS volontairement simple, lisible et facile à expliquer.

Liens du projet

Figma : https://www.figma.com/design/WGfkQckD0WqjFiUvzKY9Ac/Sans-titre?node-id=0-1&t=kvHGsCZ58r9HPdjG-1

Jira : https://bouhouchhamza023-1788794641866.atlassian.net/jira/software/projects/SCRUM/boards/1?filter=&groupBy=none&atlOrigin=eyJpIjoiMjY3ODM1NGJiMGI1NGJhOWE2MDFiZjM3MWJkMGRkYmYiLCJwIjoiaiJ9

Maquettes Stitch

Toutes les maquettes fournies dans Stitch sont des maquettes desktop.

Elles couvrent les écrans et états principaux du JobBoard :

liste des offres ;

détail d'une offre ;

dépôt d'une offre ;

offres suivies ;

administration ;

ajout / modification d'une offre ;

état de suppression ;

états de formulaire ;

états vides ;

variantes d'affichage nécessaires pour préparer les briefs suivants.

Il ne s'agit donc pas de maquettes mobile séparées.

Pages HTML

index.html — Liste des offres

offre-detail.html — Détail d'une offre

deposer-offre.html — Déposer une offre

offres-suivies.html — Offres suivies

admin.html — Administration

admin-offre.html — Ajouter / modifier une offre

admin-suppression.html — État de suppression

Certaines maquettes Stitch représentent des états ou variantes d'un même écran et non des pages métier différentes.

CSS

Un seul fichier CSS est utilisé :

css/style.css

Le CSS utilise uniquement :

les variables CSS ;

Flexbox ;

CSS Grid ;

margin et padding ;

border et border-radius ;

une structure simple et lisible.

Aucun framework CSS n'est utilisé.

Pas de Bootstrap

Pas de Tailwind CSS

Pas de JavaScript dans le Brief 1

Structure du projet

job-board/
│
├── index.html
├── offre-detail.html
├── deposer-offre.html
├── offres-suivies.html
├── admin.html
├── admin-offre.html
├── admin-suppression.html
│
├── css/
│   └── style.css
│
├── docs/
│
└── README.md

Lancer le projet

Aucune installation n'est nécessaire.

Il suffit de :

télécharger ou cloner le projet ;

ouvrir le dossier dans VS Code ;

ouvrir index.html dans le navigateur.

Il est aussi possible d'utiliser l'extension Live Server de VS Code.

Fonctionnalités représentées

L'interface prépare les fonctionnalités suivantes :

consultation des offres ;

recherche par mot-clé ;

filtres par ville, technologie et type de contrat ;

tri par date ;

consultation du détail d'une offre ;

suivi d'une offre ;

affichage des offres suivies ;

dépôt d'une offre ;

gestion des offres dans l'administration ;

ajout d'une offre ;

modification d'une offre ;

suppression d'une offre ;

gestion des états vides et des formulaires.

Brief 1 — HTML/CSS

Dans cette première version, le projet est principalement statique.

Les fonctions suivantes sont représentées visuellement mais ne sont pas encore dynamiques :

Recherche

Filtres

Tri

Suivre une offre

Retirer une offre suivie

Supprimer une offre

Publier une offre

Le but du Brief 1 est surtout de construire une interface propre et sémantique en HTML/CSS à partir des maquettes desktop réalisées sur Stitch/Figma.

Préparation des briefs suivants

Brief 2 — JavaScript

Les éléments HTML sont déjà préparés pour ajouter :

la recherche dynamique ;

les filtres ;

le tri ;

le suivi des offres ;

le stockage avec localStorage ;

la validation des formulaires ;

les états sans résultat.

Brief 3 — Express / EJS / MySQL

La structure du projet pourra ensuite être reliée à :

Express ;

EJS ;

MySQL ;

la gestion dynamique des offres ;

le CRUD d'administration.

Technologies

HTML5

CSS3

Flexbox

CSS Grid

Git / GitHub

Figma

Stitch

Jira

À retenir pour la soutenance

Le projet a été conçu à partir des maquettes desktop réalisées sur Stitch/Figma et organisé pour rester simple à comprendre et à maintenir.

Le HTML est structuré de manière sémantique et le CSS utilise principalement Flexbox, Grid et des variables CSS.

Les fonctionnalités dynamiques ne sont pas encore développées dans le Brief 1, mais les éléments HTML sont déjà préparés pour être dynamisés avec JavaScript dans le Brief 2 puis reliés à Express, EJS et MySQL dans le Brief 3.