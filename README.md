# Application des Jeux Olympiques - TéléSport

Ce projet a été développé pour DelivWeb pour le client TéléSport. Il s'agit d'une application web interactive offrant un tableau de bord pour visualiser les données des précédents Jeux Olympiques.

L'application permet aux utilisateurs de consulter le nombre de médailles par pays et d'explorer les détails pour chaque pays participant.


## Fonctionnalités

- **Dashboard Principal :**
  - Affiche des statistiques clés : nombre total de Jeux Olympiques couverts et nombre de pays participants.
  - Un graphique interactif montrant le nombre total de médailles par pays.
  - Au survol, le graphique affiche le détail des médailles pour un pays.
  - Un clic sur un pays mène à sa page de détails.

- **Page de Détails par Pays :**
  - Affiche des statistiques spécifiques au pays sélectionné : nombre de participations, total des médailles et nombre total d'athlètes.
  - Un graphique montrant l'évolution du nombre de médailles obtenues à chaque participation.
  - Un bouton pour revenir facilement au dashboard principal.

- **Design Responsive :** L'application est entièrement utilisable sur ordinateurs, tablettes et mobiles.

## Technologies utilisées

- **Framework :** Angular v20+
- **Langages :** TypeScript, HTML, SCSS
- **Librairies :**
  - [RxJS](https://rxjs.dev/) pour la programmation réactive et la gestion des données asynchrones.
  - [ApexCharts](https://apexcharts.com/) pour la visualisation des données (graphiques).

## Prérequis

- Node.js (version 20 ou supérieure recommandée)
- npm
- Angular CLI

## Installation et Lancement

Étapes pour lancer l'application en local :

1.  **Cloner le dépôt Git :**
    ```bash
    git clone https://github.com/baptiste-jullion/OC-2-Developpez-le-front-end-en-utilisant-Angular.git
    ```

2.  **Accéder au répertoire du projet :**
    ```bash
    cd OC-2-Developpez-le-front-end-en-utilisant-Angular
    ```

3.  **Installer les dépendances :**
    ```bash
    npm install
    ```

4.  **Lancez le serveur de développement :**
    ```bash
    ng serve
    ```

5.  **Ouvrir l'application dans un navigateur :**
    Se rendre à l'adresse [http://localhost:4200](http://localhost:4200).

## Structure du Projet

Le code source est organisé comme suit :

- `src/app/core/` : Contient la logique métier principale.
  - `components/` : Composants réutilisables (graphiques).
  - `models/` : Interfaces TypeScript pour les modèles de données (`Olympic`, `Participation`).
  - `services/` : Services pour la récupération des données (`olympic.service.ts`).
- `src/app/pages/` : Contient les composants principaux de chaque page (`home`, `details`, `not-found`).
- `src/assets/` : Contient les fichiers statiques, y compris le fichier `mock/olympic.json` utilisé comme source de données.