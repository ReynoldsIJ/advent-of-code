const { readFromFile } = require("../utils/util");

module.exports.findXmas = async () => {
  let lines = [];
  let total = 0;
  lines = await readFromFile("Day4/input.txt");
  total = xmas(lines);
  console.log(total);
};

const xmas = (lines) => {
  let total = 0;
  for(let y = 0; y < lines.length; y++) {
    for(let x = 0; x < lines[y].length; x++) {
      if (lines[y][x] === 'M' && x+2 < lines[y].length && y+2 < lines.length) {
        if (foundMAS(lines, x, y) && (inverseMAS(lines, x, y) || inverseSAM(lines, x, y))) {
          total++;
        }
      } else if (lines[y][x] === 'S' && x+2 < lines[y].length && y+2 < lines.length) {
        if (foundSAM(lines, x, y) && (inverseSAM(lines, x, y) || inverseMAS(lines, x, y))) {
          total++;
        }
      }
    }
  }
  return total;
};

const foundMAS = (lines, x, y) => {
  if (lines[y][x] === 'M' && lines[y+1][x+1] === 'A' && lines[y+2][x+2] === 'S') {
    return true;
  }
  return false;
};

const foundSAM = (lines, x, y) => {
  if (lines[y][x] === 'S' && lines[y+1][x+1] === 'A' && lines[y+2][x+2] === 'M') {
    return true;
  }
  return false;
};

const inverseMAS = (lines, x, y) => {
  if (lines[y+2][x] === 'M' && lines[y+1][x+1] === 'A' && lines[y][x+2] === 'S') {
    return true;
  }
  return false;
};

const inverseSAM = (lines, x, y) => {
  if (lines[y+2][x] === 'S' && lines[y+1][x+1] === 'A' && lines[y][x+2] === 'M') {
    return true;
  }
  return false;
};