import express from "express";
import student from "./routes/students.js";
import teacher from "./routes/teacher.js";

const app = express();

// First check this link out 👇🏻
// http://expressjs.com/en/5x/api.html#router

// 1. Create routes folder and put your routes in a seperate file.
// 2. Create instance of express.Router()
// 3. Instead of app.method change that to "router.method"
// 4. Export router from a specific file
// 5. Import route in index.js file
// 6. Use the (app.use) build-in middleware & provide your routes.

// Load Router Modules
app.use("/student", student);
app.use("/teacher", teacher);

app.listen(6006, () => console.log("Server UP on http://localhost:6006"));
