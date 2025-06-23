import express from "express";
const app = express();

// ---------------------------------------------
// ✅ 1. Regex Pattern - Matches "/acd" or "/abcd"
// ? means optional 'b' (same logic as "/ab?cd" in Express 4)
app.get(/^\/ab?cd$/, (req, res) => {
  res.send("If the user hits /acd or /abcd, this route works!");
});

// ---------------------------------------------
// ✅ 2. Regex Pattern - Matches any route containing the letter "a"
app.get(/a/, (req, res) => {
  res.send("This route works if the path contains the letter 'a'");
});

// ---------------------------------------------
// ✅ 3. Regex Pattern - Matches exactly: /users/1234 (any 4-digit number)
app.get(/^\/users\/\d{4}$/, (req, res) => {
  res.send("Matched a user route with a 4-digit number (e.g., /users/1234)");
});

// ---------------------------------------------
// ✅ Server Listening
app.listen(3102, () => console.log("🚀 Server UP at http://localhost:3102"));
