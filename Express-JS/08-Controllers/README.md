# ⚙️ Express.js Modular Controllers Pattern

## 🧠 Understanding Separation of Concerns in Express 🚀

This mini-project demonstrates **how to modularize your route logic using controllers**. Instead of defining route handlers inline or cluttering route files, we split the logic into separate files for better **organization**, **reusability**, and **scalability**.

This structure introduces a real-world **MVC-lite pattern** using Express, with **controllers** and **routes** in separate files.

---

## 📁 Folder Structure with Descriptions

```

08-Controllers/
├── node_modules/         # 📦 Installed dependencies (auto-generated)
├── controllers/          # 🧩 Logic handlers for all routes
│   └── student.js        # 🎯 Controller functions for student routes
├── routes/               # 🛣️ Route definitions
│   └── student.js        # 🔀 Endpoints using express.Router()
├── index.js              # 🚀 Main server entry point
├── nodemon.json          # 🔁 Nodemon config for auto-reload and file watch
├── package.json          # 📜 Project metadata, scripts, dependencies
├── package-lock.json     # 🔒 Lock file to freeze dependency versions
├── .gitignore            # 🙈 Prevents node\_modules and logs from Git commits
└── readme.md             # 📘 Full documentation & notes (this file)

```

> ✅ All folders/files organized for modular Express.js development  
> 🚫 `node_modules/` is ignored using `.gitignore`

---

## 🧩 What Are Controllers?

Controllers are files that **group related request-handling logic together**.  
They help separate concerns, especially as your application grows.

🔹 Without Controllers:  
All route logic lives in one big file → messy, hard to maintain.

🔹 With Controllers:  
Split logic into smaller reusable functions → clean, readable, scalable.

---

## 🧰 Installation & Setup

### Step 1: Initialize Project

```bash
npm init -y
```

### Step 2: Install Required Packages

```bash
npm install express
npm install --save-dev nodemon
```

---

## ⚙️ Scripts Setup (`package.json`)

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

> Use the following to run:

```bash
npm run dev
```

---

## 🔄 Nodemon Configuration (`nodemon.json`)

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

* 📌 Ensures smooth file watching and avoids crashing on Windows.
* ⛔ Ignores heavy or unnecessary folders/files.

---

## 📘 Code Explanation

### 🧵 Entry Point: `index.js`

```js
import express from "express";
import student from "./routes/student.js";

const app = express();

// Controller abstraction pattern
app.use("/student", student);

app.listen(8008, () => console.log("Server UP on http://localhost:8008"));
```

💡 We connect the `/student` route to the student route module, which in turn links to the controller functions.

---

### 🔗 Route File: `routes/student.js`

```js
import express from "express";
import {
  allStudents,
  newStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/student.js";

const router = express.Router();

router.get("/all", allStudents);
router.post("/create", newStudent);
router.put("/update", updateStudent);
router.delete("/delete", deleteStudent);

export default router;
```

✔️ This file:

* Imports controller functions
* Maps them to HTTP methods
* Exports a `router` to be used in `index.js`

---

### 🧠 Controller File: `controllers/student.js`

```js
const allStudents = (req, res) => {
  res.send("All Student");
};

const newStudent = (req, res) => {
  res.send("New Student Created!");
};

const updateStudent = (req, res) => {
  res.send("Student updated!");
};

const deleteStudent = (req, res) => {
  res.send("Student Deleted!");
};

export { allStudents, newStudent, updateStudent, deleteStudent };
```

🎯 Each controller function maps to a dedicated route and performs one specific action:

| Function          | Route             | Method | Description          |
| ----------------- | ----------------- | ------ | -------------------- |
| `allStudents()`   | `/student/all`    | GET    | List all students    |
| `newStudent()`    | `/student/create` | POST   | Create a new student |
| `updateStudent()` | `/student/update` | PUT    | Update student data  |
| `deleteStudent()` | `/student/delete` | DELETE | Remove a student     |

---

## 📚 Cheat Sheet: Express Controllers Structure

| File                | Role                              |
| ------------------- | --------------------------------- |
| `index.js`          | App entry point (connects router) |
| `routes/student.js` | Maps URL → controller functions   |
| `controllers/*.js`  | Pure logic functions (handlers)   |

---

## 🧪 Example URLs for Postman Testing

| Method | URL                                    | Description       |
| ------ | -------------------------------------- | ----------------- |
| GET    | `http://localhost:8008/student/all`    | View all students |
| POST   | `http://localhost:8008/student/create` | Add a student     |
| PUT    | `http://localhost:8008/student/update` | Update student    |
| DELETE | `http://localhost:8008/student/delete` | Delete student    |

📌 Make sure to set **method type** correctly in **Postman** while testing each route.

---

## ✨ Benefits of Using Controllers

- ✅ Better readability
- ✅ DRY code
- ✅ Easier testing and debugging
- ✅ Cleaner route files
- ✅ Reusable business logic

---

## 🔗 Useful Resources

* [Express Routing Docs](https://expressjs.com/en/guide/routing.html)
* [Node.js Docs](https://nodejs.org/en/docs/)
* [Postman Docs](https://learning.postman.com/docs/getting-started/introduction/)
* [MVC Pattern for Beginners](https://developer.mozilla.org/en-US/docs/Glossary/MVC)

---

## 🧑‍💻 Author

**Ayush Kohre**
Striving for backend mastery with real-world architecture and clean modular code.

> 💻 Express.js ✅ | Modular Code ✅ | Clean Routing ✅ | Controller Mindset 💡

---

## 📢 Final Note

This modular structure is the foundation for building scalable Express applications.  
Once you’re comfortable with this, you can explore adding **models**, **middleware**, and even connecting to **databases**!

Keep exploring — one concept at a time! 🚀

---