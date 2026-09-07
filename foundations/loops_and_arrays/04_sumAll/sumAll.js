const sumAll = function (a, b) {
  if (a < 0 || b < 0) {
    return "ERROR";
  }

  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  }

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return "ERROR";
  }

  const list = [];
  const start = Math.min(a, b);
  const end = Math.max(a, b);

  for (let i = start; i <= end; i++) {
    list.push(i);
  }

  return list.reduce((x, y) => x + y);
};

// Do not edit below this line
module.exports = sumAll;
