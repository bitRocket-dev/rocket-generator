/** @format */

export const createPackageJSON = (name: string) => `
  {
  "name": "${name}",
  "version": "0.1.0",
  "private": true,
  "engines": {
    "npm": ">=6.4.1",
    "node": ">=10.13.0"
  },
  "dependencies": {
    "connected-react-router": "^6.0.0",
    "fast-memoize": "^2.5.2",
    "hedron": "^0.7.1",
    "html-webpack-plugin": "^4.5.2",
    "react-dom": "^17.0.2",
    "react-redux": "^7.2.2",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "react-transition-group": "^4.4.2",
    "react-image": "^4.0.3",
    "react-quick-pinch-zoom": "^4.0.2",
    "react": "^17.0.2",
    "react-datepicker": "^3.8.0",
    "redux-saga": "^1.1.3",
    "redux": "^4.1.0",
    "reselect": "^4.0.0",
    "styled-components": "^5.2.3",
    "web-vitals": "^1.0.1"
  },
  "scripts": {
    "build:app": "react-scripts build",
    "build:storybook": "build-storybook -s public",
    "cypress": "./node_modules/.bin/cypress open-ct",
    "prettier": "prettier --write src/**/*.{ts,tsx} src/**/**/*.{ts,tsx} src/**/**/**/*.{ts,tsx} src/**/**/**/**/*.{ts,tsx} src/**/**/**/**/**/*.{ts,tsx}",
    "start:build": "npm run build:app && serve -s build",
    "start:dev": "react-scripts start",
    "start:storybook": "start-storybook -p 6006 -s public",
    "test:commit-msg": "commitlint -env HUSKY_GIT_PARAMS",
    "test:eslint": "eslint --ext .ts,.tsx ./src",
    "test:format": "npm run test:lint && npm run test:eslint",
    "test:lint": "tsc --noEmit",
    "upgrade:check": "npm-check",
    "upgrade:interactive": "npm-check --update"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@commitlint/cli": "^11.0.0",
    "@commitlint/config-conventional": "^11.0.0",
    "@cypress/react": "^5.9.1",
    "@cypress/webpack-dev-server": "^1.3.1",
    "@storybook/addon-actions": "^6.1.19",
    "@storybook/addon-essentials": "^6.1.20",
    "@storybook/addon-links": "^6.1.19",
    "@storybook/node-logger": "^6.1.19",
    "@storybook/preset-create-react-app": "^3.1.6",
    "@storybook/react": "^6.1.20",
    "@types/node": "^12.0.0",
    "@types/react-dom": "^17.0.5",
    "@types/react-redux": "^7.1.16",
    "@types/react-router-dom": "^5.1.7",
    "@types/styled-components": "^5.1.9",
    "cypress": "^7.5.0",
    "eslint-config-react-app": "^6.0.0",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-jsx-a11y": "^6.4.1",
    "eslint-plugin-react": "^7.22.0",
    "eslint": "^7.20.0",
    "husky": "^5.0.9",
    "prettier": "^2.2.1",
    "redux-devtools-extension": "^2.13.9",
    "serve": "^11.3.2",
    "typescript": "^4.1.2",
    "@types/react-transition-group": "^4.4.1",
    "@types/react-datepicker": "^3.1.8"
  }
}`;
