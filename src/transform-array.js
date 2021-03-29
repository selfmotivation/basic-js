const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    function sss(arr) {
        let sequence = arr.find(el => typeof(el) === 'string');
        if (sequence) {
            let sequenceIndex
            arr[(arr.indexOf(sequence) + 1)]
        }
    }
};
