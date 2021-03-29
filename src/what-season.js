/*const CustomError = require("../extensions/custom-error");

module.exports = */ function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  
  try {
    let month = date.toDateString().split(' ')[1];
    // let month = String(date).split(' ')[2];
  const months = {
    'Jan': 0,
    'Feb': 1,
    'Mar': 2,
    'Apr': 3,
    'May': 4,
    'Jun': 5,
    'Jul': 6,
    'Aug': 7,
    'Sep': 8,
    'Oct': 9,
    'Nov': 10,
    'Dec': 11
  }
    month = months[month];
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
    console.log(err);
    return err;
  }

  // try {
  // let month = String(date).split(' ')[2];
  // let month = String(date).split(' ')[2];
  // const months = {
  //   Jan: 0,
  //   Feb: 1,
  //   Mar: 2,
  //   Apr: 3,
  //   May: 4,
  //   Jun: 5,
  //   Jul: 6,
  //   Aug: 7,
  //   Sep: 8,
  //   Oct: 9,
  //   Nov: 10,
  //   Dec: 11
  // }

  // month = months.month;

  
    
  
  //   if (month < 2 || month === 11) {
  //     return 'winter';
  //   } else if (month < 5) {
  //     return 'spring';
  //   } else if (month < 8) {
  //     return 'summer';
  //   } else if (month < 11) {
  //     return 'autumn';
  //   } 
  // } catch (err) {
  //   return err;
  // }
};

getSeason('foo');