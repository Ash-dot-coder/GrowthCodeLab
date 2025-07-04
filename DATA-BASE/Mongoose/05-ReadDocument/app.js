import express from "express";
import connectDB from "./db/connectdb.js";
import {
  allDocs,
  singleDoc,
  getDocById,
  docWithfield,
  getLimitedDoc,
  skipDoc,
  countDoc,
  sortDoc,
  operato,
} from "./models/movie.js";

const app = express();
const port = process.env.PORT || 1005;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/moviedb";

connectDB(DATABASE_URL);

allDocs();
singleDoc();
getDocById();
docWithfield();
getLimitedDoc();
skipDoc();
countDoc();
sortDoc();
operato();

app.listen(port, () => console.log(`Server running on port 👉🏻 ${port}`));
