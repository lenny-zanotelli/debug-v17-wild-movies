# Exercice de Debug - Application Angular avec TMDB

## Introduction

Bienvenue dans cet exercice pratique de **debug** pour une application Angular utilisant l'API de **The Movie Database (TMDB)**. Tu vas cloner un projet Angular "cassé" et suivre les consignes pour identifier et corriger les erreurs afin de le rendre fonctionnel. Cela te permettra d'approfondir tes compétences en Angular et d'apprendre à utiliser l'API TMDB.

---

## Objectifs
- Identifier et corriger des erreurs dans une application Angular.
- Utiliser l'API TMDB pour récupérer des données sur les films.
- Comprendre comment gérer des clés API et intégrer une API dans un projet.

---

## Prérequis

- Node.js (version 16 ou supérieure).
- Angular CLI installé globalement.
- Un compte gratuit sur [The Movie Database (TMDB)](https://www.themoviedb.org/).

---

## Création de ta clé API TMDB

1. **Inscription sur TMDB** :
   - Rends-toi sur [themoviedb.org](https://www.themoviedb.org/) et crée un compte gratuit.
   - Connecte-toi à ton compte.

2. **Génération d'une API Key** :
   - Accède à ton profil > **Gérer mon profil** > **API**.
   - Clique sur **Create** pour générer une **API Key**.
   - Accepte les **Conditions générales d'utilisation** et remplis le formulaire pour une utilisation **Education**.
   - Copie ton **Bearer Token**.

3. **Intégration de la clé dans l'application** :
   - Une fois ta clé API générée, ouvre le fichier `movie.service.ts`.
   - Remplace la variable `Authorization` dans le champ `headers` par ton jeton d'accès sécurisé :

```typescript
private options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer TON_JETON_ACCESS',
  },
};
```

---

## Instructions

### Étape 1 : Cloner le projet cassé

Clone le dépôt Git contenant l'application Angular "cassée" :

```bash
git clone https://github.com/votre-repo/angular-tmdb-debug.git
cd angular-tmdb-debug
```

---

### Étape 2 : Installer les dépendances

Installe les dépendances nécessaires pour exécuter le projet :

```bash
npm install
```

---

### Étape 3 : Lancer le projet

Lance l'application Angular :

```bash
ng serve
```

Accède à l'application via ton navigateur à l'adresse [http://localhost:4200](http://localhost:4200).

---

### Étape 4 : Identifier et corriger les erreurs

L'application contient des erreurs intentionnelles dans plusieurs fichiers (HTML, TypeScript, SCSS, et configuration). Ta mission est de :

1. Analyser les messages d'erreur dans :
   - La **console** de ton navigateur.
   - Le **terminal** où tu as lancé `ng serve`.

2. Corriger les erreurs dans les fichiers appropriés pour que l'application fonctionne comme attendu.

---

## Fonctionnalités attendues

Une fois les corrections apportées, l'application doit permettre :

1. **Page d'accueil** :
   - Afficher les films populaires récupérés via l'API TMDB.
   - Ajouter des films aux favoris.

2. **Page des favoris** :
   - Afficher les films ajoutés aux favoris.
   - Retirer un film des favoris.
   - Afficher un message si aucun film n'est en favori.

3. **Page de détails** :
   - Afficher les détails d'un film en cliquant sur une vignette depuis la page d'accueil ou des favoris.

4. **Aperçu** :
  - Voici une vidéo qui présente le fonctionnement attendu de l'application : [Regarde la vidéo](https://www.loom.com/share/52e5a4fe34a74162bae72c1265f9b14d?sid=b2cec31b-e6f4-4650-bdb0-6088f18f4591)

---

## Astuces pour le debug

1. **Console du navigateur** :
   - Consulte la console pour identifier les erreurs JavaScript ou Angular.

2. **Terminal** :
   - Analyse les messages d'erreur à la compilation.

3. **Documentation officielle** :
   - Angular : [angular.dev](https://angular.dev)
   - TMDB API : [developer.themoviedb.org](https://developer.themoviedb.org/docs)

4. **Structure des fichiers** :
   Familiarise-toi avec la structure du projet Angular pour savoir où chercher les erreurs :

```
.
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── movie-thumbnail/
│   │   │   ├── navbar/
│   │   ├── pages/
│   │   │   ├── movie-list-page/
│   │   │   ├── favorites-page/
│   │   │   ├── movie-details-page/
│   │   ├── services/
│   │   ├── models/
│   │   └── app.module.ts
```

---

## Validation

L'application est considérée comme corrigée lorsque :

1. Toutes les pages fonctionnent sans erreur.
2. Les fonctionnalités attendues mentionnées ci-dessus sont disponibles.
3. Aucun message d'erreur ne s'affiche dans la console ou le terminal.

---

## Bonnes pratiques

- Teste ta API Key ou Bearer Token avant de l'utiliser.
- Garde ta clé API confidentielle :
  - Ne l'inclus jamais directement dans un répertoire public comme GitHub.
  - Utilise des variables d'environnement pour les projets en production.

---

Bonne chance avec cet exercice de debug ! Si tu as des questions, n'hésite pas à demander de l'aide ou consulter la documentation Angular et TMDB. 🚀

