module.exports.findSafeLevels = async () => {
  let lines = [];
  lines = await readFromFile("Day2/levels.txt");
  let safe = 0;
  for (let i = 0; i < lines.length; i++ ) {
      let currentLine = (lines[i].split(/\s+/)).map(Number);;
      if(isAscendingSafely(currentLine) || isDescendingSafely(currentLine)) {
        safe++
      }
  }
  console.log(safe);
};

const isAscendingSafely = (line) => {
  for (let j = 1; j <= line.length; j++) {
    if(valuesAscending(line[j-1], line[j]) || valuesSafe(line[j-1], line[j])) {
      return false;
      
    }
  }
  return true
};

const isDescendingSafely = (line) => {
  for (let k = 1; k <= line.length; k++) {
    if(valuesDescending(line[k-1], line[k]) || valuesSafe(line[k-1], line[k])) {
      return false;
    }
  }
  return true
};

const valuesAscending = (value1, value2) => {
  return value1 >= value2
};

const valuesDescending = (value1, value2) => {
  return value1 <= value2
};

const valuesSafe = (value1, value2) => {
  return math.abs(value1 - value2) > 3
};