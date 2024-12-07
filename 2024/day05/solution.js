const list1 = require("./list1.js");
const list2 = require("./list2.js");

const getRules = (input) =>
  input
    .trim()
    .split("\n")
    .map((rule) => rule.split("|").map(Number));

const getUpdates = (input) =>
  input
    .trim()
    .split("\n")
    .map((update) => update.split(",").map(Number));

const isValidUpdate = (update, rules) =>
  rules.every(([x, y]) => {
    const xIndex = update.indexOf(x);
    const yIndex = update.indexOf(y);
    return xIndex === -1 || yIndex === -1 || xIndex < yIndex;
  });

const findMiddlePage = (update) => update[Math.floor(update.length / 2)];

const orderingRules = getRules(list1);
const updates = getUpdates(list2);

const filterValidUpdates = updates.filter((update) =>
  isValidUpdate(update, orderingRules)
);

const sumOfMiddlePages = filterValidUpdates.reduce(
  (sum, update) => sum + findMiddlePage(update),
  0
);

console.log(sumOfMiddlePages);
