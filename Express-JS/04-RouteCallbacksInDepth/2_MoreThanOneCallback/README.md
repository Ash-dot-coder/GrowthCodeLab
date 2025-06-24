# 🔁 Express.js: More Than One Callback in a Route

This project demonstrates the use of **multiple callback functions in a single route** using Express.js. It is a part of the **"Route Callback in Depth"** concept.

---

## 📁 Project Structure

```

2_MoreThanOneCallback/
├── index.js               # Main server logic
├── package.json           # Project metadata & scripts
├── package-lock.json      # Auto-generated lock file
├── nodemon.json           # Nodemon configuration
├── .gitignore             # Hidden files/folders to ignore
└── README.md              # Project documentation

```

> ℹ️ `node_modules/` is not shown as it is ignored using `.gitignore`.

---

## 📦 Installation Steps

Run the following commands to set up the project:

```bash
npm init -y                         # Step 1: Initialize project
npm install express                 # Step 2: Install Express
npm install --save-dev nodemon      # Step 3: Install nodemon (for auto-restart)
```

---

## ⚙️ Add Nodemon Script in `package.json`

```json
"scripts": {
  "start": "nodemon index.js"
}
```

---

## 🛡️ Add `.gitignore` File

```gitignore
node_modules/
```

This hides `node_modules` from version control (GitHub, etc.)

---

## 🔧 `nodemon.json` Configuration

```json
{
  "watch": ["./"],
  "ignore": [
    "C:\\DumpStack.log.tmp",
    "node_modules",
    ".git"
  ],
  "ext": "js,json",
  "legacyWatch": true
}
```

✅ Prevents file watch errors
✅ Ignores locked/system files on Windows
✅ Supports `.js` and `.json` auto-reloads

---

## 🧠 Concept: More Than One Callback in Express Route

Express allows **chaining multiple functions** (callbacks) in a route definition using the `next()` function.

### ✅ Why Use Multiple Callbacks?

* Middleware-like logic before the final response
* Modular and readable code
* Helps in validation, authentication, logging, etc.

### ⚠ Important Rules:

* You **must call** `next()` in the first callback
* You **cannot send two responses**
* Use first callback to perform tasks like logging, logic, auth, etc.

---

## 🧪 Code Breakdown

```js
import express from "express";
const app = express();

// Route: /cb/mtoc
app.get(
  "/cb/mtoc",
  
  // ✅ First Callback: Logic & Forwarding
  (req, res, next) => {
    console.log("First Callback");   // acts like middleware
    next();                          // ⚠ must call next() to move to next function
  },
  
  // ✅ Second Callback: Sends the final response
  (req, res) => {
    res.send("More Than One Callback");  // only one response allowed
  }
);
```

---

## 🌐 Start the Server

```bash
npm start
```

Open your browser and visit:

```
http://localhost:4100/cb/mtoc
```

---

## 🧾 What Happens on Route `/cb/mtoc`?

| Step | Description                             |
| ---- | --------------------------------------- |
| 1️⃣  | Console logs "First Callback"           |
| 2️⃣  | Calls `next()` to move to the next func |
| 3️⃣  | Sends "More Than One Callback" to user  |

---

## 📘 Learning Outcome

You learned how to:

* Use **multiple callbacks** in Express routing
* Apply **middleware-like logic** using `next()`
* Understand **request-response lifecycle** deeper

---

## ✍️ Author

**Ayush Kohre** — Practicing Express.js deeply by breaking down each routing concept one by one 🚀

---

## 🔗 References

* [Express Middleware Docs](https://expressjs.com/en/guide/using-middleware.html)
* [Route Callbacks](https://expressjs.com/en/4x/api.html#app.METHOD)

---
