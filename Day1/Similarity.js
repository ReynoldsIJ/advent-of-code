const { readFromFile } = require("../utils/util");

module.exports.findSimilarity = async () => {
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
  let similarity = 0;
  for (i = 0; i < list1.length; i++) {
    const count = list2.filter(element => element === list1[i]).length;
    similarity += list1[i] * count;
  }
  console.log(similarity);
};


