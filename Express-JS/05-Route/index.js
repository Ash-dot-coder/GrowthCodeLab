import express from "express";
const app = express();

// app.route returns a instance of a single route,
// Which you can then use to handle HTTP verbs,
// with optional middleware.
// We use (app.route) to avoide duplicate code.

// Ugly Code 😜

// Get: 🍽
// app.get("/student", (req, res) => {
//   res.send("All Student");
// });

// Post: 🍴
// app.post("/students", (req, res) => {
//   res.send("Add new Student");
// });

// Put: 🔪
// app.put("/student", (req, res) => {
//   res.send("Add new Student");
// });

// Refactor 😙
app
  .route("/student")
  .get((req, res) => res.send("All Students"))
  .post((req, res) => res.send("Add new Student"))
  .put((req, res) => res.send("Update Student"))
  .delete((req, res) => res.send("Remove Student"));

app.listen(5005, () => console.log("Server UP on http://localhost:5005"));
