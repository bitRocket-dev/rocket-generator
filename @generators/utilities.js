/** @format */
const { exec } = require("child_process");

exports.utilityCapitalizeFirst = (string) =>
  string.toLowerCase().charAt(0).toUpperCase() + string.slice(1);

exports.execAsync = (command, options = {}) =>
  new Promise((resolve, reject) =>
    exec(command, options, (err, stdout, stderr) => {
      if (err) return reject(err, stderr);
      return resolve(stdout);
    })
  );

exports.throwIfError = (err) => {
  if (err) throw err;
};
