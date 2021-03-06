#!/usr/bin/env node
// Used to tell Node.js that this is a CLI tool
/** @format */

const inquirer = require("inquirer");
const reduxFlow = require("./@generators/scripts/flow/index");
const reduxSyncFlow = require("./@generators/scripts/sync-flow/index");
const componentUi = require("./@generators/scripts/component-ui");
const componentRouting = require("./@generators/scripts/components-routing");
const componentView = require("./@generators/scripts/component-view");
const componentShared = require("./@generators/scripts/component-shared");
const boilerplate = require("./@generators/scripts/create-rocket-app/boilerplate");
const translations = require("./@generators/scripts/i18n");
const customHook = require("./@generators/scripts/hooks");
const customUtils = require("./@generators/scripts/utils/customUtils");
const fs = require("fs-extra");
const packages = require("./@generators/scripts/packages");

//#region filename dynamic
const fileNamePackages = fs.readdirSync(
  `${__dirname}/@generators/scripts/packages/templates`
);
const fileNameHooks = fs.readdirSync(
  `${__dirname}/@generators/scripts/hooks/templates`
);
const fileNameComponentUi = fs.readdirSync(
  `${__dirname}/@generators/scripts/component-ui/templates`
);
const fileNameUtils = fs.readdirSync(
  `${__dirname}/@generators/scripts/utils/templates`
);
const fileNameUtilsValidate = fs.readdirSync(
  `${__dirname}/@generators/scripts/utils/templates/validate`
);
const fileNameUtilsFormatting = fs.readdirSync(
  `${__dirname}/@generators/scripts/utils/templates/formatting`
);
const fileNameUtilsCache = fs.readdirSync(
  `${__dirname}/@generators/scripts/utils/templates/cache`
);
const fileNameRoutingComponent = fs.readdirSync(
  `${__dirname}/@generators/scripts/components-routing/templates`
);
//#endregion

const showMenu = () => {
  const questions = [
    {
      type: "list",
      name: "main",
      message: "Hi! What do you want to do?",
      choices: [
        "create-rocket-app",
        "Components",
        "CRUD",
        "i18n",
        "hooks",
        "utils",
        "Packages",
        "\x1b[31m--- Exit ---\x1b[0m \n",
      ],
    },
    {
      type: "list",
      name: "action",
      message: "What do you need?",
      choices: [
        "\x1b[33m--- Back ---\x1b[0m",
        new inquirer.Separator(),
        "routing-component",
        "new-component-routing",
        "rocket-components",
        "new-component-UI",
        "new-component-view",
        "new-component-shared",
      ],
      when: (answers) => answers.main === "Components",
    },
    {
      type: "input",
      name: "Exit",
      message: () => process.exit(),
      when: (answers) => answers.action === "\x1b[31m--- Exit ---\x1b[0m \n",
    },
    {
      type: "list",
      name: "createApp",
      message: "Create a boilerplate",
      choices: ["Insert Name", "\x1b[33m--- Back ---\x1b[0m"],
      when: (answers) => answers.main === "create-rocket-app",
    },
    {
      type: "input",
      name: "exitApp",
      message: () => process.exit(),
      when: (answers) => answers.main === "\x1b[31m--- Exit ---\x1b[0m \n",
    },
    {
      type: "input",
      name: "::: One Moment Please ::",
      message: () => main(),
      when: (answers) =>
        answers.action | (answers.createApp === "\x1b[33m--- Back ---\x1b[0m"),
    },

    {
      type: "checkbox",
      name: "packages",
      message: "Choose your packages",
      choices: fileNamePackages,
      when: (answers) => answers.main === "Packages",
    },

    {
      type: "input",
      name: "newApp",
      message: "What is the name?",
      when: (answers) => answers.createApp === "Insert Name",
    },
    //#region CRUD
    {
      type: "list",
      name: "flowType",
      message: "what redux flow's type do you want?",
      choices: ["Asyncronous", "Syncronous"],
      when: (answers) => answers.main === "CRUD",
    },
    {
      type: "list",
      name: "reducer",
      message: "Do you want the reducer??",
      choices: ["yes", "no"],
      when: (answers) => answers.main === "CRUD",
    },
    {
      type: "checkbox",
      name: "reduxFlowType",
      message: "what is the type?",
      choices: ["Create", "Read", "Update", "Delete"],
      when: (answers) => answers.flowType === "Asyncronous",
    },
    {
      type: "checkbox",
      name: "reduxFlowSyncType",
      message: "what is the type?",
      choices: ["Create", "Update", "Delete", "Other"],
      when: (answers) => answers.flowType === "Syncronous",
    },
    {
      type: "input",
      name: "otherSyncType",
      message: "Insert the name of the type",
      when: (answers) =>
        answers.reduxFlowSyncType &&
        answers.reduxFlowSyncType.includes("Other"),
      validate: (answer) => {
        if (answer === "") {
          return "please enter a valid answer";
        }
        return true;
      },
    },
    {
      type: "checkbox",
      name: "readType",
      message: "Specify the Read.",
      choices: ["List", "Detail"],
      when: (answers) =>
        answers.reduxFlowType && answers.reduxFlowType.includes("Read"),
    },
    {
      type: "input",
      name: "reduxFlowName",
      message: "Please insert the name of redux flow",
      when: (answers) => answers.main === "CRUD",
      validate: (answer) => {
        if (answer === "") {
          return "please enter a valid answer";
        }
        return true;
      },
    },
    //#endregion CRUD

    //#region COMPONENTS UI
    {
      type: "checkbox",
      name: "rocketComponents",
      message: "Choose rocket component.",
      choices: fileNameComponentUi,
      when: (answers) => answers.action === "rocket-components",
    },
    {
      type: "input",
      name: "newComponentUI",
      message: "Insert name of new component ui.",
      when: (answers) => answers.action === "new-component-UI",
      validate: (answer) => {
        if (answer === "") {
          return "please enter a valid answer";
        }
        return true;
      },
    },
    //#endregion COMPONENTS UI

    //#region NEW COMPONENTS ROUTING
    {
      type: "checkbox",
      name: "routingComponents",
      message: "Choose routing component.",
      choices: fileNameRoutingComponent,
      when: (answers) => answers.action === "routing-component",
    },
    //#endregion NEW COMPONENTS ROUTING

    //#region NEW COMPONENTS ROUTING
    {
      type: "input",
      name: "newComponentRouting",
      message: "Insert name of new component routing",
      when: (answers) => answers.action === "new-component-routing",
      validate: (answer) => {
        if (answer === "") {
          return "please enter a valid answer";
        }
        return true;
      },
    },

    //#endregion NEW COMPONENTS ROUTING

    //#region COMPONENTS VIEW
    {
      type: "input",
      name: "newComponentView",
      message: "Insert name of new component view.",
      when: (answers) => answers.action === "new-component-view",
      validate: (answer) => {
        if (answer === "") {
          return "please enter a valid answer";
        }
        return true;
      },
    },
    //#endregion COMPONENTS VIEW

    //#region COMPONENTS SHARED
    {
      type: "input",
      name: "newComponentShared",
      message: "Insert name of new component shared.",
      when: (answers) => answers.action === "new-component-shared",
      validate: (answer) => {
        if (answer === "") {
          return "please enter a valid answer";
        }
        return true;
      },
    },
    //#endregion COMPONENTS SHARED

    //#region CUSTOM HOOK
    {
      type: "checkbox",
      name: "customHooks",
      message: "Choose the hooks",
      choices: fileNameHooks,
      when: (answers) => answers.main === "hooks",
    },
    //#endregion CUSTOM HOOK

    //#region UTILS
    {
      type: "checkbox",
      name: "utils",
      message: "Choose utils component do you want.",
      choices: fileNameUtils,
      when: (answers) => answers.main && answers.main.includes("utils"),
    },
    {
      type: "checkbox",
      name: "cacheUtils",
      message: "Choose CACHE components.",
      choices: fileNameUtilsCache,
      when: (answers) => answers.main && answers.main.includes("cache"),
    },
    {
      type: "checkbox",
      name: "formatUtils",
      message: "Choose FORMATTING components.",
      choices: fileNameUtilsFormatting,
      when: (answers) => answers.utils && answers.utils.includes("formatting"),
    },
    {
      type: "checkbox",
      name: "validUtils",
      message: "Choose VALIDATE components.",
      choices: fileNameUtilsValidate,
      when: (answers) => answers.utils && answers.utils.includes("validate"),
    },
    //#endregion UTILS
  ];
  return inquirer.prompt(questions);
};

