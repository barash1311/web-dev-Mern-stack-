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
  const pathname = passedurl.pathname;
  //split the pathname
  const pathComponemt = pathname.split("/").filter(Boolean);
  console.log(pathComponemt);
  if (pathComponemt[0] === "product" && pathComponemt[1]) {
    const productid = pathComponemt[1];
    res.writeHead(200, { "content-type": "text/plain" });
    res.end(`product id is ${productid}`);
  } else {
    res.end("not found");
  }
};
//3.create the server
const server = http.createServer(requesthandler);
//4.start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`the server is running on http://localhost:${PORT}`);
});
