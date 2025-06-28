import express from "express";
import web from "./routes/web.js";

const app = express();
const port = 1014;

app.set("view engine", "ejs");
app.use("/", web);

app.listen(port, () => console.log(`Server UP on http://localhost:${port}`));
