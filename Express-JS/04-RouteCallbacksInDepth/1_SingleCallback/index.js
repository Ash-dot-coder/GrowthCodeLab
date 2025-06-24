import express from "express";
const app = express();

// // Route callback can be in the form of
// // - Single Callback Function
// // - More than one callback
// // - Array of Function
// // - Combination of Both

// // -------------------------
// // One Callback Function 🛫
app.get("/", (req, res) => res.send("Single Callback"));
// // -------------------------

// // -------------------------
// // More Than One Callback
// // - You cannot post response two times ❌
// // - Don't forget to pass the "next" function ⚠
// // - (next) function will allows us to run another cb. 🏃🏻‍♂️
// // - here in the first callback you can put your (logic) 💭

app.get(
  "/cbexample2",
  (req, res, next) => {
    console.log("First callback");
    next();
  },
  (req, res) => {
    res.send("More than one callback");
  }
);

// // -------------------------------------
app.listen(4120, () => console.log("🚀 Server UP at http://localhost:4120"));

