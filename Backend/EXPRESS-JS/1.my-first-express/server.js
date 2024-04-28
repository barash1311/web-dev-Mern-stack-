const express = require("express");
//instance of express
const app = express();
//create the port
const PORT = 8082;

//DEFINE THE ROUTE HANDLER
app.get("/", (req, res) => {
  res.send("hello world");
});

//start the server
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
