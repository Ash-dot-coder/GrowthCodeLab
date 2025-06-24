# 🚀 Express.js – Route Callback in Depth

This project demonstrates different ways to define **route callback functions** in Express.js. The focus is on how callbacks work within routes using:

- ✅ Single Callback Function
- ✅ More than One Callback Function

---

## 📁 Project Structure

```

express-js/
└── 04-RouteCallbacksInDepth/
    └── 1_SingleCallback
        ├── index.js             # Main server file
        ├── package-lock.json    # Locks the exact version of each package
        ├── package.json         # Project metadata and scripts
        ├── nodemon.json         # (Optional) Config for nodemon
        └── README.md            # Documentation file

```

---

## 🛠 Installation Steps

### Step 1: Initialize a Node Project

```bash
npm init -y
```

### Step 2: Install Required Packages

```bash
npm install express
npm install --save-dev nodemon
```

### Step 3: Add Start Script in `package.json`

```json
"scripts": {
  "start": "nodemon index.js"
}
```

---

## 📚 Concept Overview

In Express.js, **route callbacks** are the functions that handle requests. There are **4 ways** to define route callbacks:

1. A **Single callback** function
2. **Multiple callbacks** using `next()`
3. An **array of callback functions**
4. A **combination** of both (callbacks + arrays)

> In this file, we’re covering the **first two** for better clarity and foundation.

---

## 🔍 Code Explanation

### ✅ 1. Single Callback Function

```js
app.get("/", (req, res) => res.send("Single Callback"));
```

* This is the most basic form.
* When the browser hits the `/` route:

  * A single function is executed.
  * The `res.send()` method ends the response cycle by sending a response to the client.

📝 **Note:** Once `res.send()` is called, no more code is executed after that in the same request.

---

### ✅ 2. More Than One Callback Function

```js
app.get(
  "/cbexample2",
  (req, res, next) => {
    console.log("First callback");
    next(); // 🔁 Passes control to the next callback
  },
  (req, res) => {
    res.send("More than one callback");
  }
);
```

#### 🔎 Explanation:

* You define **multiple callback functions** for the same route.
* The `next()` function is mandatory to move to the next middleware/callback.
* You can perform **logic (like validation, logging, authentication)** in the first callback before sending a response in the last one.

📝 **Important Notes:**

* You **cannot send a response more than once** (`res.send()` should only be called once per request).
* Always use `next()` properly to avoid request hang or unexpected behavior.
* This is a cleaner way to separate **logic** and **response**.

---

## 🌐 Available Routes

| Route         | What It Does                          | Response                 |
| ------------- | ------------------------------------- | ------------------------ |
| `/`           | Handles request using single callback | `Single Callback`        |
| `/cbexample2` | Logs message → then sends response    | `More than one callback` |

---

## 🟢 How to Run the Project

```bash
npm start
```

Then visit in browser:

```
http://localhost:4120/
http://localhost:4120/cbexample2
```

---

## 💡 What You’ll Learn

* How routing works behind the scenes in Express.js
* How to use `next()` for chaining route handlers
* Best practices of separating logic and response
* How middleware-style callbacks can be stacked in routes

---

## 🔧 Optional: Nodemon Config (`nodemon.json`)

```json
{
  "watch": ["index.js"],
  "ext": "js,json",
  "ignore": ["C:/DumpStack.log.tmp"]
}
```

---

## ✍️ Author

**Ayush Kohre** — Deep diving into Express.js routing, mastering callbacks and logic flow 🧠💻

---

## 📚 Useful References

* [Express.js Routing Docs](https://expressjs.com/en/guide/routing.html)
* [Understanding Middleware](https://expressjs.com/en/guide/using-middleware.html)
* [Nodemon Docs](https://nodemon.io/)

---

