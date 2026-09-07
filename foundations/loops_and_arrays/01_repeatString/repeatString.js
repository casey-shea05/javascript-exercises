const repeatString = function (word, repeats) {
  if (repeats < 0) {
    return "ERROR";
  }

  const repeatedString = [];

  for (let i = 0; i < repeats; i++) {
    repeatedString[i] = word;
  }

  return repeatedString.join("");
};

// Do not edit below this line
module.exports = repeatString;
