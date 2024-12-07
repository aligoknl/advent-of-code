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

const reorderUpdate = (update, rules) => {
  const orderedUpdate = [...update];

  return orderedUpdate.sort((a, b) => {
    const ruleA = rules.find(([x, y]) => x === a && y === b);
    const ruleB = rules.find(([x, y]) => x === b && y === a);

    if (ruleA) return -1;
    if (ruleB) return 1;
    return 0;
  });
};

const orderingRules = getRules(list1);
const updates = getUpdates(list2);

const invalidUpdates = updates.filter(
  (update) => !isValidUpdate(update, orderingRules)
);
const reorderedUpdates = invalidUpdates.map((update) =>
  reorderUpdate(update, orderingRules)
);

const sumOfMiddlePages = reorderedUpdates.reduce(
  (sum, update) => sum + findMiddlePage(update),
  0
);

console.log(sumOfMiddlePages);
