# 🚀 First Express App

This is the most basic Express.js server setup that returns a simple `"Hello World"` response for all routes. It's the ideal starting point for understanding how to build Node.js web servers using Express.

---

## 📁 Project Structure

```

express-js/
└── 01-first-express-app/
    ├── index.js             # Main Express server file
    ├── package.json         # Project dependencies & scripts (declared)
    ├── package-lock.json    # Locks the exact version of each package
    └── README.md            # Project explanation and documentation

```

---

## 🧱 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

---

## ⚙️ Setup & Installation

### 1️⃣ Initialize Node Project

```bash
npm init -y
````

Creates a `package.json` file.

---

### 2️⃣ Install Express

```bash
npm install express --save
```

Installs Express.js and saves it as a dependency.

---

## 🧠 Code Walkthrough (Step-by-Step)

Here's the full source code:

```js
const express = require("express");
const app = express();

// 👇🏻 Don't worry about this code
app.use((req, res) => {
  res.send("Hello World");
});

app.listen(1500, () => console.log("Listening on port 1500"));
```

---

### ✅ Step 1: Import Express

```js
const express = require("express");
```

* Loads the Express module using CommonJS syntax (`require()`).

---

### ✅ Step 2: Create an App Instance

```js
const app = express();
```

* Creates an instance of the Express application.

---

### ✅ Step 3: Handle All Routes Using `app.use()`

```js
app.use((req, res) => {
  res.send("Hello World");
});
```

* `app.use()` is middleware that runs for **every request** (any route, any method).
* It sends `"Hello World"` as the response for every incoming request.

---

### ✅ Step 4: Start the Server

```js
app.listen(1500, () => console.log("Listening on port 1500"));
```

* Starts the server on **port 1500**.
* Logs a message in the terminal to confirm the server is running.

---

## 🌐 What Happens When You Visit the Server?

* URL: `http://localhost:1500`
* Output: `Hello World`
* Any route you visit (like `/`, `/about`, `/contact`) will return the same message.

---

## 📘 Key Concepts Learned

| Step | Concept               | Purpose                         |
| ---- | --------------------- | ------------------------------- |
| 1    | `npm init`            | Initializes a Node.js project   |
| 2    | `npm install express` | Installs Express.js             |
| 3    | `require("express")`  | Loads Express into your project |
| 4    | `express()`           | Creates an Express app          |
| 5    | `app.use()`           | Middleware for all requests     |
| 6    | `app.listen()`        | Starts the HTTP server          |

---

## 🧪 Test It

After running the app:

```bash
node index.js
```

Open your browser and go to:

```
http://localhost:1500
```

🟢 You should see: `Hello World`

---

## ✍️ Author

**Ayush Kohre** — Learning Express.js step-by-step, from Hello World to full-stack 🚀

---

## 📌 Useful Links

* [Express.js Documentation](https://expressjs.com/)
* [Node.js File System](https://nodejs.org/en/learn/)
* [MDN: HTTP Basics](https://developer.mozilla.org/en-US/docs/Web/HTTP)

---
