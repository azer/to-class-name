var variableName = require("variable-name");

module.exports = toClassName;

function toClassName (text) {
  var v = variableName(text);
  return v.charAt(0).toUpperCase() + v.slice(1);
}
