# 🚦 Express.js Route Chaining using `.route()`

This project demonstrates how to **refactor multiple HTTP verb routes** using Express’s `.route()` method to avoid repetitive code. The example uses a student API to illustrate how `.get()`, `.post()`, `.put()`, and `.delete()` can be chained together.

---

## 📦 Installation & Setup

Follow these steps to get started:

### 1. Initialize Node.js project

```bash
npm init -y
```

### 2. Install Express

```bash
npm install express
```

### 3. Install Nodemon (dev-only)

```bash
npm install --save-dev nodemon
```

---

## 🔧 Scripts Setup in `package.json`

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

* `npm start` → runs using Node.js
* `npm run dev` → uses **Nodemon** to auto-restart on file changes

---

## 📁 Project Structure

```
5-Route/
├── index.js             # Main server file with route logic
├── package.json         # Project metadata and scripts
├── package-lock.json    # Lock file (auto-generated)
├── nodemon.json         # Config to ignore system files and use legacy watch
├── .gitignore           # Hides node_modules, etc.
└── README.md            # Project documentation (this file)
```

---

## ⚙️ Nodemon Configuration (`nodemon.json`)

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

### 🔍 What it does:

* Watches all files (`"./"`)
* Ignores problematic or unnecessary folders/files (like `node_modules` or locked Windows system files)
* Uses `legacyWatch` to fix Windows-specific errors (like `EBUSY`)

---

## ✍️ Code Walkthrough

### ✅ 1. Import Express and Setup App

```js
import express from "express";
const app = express();
```

* `express` is imported using **ES6 module syntax**.
* `app` is the core object used to define routes and handle requests.

---

### ❌ Old/Ugly Way (For Learning Only)

```js
// GET
app.get("/student", (req, res) => {
  res.send("All Student");
});

// POST
app.post("/students", (req, res) => {
  res.send("Add new Student");
});

// PUT
app.put("/student", (req, res) => {
  res.send("Update Student");
});
```

> 🛑 This approach leads to **repetition** of the same route path for different HTTP methods.

---

### ✅ Refactored/Clean Way using `.route()`

```js
app
  .route("/student")
  .get((req, res) => res.send("All Students"))
  .post((req, res) => res.send("Add new Student"))
  .put((req, res) => res.send("Update Student"))
  .delete((req, res) => res.send("Remove Student"));
```

> 💡 `.route()` chains all HTTP verbs on the **same route path**
> ✨ Makes your code **cleaner, readable, and maintainable**

---

### 🟢 Start the Server

```js
app.listen(5005, () => console.log("Server UP on http://localhost:5005"));
```

---

## 🌐 Test Your Routes

After running:

```bash
npm run dev
```

You can open `Postman`, browser, or use `curl` to test:

| Method | Route      | Description          | Output          |
| ------ | ---------- | -------------------- | --------------- |
| GET    | `/student` | Fetch all students   | All Students    |
| POST   | `/student` | Add new student      | Add new Student |
| PUT    | `/student` | Update student info  | Update Student  |
| DELETE | `/student` | Remove student entry | Remove Student  |

---

## 📘 What You Learn From This

* The difference between standard `.get()` vs `.route()`
* How to avoid route duplication
* How to use Nodemon for better DX
* How to organize clean Express server code

---

## 🧾 .gitignore File (Sample)

```
node_modules/
.DS_Store
```

> This keeps `node_modules` out of your GitHub repo.

---

## ✍️ Author

**Ayush Kohre**
Learning to write clean, maintainable backend code with Express 🚀
Working towards mastering Node.js with hands-on real-world logic 🔥

---

## 🔗 Helpful References

* [Express.js Route Docs](https://expressjs.com/en/guide/routing.html#express-router)
* [MDN HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
* [Nodemon Documentation](https://nodemon.io)

---