# 📟 Express.js: Template Engine Setup using—EJS

> **Full-stack starter template with server-side rendering using EJS**

## 🧠 Topic Covered: **Template Engines in Express.js**

> A template engine allows us to **inject dynamic data into HTML views** at runtime. In this project, we set up and used **EJS (Embedded JavaScript)** to render `.ejs` views dynamically using Express.js routing and controller architecture.

---

## 📁 Folder Structure

```
13-TemplateEngineSetup/
├── controllers/         # 📂 Logic-handling functions (about & home)
│   ├── aboutController.js
│   └── homeController.js
│
├── public/              # 🎨 Static assets like CSS, images, JS
│   └── css/
│       └── style.css
│
├── routes/              # 🧭 Route declarations
│   └── web.js
│
├── views/               # 📄 EJS template files
│   ├── about.ejs
│   └── index.ejs
│
├── index.js             # 🚀 Main entry point
├── nodemon.json         # 🔁 Nodemon config
├── package.json         # 📜 Project meta + scripts + deps
├── package-lock.json    # 🔒 Locked dependencies
├── .gitignore           # 🛑 Ignored folders (like node_modules)
└── readme.md            # 📘 You're here!
```

---

## 🔧 Installation & Initial Setup

### Step 1: Initialize Project

```bash
npm init -y
```

Creates `package.json`.

### Step 2: Install Required Packages

```bash
npm install express            # Web framework
npm install ejs                # Template engine
npm install --save-dev nodemon # Dev-only auto-reloader
```

---

## ⚙️ Scripts Setup in `package.json`

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

➡️ Use `npm run dev` to auto-reload the server during development.

---

## 🧾 What is a Template Engine?

### 🔍 Definition:

A **Template Engine** allows dynamic creation of HTML pages on the server before sending them to the client.

### 🧩 Why use it?

* Reuse HTML layout
* Insert dynamic data (e.g., user profile, products, etc.)
* Separate logic from view

### 💡 How it works:

1. Your app uses `.ejs` (or any engine) as a view layer.
2. The controller renders a view using `res.render("viewName", data)`.
3. That `.ejs` file is filled with data and returned as a complete HTML to the browser.

---

## 🧪 Testing Tool

We still use **Postman** to test server responses if needed.
But since we're rendering views in this project, it's best tested via browser:

* `http://localhost:1013/` → Renders `index.ejs`
* `http://localhost:1013/about` → Renders `about.ejs`

---

## 📘 Dry Run: How This Project Works

### ✅ 1. `index.js` (Entry Point)

| Line                                | Action                                                  |
| ----------------------------------- | ------------------------------------------------------- |
| `import express`                    | Brings in Express for routing and server setup          |
| `import web from "./routes/web.js"` | Imports external route definitions                      |
| `app.set("view engine", "ejs")`     | Tells Express to use EJS for rendering                  |
| `app.use(express.static(...))`      | Serves static files (CSS, images) from `public/` folder |
| `app.use("/", web)`                 | Registers routes from `web.js` under root (`/`)         |
| `app.listen(1013)`                  | Starts the server on port `1013`                        |

---

### ✅ 2. `routes/web.js` (Routing Layer)

* Handles URL mapping.
* Uses controller functions for logic separation.

```js
router.get("/", homeController);     // for index.ejs
router.get("/about", aboutController); // for about.ejs
```

---

### ✅ 3. `controllers/*.js` (Logic & Rendering)

* These functions call `res.render("viewName")` to render respective `.ejs` files.
* Can optionally pass dynamic data in the second argument.

> Example:

```js
res.render("about", { name: "Ayush" });
```

---

### ✅ 4. `views/*.ejs` (Frontend View Templates)

* Looks just like HTML.
* Can inject JS variables using `<%= %>` or logic with `<% %>`.
* EJS is minimal and super beginner-friendly.

> Example:

```ejs
<h1>Hello <%= name %></h1> 
```

---

### ✅ 5. `public/css/style.css`

* Standard CSS linked from EJS view.
* Keep layout and visuals clean and separated from logic.

---

### ✅ 6. `nodemon.json`

Ensures smooth auto-reload without monitoring unwanted files:

```json
{
  "watch": ["./"],
  "ignore": ["node_modules", ".git"],
  "ext": "js,json",
  "legacyWatch": true
}
```

---

## 📋 Mini Cheat Sheet: EJS + Express

| Concept               | Syntax / Notes                                  |
| --------------------- | ----------------------------------------------- |
| Template Engine Setup | `app.set("view engine", "ejs")`                 |
| Serve Static Files    | `app.use(express.static(...))`                  |
| View Rendering        | `res.render("viewName")`                        |
| Pass Data to Views    | `res.render("view", { key: val })`              |
| Insert Variable (EJS) | `<%= variable %>`                               |
| Run JS Logic in EJS   | `<% if (true) { %> ... <% } %>`                 |
| Link Static CSS       | `<link rel="stylesheet" href="/css/style.css">` |

---

## 🔍 Example URLs (Browser Tested)

| URL                           | Description |
| ----------------------------- | ----------- |
| `http://localhost:1013/`      | Home Page   |
| `http://localhost:1013/about` | About Page  |

---

## 💡 Best Practices

* 🧹 Use **controllers** to keep routes clean.
* 📦 Use **public/** for all CSS/JS/image files.
* 🔄 Use **nodemon** for real-time updates.
* 🧪 Use **browser for views**, **Postman for APIs**.
* 🧠 Follow the **MVC-like structure** for scalability.

---

## 📘 What We Learned

| Area               | Concepts Gained                                           |
| ------------------ | --------------------------------------------------------- |
| ✅ Node/Express     | `npm`, `express`, routing, middleware                     |
| ✅ EJS              | Server-side rendering, injecting data into views          |
| ✅ File Structure   | Modular approach with routes/controllers/views            |
| ✅ Tools            | `nodemon`, `postman`, `ejs`                               |
| ✅ Logic Separation | Clear understanding of how controllers and views interact |

---

## 🧑‍💻 Author

**Ayush Kohre**

> Taking one step ahead from static HTML to dynamic templating with EJS & Express.js!

---

## 📚 Useful References

* [EJS Docs](https://ejs.co/)
* [Express.js Routing](https://expressjs.com/en/guide/routing.html)
* [Nodemon Guide](https://www.npmjs.com/package/nodemon)
* [MDN Template Engines](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)

---
