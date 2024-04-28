const http = require("http");
const { log } = require("util");

//home /
// /about
// console.log(http);
//2. define the handler
const requesthandler = (req, res) => {
  const data = {
    id: 123,
    name: "barash",
    email: "barash1311@gmail.com",
  };
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify(data));
  res.writeHead(200, { "content-type": "text/plain" });
  res.end(`product id is ${productid}`);
};
//3.create the server
const server = http.createServer(requesthandler);
//4.start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`the server is running on http://localhost:${PORT}`);
});
