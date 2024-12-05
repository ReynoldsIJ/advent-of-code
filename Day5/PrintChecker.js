const math = require("mathjs")
const { readFromFile } = require("../utils/util");

module.exports.findCorrectOrdering = async () => {
  let lines = [];
  let rules = [];
  let total = 0;
  lines = await readFromFile("Day5/input.txt");
  rules = await readFromFile("Day5/rules.txt");

  for (const line of lines) {
    const lineArray = line.split(/,/);
    if(valid(line, rules)) {
      console.log('line', line);
      total = total + getMiddleNumber(lineArray.map(Number));
    }
  }
  console.log(total);
};

const valid = (line, rules) => {
  const lineArray = line.split(',');
  for ( const values of lineArray) {
    const check = checkRule(values, line, rules);
    if(!check) {
      return false;
    }
  }
  return true;
};

const getMiddleNumber = (lineArray) => {
  const middleIndex = math.floor(lineArray.length/2);
  const middleValue = lineArray[middleIndex];
  return middleValue;
};

const checkRule = (value, line, rules) => {
  let valid = true;
  for (const rule of rules) {
    if (rule.includes(value)) {
      const ruleArray = rule.split('|');
      if (line.includes(ruleArray[0]) && line.includes(ruleArray[1])) {
        const index1 = line.indexOf(ruleArray[0]);
        const index2 = line.indexOf(ruleArray[1]);
        if (index1 > index2) {
          valid = false;
        }
      }
    }
  }
  return valid;
};