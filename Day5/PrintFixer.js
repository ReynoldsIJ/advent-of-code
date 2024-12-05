const math = require("mathjs")
const { readFromFile } = require("../utils/util");

module.exports.findCorrectOrdering = async () => {
  let lines = [];
  let rules = [];
  let total = 0;
  lines = await readFromFile("Day5/input.txt");
  rules = await readFromFile("Day5/rules.txt");

  for (const line of lines) {
    const lineArray = line.split(',');
    if(!valid(lineArray, rules)) {
      // fix the line
      const newLine = fixLine(lineArray, rules);
      if(valid(newLine, rules)) {
        const middle = getMiddleNumber(newLine.map(Number));
        console.log('middle', middle);
        total = total + middle
      }
    }
  }
  console.log(total);
};

const valid = (lineArray, rules) => {
  for ( const value of lineArray) {
    const check = checkRule(value, lineArray, rules);
    if(!check) {
      return false;
    }
  }
  return true;
};

const fixLine = (lineArray, rules) => {
  let tempLine = lineArray;
  for ( const value of tempLine) {
    const check = checkRule(value, tempLine, rules);
    if(!check) {
      tempLine = applyRule(value, tempLine, rules);
    }
  }
  return tempLine;
};

const getMiddleNumber = (lineArray) => {
  const middleIndex = math.floor(lineArray.length/2);
  const middleValue = lineArray[middleIndex];
  return middleValue;
};

const checkRule = (value, lineArray, rules) => {
  let valid = true;
  for (const rule of rules) {
    if (rule.includes(value)) {
      const ruleArray = rule.split('|');
      if (lineArray.includes(ruleArray[0]) && lineArray.includes(ruleArray[1])) {
        const index1 = lineArray.indexOf(ruleArray[0]);
        const index2 = lineArray.indexOf(ruleArray[1]);
        if (index1 > index2) {
          valid = false;
        }
      }
    }
  }
  return valid;
};

const applyRule = (value, line, rules) => {
  let tempLine = line.slice();
  for (let i = 0; i < rules.length; i++) {
    if (rules[i].includes(value)) {
      const ruleArray = rules[i].split('|');
      if (tempLine.includes(ruleArray[0]) && tempLine.includes(ruleArray[1])) {
        const index1 = tempLine.indexOf(ruleArray[0]);
        const index2 = tempLine.indexOf(ruleArray[1]);
        if (index1 > index2) {
        //   console.log('ruleArray', ruleArray);
        //   console.log('tempLine Before', tempLine);
          tempLine[index1] = ruleArray[1];
          tempLine[index2] = ruleArray[0];
          // console.log('tempLine After', tempLine);
          i = 0;
        }
      }
    }
  }
  return tempLine;
};