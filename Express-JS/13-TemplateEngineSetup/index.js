// ✅ Importing necessary modules properly.
import express from "express";
import web from "./routes/web.js";
import path from "path";

// ✅ App initialized and custom port defined.
const app = express();
const port = 1013;

// 1. npm i ejs

// 2. OPTIONAL:
// app.set("views", "./views");

// 3.Tell your app that we're using "ejs" template engine.
app.set("view engine", "ejs");

// 4. Static Files: Serving static files correctly from public/ folder.
app.use(express.static(path.join(process.cwd(), "public")));

// Mounting your router — this makes all routes in web.js available from /.
app.use("/", web);

// ✅ Server start message.
app.listen(port, () => console.log(`Server UP on http://localhost:${port}`));
