# 🌐 Basic HTTP Server using Node.js (ESM)

This project demonstrates how to build a basic web server using Node.js’s core `http` and `fs` modules. The server handles different routes (`/`, `/home`, `/about`, `/contact`) and serves corresponding HTML files from the `public` directory.

---

## 📁 Project Structure

```

12-serving-pages/
├── public/
│   ├── home.html
│   ├── about.html
│   └── contact.html
├── index.js
├── package.json
└── README.md

```

---

## 📦 Technologies Used

- **Node.js** (built-in `http` and `fs` modules)
- **ES Module** syntax (`"type": "module"` in `package.json`)
- **No third-party packages** – pure core modules

---

## 📄 Code Explanation

### 1. `import http from "http";`
- Imports Node.js’s built-in `http` module to create a web server.

---

### 2. `import fs from "fs";`
- Imports Node.js’s built-in `fs` (File System) module to read HTML files.

---

### 3. `import { error } from "console";`
- Imports the `error` logging function from the console module (though not used directly in this case — optional).

---

### 4. `const server = http.createServer((req, res) => { ... });`
- Creates an HTTP server.
- The callback receives `req` (request) and `res` (response) objects to handle routing and responses.

---

### 5. `if (req.url === "/" || req.url === "/home")`
- Checks if the incoming request is for the home page.
- Handles both `/` and `/home` as valid routes.

---

### 6. `res.writeHead(200, "OK", { "Content-Type": "text/html" });`
- Sets the response header with:
  - `200` → success status code
  - `"OK"` → status message
  - Content type as `text/html`

---

### 7. `fs.readFile("./public/home.html", (error, data) => { ... })`
- Asynchronously reads the `home.html` file.
- If successful, sends the content as the response.
- If an error occurs, it throws the error.

---

### 8. `else if (req.url === "/about") { ... }`
- Serves the `about.html` file when `/about` route is accessed.

---

### 9. `else if (req.url === "/contact") { ... }`
- Serves the `contact.html` file when `/contact` route is accessed.

---

### 10. `else { ... }`
- Fallback for any undefined route.
- Sends a 404 status code and a simple "Page Not Found" HTML message.

---

### 11. `server.listen(1023, () => console.log(...));`
- Starts the server and listens on port **1023**.
- Logs a confirmation message once the server is running.

---

## 🚀 How to Run the Server

1. **Initialize the project** (you’ve already done this):
   ```bash
   npm init -y
```

2. **Ensure this in your `package.json`:**

   ```json
   {
     "type": "module"
   }
   ```

3. **Create HTML files inside `public/` folder:**

   * `home.html`
   * `about.html`
   * `contact.html`

4. **Start the server:**

   ```bash
   node index.js
   ```

5. **Open your browser** and visit:

   * `http://localhost:1023/` or `/home`
   * `http://localhost:1023/about`
   * `http://localhost:1023/contact`
   * Any other route → shows **404 Page Not Found**

---

## ⚠️ Notes

* HTML files must exist in the `./public` directory.
* You can expand the server to serve static files like CSS, JS, images if needed.
* Error handling is done using `throw`, which will crash the server if file read fails — for production, better error handling is recommended.

---

## 🤓 Author

**Ayush Kohre**
Node.js Explorer | Practicing core modules and backend fundamentals 🧠💻

---