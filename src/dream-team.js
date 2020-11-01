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