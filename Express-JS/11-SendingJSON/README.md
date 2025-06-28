# 📦 Express.js JSON API – *Sending JSON*  
### 🚀 Project: Serving JSON Data using Express.js

This mini-project demonstrates **how to send JSON data from a server using Express.js**.  
It also explains how to structure an API, serve `.json` responses, and test it using Postman or browser with a **JSON viewer extension**.

> 💡 A solid step toward building RESTful APIs!

---

## 📁 Folder Structure with Descriptions

```

11-SendingJSON/
├── node_modules/       # 📦 All project dependencies installed by npm (auto-generated)
├── index.js            # 🚀 Main server file that defines a route to send JSON data
├── products.js         # 📃 External data module imported into server and sent as response
├── nodemon.json        # 🔁 Nodemon config for auto-reloading and ignored files
├── package.json        # 📜 Project metadata + start/dev scripts + list of dependencies
├── package-lock.json   # 🔒 Locked dependency versions for stable installs
├── .gitignore          # 🛑 Prevents (node_modules) and temp files from being pushed to GitHub
└── README.md           # 📘 This file — full documentation and explanation

```

✅ `node_modules/` is ignored via `.gitignore`.

---

## 🔧 Installation & Setup

### Step 1: Initialize the Project

```bash
npm init -y
```

### Step 2: Install Required Packages

```bash
npm install express             # Express framework
npm install --save-dev nodemon  # Nodemon for dev auto-reload
```

---

## ⚙️ Scripts in `package.json`

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

➡️ Run server in dev mode:

```bash
npm run dev
```

---

## 🔄 Nodemon Configuration

📄 `nodemon.json`

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

💡 Helps prevent file-watching errors and auto-restarts server on file changes.

---

## 🧠 What We’re Learning

| Topic                     | What You Learn                                                             |
| ------------------------- | -------------------------------------------------------------------------- |
| JSON Response             | How to send `.json()` response using Express                               |
| Modularization            | How to keep data separate from route logic (import/export)                 |
| API Testing               | Use Postman or Browser with JSON viewer to test response                   |
| Status & Format Awareness | Return clean, parseable JSON that frontend or client tools can easily read |

---

## 📚 Project Overview

### ✅ `index.js` – Server File

```js
import express from "express";
import products from "./products.js";

const app = express();
const port = 1011;

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(port, () =>
  console.log(`Server UP on http://localhost:${port}`)
);
```

### ✅ `products.js` – Sample Data

```js
const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 599,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Water Bottle",
    price: 299,
    category: "Lifestyle"
  }
];

export default products;
```

> 🧾 You can add as many items as needed. Make sure it exports as default.

---

## 🌐 Test the API Response

### 1️⃣ With Browser

* Visit: `http://localhost:1011/products`
* To view clearly, **install JSON Formatter Extension**:
  👉 [Chrome Web Store](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa)

### 2️⃣ With Postman

| Method | Endpoint    | Description                    |
| ------ | ----------- | ------------------------------ |
| GET    | `/products` | Returns JSON array of products |

---

## 🧾 Cheat Sheet – JSON & Express

| Concept            | Syntax/Example                 | Notes                                  |
| ------------------ | ------------------------------ | -------------------------------------- |
| Send JSON          | `res.json(data)`               | Auto sets headers and stringifies JSON |
| Import Data        | `import data from "./file.js"` | Use ES Modules syntax                  |
| Create API Route   | `app.get("/path", handler)`    | Route for sending data                 |
| Run Server         | `app.listen(port, callback)`   | Activates Express app                  |
| Start Server (dev) | `npm run dev`                  | Auto-reload with nodemon               |

---

## 📘 Summary: What We Did

✅ Built a small **JSON API using Express.js**
✅ Modularized data into a separate file `products.js`
✅ Served that data via `/products` route
✅ Tested it using **Postman** & **JSON browser plugin**
✅ Practiced folder structure, route handling, and Nodemon setup

---

## 🧑‍💻 Author

**Ayush Kohre**
Crafting structured APIs & understanding backend fundamentals with real-use mini-projects.

> 💻 JSON ✔️ | Modular Code ✔️ | Express.js ✔️ | Dev Practice Mode 🚀

---

## 📖 Useful Docs

* [Express Response Methods](https://expressjs.com/en/api.html#res.json)
* [Node.js ES Modules](https://nodejs.org/api/esm.html)
* [Postman Testing Tool](https://www.postman.com/)
* [Chrome JSON Viewer](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa)

---