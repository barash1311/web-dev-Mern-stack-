const http = require("http");
const { log } = require("util");

//home /
// /about
// console.log(http);
//2. define the handler
const requesthandler = (req, res) => {
  //pass the url
  const url = require("url");
  const passedurl = url.parse(req.url, true);
  console.log(req.method);
  //home route
  if (passedurl === "/" && req.method === "GET") {
    //send the response
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("welcome to the home page");
  } else if (passedurl === "/about" && req.method === "GET") {
    //send the response
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("welcome to the ABOUT page");
  } else {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("404 not found");
  }
};
//3.create the server
const server = http.createServer(requesthandler);
//4.start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`the server is running on http://localhost:${PORT}`);
});
