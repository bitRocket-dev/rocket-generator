#!/usr/bin/env node
/** @format */

import * as inquirer from 'inquirer';
import { readdirSync } from 'fs-extra';
import { reduxFlow } from './@generators/scripts/flow-async';
import { createComponentUi } from './@generators/scripts/component-ui';
import { createComponentRouting } from './@generators/scripts/components-routing';
import { createComponentView } from './@generators/scripts/component-view';
import { createComponentShared } from './@generators/scripts/component-shared';
import { reduxScriptStore } from './@generators/scripts/flow';
import { createRocketApp } from './@generators/scripts/create-rocket-app';
import { createI18n } from './@generators/scripts/i18n/createI18n';
import { customHook } from './@generators/scripts/hooks';
import { customUtils } from './@generators/scripts/utils/customUtils';
import { packages } from './@generators/scripts/packages';
import { reduxSyncFlow } from './@generators/scripts/flow-sync';
import {
  COMPONENTS,
  CREATE_ROCKET_APP,
  CRUD,
  HOOKS,
  I18N,
  NEW_COMPONENT_ROUTING,
  NEW_COMPONENT_SHARED,
  NEW_COMPONENT_UI,
  NEW_COMPONENT_VIEW,
  PACKAGES,
  ROCKET_COMPONENTS,
  ROUTING_COMPONENT,
  UTILS,
} from './constants/options';
import { error } from 'console';

//#region filename dynamic
const fileNamePackages = readdirSync(`${__dirname}/@generators/scripts/packages/templates`);
const fileNameHooks = readdirSync(`${__dirname}/@generators/scripts/hooks/templates`);
const fileNameComponentUi = readdirSync(`${__dirname}/@generators/scripts/component-ui/templates/default`);
const fileNameUtils = readdirSync(`${__dirname}/@generators/scripts/utils/templates`);
const fileNameUtilsValidate = readdirSync(`${__dirname}/@generators/scripts/utils/templates/validate`);
const fileNameUtilsFormatting = readdirSync(`${__dirname}/@generators/scripts/utils/templates/formatting`);
const fileNameUtilsCache = readdirSync(`${__dirname}/@generators/scripts/utils/templates/cache`);
const fileNameRoutingComponent = readdirSync(`${__dirname}/@generators/scripts/components-routing/templates`);
//#endregion

