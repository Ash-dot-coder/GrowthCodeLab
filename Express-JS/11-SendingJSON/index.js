import express from "express";
import products from "./products.js";
const app = express();
const port = 1011;

// Install this Extension 👇🏻
// https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa/related

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(port, () => console.log(`Server UP on http://localhost:${port}`));
