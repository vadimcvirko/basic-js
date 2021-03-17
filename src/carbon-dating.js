const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  throw new CustomError('Not implemented');
  if(!sampleActivity ||
    typeof sampleActivity !== "string" ||
    MODERN_ACTIVITY < sampleActivity ||
    sampleActivity < 0){
      return false;
    }
    const activity = parseFloat(sampleActivity);
  if(!activity) {
    return false;
  }
  return Math.ceil(((Math.log(MODERN_ACTIVITY / activity)) / (Math.log(2)) * HALF_LIFE_PERIOD));
};
