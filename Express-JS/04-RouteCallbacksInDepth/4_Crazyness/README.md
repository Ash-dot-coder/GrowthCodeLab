# 🧠 Express.js – Route Callback in Depth (Crazyness)

This project is part of the **"Route Callback in Depth"** series, demonstrating how to chain **multiple middleware callbacks** in a single route using **independent functions and arrays of functions**.

---

## 📁 Folder Structure

```

4_Crazyness/
├── node\_modules/       # Installed dependencies (hidden by .gitignore)
├── index.js             # Main Express server file
├── package.json         # Project metadata and scripts
├── package-lock.json    # Dependency lock file
├── nodemon.json         # Nodemon config to handle file watching
├── .gitignore           # Hides (/node_modules) & system files
└── readme.md            # This documentation

```

---

## 📦 Installation Steps

### 1️⃣ Initialize Node.js Project

```bash
npm init -y
```

> Creates a default `package.json` file.

### 2️⃣ Install Express (Production Dependency)

```bash
npm install express
```

> Installs the Express framework for building the web server.

### 3️⃣ Install Nodemon (Development Dependency)

```bash
npm install --save-dev nodemon
```

> Nodemon automatically restarts your server on file changes.

---

## ⚙️ package.json Scripts

Inside your `package.json`:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

* `npm start`: Runs using Node
* `npm run dev`: Uses Nodemon for auto-restart on save

---

## 🔧 Nodemon Configuration (nodemon.json)

To prevent Nodemon crash errors in Windows:

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

## 🧠 Code Explanation: index.js

```js
import express from "express";
const app = express();
```

### 🔍 What is This?

* We’re creating an Express app to define a route with **multiple callback layers**.
* This shows how you can break complex logic into cleaner, reusable parts.

---

### 🔂 Define Callback Functions

```js
const cb1 = (req, res, next) => {
  console.log("First callback");
  next();
};

const cb2 = (req, res, next) => {
  console.log("Second callback");
  next();
};
```

* `cb1` and `cb2` are **middleware functions**.
* They log messages and then call `next()` to pass control to the next function in the stack.

---

### 🧪 Route Using Array + Independent Functions

```js
app.get(
  "/cbexample4/crazyness",
  [cb1, cb2],
  (req, res, next) => {
    console.log("Third callback");
    next();
  },
  (req, res) => {
    console.log("Fourth callback");
    res.send("Combination of independent function and array of function");
  }
);
```

#### 📝 Notes:

* This route demonstrates a **combination** of:

  * An **array of functions**: `[cb1, cb2]`
  * Followed by **two individual functions**

#### ✅ Flow Order:

1. `cb1` → logs "First callback"
2. `cb2` → logs "Second callback"
3. Next callback → logs "Third callback"
4. Final callback → logs "Fourth callback" and sends the response

---

### 🖥️ Start the Server

```js
app.listen(4044, () =>
  console.log("Server Up on http://localhost:4044")
);
```

> Starts the server on port 4044 and logs the message to console.

---

## 🌐 How to Run This Project

```bash
npm run dev
```

Then open in browser:
👉 [`http://localhost:4044/cbexample4/crazyness`](http://localhost:4044/cbexample4/crazyness)

### 🧾 Expected Console Output:

```
First callback
Second callback
Third callback
Fourth callback
```

And on browser:

```
Combination of independent function and array of function
```

---

## 🔍 What You Learn from This

* How to **chain multiple middleware** in Express routing
* How to use **array of functions + separate functions**
* Understanding how `next()` works in real time
* Clean and modular route definition

---

## 🧼 .gitignore File

```gitignore
node_modules/
.DS_Store
C:/DumpStack.log.tmp
```

> Keeps your repo clean by ignoring system and dependency folders.

---

## ✍️ Author

**Ayush Kohre** — Exploring Express.js deeply, route by route, callback by callback 💡
Currently practicing middleware layers and server logic.

---

## 📘 Useful Links

* [Express.js Routing Docs](https://expressjs.com/en/guide/routing.html)
* [Express Middleware Guide](https://expressjs.com/en/guide/using-middleware.html)
* [Nodemon](https://nodemon.io/)

---

