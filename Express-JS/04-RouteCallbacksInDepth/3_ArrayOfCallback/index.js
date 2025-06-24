import express from "express";
const app = express();

// Array of callbacks
const cb1 = (req, res, next) => {
  console.log("First callback");
  next();
};

const cb2 = (req, res, next) => {
  console.log("Second callback");
  next();
};

const cb3 = (req, res, next) => {
  console.log("Third callback");
  next();
};

const cb4 = (req, res, next) => {
  console.log("Fourth callback");
  res.send("Array of callbacks (response)");
};

// Passing array of callbacks
app.get("/cbexample3", [cb1, cb2, cb3, cb4]);

app.listen(3030, () => console.log("Server UP! on http://localhost:3030"));
