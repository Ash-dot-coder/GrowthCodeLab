# 🌐 Node.js Basic Routing Example (HTTP Module)

This project demonstrates how to create a basic Node.js web server and implement routing logic using the built-in `http` module — without using any external frameworks like Express.

---

## 📦 What is the `http` module?

The `http` module in Node.js allows you to create an HTTP server that listens for and handles incoming client requests. It's a core part of Node.js and doesn't require installation via npm.

---

## 📁 Project Initialization

This project was initialized using:

```bash
npm init -y
```

This creates a default `package.json` file for managing project metadata.

---

## 📄 Code Explanation

### 1. `import http from "http";`

* Uses ES Module syntax to import Node.js's built-in `http` module.
* This module provides utilities to create an HTTP server and handle requests/responses.

---

### 2. `const server = http.createServer((req, res) => { ... });`

* Creates the HTTP server.
* The callback `(req, res)` handles every incoming request.
* `req` contains information about the request (e.g., URL).
* `res` is used to send back a response to the client.

---

### 3. `if (req.url === "/") { ... }`

* This condition checks if the incoming request is for the **home route** (`/`).
* If matched:

  * `res.writeHead(200, "OK", { "content-type": "text/html" })` sends an HTTP header with status `200 OK` and content type as HTML.
  * `res.end("<h1> Home </h1>")` sends the response body to the client.

---

### 4. `else if (req.url === "/about") { ... }`

* Handles the `/about` route.
* Sends back a simple HTML `<h2> About </h2>` with status 200.

---

### 5. `else if (req.url === "/contact") { ... }`

* Handles the `/contact` route.
* Sends back a simple HTML `<h2> Contact </h2>` with status 200.

---

### 6. `else { ... }`

* This is the fallback route (for anything other than `/`, `/about`, `/contact`).
* Responds with:

  * Status code `404 BAD`
  * Content-Type `text/html`
  * Message: `<h3> 404 Page Not Found :( </h3>`

---

### 7. `server.listen(2040, () => console.log(...));`

* Tells the server to listen on port `2040`.
* When the server starts, it logs the message:
  👉 `Server running on port 2040`

---

## ▶️ How to Run

1. Make sure you’re in the project directory.
2. Run the following command:

```bash
node index.js
```

3. Open your browser and navigate to:

* [`http://localhost:2040/`](http://localhost:2040/)
* [`http://localhost:2040/about`](http://localhost:2040/about)
* [`http://localhost:2040/contact`](http://localhost:2040/contact)

---

## 📁 File Structure

```
basic-routing/
├── index.js
├── package.json
└── README.md
```

---

## 🧠 Learnings

* How to create a basic web server using Node.js
* Understanding `req.url` for route handling
* Sending different status codes and HTML responses
* Using native modules without external frameworks

---

## 🤓 Author

**Ayush Kohre**
Building backend logic with raw Node.js like a pro 💻🔥
Exploring servers, routing, and HTTP concepts one step at a time.

---