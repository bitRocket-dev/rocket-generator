#!/usr/bin/env node
/** @format */

import * as inquirer from 'inquirer';
import { readdirSync } from 'fs-extra';
import { reduxFlow } from './@generators/scripts/flow-async/reduxFlow';
import { componentUi } from './@generators/scripts/component-ui';
import { componentRouting } from './@generators/scripts/components-routing';
import { componentView } from './@generators/scripts/component-view';
import { componentShared } from './@generators/scripts/component-shared';
import { boilerplate } from './@generators/scripts/create-rocket-app/boilerplate';
import { translations } from './@generators/scripts/i18n';
import { customHook } from './@generators/scripts/hooks';
import { customUtils } from './@generators/scripts/utils/customUtils';
import { packages } from './@generators/scripts/packages';
import { COMPONENTS, CREATE_ROCKET_APP } from './constants/options';
import { reduxSyncFlow } from './@generators/scripts/flow-sync';
import { error } from 'console';

//#region filename dynamic
const fileNamePackages = readdirSync(`${__dirname}/@generators/scripts/packages/templates`);
const fileNameHooks = readdirSync(`${__dirname}/@generators/scripts/hooks/templates`);
const fileNameComponentUi = readdirSync(`${__dirname}/@generators/scripts/component-ui/templates`);
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
      choices: [
        'create-rocket-app',
        'Components',
        'CRUD',
        'i18n',
        'hooks',
        'utils',
        'Packages',
        '\x1b[31m--- Exit ---\x1b[0m \n',
      ],
    },
    {
      type: 'list',
      name: 'action',
      message: 'What do you need?',
      choices: [
        '\x1b[33m--- Back ---\x1b[0m',
        new inquirer.Separator(),
        'routing-component',
        'new-component-routing',
        'rocket-components',
        'new-component-UI',
        'new-component-view',
        'new-component-shared',
      ],
      when: (answers: { main: string }) => answers.main === 'Components',
    },
    {
      type: 'input',
      name: 'Exit',
      message: () => process.exit(),
      when: (answers: { action: string }) => answers.action === '\x1b[31m--- Exit ---\x1b[0m \n',
    },
    {
      type: 'list',
      name: 'createApp',
      message: 'Create a boilerplate',
      choices: ['Insert Name', '\x1b[33m--- Back ---\x1b[0m'],
      when: (answers: { main: string }) => answers.main === 'create-rocket-app',
    },
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
      when: (answers: { action: any; createApp: string }) =>
        answers.action || answers.createApp === '\x1b[33m--- Back ---\x1b[0m',
    },
    //#region PACKAGES
    {
      type: 'checkbox',
      name: 'packages',
      message: 'Choose your packages',
      choices: fileNamePackages,
      when: (answers: { main: string }) => answers.main === 'Packages',
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
    {
      type: 'input',
      name: 'newApp',
      message: 'What is the name?',
      when: (answers: { createApp: string }) => answers.createApp === 'Insert Name',
    },
    //#region CRUD
    {
      type: 'list',
      name: 'flowType',
      message: "what redux flow's type do you want?",
      choices: ['Asyncronous', 'Syncronous'],
      when: (answers: { main: string }) => answers.main === 'CRUD',
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
        if (answer == '') {
          return answer;
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
      when: (answers: { main: string }) => answers.main === 'CRUD',
      validate: (answer: string) => {
        if (answer === '') {
          return 'please enter a valid answer';
        }
        return true;
      },
    },
    //#endregion CRUD
    //#region COMPONENTS UI
    {
      type: 'checkbox',
      name: 'rocketComponents',
      message: 'Choose rocket component.',
      choices: fileNameComponentUi,
      when: (answers: { action: string }) => answers.action === 'rocket-components',
    },
    {
      type: 'input',
      name: 'newComponentUI',
      message: 'Insert name of new component ui.',
      when: (answers: { action: string }) => answers.action === 'new-component-UI',
      validate: (answer: string) => {
        if (answer === '') {
          return 'please enter a valid answer';
        }
        return true;
      },
    },
    //#endregion COMPONENTS UI
    //#region NEW COMPONENTS ROUTING
    {
      type: 'checkbox',
      name: 'routingComponents',
      message: 'Choose routing component.',
      choices: fileNameRoutingComponent,
      when: (answers: { action: string }) => answers.action === 'routing-component',
    },
    //#endregion NEW COMPONENTS ROUTING
    //#region NEW COMPONENTS ROUTING
    {
      type: 'input',
      name: 'newComponentRouting',
      message: 'Insert name of new component routing',
      when: (answers: { action: string }) => answers.action === 'new-component-routing',
      validate: (answer: string) => {
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
      when: (answers: { action: string }) => answers.action === 'new-component-view',
      validate: (answer: string) => {
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
      when: (answers: { action: string }) => answers.action === 'new-component-shared',
      validate: (answer: string) => {
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
      when: (answers: { main: string }) => answers.main === 'hooks',
    },
    //#endregion CUSTOM HOOK
    //#region UTILS
    {
      type: 'checkbox',
      name: 'utils',
      message: 'Choose utils component do you want.',
      choices: fileNameUtils,
      when: (answers: { main: string | string[] }) => answers.main && answers.main.includes('utils'),
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
    await showMenu().then(answers => {
      switch (answers.main) {
        case 'create-rocket-app':
          boilerplate(answers.newApp);
          app = false;
          break;
        case 'Packages':
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
        case 'CRUD':
          if (answers.flowType === 'Asyncronous') {
            answers.reduxFlowType.map((item: any) => {
              if (item === 'Read') {
                answers.readType.map((item: any) => reduxFlow(`${item}-${answers.reduxFlowName}`, answers.reducer));
              } else reduxFlow(`${item}-${answers.reduxFlowName}`, answers.reducer);
            });
          } else {
            // answers.reduxFlowSyncType.map((item) => {
            //   if (item === "Other")
            //      (
            //       `${
            //         answers.reduxFlowName
            //       }-${answers.otherSyncType.toLowerCase()}`,
            //       answers.reducer
            //     );
            //   else
            reduxSyncFlow(answers.reduxFlowName, answers.reduxFlowSyncType, answers.reducer).catch(error);
          }
          //   });
          // }
          break;
        case 'i18n':
          translations();
          break;
        case 'utils':
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
        case 'hooks':
          answers.customHooks && answers.customHooks.map((item: any) => customHook(item));
          break;
        case 'Components':
          switch (answers.action) {
            case 'rocket-components':
              answers.rocketComponents.map((item: any) => componentUi(item));
              break;
            case 'new-component-UI':
              componentUi(answers.newComponentUI);
              break;
            case 'new-component-routing':
              componentRouting(answers.newComponentRouting);
              break;
            case 'routing-component':
              answers.routingComponents.map((item: any) => componentRouting(item));
              break;
            case 'new-component-view':
              componentView(answers.newComponentView);
              break;
            case 'new-component-shared':
              componentShared(answers.newComponentShared);
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
