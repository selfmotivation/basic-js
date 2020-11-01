const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) === "string" && parseFloat(sampleActivity) < 9000 && parseFloat(sampleActivity) > 0) {
    let k = 0.693 / HALF_LIFE_PERIOD;
    let t = Math.ceil((Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))) / k);
    if (t > 0) {
      return t;
    }
  }
  return false;
};
