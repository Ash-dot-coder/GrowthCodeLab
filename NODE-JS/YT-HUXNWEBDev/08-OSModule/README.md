# 🌟 System Info CLI with OS Module (Node.js + ESM)

This project demonstrates how to use Node.js's built-in `os` module to access system-level information like platform, CPU details, memory, and more using modern **ES Module** syntax.

---

## 📦 What is the `os` module?

The `os` module in Node.js provides operating system-related utility methods and properties. It allows you to fetch important info about the current user's system such as CPU, memory, hostname, and network interfaces.

---

## 🎨 What is `chalk`?

[`chalk`](https://www.npmjs.com/package/chalk) is used to color and style your terminal output, making your CLI user-friendly and beautiful.

---

## ⏳ What is `ora`?

[`ora`](https://www.npmjs.com/package/ora) adds a fancy loading spinner to indicate that the system info is being fetched or processed — enhancing CLI UX.

---

## 📄 Code Explanation

### 1. `import os from "os";`
- This uses the **ES Module** syntax.
- Ensure you have `"type": "module"` set in your `package.json`, or you're using a `.mjs` file.
- In CommonJS environments, you’d use: `const os = require("os");`

---

### 2. `os.platform()`
- Returns the **operating system platform** (e.g., `'win32'`, `'linux'`, `'darwin'`).
- Helps determine the OS type your app is running on.

---

### 3. `os.arch()`
- Returns the **CPU architecture** (`'x64'`, `'arm'`, etc).
- Useful for checking compatibility or performance-related decisions.

---

### 4. `os.cpus()`
- Returns an **array of objects** representing each logical CPU core.
- Includes model, speed (MHz), and time usage (user, system, idle, etc).

---

### 5. `os.hostname()`
- Returns the **host name** of the operating system.
- Helpful for identifying machines on a network.

---

### 6. `os.homedir()`
- Returns the **home directory** of the current user.
- Often used to store app-specific data or configurations.

---

### 7. `os.networkInterfaces()`
- Returns details of the system’s **network interfaces**.
- Includes local/internal IPs, MAC address, and interface type (Wi-Fi, Ethernet, etc).

---

### 8. `os.freemem()`
- Returns the **amount of free memory** in bytes.
- Can be used to monitor system health or performance.

---

### 9. `os.totalmem()`
- Returns the **total memory** available on the system in bytes.
- Useful for understanding available system resources.

---

### 10. `chalk.green()`, `chalk.blue()`, etc.
- Used to colorize different parts of the output.
- Helps visually separate and highlight key info in the terminal.

---

### 11. `ora().start() / stop()`
- Shows a loading spinner while your CLI is fetching data.
- Once loading is complete, you can `stop()` the spinner and show output.


## 🛠️ How to Run

Make sure your environment supports **ES Modules**. Either:

- Add `"type": "module"` to your `package.json`, or
- Rename your file to `index.mjs`

Then run the file with Node.js (v14+ recommended):

```bash
npm install chalk ora
node index.js
```
---

## 🧠 Learnings

- How to use Node.js built-in modules (`os`)
- How to style terminal output with `chalk`
- Adding CLI interactivity with `ora`
- Using modern ES module syntax

---

## 📁 File Structure

```
08-OSModule/
├── index.js
├── package.json
└── README.md
```

---

## 🤓 Author

**Ayush Kohre**
Learning Node.js system modules with hands-on practice 💻
Working with ES Modules like a pro 😎

---
