# 🧭 Express.js Routing Basics

This is a beginner-friendly Express.js app to understand how **routing works** in a Node.js server using the **GET HTTP method**. Each route returns a simple HTML response.

---

## 📁 Project Structure

```

express-js/
└── 02-routingbasics/
    ├── index.js             # Main Express server file
    ├── package.json         # Project dependencies & scripts (declared)
    ├── package-lock.json    # Locks the exact version of each package
    └── README.md            # Project explanation and documentation

```

---

## 🚀 Getting Started

Follow the steps below to run the project locally.

### 1. 📦 Initialize Node.js Project

```bash
npm init -y
```

### 2. ⚙️ Install Express & Nodemon

```bash
npm install express
npm install --save-dev nodemon
```

### 3. ✅ Add Scripts to `package.json`

```json
"scripts": {
  "start": "nodemon index.js"
}
```

---

## 🧠 Understanding the Code (Step-by-Step)

### 1️⃣ Import Express and Create App

```js
import express from "express";
const app = express();
```

> We use ES6 import syntax to load Express and create the app instance.

---

### 2️⃣ Define HTTP GET Routes

Each route uses `app.get()` to handle browser requests.

#### `/` → Home Page

```js
app.get("/", (req, res) => {
  res.send("<h1>HOME 🏠</h1>");
});
```

#### `/about` → About Page

```js
app.get("/about", (req, res) => {
  res.send("<h1>ABOUT 🤔🌫</h1>");
});
```

#### `/contact` → Contact Page

```js
app.get("/contact", (req, res) => {
  res.send("<h1>CONTACT 📲</h1>");
});
```

#### `/work` → My Work Page

```js
app.get("/work", (req, res) => {
  res.send("<h1>MY WORK 💪🏻</h1>");
});
```

---

### 3️⃣ Start the Server

```js
app.listen(3021, () => console.log("Server 3021 Up! "));
```

> Starts the server on port `3021` and logs a confirmation message.

---

## 🌐 Available Routes & Output

| Route      | Description  | Output on Browser       |
| ---------- | ------------ | ----------------------- |
| `/`        | Home Page    | `<h1>HOME 🏠</h1>`      |
| `/about`   | About Page   | `<h1>ABOUT 🤔🌫</h1>`   |
| `/contact` | Contact Page | `<h1>CONTACT 📲</h1>`   |
| `/work`    | My Work Page | `<h1>MY WORK 💪🏻</h1>` |

Visit these routes after starting the server.

---

## 🛠 Optional: Nodemon Config (`nodemon.json`)

Add this file to root if you face Windows `EBUSY` errors:

```json
{
  "watch": ["index.js"],
  "ext": "js,json",
  "ignore": ["C:/DumpStack.log.tmp"]
}
```

---

## ✅ Final Steps to Run the App

```bash
npm start
```

Then open:
👉 `http://localhost:3021`

---

## 📘 What You Learn From This

* How Express handles HTTP requests using `.get()`
* How to build and organize routes
* How to return HTML from Node.js
* How to run a server and auto-restart using Nodemon

---

## ✍️ Author

**Ayush Kohre** — Passionate full-stack learner, building one route at a time 🚀
📚 Currently learning backend and Express with deep understanding.

---

## 📌 Useful Links

* [Express.js Docs](https://expressjs.com/)
* [MDN: HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
* [Nodemon Docs](https://nodemon.io/)

---
