const { log } = require("console");
const path = require("path");
console.log(path);
const filename = path.basename("./user/text/file.txt");
console.log(filename);
const file = path.dirname("./user/text/file.txt");
console.log(file);
const ext = path.extname("./user/text/file.txt");
console.log(ext);
const join = path.basename("./user/text/file.txt");
