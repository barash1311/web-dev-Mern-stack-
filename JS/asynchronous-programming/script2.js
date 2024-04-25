// console.log("starting blocking operation");
// for (let i = 0; i < 1e9; i++) {
//   //simulate
//   //   console.log(i);
// }

// console.log("Finished blocking operation");
//create non blocking code
console.log("starting non blocking code");
setTimeout(() => {
  console.log("execution delay");
}, 4000);
console.log("ending non blocking code");
