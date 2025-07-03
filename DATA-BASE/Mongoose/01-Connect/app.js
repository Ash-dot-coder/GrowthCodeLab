import express from "express";
import dotenv from "dotenv"; // ✅ Required to load .env variables
import connectDB from "./db/connectdb.js";

dotenv.config(); // ✅ Load environment variables

const app = express();
const port = process.env.PORT || 1001;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/test";

connectDB(DATABASE_URL);

// INSTALL THESE 👇🏻
// npm i express
// npm i nodemon
// npm i mongoose
// npm i dotenv

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
