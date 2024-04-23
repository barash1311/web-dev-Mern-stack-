let myarray = [1, 2, 3, 4, 5, 6, 7];
let array2 = [1, "hello", true, { key: "value" }];

// console.log(array2);
//using constructor
let numbers = new Array(1, 2, 3, 4, 5, 6);
// console.log(numbers);
let numbers2 = Array.of(1, 2, 3, 4, 5, 6);
// console.log(numbers2);
const word = "heeloo";
let array3 = Array.from(word);
// console.log(array3);
let array5 = [1, 2];
array5.push("hello");
array5.push({ key: "value" });
array5.unshift(0);
array5.shift(0);
console.log(array5);
