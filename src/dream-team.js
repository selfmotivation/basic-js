<<<<<<< HEAD
module.exports = function createDreamTeam(members) {
  let teamName = [];
  if (Array.isArray(members)) {
    for (let member of members) {
      if (typeof(member) === "string") {
          let firstLetter = member.trim().toUpperCase()[0];
          teamName.push(firstLetter);
      }
    }
    return teamName.sort().join('');
  }
  return false;
};
=======
const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(/* members */) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
>>>>>>> bdd0828c7bbe63c9ae86ce9935906890431e0490
