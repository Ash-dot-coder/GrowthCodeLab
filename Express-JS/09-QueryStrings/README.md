# 🚀 Express.js Query Strings  
## 📝 Cheat Sheet & Practice Notes 📒

This mini-project demonstrates **how to work with Query Strings** in Express.js using `GET` requests.  
We explore how to extract query parameters from the URL using `req.query`, handle multiple key-value pairs, destructure them efficiently, and test everything with Postman.

---

## 📁 Folder Structure with Descriptions

```

09-QueryStrings/
├── node_modules/       # 📦 All project dependencies installed by npm (auto-generated)
├── index.js            # 🚀 Main server file with all route logic and examples
├── nodemon.json        # 🔁 Nodemon config to handle auto-restarting and ignore locked files
├── package.json        # 📜 Project metadata + start/dev scripts + list of dependencies
├── package-lock.json   # 🔒 Locked dependency versions for stable installs
├── .gitignore          # 🛑 Prevents node_modules and temp files from being pushed to GitHub
└── readme.md           # 📘 This file — full documentation and explanation

```

> `node_modules/` folder is ignored via `.gitignore`

---

## 📦 What is `node_modules/`?

The `node_modules/` folder contains all libraries your project depends on. It is generated automatically by:

```bash
npm install
```

> We **exclude it from Git** using `.gitignore` because it’s:

* 💾 Heavy (hundreds of MBs)
* 🔁 Easily restorable using `package.json`
* 🧪 Environment-specific

```bash
/node_modules
```

✅ Cleaner repositories. Better collaboration.

---

## 🔧 Installation & Setup

### Step 1: Init Node Project

```bash
npm init -y
```

### Step 2: Install Required Packages

```bash
npm install express
npm install --save-dev nodemon
```

---

## ⚙️ Scripts Setup in `package.json`

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

Now run your server using:

```bash
npm run dev
```

---

## 🧪 Testing Tool

We use **Postman** to test the API. It's perfect for sending requests with query parameters and viewing structured responses.

Common HTTP methods used in Express.js:

| Method | Use Case      |
| ------ | ------------- |
| GET    | Retrieve data |
| POST   | Submit data   |
| PUT    | Update data   |
| DELETE | Delete data   |

📌 For this project, we focus on the **GET method with query parameters**.

---

## 📚 Query Strings — What & Why?

> A query string is a part of the URL used to **pass data** from the client to the server, following a `?` symbol.

They appear like this in the URL:

```
/product?category=shoes&id=77
```

💡 The values can be accessed via:

```js
req.query
```

This returns an object:

```js
{ category: 'shoes', id: '77' }
```

---

## 📘 Code Examples & Explanations

### ✅ Basic Query String Access

```js
app.get("/product", (req, res) => {
  console.log(req.query);
  res.send(`Response OK ${req.query.category}`);
});
```

🧠 **What’s happening?**

* URL → `/product?category=shoes`
* `req.query` → `{ category: 'shoes' }`
* Output → `Response OK shoes`

---

### ✅ Destructuring Query Parameters

```js
app.get("/product", (req, res) => {
  const { category } = req.query;
  console.log("Category:", category);
  res.send(`Product Category ${category}`);
});
```

✔ Cleaner, modern syntax using destructuring from ES6.

---

### ✅ Multiple Query Parameters

```js
app.get("/product", (req, res) => {
  const { category, id } = req.query;
  res.send(`Product Category ${category} & Product ID: ${id}`);
});
```

📍 URL: `/product?category=shoes&id=77`
🔍 Output: `Product Category shoes & Product ID: 77`

---

## ⚡ Server Setup

```js
const express = require("express");
const app = express();

app.get("/product", (req, res) => {
  const { category, id } = req.query;
  res.send(`Product Category ${category} & Product ID: ${id}`);
});

app.listen(9009, () => console.log("Server UP on http://localhost:9009"));
```

🟢 This sets up a working Express server listening on port **9009**

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

✨ Why use this?

* Automatically restarts the server on changes
* Avoids common Windows file-locking bugs
* Ignores unnecessary folders to reduce noise

---

## 🧠 Summary Cheat Sheet

| Concept             | Code / Example                  | Explanation                          |
| ------------------- | ------------------------------- | ------------------------------------ |
| Query String Access | `/product?category=shoes`       | Use `req.query.category`             |
| Multiple Queries    | `/product?category=shoes&id=77` | `req.query.id` = 77                  |
| Destructuring       | `const { id } = req.query`      | Cleaner ES6 syntax                   |
| Method              | `GET`                           | Query strings only apply to GET URLs |
| Testing Tool        | Postman                         | GUI tool for crafting test requests  |
| Dev Script          | `npm run dev`                   | Starts with Nodemon                  |

---

## 🔍 Example URLs for Postman Testing

| URL                                                  | Method | Description                    |
| ---------------------------------------------------- | ------ | ------------------------------ |
| `http://localhost:9009/product?category=shoes`       | GET    | Query with one parameter       |
| `http://localhost:9009/product?category=shoes&id=77` | GET    | Query with multiple parameters |

---

## 🧑‍💻 Author

**Ayush Kohre**
Crafting backend logic & building foundations with Express.js, one clean route at a time!

> 💻 Postman ✅ | Express.js ✅ | Node.js ✅ | Query Master Mode 🔍

---

## 📘 Useful Docs

* [Express Query Params](https://expressjs.com/en/api.html#req.query)
* [Postman Beginner Guide](https://learning.postman.com/docs/getting-started/introduction/)
* [Node.js Docs](https://nodejs.org/en/docs/)

---