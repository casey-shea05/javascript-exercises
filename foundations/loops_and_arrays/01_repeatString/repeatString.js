const repeatString = function (word, repeats) {
  if (repeats < 0) return "ERROR";

  repeatedString = "";

  for (let i = 0; i < repeats; i++) {
    repeatedString += word;
  }

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
