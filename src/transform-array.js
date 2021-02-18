<<<<<<< HEAD
module.exports = function transform(arr) {
    function sss(arr) {
        let sequence = arr.find(el => typeof(el) === 'string');
        if (sequence) {
            let sequenceIndex
            arr[(arr.indexOf(sequence) + 1)]
        }
    }
=======
const CustomError = require("../extensions/custom-error");

module.exports = function transform(/* arr */) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
>>>>>>> bdd0828c7bbe63c9ae86ce9935906890431e0490
};
