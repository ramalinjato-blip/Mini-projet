# Gesti Server (API)

Ceci est le **backend du projet Gesti**, développé avec **Node.js** et **Express 5**.  
Il sert de **boilerplate** pour construire une API REST moderne avec une structure claire et scalable.

## Fonctionnalités

- **Express 5** : Utilisation des dernières fonctionnalités du framework.
- **ES Modules** : Syntaxe JavaScript moderne (`import` / `export`).
- **Configuration d’environnement** : Chargement dynamique selon l’environnement (Développement / Production).
- **Gestion globale des erreurs** : Middleware centralisé pour gérer les erreurs de l’API.
- **CORS activé** : Prêt pour les requêtes cross-origin côté client.

## Structure du projet

- `app.js` : Point d’entrée de l’application
- `config/` : Configuration et variables d’environnement
- `controllers/` : Logique métier
- `routes/` : Définition des endpoints
- `middlewares/` : Middlewares personnalisés (erreurs, logs, etc.)

## Démarrage

### Prérequis

- [Node.js](https://nodejs.org/) (v18 ou supérieur recommandé)
- `npm`

### Installation

1. Aller dans le dossier serveur :
   ```bash
   cd server

2. Installer les dépendances :
   ```bash
   npm install
   ```

3. Configure les variables d'environnement :
   Créer un fichier `.env.development.local` à la racine du dossier `server/` :
   PORT=3000
   NODE_ENV=development

### Lancer le serveur

**Mode développement (avec redémarrage automatique) :**
```bash
   npm run dev
```

L'API sera accessible à: `http://localhost:PORT`

## Current Endpoints

| Méthode | Endpoint              | Description                                |
|:--------|:----------------------|:-------------------------------------------|
| GET     | `/`                   | Message de bienvenue                       |
| GET     | `/api/v1/hello-world` | Endpoint de test retournant "Hello World!" |

## Statut du projet

En cours de développement  
Ce projet sert de base pour les futures fonctionnalités de Gesti.
