#!/usr/bin/env node
// Used to tell Node.js that this is a CLI tool
/** @format */

const inquirer = require("inquirer");
const reduxFlow = require("./@generators/scripts/flow/reduxFlow");
const componentUi = require("./@generators/scripts/component-ui/component-ui");
const componentView = require("./@generators/scripts/component-view/componentView");
const componentShared = require("./@generators/scripts/component-shared/componentShared");
const boilerplate = require("./@generators/scripts/create-rocket-app/boilerplate");
const translations = require("./@generators/scripts/translations/translations");
const customHook = require("./@generators/scripts/custom-hooks/customHook");
const customUtils = require("./@generators/scripts/custom-utils/customUtils");

const showMenu = () => {
  const questions = [
    {
      type: "list",
      name: "main",
      message: "Hi! What do you want to do?",
      choices: [
        "create-rocket-app",
        "Add/Create other components",
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
        "CRUD",
        // "rocket-components",
        "new-component-UI",
        "new-component-view",
        "new-component-shared",
        "translations",
        "hooks",
        "utils",
      ],
      when: (answers) => answers.main === "Add/Create other components",
    },
    {
      type: "input",
      name: "returnBack",
      message: () => main(),
      when: (answers) => answers.action === "\x1b[33m--- Back ---\x1b[0m",
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
      name: "back",
      message: () => main(),
      when: (answers) =>
        answers.action | (answers.createApp === "\x1b[33m--- Back ---\x1b[0m"),
    },

    {
      type: "input",
      name: "newApp",
      message: "What is the name?",
      when: (answers) => answers.createApp === "Insert Name",
    },
    //#region CRUD
    {
      type: "checkbox",
      name: "reduxFlowType",
      message: "what is the type?",
      choices: ["Create", "Read", "Update", "Delete"],
      when: (answers) => answers.action === "CRUD",
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
      when: (answers) => answers.action === "CRUD",
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
      choices: [
        "Avatar",
        "Button",
        "Checkbox",
        "Comment",
        "DatePicker",
        "Grid",
        "Icon",
        "Image",
        "Input",
        "Loader",
        "Modal",
        "NavigateTo",
        "Observer",
        "Radio",
        "Select",
        "Steps",
        "Switch",
        "Tabs",
        "Text",
        "TimePicker",
        "Tooltip",
        "Visible",
      ],
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
      choices: [
        "useCancelableFetch",
        "useApiGet",
        "useApiPost",
        "useInput",
        "useInputTaxCode",
        "useInputVatNumber",
        "useLocalStorage",
        "useLocation",
        "useLongPress",
        "useMousePosition",
        "useNavigation",
        "useNotification",
        "useOnlineCheck",
        "useSessionStorage",
        "useWindowResize",
      ],
      when: (answers) => answers.action === "hooks",
    },
    //#endregion CUSTOM HOOK

    //#region UTILS
    {
      type: "checkbox",
      name: "utils",
      message: "Choose utils component do you want.",
      choices: ["cache", "fetch", "formatting", "helpers", "time", "validate"],
      when: (answers) => answers.action && answers.action.includes("utils"),
    },
    {
      type: "checkbox",
      name: "cacheUtils",
      message: "Choose CACHE components.",
      choices: [
        "getFromLocalStorage.ts",
        "removeLocalStorage.ts",
        "saveToLocalStorage.ts",
        "getFromSessionStorage.ts",
        "removeSessionStorage.ts",
        "saveToSessionStorage.ts",
      ],
      when: (answers) => answers.utils && answers.utils.includes("cache"),
    },
    {
      type: "checkbox",
      name: "formatUtils",
      message: "Choose FORMATTING components.",
      choices: ["arrayToObject.ts", "arrayToObjectList.ts"],
      when: (answers) => answers.utils && answers.utils.includes("formatting"),
    },
    {
      type: "checkbox",
      name: "validUtils",
      message: "Choose VALIDATE components.",
      choices: [
        "isValidEmail.ts",
        "isValidPassword.ts",
        "isValidSdiNumber.ts",
        "isValidTaxCode.ts",
        "isValidTelephoneNumber.ts",
        "isValidVatNumber.ts",
        "isValidYear.ts",
      ],
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
      if (answers.main === "create-rocket-app") {
        boilerplate(answers.newApp);
        app = false;
      } else {
        switch (answers.action) {
          case "CRUD":
            answers.reduxFlowType.map((item) => {
              if (item === "Read") {
                answers.readType.map((item) =>
                  reduxFlow(`${item}-${answers.reduxFlowName}`)
                );
              } else reduxFlow(`${item}-${answers.reduxFlowName}`);
            });
            break;

          case "rocket-components":
            answers.rocketComponents.map((item) => componentUi(item));
            break;

          case "new-component-UI":
            componentUi(answers.newComponentUI);
            break;

          case "new-component-view":
            componentView(answers.newComponentView);
            break;

          case "new-component-shared":
            componentShared(answers.newComponentShared);
            break;

          case "translations":
            translations();
            break;

          case "hooks":
            answers.customHooks &&
              answers.customHooks.map((item) => customHook(item));
            break;

          case "utils":
            answers.utils &&
              answers.utils.map((choice) => {
                switch (choice) {
                  case "cache":
                    answers.cacheUtils &&
                      answers.cacheUtils.map((item) =>
                        customUtils(item, choice)
                      );
                    break;
                  case "formatting":
                    answers.formatUtils &&
                      answers.formatUtils.map((item) =>
                        customUtils(item, choice)
                      );
                    break;
                  case "validate":
                    answers.validUtils &&
                      answers.validUtils.map((item) =>
                        customUtils(item, choice)
                      );
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

          default:
            console.log("One moment..");
            break;
        }
      }
    });
  }
};

main();
