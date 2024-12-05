const { readFromFile } = require("../utils/util");

module.exports.findXmas = async () => {
  let lines = [];
  let total = 0;
  lines = await readFromFile("Day4/input.txt");
  total = xmasHorizontal(lines);
  total = total + xmasVertical(lines);
  total = total + xmasDiagonal(lines);
  console.log(total);
};

const xmasHorizontal = (lines) => {
  let total = 0;
  for(let y = 0; y < lines.length; y++) {
    for(let x = 0; x < lines[y].length; x++) {
      if (lines[y][x] === 'X' && lines[y] && lines[y][x+1] === 'M' && lines[y] && lines[y][x+2] === 'A' && lines[y] && lines[y][x+3] === 'S') { 
        total++;
      } else if (lines[y][x] === 'S' && lines[y] && lines[y][x+1] === 'A' && lines[y] && lines[y][x+2] === 'M' && lines[y] && lines[y][x+3] === 'X') {
        total++;
      }
    }
  }
  return total;
};

const xmasVertical = (lines) => {
  let total = 0;
  for(let y = 0; y < lines.length; y++) {
    for(let x = 0; x < lines[y].length; x++) {
      if (lines[y][x] === 'X' && lines[y+1] && lines[y+1][x] === 'M' && lines[y+2] && lines[y+2][x] === 'A' && lines[y+3] && lines[y+3][x] === 'S') {
        total++;
      } else if (lines[y][x] === 'S' && lines[y+1] && lines[y+1][x] === 'A' && lines[y+2] && lines[y+2][x] === 'M' && lines[y+3] && lines[y+3][x] === 'X') {
        total++;
      }
    }
  }
  return total;
};

const xmasDiagonal = (lines) => {
  let total = 0;
  for(let y = 0; y < lines.length; y++) {
    for(let x = 0; x < lines[y].length; x++) {
      if (lines[y][x] === 'X' && lines[y+1] && lines[y+1][x+1] === 'M' && lines[y+2] && lines[y+2][x+2] === 'A' && lines[y+3] && lines[y+3][x+3] === 'S') {
        total++;
      }
      if (lines[y][x] === 'X' && lines[y+1] && lines[y+1][x-1] === 'M' && lines[y+2] && lines[y+2][x-2] === 'A' && lines[y+3] && lines[y+3][x-3] === 'S') {
        total++;
      }
      if (lines[y][x] === 'S' && lines[y+1] && lines[y+1][x-1] === 'A' && lines[y+2] && lines[y+2][x-2] === 'M' && lines[y+3] && lines[y+3][x-3] === 'X') {
        total++;
      }
      if (lines[y][x] === 'S' && lines[y+1] && lines[y+1][x+1] === 'A' && lines[y+2] && lines[y+2][x+2] === 'M' && lines[y+3] && lines[y+3][x+3] === 'X') {
        total++;
      }
    }
  }
  return total;
}