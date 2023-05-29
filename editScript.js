const dist = require("./dist");
const fs = require("fs");

const requireScript = `const {
    ${Object.keys(dist).map((item) => item)}
} = require('./dist');`;

const importScript = Object.keys(dist).map(
  (item) => `module.exports.${item} = ${item};`
);

const totalScript =
  "\n" + requireScript + importScript.map((str) => str).join("");

fs.appendFile("./index.js", totalScript, (err) => {
  if (err) console.log(err);
});

fs.appendFile("./index.d.ts", '\nexport * from "./dist";', (err) => {
  if (err) console.log(err);
});
