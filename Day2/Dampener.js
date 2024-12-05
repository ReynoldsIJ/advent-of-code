const math = require("mathjs")
const { readFromFile } = require("../utils/util");

module.exports.findSafeLevels = async () => {
  let lines = [];
  lines = await readFromFile("Day2/levels.txt");
  let safe = 0;
  for (let i = 0; i < lines.length; i++ ) {
      let currentLine = (lines[i].split(/\s+/)).map(Number);
      if(isAscendingSafely(currentLine) || isDescendingSafely(currentLine)) {
        safe++
      } else if(canHandleBadValue(currentLine)) {
        safe++;
      }
  }
  console.log(safe);
};

const isAscendingSafely = (line) => {
  for (let j = 1; j <= line.length; j++) {
    if(valuesNotAscending(line[j-1], line[j]) || valuesNotSafe(line[j-1], line[j]) || valueDuplicate(line[j-1], line)) {
      return false;
    }
  }
  return true
};

const isDescendingSafely = (line) => {
  for (let k = 1; k <= line.length; k++) {
    if(valuesNotDescending(line[k-1], line[k]) || valuesNotSafe(line[k-1], line[k]) || valueDuplicate(line[k-1], line)) {
      return false;
    }
  }
  return true
};

const valuesNotAscending = (value1, value2) => {
  return value1 > value2
}

const valuesNotDescending = (value1, value2) => {
  return value1 < value2
}

const valuesNotSafe = (value1, value2) => {
  return math.abs(value1 - value2) > 3
}

const valueDuplicate = (value1, line) => {
  const count = line.filter(element => element === value1).length;
  return  count > 1;
}

const canHandleBadValue = (line) => {
  for (let x = 0; x < line.length; x++) {
    let tempLine = line.slice();
    tempLine.splice(x, 1);
    if(isAscendingSafely(tempLine) || isDescendingSafely(tempLine)) {
      return true;
    }
  }
  return false;
};
