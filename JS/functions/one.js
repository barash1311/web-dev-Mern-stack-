// function creation
// ------------------------------------------
function sayhello() {
  console.log("hello world");
}
function greeting() {
  console.log("nameste");
}
function date() {
  const currentdate = new Date();
  console.log(`todays date is ${currentdate}`);
}
// sayhello();
// greeting();
// date();
// recreate hello world
const greet = function () {
  const date = new Date();
  console.log(`bonjour and todays date is ${date}`);
};
// greet();
const check = function (x) {
  if (x % 2 == 0) {
    console.log("even");
  } else {
    console.log("false");
  }
};
check(3);
