//anaylse
// console.log(process);
//environemt vairalbes
//used in progduction
// console.log(process.env);
const appenv = process.env.APP_ENV || "DEVELOPMENT";
//DISPLAY TH E
// console.log(`our application is running on ${appenv}`);
//SET THE ENVIROMENT

//process
console.log(process.env.NODE_ENV);
// if (process.env.NODE_ENV != "production") {
//   console.log("this is running in production");
//   process.exit();
// }
// //lo
console.log(process.cwd());
