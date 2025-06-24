# 🧠 Express-JS [04]: Route Callbacks In Depth

This module is a detailed walkthrough of **callback patterns in Express.js routes**, covering everything from **single middleware callbacks** to **complex combinations** using arrays and individual functions.

Ideal for beginners and intermediate devs to **understand the flow of request handling in Express**.

---

## 📁 Folder Structure & Meaning

| Folder Name           | Topic Covered                                 |
|------------------------|-----------------------------------------------|
| `1_SingleCallback/`     | Single middleware callback function          |
| `2_MoreThanOneCallback/`| Multiple independent callbacks (in sequence) |
| `3_ArrayOfCallback/`    | Array of callback functions                  |
| `4_Crazyness/`          | Combination of array + individual callbacks  |

---

## 🔥 What You’ll Learn

✅ Middleware chaining in Express  
✅ How `next()` works  
✅ Clean route structuring  
✅ Differences between single, multiple, array, and combo callbacks

---

## 1️⃣ `1_SingleCallback` → Single Function Route

```js
app.get("/example", (req, res) => {
  res.send("Single Callback Function");
});
```

### 🧠 Meaning

* Only **one** callback is used.
* No `next()` is required.
* This is the most basic and widely used route structure.

---

## 2️⃣ `2_MoreThanOneCallback` → Multiple Independent Functions

```js
const first = (req, res, next) => {
  console.log("First middleware");
  next();
};

const second = (req, res) => {
  console.log("Second middleware");
  res.send("More than one callback");
};

app.get("/example", first, second);
```

### 🧠 Meaning

* Functions are executed **in sequence**.
* `next()` is mandatory to move to the next function.
* Helps in separating logic (e.g., auth, validation, logging, response).

### ✅ Good for:

* Logging
* Authentication
* Request transformation

---

## 3️⃣ `3_ArrayOfCallback` → Route with Array of Middleware

```js
const cb1 = (req, res, next) => { console.log("1"); next(); };
const cb2 = (req, res, next) => { console.log("2"); next(); };
const cb3 = (req, res) => res.send("Array of Callback");

app.get("/example", [cb1, cb2, cb3]);
```

### 🧠 Meaning

* Pass **an array of middleware** functions.
* Clean and modular way to stack logic.
* Array automatically goes from left to right using `next()`.

### 📌 Cheat Sheet

```js
app.get(path, [cb1, cb2, cb3]);
```

---

## 4️⃣ `4_Crazyness` → Combo of Array + Individual Callbacks

```js
const cb1 = (req, res, next) => { console.log("1"); next(); };
const cb2 = (req, res, next) => { console.log("2"); next(); };

app.get("/example",
  [cb1, cb2],
  (req, res, next) => { console.log("3"); next(); },
  (req, res) => res.send("Mixed structure")
);
```

### 🧠 Meaning

* You can **mix** an array of callbacks with **individual callbacks**.
* Useful for:

  * Separating reusable logic
  * Mixing validation + final handler
* Each function must call `next()` (except the final one)

### ✅ Execution Order

```text
cb1 -> cb2 -> anonymous3 -> final response
```

---

## 📌 Middleware Cheatsheet

| Type                   | Syntax Example                        |
| ---------------------- | ------------------------------------- |
| Single Callback        | `app.get(path, cb)`                   |
| Multiple Callbacks     | `app.get(path, cb1, cb2)`             |
| Array of Callbacks     | `app.get(path, [cb1, cb2, cb3])`      |
| Combo (Array + Single) | `app.get(path, [cb1, cb2], cb3, cb4)` |

---

## 🚀 Run the Code

Each folder contains:

* `index.js`: main Express file
* `package.json`: basic config
* `nodemon.json`: watcher config
* `.gitignore`: hides system and node\_modules

### Install Dependencies Once (inside any folder):

```bash
npm install
```

### Start the server:

```bash
npm run dev
# OR
nodemon index.js
```

---

## 📚 Recommended Learning Flow

1. Start from `1_SingleCallback` to understand basic route logic.
2. Move to `2_MoreThanOneCallback` and practice chaining with `next()`.
3. Try `3_ArrayOfCallback` and see how Express iterates through arrays.
4. Dive into `4_Crazyness` to get comfortable with mixing both approaches.

---

## ✍️ Author

**Ayush Kohre**
🚀 Exploring Express.js Route Callbacks from scratch to expert level.
📘 Sharing knowledge through code clarity and project-based learning.

---

## 🔗 Helpful Resources

* [Express.js Routing Docs](https://expressjs.com/en/guide/routing.html)
* [Middleware Explained](https://expressjs.com/en/guide/using-middleware.html)
* [Node.js Crash Course](https://www.youtube.com/watch?v=fBNz5xF-Kx4)

---
