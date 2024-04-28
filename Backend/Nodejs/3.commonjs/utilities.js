//single function
//object
//single function
// const firstname = "barash";
// const greet = (name) => {
//   console.log(`hello ${firstname}`);
// };
// module.exports = greet;
//object export
// module.exports = {
//   add: function (a, b) {
//     return a + b;
//   },
//   subtract: function (a, b) {
//     return a - b;
//   },
// };
// function add(a, b) {
//   return a + b;
// }
// function subtract(a, b) {
//   return a - b;
// }
// module.exports = {
//   mysubtract: subtract,
//   myadd: add,
// };
//named function exprt
exports.sayhi = (name) => {
  return `hi ${name}`;
};
exports.saybye = (name) => {
  return `bye ${name}`;
};
//using short hand
