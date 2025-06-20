import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "OK", { "content-type": "text/html" });
    res.end("<h1> Home </h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, "OK", { "content-type": "text/html" });
    res.end("<h2> About </h2>");
  } else if (req.url === "/contact") {
    res.writeHead(200, "OK", { "content-type": "text/html" });
    res.end("<h2> Contact </h2>");
  } else {
    res.writeHead(404, "BAD", { "content-type": "text/html" });
    res.end("<h3> 404 Page Not Found :( </h3>");
  }
});

server.listen(2040, () => console.log("Server running on port 2040"));
