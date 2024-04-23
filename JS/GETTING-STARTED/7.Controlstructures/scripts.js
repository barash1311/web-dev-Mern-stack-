// let instock = true;
// if (instock == false) {
//   console.log("item is present");
//   instock = false;
// } else if ((instock = true)) {
//   {
//     console.log("Item has been sold out");
//   }
// } else {
//   console.log("item is no present");
// }

// switch statement
let userinput1 = parseFloat(prompt("enter no 1:"));
let userinput2 = parseFloat(prompt("enter no 2:"));
// let userinput1 = 2;
// let userinput2 = 2;

console.log(
  "enter value of operation your want to perform \n + for addition, \n- for subtraction , \n* for multiplication and \n / for division "
);
let user = parseInt(prompt("enter your choice"));
switch (user) {
  case 1:
    console.log(userinput1 + userinput2);
    break;
  case 2:
    console.log(userinput1 - userinput2);
    break;
  case 3:
    console.log(userinput1 * userinput2);
    break;
  case 4:
    if (userinput2 != 0) {
      console.log(userinput1 / userinput2);
    } else {
      console.log("cannot devide with xero");
    }
    break;
  default:
    console.log("invalid input");
}
