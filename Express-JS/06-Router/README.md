# 🔁 Express.js Modular Routing System

This project demonstrates how to **create modular routes in Express.js** for a clean and maintainable backend structure. It includes two resource routes — `student` and `teacher` — with full support for **GET**, **POST**, **PUT**, and **DELETE** methods, tested using **Postman** or **Thunder Client**.

---

## 📦 Installation & Setup

### Step 1: Initialize Node Project

```bash
npm init -y
```

> Automatically creates a `package.json` file with default values.

---

### Step 2: Install Required Packages

```bash
npm install express
npm install --save-dev nodemon
```

* **express** → The web framework
* **nodemon** → Dev dependency to auto-restart the server on file changes

---

### Step 3: Add Scripts in `package.json`

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

* `npm run start` → Starts the server normally
* `npm run dev` → Starts the server with **nodemon** in development mode

---

## 📁 Project Folder Structure

```
06-Router/
├── node_modules/           # Hidden via .gitignore
├── routes/
│   ├── student.js          # Student-related routes
│   └── teacher.js          # Teacher-related routes
├── index.js                # Entry point of the application
├── package.json
├── package-lock.json
├── nodemon.json            # Nodemon config
├── .gitignore
└── README.md               # You're here!
```

---

## 🚦 Express Router: Concept Overview

### ❓ Why use `express.Router()`?

Modular routing helps in:

* Keeping code **clean & separated**
* Making files **reusable and testable**
* Organizing multiple endpoints by domain/resource

---

## 🧠 Step-by-Step Routing Logic

### 🔹 index.js

```js
import express from "express";
import student from "./routes/students.js";
import teacher from "./routes/teacher.js";

const app = express();

// Load Router Modules
app.use("/student", student);
app.use("/teacher", teacher);

app.listen(6006, () => console.log("Server UP on http://localhost:6006"));
```

> ✅ `app.use("/student", student)` → Mounts all `/student/...` routes
> ✅ `app.use("/teacher", teacher)` → Mounts all `/teacher/...` routes

---

### 🔹 routes/students.js

```js
import express from "express";
const router = express.Router();

// GET all students
router.get("/all", (req, res) => {
  res.send("All Student");
});

// POST create new student
router.post("/create", (req, res) => {
  res.send("New Student created");
});

// PUT update student
router.put("/update", (req, res) => {
  res.send("Student updated");
});

// DELETE remove student
router.delete("/delete", (req, res) => {
  res.send("Student Deleted");
});

export default router;
```

---

### 🔹 routes/teacher.js

```js
import express from "express";
const router = express.Router();

// GET all teachers
router.get("/all", (req, res) => {
  res.send("All Teacher");
});

// POST create new teacher
router.post("/create", (req, res) => {
  res.send("New teacher created");
});

// PUT update teacher
router.put("/update", (req, res) => {
  res.send("Teacher updated");
});

// DELETE remove teacher
router.delete("/delete", (req, res) => {
  res.send("Teacher Deleted");
});

export default router;
```

---

## 📮 Testing With Postman / Thunder Client

Use tools like **Postman** or **Thunder Client** to test your endpoints:

| Endpoint          | Method | Description      |
| ----------------- | ------ | ---------------- |
| `/student/all`    | GET    | Get all students |
| `/student/create` | POST   | Create a student |
| `/student/update` | PUT    | Update a student |
| `/student/delete` | DELETE | Delete a student |
| `/teacher/all`    | GET    | Get all teachers |
| `/teacher/create` | POST   | Create a teacher |
| `/teacher/update` | PUT    | Update a teacher |
| `/teacher/delete` | DELETE | Delete a teacher |

> ⚠️ Be sure to select the correct HTTP method when testing in Postman.

---

## 🛠 `nodemon.json` Configuration (Optional)

To avoid Windows-specific file watcher issues and make `nodemon` stable:

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

## 📄 .gitignore Example

```gitignore
/node_modules/
.env
.DS_Store
*.log
```

---

## 🧠 Key Learning Points

* Modular routing using `express.Router()`
* Middleware usage with `app.use()`
* Using Postman/Thunder Client to test REST APIs
* Server management using `nodemon`
* Folder structure best practices for route-based apps

---

## ✍️ Author

**Ayush Kohre** — Learning full-stack development step-by-step with a strong foundation in backend routing and server structure 🚀

---

## 📚 References

* [Express.js Router Docs](http://expressjs.com/en/5x/api.html#router)
* [Postman](https://www.postman.com/)
* [Nodemon Docs](https://nodemon.io/)

```