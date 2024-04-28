const fs = require("fs");
//read a file
//sychrnous
const databuffer = fs.readFileSync("./sample.txt");
const content = databuffer.toString();
// console.log(content);
//async way

// fs.readFile("./sample.txt", "utf-8", (err, content) => {
//   if (err) {
//     console.log(err);
//     throw err;
//   } else {
//     console.log(content);
//   }
// });
//write to a file
fs.writeFile("./new.txt", content, (err) => {
  if (!err) {
    console.log("content written successfully");
    // throw err;
  }
});
