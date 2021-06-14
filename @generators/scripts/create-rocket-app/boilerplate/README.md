<!-- @format -->

# Indice

- [Naming Convention](docs/NAMING_CONVENTION.md)
- [Git Flow](docs/GIT_FLOW.md)

### Strumenti utilizzati

- [NodeJS](https://nodejs.org/en/)
- [React Chrome DevTool](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Redux Chrome DevTool](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

# Introduzione

L'applicazione viene sviluppata in [react 17.0.0](https://reactjs.org/blog/2020/10/20/react-v17.html) utilizzando [create-react-app 4.0.0](https://github.com/facebook/create-react-app) con template [typescript](https://www.typescriptlang.org).

_Si suggerisce l'utilizzo dell'editor [VSCode](https://code.visualstudio.com/)_

- Lo _state_ dell'applicativo viene gestito utilizzando [redux](https://redux.js.org)

- Il routing delle pagine è gestito con [react-router](https://reactrouter.com/web/guides/quick-start).

- Il codice viene validato con [eslint](https://eslint.org/) e [prettier](https://prettier.io/) in fase di commit, utilizzando [husky](https://github.com/typicode/husky). Il formato del commit viene validato utilizzando [commitlint](https://github.com/conventional-changelog/commitlint) (vedi di seguito).

# Stile e CSS

Per il design si utilizza esclusivamente [styled-components](https://styled-components.com).
I componenti UI vengono sviluppati e testati in isolamento utilizzando [storybook](https://storybook.js.org/).

# Specifiche

Lo sviluppo è _functional oriented_ . Tutti i componenti sono _dumb_, mentre la logica viene gestita all'interno di _custom hook_

# Architettura

- Un componente _View_ è costruito aggregando uno o più componenti _shared_, _ui_ o di layout.
- Un componente _shared_ è sviluppato aggregando uno o più componenti _UI_ e _custom hook_
- Il componente _UI_ rappresenta la libreria grafica di conseguenza non ha alcuna logica.
- Lo sviluppo di un componente **non deve superare le 90-100 righe di codice**.

**Ogni componente/funzione viene esportato/a singolarmente**

# Formattazione codice

La formattazione e i controlli sul codice hanno lo scopo di garantire la massima qualità e uniformità all'interno della codebase.

**In fase di commit, viene eseguito in automatico uno script che formatta l'intera codebase secondo la configurazione Prettier definita all'interno del codice, successivamente nel caso in cui ci siano errori typescript o il commit non segua lo standard di formattazione definito (vedi [Git Flow](GIT_FLOW.md)) un ulteriore script negherà il commit**

# Scripts utili

- `npm run build:app` creazione della build
- `npm run postinstall` attiva husky dopo l'installazione dei _node_modules_ _(automatico)_
- `npm run start:build` avvio ambiente di produzione in locale
- `npm run start:dev` avvio ambiente di sviluppo in locale
- `npm run start:storybook` avvio ambiente Storybook
- `npm run test:lint` controllo errori typescript
- `npm run test:eslint` controllo errori di formattazione
- `npm run test:format` controllo errori eslint e typescript
- `npm run test:commit-msg` controllo errori nome commit _(automatico)_
- `npm run prettier` formattazione del codice rispetto alle regole definite
- `npm run test` avvio test Jest
- `npm run start:storybook` avvio di storybook in locale
- `npm run upgrade:check` controlla eventuali librerie non utilizzate o non aggiornate
- `npm run upgrade:interactive` aggiornamenti delle librerie

### Configurazione VSCode

1. Install `Prettier` extension
2. Go to to `File -> Settings` and search `theme`
3. Click on `Edit in settings.json`
4. Add this entry on opened file `settings.json` and save it

```
  "window.zoomLevel": 1,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
    "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
```

# Work flow

- Il package manager utilizzato è NPM **- non si utilizza Yarn -**
- L'installazione di una nuova libreria richiede l'autorizzazione del Team Lead.
- La modifica delle regole di formattazione richiede l'autorizzazione del Team Lead.
- L'aggiornamento di una libreria richiede l'autorizzazione del Team Lead.

## Altri strumenti utili

- [bundlephobia](https://bundlephobia.com)
