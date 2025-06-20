# 🌐 Basic HTTP Server in Node.js (ESM Style)

This project demonstrates how to create a basic HTTP server using Node.js's built-in `http` module. It uses **ES Module syntax** and sends a simple HTML response to the browser.

---

## 📦 What is the `http` module?

The `http` module in Node.js allows you to create a server that can handle HTTP requests and send responses — just like how real web servers work (e.g., Apache, Nginx).

---

## 📄 Code Explanation

### 1. `import http from "http";`
- This imports Node's built-in HTTP module using **ES Module syntax**.
- Make sure your `package.json` has `"type": "module"` or your file ends with `.mjs`.

---

### 2. `const server = http.createServer((req, res) => { ... });`
- Creates a server instance.
- The callback function is triggered **every time a client makes a request**.
- `req` = request object (contains info about the incoming request).
- `res` = response object (used to send back a reply to the client).

---

### 3. `res.writeHead(202, "Good", { "content-type": "text/html" });`
- Sets the HTTP **status code**, **status message**, and **response headers** in one go.
  - `202` = status code (means accepted or processed successfully).
  - `"Good"` = custom status message.
  - `content-type: text/html` = tells the browser to expect HTML content.

✅ This line is a shorthand version of:
```js
res.statusCode = 202;
res.statusMessage = "Good";
res.setHeader("Content-Type", "text/html");
```

---

### 4. `res.end("<h1>Hello World</h1>");`

* Sends the final response back to the browser.
* Ends the request-response cycle.
* The browser will display: **"Hello World"** in an `<h1>` tag.

---

### 5. `server.listen(1078, () => ...);`

* Binds the server to port **1078**.
* Once the server is running, the callback logs:
  ✅ `"Server running on port 1078"`

🔗 Open your browser and go to:

```
http://localhost:1078
```

You’ll see your HTML output!

---

## 🛠️ How to Run

### 1. Initialize the project

You've already done:

```bash
npm init -y
```

### 2. Create your file

For example: `index.js`

### 3. Add `"type": "module"` to your `package.json`:

```json
{
  "type": "module"
}
```

### 4. Run the server

```bash
node index.js
```

---

## 📁 File Structure

```
basic-http-server/
├── index.js
├── package.json
└── README.md
```

---

## ✅ Output Example

When opened in browser:

```
Hello World
```

Styled as an `<h1>` HTML heading.

---

## 🤓 Author

**Ayush Kohre**
Learning back-end foundations with Node.js one module at a time ⚡
Creating real-world web server basics using built-in power 💻

---