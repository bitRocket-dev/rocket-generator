#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var fs_extra_1 = require("fs-extra");
var reduxFlow_1 = require("./@generators/scripts/flow/reduxFlow");
var component_ui_1 = require("./@generators/scripts/component-ui");
var components_routing_1 = require("./@generators/scripts/components-routing");
var component_view_1 = require("./@generators/scripts/component-view");
var component_shared_1 = require("./@generators/scripts/component-shared");
var boilerplate_1 = require("./@generators/scripts/create-rocket-app/boilerplate");
var i18n_1 = require("./@generators/scripts/i18n");
var hooks_1 = require("./@generators/scripts/hooks");
var customUtils_1 = require("./@generators/scripts/utils/customUtils");
var packages_1 = require("./@generators/scripts/packages");
var options_1 = require("./constants/options");
var fileNamePackages = fs_extra_1.readdirSync(__dirname + "/@generators/scripts/packages/templates");
var fileNameHooks = fs_extra_1.readdirSync(__dirname + "/@generators/scripts/hooks/templates");
var fileNameComponentUi = fs_extra_1.readdirSync(__dirname + "/@generators/scripts/component-ui/templates");
var fileNameUtils = fs_extra_1.readdirSync(__dirname + "/@generators/scripts/utils/templates");
var fileNameUtilsValidate = fs_extra_1.readdirSync(__dirname + "/@generators/scripts/utils/templates/validate");
var fileNameUtilsFormatting = fs_extra_1.readdirSync(__dirname + "/@generators/scripts/utils/templates/formatting");
var fileNameUtilsCache = fs_extra_1.readdirSync(__dirname + "/@generators/scripts/utils/templates/cache");
var fileNameRoutingComponent = fs_extra_1.readdirSync(__dirname + "/@generators/scripts/components-routing/templates");
var showMenu = function () {
    var questions = [
        {
            type: 'list',
            name: 'main',
            message: 'Hi! What do you want to do?',
            choices: [
                options_1.CREATE_ROCKET_APP,
                options_1.COMPONENTS,
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
                new inquirer_1.default.Separator(),
                'routing-component',
                'new-component-routing',
                'rocket-components',
                'new-component-UI',
                'new-component-view',
                'new-component-shared',
            ],
            when: function (answers) { return answers.main === options_1.COMPONENTS; },
        },
        {
            type: 'input',
            name: 'Exit',
            message: function () { return process.exit(); },
            when: function (answers) { return answers.action === '\x1b[31m--- Exit ---\x1b[0m \n'; },
        },
        {
            type: 'list',
            name: 'createApp',
            message: 'Create a boilerplate',
            choices: ['Insert Name', '\x1b[33m--- Back ---\x1b[0m'],
            when: function (answers) { return answers.main === options_1.CREATE_ROCKET_APP; },
        },
        {
            type: 'input',
            name: 'exitApp',
            message: function () { return process.exit(); },
            when: function (answers) { return answers.main === '\x1b[31m--- Exit ---\x1b[0m \n'; },
        },
        {
            type: 'input',
            name: '::: One Moment Please ::',
            message: function () { return main(); },
            when: function (answers) { return answers.action || answers.createApp === '\x1b[33m--- Back ---\x1b[0m'; },
        },
        {
            type: 'checkbox',
            name: 'packages',
            message: 'Choose your packages',
            choices: fileNamePackages,
            when: function (answers) { return answers.main === 'Packages'; },
        },
        {
            type: 'input',
            name: 'newApp',
            message: 'What is the name?',
            when: function (answers) { return answers.createApp === 'Insert Name'; },
        },
        {
            type: 'list',
            name: 'flowType',
            message: "what redux flow's type do you want?",
            choices: ['Asyncronous', 'Syncronous'],
            when: function (answers) { return answers.main === 'CRUD'; },
        },
        {
            type: 'list',
            name: 'reducer',
            message: 'Do you want the reducer??',
            choices: ['yes', 'no'],
            when: function (answers) { return answers.main === 'CRUD'; },
        },
        {
            type: 'checkbox',
            name: 'reduxFlowType',
            message: 'what is the type?',
            choices: ['Create', 'Read', 'Update', 'Delete'],
            when: function (answers) { return answers.flowType === 'Asyncronous'; },
        },
        {
            type: 'checkbox',
            name: 'readType',
            message: 'Specify the Read.',
            choices: ['List', 'Detail'],
            when: function (answers) { return answers.reduxFlowType && answers.reduxFlowType.includes('Read'); },
        },
        {
            type: 'input',
            name: 'reduxFlowName',
            message: 'Please insert the name of redux flow',
            when: function (answers) { return answers.main === 'CRUD'; },
            validate: function (answer) {
                if (answer === '') {
                    return 'please enter a valid answer';
                }
                return true;
            },
        },
        {
            type: 'checkbox',
            name: 'rocketComponents',
            message: 'Choose rocket component.',
            choices: fileNameComponentUi,
            when: function (answers) { return answers.action === 'rocket-components'; },
        },
        {
            type: 'input',
            name: 'newComponentUI',
            message: 'Insert name of new component ui.',
            when: function (answers) { return answers.action === 'new-component-UI'; },
            validate: function (answer) {
                if (answer === '') {
                    return 'please enter a valid answer';
                }
                return true;
            },
        },
        {
            type: 'checkbox',
            name: 'routingComponents',
            message: 'Choose routing component.',
            choices: fileNameRoutingComponent,
            when: function (answers) { return answers.action === 'routing-component'; },
        },
        {
            type: 'input',
            name: 'newComponentRouting',
            message: 'Insert name of new component routing',
            when: function (answers) { return answers.action === 'new-component-routing'; },
            validate: function (answer) {
                if (answer === '') {
                    return 'please enter a valid answer';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'newComponentView',
            message: 'Insert name of new component view.',
            when: function (answers) { return answers.action === 'new-component-view'; },
            validate: function (answer) {
                if (answer === '') {
                    return 'please enter a valid answer';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'newComponentShared',
            message: 'Insert name of new component shared.',
            when: function (answers) { return answers.action === 'new-component-shared'; },
            validate: function (answer) {
                if (answer === '') {
                    return 'please enter a valid answer';
                }
                return true;
            },
        },
        {
            type: 'checkbox',
            name: 'customHooks',
            message: 'Choose the hooks',
            choices: fileNameHooks,
            when: function (answers) { return answers.main === 'hooks'; },
        },
        {
            type: 'checkbox',
            name: 'utils',
            message: 'Choose utils component do you want.',
            choices: fileNameUtils,
            when: function (answers) { return answers.main && answers.main.includes('utils'); },
        },
        {
            type: 'checkbox',
            name: 'cacheUtils',
            message: 'Choose CACHE components.',
            choices: fileNameUtilsCache,
            when: function (answers) { return answers.main && answers.main.includes('cache'); },
        },
        {
            type: 'checkbox',
            name: 'formatUtils',
            message: 'Choose FORMATTING components.',
            choices: fileNameUtilsFormatting,
            when: function (answers) { return answers.utils && answers.utils.includes('formatting'); },
        },
        {
            type: 'checkbox',
            name: 'validUtils',
            message: 'Choose VALIDATE components.',
            choices: fileNameUtilsValidate,
            when: function (answers) { return answers.utils && answers.utils.includes('validate'); },
        },
    ];
    return inquirer_1.default.prompt(questions);
};
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var app;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                app = true;
                _a.label = 1;
            case 1:
                if (!app) return [3, 3];
                return [4, showMenu().then(function (answers) {
                        switch (answers.main) {
                            case options_1.CREATE_ROCKET_APP:
                                boilerplate_1.boilerplate(answers.newApp);
                                app = false;
                                break;
                            case 'Packages':
                                answers.packages.map(function (item) { return packages_1.packages(item); });
                                break;
                            case 'CRUD':
                                if (answers.flowType === 'Asyncronous') {
                                    answers.reduxFlowType.map(function (item) {
                                        if (item === 'Read') {
                                            answers.readType.map(function (item) { return reduxFlow_1.reduxFlow(item + "-" + answers.reduxFlowName, answers.reducer); });
                                        }
                                        else
                                            reduxFlow_1.reduxFlow(item + "-" + answers.reduxFlowName, answers.reducer);
                                    });
                                }
                                else {
                                    reduxFlow_1.reduxFlow("Sync-" + answers.reduxFlowName, answers.reducer);
                                }
                                break;
                            case 'i18n':
                                i18n_1.translations();
                                break;
                            case 'utils':
                                answers.utils &&
                                    answers.utils.map(function (choice) {
                                        switch (choice) {
                                            case 'cache':
                                                answers.cacheUtils && answers.cacheUtils.map(function (item) { return customUtils_1.customUtils(item, choice); });
                                                break;
                                            case 'formatting':
                                                answers.formatUtils && answers.formatUtils.map(function (item) { return customUtils_1.customUtils(item, choice); });
                                                break;
                                            case 'validate':
                                                answers.validUtils && answers.validUtils.map(function (item) { return customUtils_1.customUtils(item, choice); });
                                                break;
                                            case 'fetch':
                                                customUtils_1.customUtils(choice);
                                                break;
                                            case 'helpers':
                                                customUtils_1.customUtils(choice);
                                                break;
                                            case 'time':
                                                customUtils_1.customUtils(choice);
                                                break;
                                        }
                                    });
                                break;
                            case 'hooks':
                                answers.customHooks && answers.customHooks.map(function (item) { return hooks_1.customHook(item); });
                                break;
                            case options_1.COMPONENTS:
                                switch (answers.action) {
                                    case 'rocket-components':
                                        answers.rocketComponents.map(function (item) { return component_ui_1.componentUi(item); });
                                        break;
                                    case 'new-component-UI':
                                        component_ui_1.componentUi(answers.newComponentUI);
                                        break;
                                    case 'new-component-routing':
                                        components_routing_1.componentRouting(answers.newComponentRouting);
                                        break;
                                    case 'routing-component':
                                        answers.routingComponents.map(function (item) { return components_routing_1.componentRouting(item); });
                                        break;
                                    case 'new-component-view':
                                        component_view_1.componentView(answers.newComponentView);
                                        break;
                                    case 'new-component-shared':
                                        component_shared_1.componentShared(answers.newComponentShared);
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
                    })];
            case 2:
                _a.sent();
                return [3, 1];
            case 3: return [2];
        }
    });
}); };
main();
//# sourceMappingURL=index.js.map