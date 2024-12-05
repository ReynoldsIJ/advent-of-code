const { readFromFile } = require("../utils/util");

module.exports.findMul = async () => {
  let lines = [];
  let output = [];
  let total = 0;
  lines = await readFromFile("Day3/input.txt");
  for (let i = 0; i <lines.length; i++) {
    matchesInString(lines[i], output)
  }
  console.log(output);
  for (const item of output) {
    total = total + mul(item);
  }
  console.log(total);
};

const matchesInString = (line, output) => {
  const regex = /mul\([0-9]{1,3},[0-9]{1,3}\)/g;

  const matches = line.matchAll(regex);

  for (const match of matches) {
    output.push(match[0]);
  }
};

const mul = (mulCommand) => {
  const regex = /[0-9]{1,3}/g;
  let values = [];
  const matches = mulCommand.matchAll(regex);

  for (const match of matches) {
    values.push(match[0]);
  }
  values.map(Number);
  return values[0] * values[1];
}