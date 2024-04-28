//1.import the required modules
const http = require("http");
// console.log(http);
//2. define the handler
const requesthandler = (req, res) => {
  console.log(req);
  console.log(res);
  //send the response
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("hello world this is my first noide ");
};
//3.create the server
const server = http.createServer(requesthandler);
//4.start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`the server is running on http://localhost:${PORT}`);
});
