/** @format */

const injectDevServer = require('@cypress/react/plugins/react-scripts');

module.exports = (on, config) => {
  if (config.testingType === 'component') {
    injectDevServer(on, config);
  }
  return config; // IMPORTANT to return a config
};
