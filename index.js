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

const showMenu = () => {
  const questions = [
    {
      type: "list",
      name: "main",
      message: "Hi! What do you want to do?",
      choices: [
        "create-rocket-app",
        "Add/Create other components",
        "--- Exit ---",
      ],
    },
    {
      type: "list",
      name: "action",
      message: "Hi! How can i help you?",
      choices: [
        "CRUD",
        "rocket-components",
        "new-component-UI",
        "new-component-view",
        "new-component-shared",
        "translations",
        "custom-hook",
        "--- Exit ---",
      ],
      when: (answers) => answers.main === "Add/Create other components",
    },

    {
      type: "list",
      name: "typeApp",
      message: "npm or yarn?",
      choices: ["npm", "yarn"],
      when: (answers) => answers.main === "create-rocket-app",
    },
    {
      type: "input",
      name: "newApp",
      message: "What is the name?",
      when: (answers) => answers.main === "create-rocket-app",
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
        "Button",
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
      message: "Choose rocket component.",
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
      when: (answers) => answers.action === "custom-hook",
    },
    //#endregion CUSTOM HOOK
  ];
  return inquirer.prompt(questions);
};

const main = async () => {
  let app = true;
  while (app) {
    await showMenu().then((answers) => {
      if (answers.main === "create-rocket-app") {
        boilerplate(answers.newApp, answers.typeApp);
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

          case "custom-hook":
            answers.customHooks.map((item) => customHook(item));
            break;

          case "--- Exit ---":
            process.exit();

          default:
            console.log("default");
            break;
        }
      }
    });
  }
};

main();
