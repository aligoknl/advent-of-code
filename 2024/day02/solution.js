const list = require("./list.js");

const lines = list
  .trim()
  .split("\n")
  .map((line) => line.trim().split(" ").map(Number));

let safeLines = [];

const makeRules = (array) => {
  let isIncreasing = null;

  const isSafe = array.every((current, index) => {
    if (index === 0) return true;

    const difference = current - array[index - 1];

    if (Math.abs(difference) === 0 || Math.abs(difference) > 3) {
      return false;
    }

    if (isIncreasing === null) {
      isIncreasing = difference > 0;
    } else if (
      (isIncreasing && difference < 0) ||
      (!isIncreasing && difference > 0)
    ) {
      return false;
    }

    return true;
  });

  if (isSafe) {
    safeLines.push(array);
  }
};

lines.forEach((line) => makeRules(line));

console.log(safeLines.length);
