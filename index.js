#!/usr/bin/env node
// Used to tell Node.js that this is a CLI tool
/** @format */

const inquirer = require("inquirer");
const packjs = require("./package.json");
const reduxFlow = require("./@generators/scripts/flow/reduxFlow");
const componentUi = require("./@generators/scripts/component-ui/component-ui");
const componentView = require("./@generators/scripts/component-view/componentView");
const componentShared = require("./@generators/scripts/component-shared/componentShared");
const { execSync } = require("child_process");

const showMenu = () => {
  const questions = [
    {
      type: "list",
      name: "action",
      message: "Hi! How can i help you?",
      choices: [
        "create-rocket-app",
        "CRUD",
        "rocket-components",
        "new-component-UI",
        "new-component-view",
        "new-component-shared",
        "--- Exit ---",
      ],
    },
    {
      type: "input",
      name: "newApp",
      message: "Create a boilerplate",
      when: (answers) => answers.action === "create-rocket-app",
    },
    {
      type: "confirm",
      name: "exit",
      message: "Do you want exit?",
      when: (answers) => answers.action === "--- Exit ---",
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
  ];
  return inquirer.prompt(questions);
};

const main = async () => {
  for (let count = 0; count <= 1000; count++) {
    await showMenu().then((answers) => {
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
          console.log(answers.newApp);
          answers.rocketComponents.map((item) =>
            componentUi(item, packjs.name)
          );
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

        case "create-rocket-app":
          execSync(`npm run create-rocket-app ${answers.newApp}`);
          break;

        case "--- Exit ---":
          process.exit();

        default:
          console.log("default");
      }
    });
  }
};

main();
