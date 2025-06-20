# 🧠 Blocking vs Non-Blocking + File Reading in Node.js (ESM)

This project demonstrates the core concepts of **blocking vs non-blocking** execution in Node.js, along with how to **read files synchronously and asynchronously** using the `fs` module with modern **ES Module** syntax.

---

## 🔍 What’s Covered?

- Blocking vs Non-Blocking execution in Node.js
- Reading files synchronously using `fs.readFileSync()`
- Reading files asynchronously using `fs.readFile()` + callback
- ES Modules with `"type": "module"` in `package.json`

---

## 📦 Prerequisites

- Node.js v14+
- `"type": "module"` in your `package.json` (done via `npm init -y` ✅)

---

## 🧠 Understanding Concepts

---

### 🔒 Blocking Code Example

```js
// console.log("Start");
// alert("Block");
// console.log("End");
```

* This is a **blocking** code pattern.
* When `alert("Block")` runs (browser), it **stops** further execution until it's dismissed.
* In Node.js, blocking behavior can occur during synchronous operations (like reading a file using `fs.readFileSync()`).

---

### 🔁 Non-Blocking Code Example

```js
// console.log("Start");
// setTimeout(() => {
//     alert("Non-Blocking");
// }, 1000);
// console.log("End");
```

* This simulates **non-blocking** behavior.
* `setTimeout()` schedules the function to run **after 1 second**, allowing the rest of the code (`console.log("End")`) to run immediately.

---

## 📁 File Reading with Node.js

---

### 📄 `import fs from "fs";`

* Imports the built-in `fs` (file system) module.
* Used to perform file operations like read/write/delete.
* ES Module syntax is used, so make sure `"type": "module"` is in your `package.json`.

---

### 🔒 Synchronous File Read

```js
console.log("\n🔒 Sync File Read Started");

const data = fs.readFileSync("test.txt"); // Blocking operation
console.log(data.toString());

console.log("🔓 Sync File Read Ended");
```

* `fs.readFileSync()` **blocks** the code until file is read completely.
* Good for quick scripts or startup code, **not recommended** in performance-critical apps.
* Output appears in correct sequence.

---

### 🔁 Asynchronous File Read (with Callback)

```js
console.log("\n🔁 Async File Read Started");

fs.readFile("test.txt", (err, res) => {
  err
    ? console.log("❌ Error reading file:", err)
    : console.log("✅ File content:", res.toString());
});

console.log("🔁 Async File Read Ended (callback will still run above)");
```

* `fs.readFile()` reads the file **asynchronously**.
* Doesn’t block the rest of the code — the callback runs when the read is complete.
* Great for real-world apps and performance-focused systems.

---

## 🛠️ How to Run

### 1. Ensure setup is complete:

```bash
npm init -y           # already done ✅
```

In your `package.json`, make sure you have:

```json
"type": "module"
```

### 2. Create a `test.txt` file:

```txt
Hello, this is test content!
```

### 3. Run the script:

```bash
node index.js
```

> ✨ Comment/uncomment each block to test separately.

---

## 📁 Folder Structure

```
14-BTS/
├── index.js
├── test.txt
├── package.json
└── README.md
```

---

## 🧠 Summary

| Concept             | Type         | Description                         |
| ------------------- | ------------ | ----------------------------------- |
| Blocking            | Sync         | Code waits to complete              |
| Non-Blocking        | Async        | Code continues, callback runs later |
| `fs.readFileSync()` | Blocking     | Reads file before moving on         |
| `fs.readFile()`     | Non-Blocking | Reads file with a callback          |

---

## 🤓 Author

**Ayush Kohre**
Learning Node.js with a strong foundation on core runtime behavior 🧠💻

---

## 💡 Tip

Use blocking code only when absolutely necessary. For real-world apps, always prefer non-blocking approaches to keep the app fast and scalable 🚀

---
