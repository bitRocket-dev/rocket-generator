/** @format */
const fs = require("fs-extra");

exports.utilityCapitalizeFirst = (string) =>
  string.toLowerCase().charAt(0).toUpperCase() + string.slice(1);

exports.utilityPath = (string) => {
  let str = ".";
  const arr = string
    .split("/")
    .filter((item) => item != ".")
    .map((item) => {
      str += "/" + item;
      if (!fs.existsSync(str)) {
        fs.mkdirSync(str);
      }
    });
};

exports.throwIfError = (err) => {
  if (err) throw err;
};

