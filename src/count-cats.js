module.exports = function countCats(backyard) {
  let number = 0;
  backyard.forEach(row => {
    row.forEach(elem => {
      if (elem === "^^") number++;
    });
  });
  return number;
  
};
