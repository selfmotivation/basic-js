<<<<<<< HEAD
module.exports = function countCats(backyard) {
  let number = 0;
  backyard.forEach(row => {
    row.forEach(elem => {
      if (elem === "^^") number++;
    });
  });
  return number;
  
=======
const CustomError = require("../extensions/custom-error");

module.exports = function countCats(/* matrix */) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
>>>>>>> bdd0828c7bbe63c9ae86ce9935906890431e0490
};
