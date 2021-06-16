/** @format */

const injectDevServer = require('@cypress/react/plugins/react-scripts');
/** @format */
module.exports = (on, config) => {
  if (config.testingType === 'component') {
    injectDevServer(on, config);
  }
  return config; // IMPORTANT to return a config
};
