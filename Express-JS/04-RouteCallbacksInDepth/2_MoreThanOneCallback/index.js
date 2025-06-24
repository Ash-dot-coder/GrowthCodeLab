import express from "express";
const app = express();

// More Than One Callback
// - You cannot post response two times ❌
// - Don't forget to pass the "next" function ⚠
// - (next) function will allows us to run another callback. 🏃🏻‍♂️
// - here in the first callback you can put your (logic) 💭

app.get(
  "/cb/mtoc",
  (req, res, next) => {
    console.log("First Callback");
    next();
  },
  (req, res) => {
    res.send("More Than One Callback");
  }
);

app.listen(4100, () => console.log("Server UP! on http://localhost:4100"));
