# 🚀 Express.js Advanced Routing with Regex Patterns

This project demonstrates **advanced routing techniques** using **Regular Expressions (Regex)** in Express.js to build dynamic and pattern-based URL routing.

---

## 📁 Project Structure

```

express-js/
└── 03-advanced-routing/
    ├── index.js             # Main server file
    ├── package.json         # Project metadata and scripts
    ├── package-lock.json    # Locks the exact version of each package
    ├── nodemon.json         # Optional: nodemon config
    └── README.md            # This file (documentation)

```

---

## 📦 Package Installation

### 1. Initialize Node.js Project

```bash
npm init -y
```

### 2. Install Express.js

```bash
npm install express
```

### 3. Install Nodemon (Dev Dependency)

```bash
npm install --save-dev nodemon
```

---

## 🚀 How to Run the App

### Add the following script in your `package.json`:

```json
"scripts": {
  "start": "nodemon index.js"
}
```

### Then run the app:

```bash
npm start
```

Visit the server at:
👉 `http://localhost:3102`

---

## 🧠 Code Explanation (Step-by-Step)

### ✅ Step 1: Import Express & Create App

```js
import express from "express";
const app = express();
```

* We import Express and initialize the server app.

---

### ✅ Step 2: Advanced Routes Using Regex

Express lets you use **Regular Expressions** (Regex) for more flexible routing.

---

### 🔹 Route 1: `/acd` or `/abcd`

```js
app.get(/^\/ab?cd$/, (req, res) => {
  res.send("If the user hits /acd or /abcd, this route works!");
});
```

* **Regex Explanation:** `/ab?cd/`

  * `b?` → `b` is optional
* **Matches:**

  * `/acd`
  * `/abcd`
* **Does NOT Match:**

  * `/abccd`, `/abxcd`

---

### 🔹 Route 2: Any route that contains the letter "a"

```js
app.get(/a/, (req, res) => {
  res.send("This route works if the path contains the letter 'a'");
});
```

* **Regex Explanation:** `/a/`

  * Matches if the letter **"a" appears anywhere** in the path.
* **Examples:**

  * `/apple`, `/banana`, `/cat`, `/about`

---

### 🔹 Route 3: `/users/1234` → 4-digit number route

```js
app.get(/^\/users\/\d{4}$/, (req, res) => {
  res.send("Matched a user route with a 4-digit number (e.g., /users/1234)");
});
```

* **Regex Explanation:** `/users/\d{4}`

  * `\d{4}` → exactly 4 digits
* **Matches:**

  * `/users/1234`, `/users/0000`
* **Does NOT Match:**

  * `/users/123`, `/users/12345`, `/users/abcd`

---

### ✅ Step 3: Start the Server

```js
app.listen(3102, () => console.log("🚀 Server UP at http://localhost:3102"));
```

Starts the server on **port 3102**, and you can access the routes from your browser or API client.

---

## 🌐 Route Match Summary

| Route Pattern  | Matches                      | Notes                                 |
| -------------- | ---------------------------- | ------------------------------------- |
| `/ab?cd`       | `/acd`, `/abcd`              | `b` is optional                       |
| `/a/`          | Any path containing "a"      | Wildcard letter match                 |
| `/users/\d{4}` | `/users/1234`, `/users/0000` | Exactly 4-digit number after `/users` |

---

## 📘 What You Learn From This

* How to use **Regular Expressions in Express routing**
* Pattern matching using `app.get()` with regex
* Building dynamic route handling logic
* Regex syntax basics: `?`, `\d`, `{n}`, pattern boundaries

---

## 🔧 Optional: nodemon.json

To prevent common Windows errors like `EBUSY`, add this:

```json
{
  "watch": ["index.js"],
  "ext": "js,json",
  "ignore": ["C:/DumpStack.log.tmp"]
}
```

---

## ✍️ Author

**Ayush Kohre** — Exploring the depth of Express.js with pattern-based routing 🚀
🧠 Practicing Regex + HTTP requests for real-world backend logic

---

## 📚 Useful References

* [Express.js Routing Docs](https://expressjs.com/en/guide/routing.html)
* [Regex101 Tool](https://regex101.com/) – Test your patterns
* [MDN Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

---
