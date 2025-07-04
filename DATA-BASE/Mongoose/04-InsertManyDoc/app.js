import express from "express";
import { insertManyDocs } from "./models/movies.js";
import connectDB from "./db/connectdb.js";

const app = express();
const port = process.env.PORT || 1004;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/moviesdb";

connectDB(DATABASE_URL);

insertManyDocs();

app.listen(port, () => console.log(`Server listening on port 👉🏻 ${port}`));
