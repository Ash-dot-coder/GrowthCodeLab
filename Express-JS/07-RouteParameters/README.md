# 🚀 Express.js Route Parameters 
## 📝 Cheat Sheet & Practice Notes 📒

This mini-project demonstrates **how to work with route parameters** in Express.js using `GET` requests.  
We also explore Postman testing, `req.params`, and `app.param()` middleware with multiple patterns and real-use examples.

---

## 📁 Folder Structure with Descriptions

```

07-RouteParameters/
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

The `node_modules/` folder is:

- Automatically created when you run `npm install`
- Stores all packages your project depends on (like **express**, **nodemon**, etc.)
- Contains the actual source code of those libraries and their sub-dependencies

### ❌ Why we ignore `node_modules/` in Git?

Because:

- It's **very large** (hundreds of MBs)
- It’s **machine/environment-specific**
- It can always be **reinstalled** using `package.json` + `package-lock.json`

📄 So we add this to `.gitignore`:

```bash
/node_modules
```

> ✅ Clean repo, lightweight commits.
 
---

## 🔧 Installation & Setup

### Step 1: Init Node Project

```bash
npm init -y
```

### Step 2: Install Required Packages

```bash
npm install express             # Main framework
npm install --save-dev nodemon  # Dev-only for auto-reload
```

---

## ⚙️ Scripts Setup in `package.json`

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

Now you can run your app using:

```bash
npm run dev
```

---

## 🧪 Testing Tool

We use **Postman** to test different HTTP methods like:

* `GET` for fetching data
* `POST` for submitting data
* `PUT` for full update
* `PATCH` for partial update
* `DELETE` for removal

📌 For this project, we mostly use the **GET method with parameters**.

---

## 📚 Route Parameters — What & Why?

> Route Parameters = Dynamic segments in URL
> Captured values are stored inside `req.params` object

Example:
`/user/:id` → value of `id` is accessible via `req.params.id`

---

## 📘 Code Examples & Explanations

### ✅ Basic Route with Parameter

```js
app.get("/student/delete/:id", (req, res) => {
  console.log(req.params); // { id: '123' }
  res.send(`Student No: ${req.params.id} delete.`);
});
```

### ✅ Destructuring Params

```js
app.get("/student/delete/:id", (req, res) => {
  const { id } = req.params;
  console.log("Student Id: ", id);
  res.send(`Student No: ${id} delete.`);
});
```

### ✅ Multiple Route Parameters

```js
app.get("/product/:category/:id", (req, res) => {
  const { category, id } = req.params;
  res.send(`Product Category: (${category}), Product Id:(${id})`);
});
```

📍 URL: `/product/shoes/123`
🔍 Output: `"Product Category: (shoes), Product Id:(123)"`

---

### ✅ Complex Parameter Patterns

```js
app.get("/product/order/:day/:month/and/:year", (req, res) => {
  const { day, month, year } = req.params;
  res.send(`Product was ordered on: ${day}/${month}/${year}`);
});
```

📍 URL: `/product/order/21/06/and/2025`
🔍 Output: `"Product was ordered on: 21/06/2025"`

---

### ⚡ Using `app.param()` Middleware

`app.param()` allows middleware to **run before a route is handled**, useful for validation, logging, etc.

```js
app.param("id", (req, res, next, id) => {
  console.log(`id: ${id}`);
  next();
});

app.get("/user/:id", (req, res) => {
  console.log("This is User ID Path");
  res.send("Response OK");
});
```

* If you visit `/user/77`, the `app.param()` logs:
  → `id: 77`
  Then executes the route handler.

❌ This won't work for param paths like `/:year` unless defined and used directly in routes.

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

* Ensures stable file-watching on Windows
* Ignores system files and Git-related folders
* Solves the `EBUSY: resource busy` nodemon issue on Windows

---

## 🧠 Summary Cheat Sheet

| Concept                | Code / Example                 | Explanation                          |
| ---------------------- | ------------------------------ | ------------------------------------ |
| Basic Param            | `/user/:id`                    | Access using `req.params.id`         |
| Destructuring          | `const { id } = req.params`    | Cleaner syntax                       |
| Multiple Params        | `/product/:type/:id`           | Useful for nested structure          |
| Custom Path Formatting | `/order/:day/:month/and/:year` | More readable/custom routes          |
| Param Middleware       | `app.param("id", callback)`    | Trigger logic before route execution |
| Testing Tool           | Postman                        | GUI for testing routes and methods   |
| Start Script           | `npm start`                    | Runs with plain Node                 |
| Dev Script             | `npm run dev`                  | Runs with nodemon                    |

---

## 🧪 Example URLs for Postman Testing

| URL                                                  | Method | Description           |
| ---------------------------------------------------- | ------ | --------------------- |
| `http://localhost:7007/user/42`                      | GET    | Logs user ID          |
| `http://localhost:7007/product/shoes/123`            | GET    | Shows category + ID   |
| `http://localhost:7007/product/order/15/08/and/2025` | GET    | Full date-based route |

---

## 📘 Useful Docs

* [Express Route Params](https://expressjs.com/en/guide/routing.html)
* [Postman Docs](https://learning.postman.com/docs/getting-started/introduction/)
* [Node.js Docs](https://nodejs.org/en/docs/)

---

## 🧑‍💻 Author

**Ayush Kohre**
Building backend logic from scratch & exploring real-world Express.js usage.

> 💻 Postman ✅ | Express.js ✅ | Node.js ✅ | Routing Ninja Mode ⚔️

---
