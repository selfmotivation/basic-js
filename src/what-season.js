<<<<<<< HEAD
module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  
  try {
    const month = date.getMonth();
  
    if (month < 2 || month === 11) {
      return 'winter';
    } else if (month < 5) {
      return 'spring';
    } else if (month < 8) {
      return 'summer';
    } else if (month < 11) {
      return 'autumn';
    } 
  } catch (err) {
    throw err;
  }
  
  // return false;
=======
const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(/* date */) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
>>>>>>> bdd0828c7bbe63c9ae86ce9935906890431e0490
};
