const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.counter = 0;
  };
  
  calculateDepth(arr) {
    
    
    // if (Array.isArray(arr)) {
    //   this.counter++;
    //   arr.map(arr1 => {
    //     return this.calculateDepth(arr1);
    //   });
    // } else {
    //   return this.counter;
    // };

    if (Array.isArray(arr)) {
      this.counter += arr.map(item => {
        return this.calculateDepth(item);
      });
    } else {
      return 0;
    };
    return this.counter;
  }
};