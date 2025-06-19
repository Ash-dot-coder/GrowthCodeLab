# 🌐 Node.js URL Module Example (ESM)

This project demonstrates how to use Node.js's built-in `url` module to parse and work with URLs using modern **ES Module** syntax.

---

## 📦 What is the `url` module?

The `url` module in Node.js provides utilities for URL resolution and parsing. It's especially useful for working with web addresses, query parameters, protocols, ports, paths, and more.

---

## 📄 Code Explanation

### 1. `import { URL } from "url";`
- This imports the `URL` class using **ESM syntax**.
- Make sure `"type": "module"` is added in your `package.json`.

---

### 2. `const myUrl = new URL(...)`
- Creates a new `URL` object from a full web address string.
- Parses all components of the URL and gives access to each part.

---

### 3. `myUrl.hash`
- Returns the fragment (after `#`) in the URL.
- In this case: `#YT-HUXNWEBDev`

---

### 4. `myUrl.host`
- Returns `hostname:port` (e.g., `github.com:9090`).
- Includes the custom port number.

---

### 5. `myUrl.hostname`
- Returns the **hostname only** (without the port).
- e.g., `github.com`

---

### 6. `myUrl.href`
- Returns the **entire URL** as a string.
- Same as `myUrl.toString()` and `myUrl.toJSON()`.

---

### 7. `myUrl.pathname`
- Returns the path section of the URL after the domain.
- e.g., `/Ash-dot-coder/GrowthCodeLab/tree/code/NODE-JS/`

---

### 8. `myUrl.port`
- Returns the port number in the URL.
- If no port is specified, returns an empty string.

---

### 9. `myUrl.protocol`
- Returns the protocol part, e.g., `https:`, `http:`.

---

### 10. `myUrl.search`
- Returns the query string from the URL (starts with `?`).
- Empty in this case since there's no query parameter.

---

### 11. `myUrl.searchParams`
- Returns an object (`URLSearchParams`) which allows:
  - `.get("param")`
  - `.has("param")`
  - `.append("key", "value")`, etc.

---

### 12. `myUrl.toString()` / `myUrl.toJSON()`
- Both return the full string representation of the URL.

---

## 🛠️ How to Run

Make sure you're using **Node.js v14+** and your environment supports **ES Modules**.

---

### ✅ Step 1: Initialize the project

Create a `package.json` file using the command:

```bash
npm init -y
```

---

### ✅ Step 2: Enable ES Modules

Add the following in your `package.json` to enable ESM syntax like `import`:

```json
{
  "type": "module"
}
```

---

### ✅ Step 3: Run the file

Use the following command to execute your script:

```bash
node index.js
```

---

## 📁 File Structure

```
09-URLModule/
├── index.js
├── package.json
└── README.md
```

---

## 🧠 Learnings

* Parse and manipulate URLs in Node.js
* Use `.hash`, `.host`, `.pathname`, `.port`, etc.
* Understand the difference between full URL and parts
* Learn modern ESM syntax with built-in modules

---

## 🤓 Author

**Ayush Kohre**
Exploring Node.js system modules step-by-step 🧠💻
Practicing ES Modules like a pro 😎

---
