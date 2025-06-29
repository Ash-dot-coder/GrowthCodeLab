# 🚀 Express.js Complete Learning Journey — Growth Code Lab
![Express-JS](./Express-JS.webp)

> **A Self-Learning Course Repository for Express.js — by [Ash-dot-coder](https://github.com/Ash-dot-coder)**
>
> GitHub Repo: [GrowthCodeLab/Express-JS](https://github.com/Ash-dot-coder/GrowthCodeLab/tree/code/Express-JS)

---

## 📚 About This Course

This repository is part of the **Growth Code Lab** — a self-learning course series focused on full-stack development. This segment is purely focused on **Express.js**, the most popular Node.js web framework used to build fast, scalable, and maintainable backend services.

Every folder inside this repo represents a specific concept, practice, or milestone that contributes to mastering Express.js from **scratch to pro**.

> 📌 If you're new to backend or Express, this is the ultimate path to follow: Clear folder structure, topic-wise explanation, real code, and modular project building.

---

## 📁 Full Folder Structure (Topic-wise Breakdown)

```bash
Express-JS/
├── 01-FirstExpressApp           # Setting up first express server
├── 02-RoutingBasics             # GET, POST routes and responses
├── 03-AdvanceRouting            # Dynamic routes, parameters, patterns
├── 04-RouteCallbacksInDepth    # Middleware, callback chaining, next()
├── 05-Route                     # Separating and organizing routes
├── 06-Router                    # Modular routers using express.Router()
├── 07-RouteParameters           # Working with req.params, app.param()
├── 08-Controllers               # Moving logic to controllers (MVC style)
├── 09-QueryStrings              # Using req.query for filters and search
├── 10-PostmanTesting            # API testing with Postman (GET, POST, PUT, DELETE)
├── 11-SendingJSON               # Sending and receiving JSON data
├── 12-ServingStaticFiles        # Serving CSS, JS, and images
├── 13-TemplateEngineSetup       # Setting up EJS for view rendering
├── 14-EJSCOURSE                 # Final modular project using EJS, MVC, and routers
└── README.md                    # Documentation (Brief take of the course)

```

---

## 📖 What is Express.js?

**Express.js** is a **minimal** and **flexible** Node.js web application framework that provides a robust set of features to build **web apps and APIs**.

### ✅ Why Use Express?

- 🌐 Handles HTTP requests with ease (`GET`, `POST`, `PUT`, `DELETE`, etc.)
- 📦 Middleware support to handle requests/responses lifecycle
- 📁 Routing system to manage endpoints cleanly
- 🧠 Can serve dynamic views using template engines like `EJS`
- 🔗 Integrates well with MongoDB, PostgreSQL, MySQL
- ⚙️ Lightweight, fast, and developer-friendly

---

## ⚙️ Pre-Setup Before Starting

Before diving into the projects, make sure you’ve installed the following:

### 🔧 1. Initialize Project

```bash
npm init -y
```

This creates `package.json` to manage all dependencies and scripts.

---

### 📦 2. Install Core Packages

```bash
npm install express          # Backend framework
npm install ejs              # Template engine (for views)
npm install --save-dev nodemon  # Auto-reloading server (for development)
```

---

### 📁 Folder Structure Recommendation (Used Throughout)

```
project/
├── controllers/        # Route logic / business logic
├── routes/             # Express routers for clean structure
├── views/              # EJS files to render dynamic UI
├── public/             # Static files (CSS, JS, Images)
├── index.js            # Entry point of server
├── nodemon.json        # Configuration for dev server
├── package.json        # Project scripts & metadata
└── .gitignore          # Ignore node_modules, logs, temp files
```

---

## 📚 Topics Breakdown (Mapped to GitHub Folders)

### 🔹 `01-FirstExpressApp`

* Setup basic server with Express
* Created first route (`/`) using `app.get()`
* Introduced `res.send()` for sending plain text/HTML
* Used `nodemon` to auto-reload server

---

### 🔹 `02-RoutingBasics`

* Understanding multiple route paths: `/about`, `/contact`
* Explored different HTTP methods: `GET`, `POST`
* Used dynamic status codes like `res.status(200).send()`

---

### 🔹 `03-AdvanceRouting`

* Routing with parameters (e.g., `/product/:id`)
* Nested routes & optional parameters
* Defined **modular route files**

---

### 🔹 `04-RouteCallbacksInDepth`

* Callback functions in routes
* Multiple middleware in a single route
* Explained route chaining and control flow using `next()`

---

### 🔹 `05-Route`

* Separated all route definitions from `index.js`
* Used `express.Router()` for modularization
* Linked all routes using `app.use()` in the main file

---

### 🔹 `06-Router`

* Created standalone **Router files**
* Exported routers and linked with controllers
* Maintained **clear directory structure**

---

### 🔹 `07-RouteParameters`

* Learned about `req.params`
* Accessed values like `/user/:id`
* Used `app.param()` to run logic before route handler
* Tested via **Postman**

---

### 🔹 `08-Controllers`

* Created `controllers/` folder to separate business logic
* Used named functions for route handlers
* Passed data from controller to views (MVC Pattern)

---

### 🔹 `09-QueryStrings`

* Handled query parameters from URL (e.g., `/search?q=node`)
* Accessed using `req.query`
* Combined `params` + `query` for real-world use

---

### 🔹 `10-PostmanTesting`

* Sent different HTTP requests: `GET`, `POST`, `PUT`, `DELETE`
* Checked headers, status codes, and response bodies
* Used JSON body and tested `req.body`

---

### 🔹 `11-SendingJSON`

* Sent JSON response using `res.json()`
* Used JavaScript objects and arrays as data sources
* Differentiated between `res.send()` vs `res.json()`

---

### 🔹 `12-ServingStaticFiles`

* Served CSS, JS, and images using `express.static()`
* Set up a `/public` directory
* Used absolute and relative paths for static resources

---

### 🔹 `13-TemplateEngineSetup`

* Setup for EJS template engine
* Linked `.ejs` files to routes
* Rendered dynamic content using `<%= %>` and `<% %>`
* Created clean `views/` folder with `index.ejs`, `about.ejs`, etc.

---

### 🔹 `14-EJSCOURSE`

* Final modular project integrating **controllers**, **routes**, and **EJS views**
* Follows **MVC pattern** (Controller → View flow)
* Dynamic content rendered using EJS templating syntax
* Demonstrated EJS features: variables, conditionals, loops, built-in logic
* Folder structure:

  ```
  ├── controllers/        # Business logic
  ├── routes/             # Express routes
  ├── views/              # index.ejs for UI
  └── index.js            # Entry point
  ```
* Highlighted EJS-specific warnings: avoid leaving incomplete `<% %>` logic even in comments — can cause runtime errors

✅ A real-world setup for templating in Express.js — setting up clean, scalable backend architecture!

> 📌 Complete integration of **controllers**, **routes**, and **views** using EJS

---

#### 🔧 Project Setup

```bash
npm init -y
npm install express ejs
npm install --save-dev nodemon
```

#### 🧠 Key Concepts Covered:

* Controller logic in `controllers/homeController.js`
* Route definition in `routes/web.js`
* View rendering via `views/index.ejs`
* Using EJS conditionals, loops, built-in JS inside `.ejs` files

💥 **Important Note on EJS:**

* Always ensure logic inside `.ejs` is wrapped correctly
* Don’t leave incomplete tags or unused logic even in comments — it causes server errors

---

## 💻 Running the Project

### 🔄 Using Nodemon

```bash
npm run dev
```

### 🧪 Manually

```bash
node index.js
```

Then open:

```
http://localhost:<your_port>
```

---

## 🛠️ Helpful Config — `nodemon.json`

```json
{
  "watch": ["./"],
  "ignore": ["node_modules", ".git"],
  "ext": "js,json,ejs",
  "legacyWatch": true
}
```

---

## 📘 Summary: What You Will Learn

| Skill / Topic          | Description                            |
| ---------------------- | -------------------------------------- |
| Express Basics         | Setup, routes, response handling       |
| Advanced Routing       | Parameters, nesting, middleware        |
| Controllers            | Clean separation of logic              |
| EJS Template Engine    | Dynamic views, conditionals, loops     |
| Serving Static Files   | CSS, JS, and image linking             |
| JSON & Postman Testing | API development essentials             |
| Project Structure      | Modular and scalable codebase          |
| Debugging Tips         | Nodemon, EJS quirks, comments handling |

---

## 📚 Additional Resources

* [Official Express Docs](https://expressjs.com/)
* [EJS Templating Guide](https://ejs.co/)
* [Postman Learning Center](https://learning.postman.com/)
* [Node.js Documentation](https://nodejs.org/en/docs/)

---

## 👨‍💻 Author

**Ayush Kohre**

> Full Stack Developer in the Making 👨‍💻 | MERN Stack Explorer | GrowthCodeLab Founder
> "Learning by building real things 💡"

---

## ✅ Final Words

This repository serves as your **one-stop Express.js guide**, containing both fundamentals and modular real-world usage.

No fluff. No filler. Just:

* Code ✅
* Concepts ✅
* Practice Projects ✅
* Developer-Focused Explanations ✅

> 🌱 Keep Learning. Keep Building. Keep Growing — with Growth Code Lab 💡

---