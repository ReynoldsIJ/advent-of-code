const math = require("mathjs")
const { readFromFile } = require("../utils/util");

module.exports.findDistance = async () => {
  let list1 = [];
  let list2 = [];
  let lines = [];
  lines = await readFromFile("Day1/input.txt");
  for (i = 0; i <= lines.length; i++ ) {
    if(lines[i] !== undefined) {
      const words = lines[i].split(/\s+/);
      list1.push(words[0]);
      list2.push(words[1]);
    }
  }
  list1.sort();
  list2.sort();
  let total = 0;
  for (i = 0; i < list1.length; i++) {
    total += math.abs(list1[i] - list2[i]);
  }
  console.log(total);
};


