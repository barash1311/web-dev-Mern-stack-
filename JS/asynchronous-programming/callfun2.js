//behavijng as nornmal function
function mycallback() {
  console.log("hello simple");
}
function logmessage(callback) {
  callback();
}
logmessage(mycallback);