const showMenu = () => {
  const questions = [
    {
      type: 'list',
      name: 'main',
      message: 'Hi! What do you want to do?',
      choices: [CREATE_ROCKET_APP, COMPONENTS, CRUD, I18N, HOOKS, UTILS, PACKAGES, '\x1b[31m--- Exit ---\x1b[0m \n'],
    },
    //#region ::: CREATE ROCKET APP
    {
      type: 'list',
      name: 'createApp',
      message: 'Create a boilerplate',
      choices: ['Insert Name', '\x1b[33m--- Back ---\x1b[0m'],
      when: (answers: { main: string }) => answers.main === CREATE_ROCKET_APP,
    },
    {
      type: 'input',
      name: 'newApp',
      message: 'What is the name?',
      when: (answers: { createApp: string }) => answers.createApp === 'Insert Name',
    },
    //#endregion
    //#region ::: EXIT/BACK
    {
      type: 'input',
      name: 'exitApp',
      message: () => process.exit(),
      when: (answers: { main: string }) => answers.main === '\x1b[31m--- Exit ---\x1b[0m \n',
    },
    {
      type: 'input',
      name: '::: One Moment Please ::',
      message: () => main(),
      when: (answers: { action; createApp: string }) =>
        answers.action || answers.createApp === '\x1b[33m--- Back ---\x1b[0m',
    },
    {
      type: 'input',
      name: 'Exit',
      message: () => process.exit(),
      when: (answers: { action: string }) => answers.action === '\x1b[31m--- Exit ---\x1b[0m \n',
    },
    //#endregion
    //#region PACKAGES
    {
      type: 'checkbox',
      name: 'packages',
      message: 'Choose your packages',
      choices: fileNamePackages,
      when: answers => answers.main === PACKAGES,
    },
    //#endregion PACKAGES
    //#region FIREBASE
    {
      type: 'input',
      name: 'apiKey',
      message: 'apiKey',
      when: answers => answers.packages && answers.packages.includes('firebase'),
    },

    {
      type: 'input',
      name: 'authDomain',
      message: 'authDomain',
      when: answers => answers.packages && answers.packages.includes('firebase'),
    },

    {
      type: 'input',
      name: 'projectId',
      message: 'projectId',
      when: answers => answers.packages && answers.packages.includes('firebase'),
    },

    {
      type: 'input',
      name: 'storageBucket',
      message: 'storageBucket',
      when: answers => answers.packages && answers.packages.includes('firebase'),
    },

    {
      type: 'input',
      name: 'messagingSenderId',
      message: 'messagingSenderId',
      when: answers => answers.packages && answers.packages.includes('firebase'),
    },

    {
      type: 'input',
      name: 'appId',
      message: 'appId',
      when: answers => answers.packages && answers.packages.includes('firebase'),
    },

    {
      type: 'input',
      name: 'measurementId',
      message: 'measurementId',
      when: answers => answers.packages && answers.packages.includes('firebase'),
    },

    //#endregion FIREBASE
    //#region CRUD
    {
      type: 'list',
      name: 'flowType',
      message: "what redux flow's type do you want?",
      choices: ['Asyncronous', 'Syncronous'],
      when: answers => answers.main === CRUD,
    },
    {
      type: 'list',
      name: 'reducer',
      message: 'Do you want the reducer??',
      choices: ['yes', 'no'],
      when: (answers: { main: string }) => answers.main === 'CRUD',
    },
    {
      type: 'checkbox',
      name: 'reduxFlowType',
      message: 'what is the type?',
      choices: ['Create', 'Read', 'Update', 'Delete'],
      when: (answers: { flowType: string }) => answers.flowType === 'Asyncronous',
    },
    {
      type: 'checkbox',
      name: 'reduxFlowSyncType',
      message: 'what is the type?',
      choices: [
        'Create',
        'Update',
        'Delete',
        //  'Other'
      ],
      validate: answer => {
        if (answer.length === 0) {
          return 'Please choose one.';
        }
        return true;
      },
      when: (answers: { flowType: string }) => answers.flowType === 'Syncronous',
    },
    {
      type: 'input',
      name: 'otherSyncType',
      message: 'Insert the name of the type',
      when: (answers: { reduxFlowSyncType: string | string[] }) =>
        answers.reduxFlowSyncType && answers.reduxFlowSyncType.includes('Other'),
      validate: (answer: string) => {
        if (answer === '') {
          return 'please enter a valid answer';
        }
        return true;
      },
    },
    {
      type: 'checkbox',
      name: 'readType',
      message: 'Specify the Read.',
      choices: ['List', 'Detail'],
      when: (answers: { reduxFlowType: string | string[] }) =>
        answers.reduxFlowType && answers.reduxFlowType.includes('Read'),
    },
    {
      type: 'input',
      name: 'reduxFlowName',
      message: 'Please insert the name of redux flow',
      when: answers => answers.main === CRUD,
      validate: answer => {
        if (answer === '') {
          return 'please enter a valid answer';
        }
        return true;
      },
    },
    //#endregion CRUD
    //#region COMPONENTS UI
    {
      type: 'list',
      name: 'action',
      message: 'What do you need?',
      choices: [
        '\x1b[33m--- Back ---\x1b[0m',
        new inquirer.Separator(),
        ROUTING_COMPONENT,
        NEW_COMPONENT_ROUTING,
        ROCKET_COMPONENTS,
        NEW_COMPONENT_UI,
        NEW_COMPONENT_VIEW,
        NEW_COMPONENT_SHARED,
      ],
      when: answers => answers.main === COMPONENTS,
    },
    {
      type: 'checkbox',
      name: 'rocketComponents',
      message: 'Choose rocket component.',
      choices: fileNameComponentUi,
      when: answers => answers.action === ROCKET_COMPONENTS,
    },
    {
      type: 'input',
      name: 'newComponentUI',
      message: 'Insert name of new component ui.',
      when: answers => answers.action === NEW_COMPONENT_UI,
      validate: answer => {
        if (answer === '') {
          return 'please enter a valid answer';
        }
        return true;
      },
    },
    //#endregion COMPONENTS UI
    //#region COMPONENTS ROUTING
    {
      type: 'checkbox',
      name: 'routingComponents',
      message: 'Choose routing component.',
      choices: fileNameRoutingComponent,
      when: answers => answers.action === ROUTING_COMPONENT,
    },
    //#endregion NEW COMPONENTS ROUTING
    //#region NEW COMPONENTS ROUTING
    {
      type: 'input',
      name: 'newComponentRouting',
      message: 'Insert name of new component routing',
      when: answers => answers.action === NEW_COMPONENT_ROUTING,
      validate: answer => {
        if (answer === '') {
          return 'please enter a valid answer';
        }
        return true;
      },
    },
    //#endregion NEW COMPONENTS ROUTING
    //#region COMPONENTS VIEW
    {
      type: 'input',
      name: 'newComponentView',
      message: 'Insert name of new component view.',
      when: answers => answers.action === NEW_COMPONENT_VIEW,
      validate: answer => {
        if (answer === '') {
          return 'please enter a valid answer';
        }
        return true;
      },
    },
    //#endregion COMPONENTS VIEW
    //#region COMPONENTS SHARED
    {
      type: 'input',
      name: 'newComponentShared',
      message: 'Insert name of new component shared.',
      when: answers => answers.action === NEW_COMPONENT_SHARED,
      validate: answer => {
        if (answer === '') {
          return 'please enter a valid answer';
        }
        return true;
      },
    },
    //#endregion COMPONENTS SHARED
    //#region CUSTOM HOOK
    {
      type: 'checkbox',
      name: 'customHooks',
      message: 'Choose the hooks',
      choices: fileNameHooks,
      when: answers => answers.main === HOOKS,
    },
    //#endregion CUSTOM HOOK
    //#region UTILS
    {
      type: 'checkbox',
      name: UTILS,
      message: 'Choose utils component do you want.',
      choices: fileNameUtils,
      when: answers => answers.main && answers.main.includes(UTILS),
    },
    {
      type: 'checkbox',
      name: 'cacheUtils',
      message: 'Choose CACHE components.',
      choices: fileNameUtilsCache,
      when: (answers: { main: string | string[] }) => answers.main && answers.main.includes('cache'),
    },
    {
      type: 'checkbox',
      name: 'formatUtils',
      message: 'Choose FORMATTING components.',
      choices: fileNameUtilsFormatting,
      when: (answers: { utils: string | string[] }) => answers.utils && answers.utils.includes('formatting'),
    },
    {
      type: 'checkbox',
      name: 'validUtils',
      message: 'Choose VALIDATE components.',
      choices: fileNameUtilsValidate,
      when: (answers: { utils: string | string[] }) => answers.utils && answers.utils.includes('validate'),
    },
    //#endregion UTILS
  ];
  return inquirer.prompt(questions);
};
const main = async () => {
  let app = true;
  while (app) {
    // eslint-disable-next-line no-loop-func
    await showMenu().then(answers => {
      switch (answers.main) {
        case CREATE_ROCKET_APP:
          createRocketApp(answers.newApp);
          app = false;
          break;
        case PACKAGES:
          const options = [
            answers.apiKey,
            answers.authDomain,
            answers.projectId,
            answers.storageBucket,
            answers.messagingSenderId,
            answers.appId,
            answers.measurementId,
          ];
          packages(answers.packages, options);
          break;
        case CRUD:
          if (answers.flowType === 'Asyncronous') {
            answers.reduxFlowType.map(item => {
              if (item === 'Read') {
                answers.readType.map(item => reduxFlow(`${item}-${answers.reduxFlowName}`, answers.reducer));
              } else reduxFlow(`${item}-${answers.reduxFlowName}`, answers.reducer);
            });
          } else {
            reduxSyncFlow(answers.reduxFlowName, answers.reduxFlowSyncType, answers.reducer).catch(error);
          }
          reduxScriptStore(answers.reduxFlowName);

          break;
        case I18N:
          createI18n();
          break;
        case UTILS:
          answers.utils &&
            answers.utils.map((choice: string) => {
              switch (choice) {
                case 'cache':
                  answers.cacheUtils && answers.cacheUtils.map((item: string) => customUtils(item, choice));
                  break;
                case 'formatting':
                  answers.formatUtils && answers.formatUtils.map((item: string) => customUtils(item, choice));
                  break;
                case 'validate':
                  answers.validUtils && answers.validUtils.map((item: string) => customUtils(item, choice));
                  break;
                case 'fetch':
                  customUtils(choice);
                  break;
                case 'helpers':
                  customUtils(choice);
                  break;
                case 'time':
                  customUtils(choice);
                  break;
              }
            });
          break;
        case HOOKS:
          answers.customHooks && answers.customHooks.map(item => customHook(item));
          break;
        case COMPONENTS:
          switch (answers.action) {
            case ROCKET_COMPONENTS:
              answers.rocketComponents.map(item => createComponentUi(item));
              break;
            case NEW_COMPONENT_UI:
              createComponentUi(answers.newComponentUI);
              break;
            case NEW_COMPONENT_ROUTING:
              createComponentRouting(answers.newComponentRouting);
              break;
            case ROUTING_COMPONENT:
              answers.routingComponents.map(item => createComponentRouting(item));
              break;
            case NEW_COMPONENT_VIEW:
              createComponentView(answers.newComponentView);
              break;
            case NEW_COMPONENT_SHARED:
              createComponentShared(answers.newComponentShared);
              break;
            default:
              console.log('One moment..');
              break;
          }
          break;
        default:
          console.log('One moment..');
          break;
      }
    });
  }
};
main();
