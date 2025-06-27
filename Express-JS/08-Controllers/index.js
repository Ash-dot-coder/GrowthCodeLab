import express from "express";
import student from "./routes/student.js";
const app = express();

// Controllers can group related requested handling logic seperately.
// Instead of defining all of your request handling logic as callback in route or
// in route files, you may wish to organize this behaviour using controllers modules.

app.use("/student", student);

app.listen(8008, () => console.log("Server UP on http://localhost:8008"));
