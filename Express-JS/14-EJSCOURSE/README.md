# 🌐 EJS COURSE — Express.js with EJS Templating Engine  
> 🚀 Professional Learning Project with Route Handling, Controllers, Views, and Rendering Logic

---

## 📁 Folder Structure

```

14-EJSCOURSE/
├── controllers/         # 📂 Logic-handling functions (home)
│   └── homeController.js
│
├── routes/              # 🧭 Route declarations
│   └── web.js
│
├── views/               # 📄 EJS template files
│   └── index.ejs
│
├── node_modules/        # 📦 All project dependencies (auto-generated)
├── index.js             # 🚀 Entry point - server setup + middleware
├── nodemon.json         # 🔁 Nodemon config for dev workflow
├── package.json         # 📜 Project meta + scripts + deps
├── package-lock.json    # 🔒 Locked dependencies
├── .gitignore           # 🛑 Ignored folders (like node_modules)
└── readme.md            # 📘 Project Documentation

```

> `node_modules/` is ignored from Git tracking via `.gitignore`.

---

## 📚 Overview: What Is EJS?

**EJS (Embedded JavaScript)** is a templating engine that lets you:

- Write HTML markup with **JavaScript code embedded** inside
- Dynamically **render variables**, **loop through arrays**, and **use conditionals**
- Create **partial templates** and include them modularly
- Keep the server and UI **separated but connected**

✅ Great for server-side rendering using Express.js

---

## 🎯 Project Objective

This project demonstrates how to:

- Use **EJS with Express.js**
- Create **controller files** to handle logic
- Define **routes separately**
- Dynamically render **data from backend to frontend**
- Understand the use of **template syntax**, conditionals, loops, and built-ins inside `.ejs` files

---

## 🔧 Installation & Setup

### Step 1: Initialize the Project

```bash
npm init -y
```

### Step 2: Install Required Packages

```bash
npm install express       # Backend server framework
npm install ejs           # View engine for rendering
npm install --save-dev nodemon   # Auto-reloading server for dev
```

---

## ⚙️ Scripts in `package.json`

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

Now you can run the app using:

```bash
npm run dev
```

---

## 🧭 App Structure & Workflow

### 🔌 index.js

* **Imports express**
* **Links routes using** `app.use("/", web)`
* Sets the **view engine to `ejs`** using `app.set("view engine", "ejs")`
* Starts the server on port `1014`

✅ This acts as the entry point of the application

---

### 📍 Route File — `routes/web.js`

* Uses `express.Router()` to define endpoints cleanly
* Imports the controller from `../controllers/homeController.js`
* Defines route `"/"` and connects it to `homeController`

🧠 Benefit: Keeps route definitions separated from core logic

---

### 🧠 Controller — `controllers/homeController.js`

* Creates a **controller function** `homeController` that:

  * Prepares sample user data
  * Renders the **"Index" view**, passing that data

💡 This makes code **modular**, **reusable**, and **separated** from route definitions

---

### 👁️ View — `views/index.ejs`

* HTML file with `.ejs` extension
* Supports dynamic rendering like:

#### ✅ Display Variables

```ejs
<%= name %>
```

Renders variable value directly on the page.

#### ✅ Conditionals

```ejs
<% if(userId === 21) { %>
  <h1>Welcome User</h1>
<% } else { %>
  <h2>Access Denied</h2>
<% } %>
```

Used to **render blocks conditionally**, like if-else statements in JS.

#### ✅ Loops

```ejs
<% data.forEach(item => { %>
  <p><%= item %></p>
<% }) %>
```

Used to **iterate over arrays** dynamically.

---

### ⚠️ Important EJS Note — Error Handling for Comments

💥 **Problem:**

EJS will **throw errors** if your comment block contains code-like structure **even if commented** and **not used**.

✅ **Best Practice:**

* Either **completely remove unused logic**
* Or comment them using plain HTML-style only (`<!-- -->`)
* Or use JS-style logic only within actual working blocks

```ejs
<!-- BAD (Can crash if userId is not defined properly) -->
<% if(userId === 21) { %>
  <%= userId %>
<% } %>

<!-- GOOD (Only plain comments) -->
<!-- This section shows user ID if it is 21 -->
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

✅ Helps auto-restart server when you save files
✅ Ignores heavy/unnecessary system paths

---

## 🔗 Linking EJS and Express (Flow Summary)

| Flow Step           | Description                           |
| ------------------- | ------------------------------------- |
| `index.js`          | Sets the view engine and links routes |
| `routes/web.js`     | Defines route and links controller    |
| `homeController.js` | Prepares data and renders `index.ejs` |
| `index.ejs`         | Displays data using EJS syntax        |
| Postman (Optional)  | Can be used to test raw endpoints     |

---

## 📘 Cheat Sheet: EJS Syntax

| Concept         | Syntax Example                                 | Notes                     |
| --------------- | ---------------------------------------------- | ------------------------- |
| Output value    | `<%= value %>`                                 | Escapes HTML              |
| Logic only      | `<% if (true) { %> Hello <% } %>`              | No output                 |
| Loop            | `<% items.forEach(i => { %> <%= i %> <% }) %>` | Iterates list             |
| Comment         | `<% /* Comment here */ %>` or `<!-- -->`       | Avoid logic-like comments |
| Include partial | `<%- include('partials/nav') %>`               | For reusing components    |
| Current Date    | `<%= new Date().toLocaleDateString() %>`       | Built-in JS               |

---

## 🚀 Best Practices

1. **Use controllers** to keep logic clean
2. **Avoid embedding too much logic inside `.ejs`**
3. Keep **routes** short and delegated
4. Use **partials** for reusable sections like navbar, footer, etc.
5. **Always remove or validate commented logic inside EJS**

---

## 📌 Sample Flow — Dry Run

🔹 When user visits `/`:

1. `index.js` matches the `/` route and sends it to `web.js`
2. `web.js` triggers `homeController`
3. `homeController` prepares `{ name: "Ash", userId: 21 }`
4. Renders `views/index.ejs` with this data
5. In `index.ejs`, it prints name and conditionally shows data using `userId`

---

## 📘 What We Learned in This Project

| Topic            | Skill Acquired                         |
| ---------------- | -------------------------------------- |
| Express Basics   | Setting up a web server                |
| EJS Setup        | Dynamic rendering with template engine |
| Route Management | Using `Router()` cleanly               |
| Controller Logic | Modular logic separation               |
| View Templating  | Displaying data, looping, conditionals |
| Debugging        | How comments inside `.ejs` can crash   |
| Nodemon          | Live reload setup for development      |

---

## ✅ Summary

This mini-project was a hands-on learning experience for **setting up EJS with Express.js**, the right way.

We learned:

* MVC-like project structure (routes, views, controllers)
* How to send dynamic data to views
* How to **embed JavaScript inside HTML safely**
* EJS quirks (like commenting and unused code)
* Modularization using ES Modules and `Router()`

---

## 👨‍💻 Author

**Ayush Kohre**
Full Stack Learner | Clean Coder | Express + EJS in ⚡ Ninja Mode

> 💡 Learning by Doing. Practicing by Projects.

---

## 📘 Docs & Resources

* [EJS Official Docs](https://ejs.co/)
* [Express.js Routing Guide](https://expressjs.com/en/guide/routing.html)
* [Node.js FS Docs](https://nodejs.org/en/docs/)
* [Postman Docs](https://learning.postman.com/docs/)

---