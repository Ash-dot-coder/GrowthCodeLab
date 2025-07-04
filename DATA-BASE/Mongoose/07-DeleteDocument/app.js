import express from "express";
import connectDB from "./db/connectdb.js";
import { deleteOne, deleteMany } from "./models/movie.js";

const app = express();
const port = process.env.PORT || 1007;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/moviesdb";

connectDB(DATABASE_URL);

// deleteOne("686776b0103905f87eb25563");
deleteOne("686776b0103905f87eb25569");
deleteMany();

app.listen(port, () => console.log(`Server running on port ${port}`));
