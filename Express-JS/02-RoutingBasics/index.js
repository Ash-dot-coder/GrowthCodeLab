import express from "express";
const app = express();

// Routing refers to how an application's endpoints (URLs) respond to client requests.

// HTTP Methods
// GET 👉🏻 Retrive Data
// POST 👉🏻 Create/Insert Data
// PUT 👉🏻 Completely Update Data
// PATCH 👉🏻 Partially Update Data
// DELETE 👉🏻 Delete Data
// ALL 👉🏻 Any HTTP Request Method

// BASIC ROUTES 👇🏻
app.get("/", (req, res) => {
  res.send("<h1>HOME 🏠</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>ABOUT 🤔🌫</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>CONTACT 📲</h1>");
});

app.get("/work", (req, res) => {
  res.send("<h1>MY WORK 💪🏻</h1>");
});

app.listen(3021, () => console.log("Server 3021 Up! "));
