import express from "express";
const app = express();
const port = 1010;

app.get("/get", (req, res) => {
  res.send("<h1>GET<h1>");
});

app.post("/post", (req, res) => {
  res.send("<h1>POST<h1>");
});

app.put("/put", (req, res) => {
  res.send("<h1>PUT<h1>");
});

app.patch("/patch", (req, res) => {
  res.send("<h1>PATCH<h1>");
});

app.delete("/delete", (req, res) => {
  res.send("<h1>DELETE<h1>");
});

app.head("/head", (req, res) => {
  res.status(200).end(); // HEAD should not send a body
});

app.options("/options", (req, res) => {
  res.set("Allow", "GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD");
  res.status(204).send(); // 204 = No Content
});

app.listen(port, () => console.log(`Server UP on http://localhost:${port}`));
