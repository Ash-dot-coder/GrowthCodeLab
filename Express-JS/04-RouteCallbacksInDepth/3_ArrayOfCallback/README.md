# 🔁 Express.js – Route Callback (Array of Callbacks)

This project demonstrates how to handle routing using an **array of callback functions** in Express.js. It’s part of the **"Route Callback in Depth"** concept.

---

## 📁 Project Structure

```

3_ArrayOfCallback/
├── index.js           # Main server file with route callback logic
├── nodemon.json       # Nodemon config to prevent watch errors
├── package.json       # Project metadata and scripts
├── package-lock.json  # Auto-generated lock file
├── .gitignore         # Hides (node_modules) and lock files from Git
└── README.md          # Documentation (this file)

```

---

## ⚙️ Package Installation Steps

Initialize your Node project and install necessary packages:

```bash
npm init -y                      # Step 1: Initialize project
npm install express              # Step 2: Install Express
npm install --save-dev nodemon   # Step 3: Install nodemon as dev dependency
````

---

## 🧠 Core Concept: Array of Callback Functions

In Express.js, a **route handler** can take **multiple callbacks**. This example showcases how a route can process an **array of middleware-style functions** in a specific order.

---

## 📜 Code Explanation

### ✅ 1. Import Express and Create App

```js
import express from "express";
const app = express();
```

> We import Express and create our app instance to handle routes and middleware.

---

### ✅ 2. Define Callbacks

These are the three separate middleware functions that get executed in **sequence**.

```js
const cb1 = (req, res, next) => {
  console.log("First callback");
  next();
};
```

* Logs "First callback" and passes control using `next()`.

```js
const cb2 = (req, res, next) => {
  console.log("Second callback");
  next();
};
```

* Logs "Second callback" and passes control using `next()`.

```js
const cb3 = (req, res, next) => {
  console.log("Third callback");
  res.send("Array of callbacks (response)");
};
```

* Logs "Third callback" and sends the final response to the client.

---

### ✅ 3. Create Route with Array of Callbacks

```js
app.get("/cbexample3", [cb1, cb2, cb3]);
```

> When a user hits `/cbexample3`, the callbacks run **in order**:
>
> `cb1 → cb2 → cb3`

---

### ✅ 4. Start the Server

```js
app.listen(3030, () => console.log("Server UP! on http://localhost:3030"));
```

> Starts your Express app on port `3030`.

---

## 📂 Nodemon Config (`nodemon.json`)

This file avoids file watching issues (especially on Windows) and speeds up development by auto-restarting the server.

```json
{
  "watch": ["./"],
  "ignore": [
    "C:\\\\DumpStack.log.tmp",
    "node_modules",
    ".git"
  ],
  "ext": "js,json",
  "legacyWatch": true
}
```

---

## 📌 .gitignore File

```gitignore
node_modules
package-lock.json
```

> Keeps your version control clean by ignoring heavy and auto-generated files.

---

## 🔄 Output Behavior

When you visit:
👉 `http://localhost:3030/cbexample3`

You will see this in terminal:

```
First callback  
Second callback  
Third callback
```

And in the browser:

```
Array of callbacks (response)
```

---

## 🎯 What You Learn

* How to use multiple middleware callbacks in a route
* How `next()` works in Express
* Importance of middleware flow and order
* Practical setup using nodemon for development

---

## ✍️ Author

**Ayush Kohre** — Learning Express.js through deep route mechanics and clean practices 💻✨
Currently building backend confidence with real-world style route setups.

---

## 📘 Helpful Links

* [Express.js Routing Docs](https://expressjs.com/en/guide/routing.html)
* [Middleware in Express](https://expressjs.com/en/guide/using-middleware.html)
* [Nodemon Docs](https://nodemon.io/)

---
