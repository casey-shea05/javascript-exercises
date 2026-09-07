const removeFromArray = function (array, ...Values) {
  return array.filter (value => !Values.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