const main = async () => {
  let app = true;
  while (app) {
    await showMenu().then((answers) => {
      switch (answers.main) {
        case "create-rocket-app":
          boilerplate(answers.newApp);
          app = false;
          break;

        case "Packages":
          answers.packages.map((item) => packages(item));
          break;

        case "CRUD":
          if (answers.flowType === "Asyncronous") {
            answers.reduxFlowType.map((item) => {
              if (item === "Read") {
                answers.readType.map((item) =>
                  reduxFlow(`${item}-${answers.reduxFlowName}`, answers.reducer)
                );
              } else
                reduxFlow(`${item}-${answers.reduxFlowName}`, answers.reducer);
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
            reduxSyncFlow(
              answers.reduxFlowName,
              answers.reduxFlowSyncType,
              answers.reducer
            );
          }
          //   });
          // }
          break;

        case "i18n":
          translations();
          break;

        case "utils":
          answers.utils &&
            answers.utils.map((choice) => {
              switch (choice) {
                case "cache":
                  answers.cacheUtils &&
                    answers.cacheUtils.map((item) => customUtils(item, choice));
                  break;
                case "formatting":
                  answers.formatUtils &&
                    answers.formatUtils.map((item) =>
                      customUtils(item, choice)
                    );
                  break;
                case "validate":
                  answers.validUtils &&
                    answers.validUtils.map((item) => customUtils(item, choice));
                  break;
                case "fetch":
                  customUtils(choice);
                  break;
                case "helpers":
                  customUtils(choice);
                  break;
                case "time":
                  customUtils(choice);
                  break;
              }
            });
          break;

        case "hooks":
          answers.customHooks &&
            answers.customHooks.map((item) => customHook(item));
          break;

        case "Components":
          switch (answers.action) {
            case "rocket-components":
              answers.rocketComponents.map((item) => componentUi(item));
              break;

            case "new-component-UI":
              componentUi(answers.newComponentUI);
              break;

            case "new-component-routing":
              componentRouting(answers.newComponentRouting);
              break;

            case "routing-component":
              answers.routingComponents.map((item) => componentRouting(item));
              break;

            case "new-component-view":
              componentView(answers.newComponentView);
              break;

            case "new-component-shared":
              componentShared(answers.newComponentShared);
              break;

            default:
              console.log("One moment..");
              break;
          }
          break;

        default:
          console.log("One moment..");
          break;
      }
    });
  }
};

main();
