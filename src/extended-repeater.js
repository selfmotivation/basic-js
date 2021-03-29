const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {  
  let addition = [];
  
  for (let i = 0; i < (options.additionRepeatTimes || 1); i++) {
    if (options.addition || String(options.addition) != 'undefined') {
      addition.push(String(options.addition));
    } else {
      addition.push(options.addition);
    }
  }
  
  addition = addition.join(`${options.additionSeparator || '|'}`);

  let preResult = str + addition;
  let result = [];

  for (let i = 0; i < (options.repeatTimes || 1); i++) {
    result.push(preResult);
  }

  result = result.join(options.separator || '+');

  return result;
};
