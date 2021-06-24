/** @format */

const scopes = ['config', 'general'];

const types = ['chore', 'docs', 'feat', 'fix', 'refactor', 'format', 'test'];

const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 100],
    'type-enum': [2, 'always', types],
    'scope-enum': [2, 'always', scopes],
  },
};

module.exports = config;
