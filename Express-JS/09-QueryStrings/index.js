const express = require("express");
const app = express();

// A query string is the part of a URL that follows the question mark (?).
// It is used to pass data from the client to the server.
// The query string consists of one or more key-value pairs separated by ampersands (&), where each key is separated from its value by an equals sign (=).

// app.get("/product", (req, res) => {
//   console.log(req.query);
//   res.send(`Response OK ${req.query.category}`);
// });

// Destructuring
// app.get("/product", (req, res) => {
//   const { category } = req.query;
//   console.log(req.query.category);
//   res.send(`Product Category ${category}`);
// });

// Multiple Query String
app.get("/product", (req, res) => {
  const { category, id } = req.query;
  res.send(`Product Category ${category} & Product ID: ${id}`);
});

app.listen(9009, () => console.log("Server UP on http://localhost/9009"));
