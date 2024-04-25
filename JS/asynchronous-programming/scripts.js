// const showmessage = () => {
//   console.log("hello after 3 second");
// };
// setTimeout(showmessage, 3000);
// setTimeout(() => {
//   console.log("hello world");
// }, 1000);
// console.log("waiting for the message");
// const timeout = setTimeout(() => {
//   console.log("display after 5 second");
// }, 5000);
// console.log("timeout schedule");
// clearTimeout(timeout);
// console.log("timeout");
//set internval
// setInterval(() => {
//   console.log("am calling at aevery 3 seconds");
// }, 3000);
let count = 0;
const interval = setInterval(() => {
  count++;
  console.log(count);
  if (count >= 5) {
    clearInterval(interval);
  }
}, 1000);
