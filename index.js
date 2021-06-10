#!/usr/bin/env node
// Used to tell Node.js that this is a CLI tool
/** @format */

const fs = require("fs");
const { spawn } = require("child_process");
const inquirer = require("inquirer");
const componentUi = require("./@generators/scripts/component-ui/component-ui");
const reduxFlow = require("./@generators/scripts/flow/reduxFlow");

const questions = [
  // START CRUD
  {
    type: "list",
    name: "action",
    message: "Hi! How can i help you?",
    choices: ["components-UI", "CRUD"],
  },
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
  // END CRUD

  // START COMPONENTS UI
  {
    type: "checkbox",
    name: "componentsUIType",
    message: "what is the type?",
    choices: [
      "New",
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
    when: (answers) => answers.action === "components-UI",
  },
  {
    type: "input",
    name: "componentsUINew",
    message: "Specify the name",
    when: (answers) =>
      answers.componentsUIType && answers.componentsUIType.includes("New"),
    validate: (answer) => {
      if (answer === "") {
        return "please enter a valid answer";
      }
      return true;
    },
  },
  // END COMPONENTS UI
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
    case "components-UI":
      answers.componentsUIType.map((item) => {
        const dir =
          item === "New"
            ? `./src/components-ui/${answers.componentsUINew}`
            : `./src/components-ui/${item}`;

        if (fs.existsSync(dir)) {
          console.log("\x1b[31m", `ERROR! The directory ${item} already exist`);
          return;
        }

        componentUi(item === "New" ? answers.componentsUINew : item);
      });
      break;
    default:
      console.log("default");
  }
});
