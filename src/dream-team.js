const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let team = [];
  for (letter of members) {
    if (typeof(letter) === "string")
    team.push(letter.trim()[0].toUpperCase());
  }
  return team.sort().join('');
};
