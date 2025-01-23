# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Configuration de Déploiement Netlify

## Paramètres de Build

- **Branche de déploiement** : `main`
- **Répertoire de base** : `./` (répertoire du projet)
- **Commande de build** : `npm run build`
- **Répertoire de publication** : `dist` (dossier de build Vite par défaut)
- **Répertoire des fonctions** : `/`

## Variables d'Environnement

Les variables d'environnement peuvent être configurées dans l'interface Netlify pour plus de contrôle et de flexibilité sur votre build.

### Configuration Importante

- Le site est configuré pour utiliser Node.js version 18
- Les redirections sont configurées pour gérer les applications Single Page (SPA)
- Des en-têtes de sécurité de base sont inclus

Pour plus d'informations sur la configuration, consultez la [documentation Netlify](https://docs.netlify.com/).
