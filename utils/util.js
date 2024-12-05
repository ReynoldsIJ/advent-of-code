const fs = require("fs");
const readline = require('readline');

module.exports.readFromFile = async (filename) => {
  let lines = [];
  try {
    const fileStream = fs.createReadStream(filename);
    
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
  
    for await (const line of rl) {
      lines.push(line);
    }
    return lines;
  } catch (err) {
    if (err !== undefined) {
      console.error(err);
    }
  }
};
