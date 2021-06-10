#!/usr/bin/env node
// Used to tell Node.js that this is a CLI tool
/** @format */

const fs = require("fs");
const { spawn } = require("child_process");
const inquirer = require("inquirer");
const reduxFlow = require("./@generators/scripts/flow/reduxFlow");
const componentUi = require("./@generators/scripts/component-ui/component-ui");
const reduxFlow = require("./@generators/scripts/flow/reduxFlow");

const questions = [
  {
    type: "list",
    name: "action",
    message: "Hi! How can i help you?",
    choices: ["rocket-components", "new-components-UI", "CRUD"],
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
    message: "what is the type??",
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
    name: "componentsUIType",
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
    name: "componentsUINew",
    message: "Insert name of new component ui.",
    when: (answers) => answers.action === "new-components-UI",
    validate: (answer) => {
      if (answer === "") {
        return "please enter a valid answer";
      }
      return true;
    },
  },
  //#endregion COMPONENTS UI
];

inquirer.prompt(questions).then((answers) => {
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
    case "new-components-UI":
      const dir = `./src/components-ui/${answers.componentsUINew}`;
      componentUi(answers.componentsUINew);
      if (fs.existsSync(dir)) {
        console.log(
          "\x1b[31m",
          `ERROR! The directory ${answers.componentsUINew} already exist`
        );
        return;
      }
      break;
    case "rocket-components":
      answers.componentsUIType.map((item) => {
        const dir = `./src/components-ui/${item}`;
        spawn("npm", ["run", "generate:component-ui", `${item}`]);
        if (fs.existsSync(dir)) {
          console.log("\x1b[31m", `ERROR! The directory ${item} already exist`);
          return;
        }
      });
      break;
    default:
      console.log("default");
  }
});
