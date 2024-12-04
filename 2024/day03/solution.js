const list = require("./list.js");

function calculateMulSum(inputStr) {
  const mulPattern = /mul\((\d+),(\d+)\)/g;

  let match;
  let totalSum = 0;
  let counter = 0;

  while ((match = mulPattern.exec(inputStr)) !== null) {
    const num1 = parseInt(match[1], 10);
    const num2 = parseInt(match[2], 10);

    totalSum += num1 * num2;
    counter++;
  }
  console.log("counter", counter);
  return totalSum;
}

console.log(calculateMulSum(list));
