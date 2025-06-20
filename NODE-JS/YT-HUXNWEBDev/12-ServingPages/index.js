import http from "http";
import fs from "fs";
import { error } from "console";

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/home") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    fs.readFile("./public/home.html", (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  } else if (req.url === "/about") {
    fs.readFile("./public/about.html", (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  } else if (req.url === "/contact") {
    fs.readFile("./public/contact.html", (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  } else {
    res.writeHead(404, "BAD", { "Content-Type": "text/html" });
    res.end(" <h3> 404 Page Not Found :( </h3> ");
  }
});

server.listen(1023, () => console.log(`Server running on port 1023`));
