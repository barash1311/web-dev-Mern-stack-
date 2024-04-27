// !accesing the global object
// console.log(global);
//accesing the properties
// global.myglobal = "hello from the global";
// console.log(global.myglobal);
// console.log("myglobal" in global);
// console.log(__dirname);
// console.log(__filename);
//using setinterval and settimeout
// let count = 0;
// const intervalid = setInterval(() => {
//   console.log("hello world");
//   count++;
//   if (count == 5) {
//     clearInterval(intervalid);
//   }
// }, 1000);

//set timeout
setTimeout(() => {
  console.log("this is delayed by 5 sec");
}, 2000);
// console.log(timeout);
