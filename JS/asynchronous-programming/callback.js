// ! bhevaing aas normal function
//create a callback funcion
// function callbackfn() {
//   console.log("hello this is simple call");
// }
//usuage
// function logmessage(callback) {
//   callback();
// }
// logmessage(callbackfn);

// logmessage(function () {
//   console.log("hello world");
// });

function logmessage(callback) {
  const result = callback();
  console.log(result);
}
logmessage(() => {
  return "hello";
});
//extract call back function

const logmessagehof = (callback) => {
  const result = callback("barash", "sharma");
  console.log(result);
};
const logmessagecallback = (firstname, lastname) => {
  return `hello ${firstname} ${lastname} this is simple`;
};
logmessagehof(logmessagecallback);
