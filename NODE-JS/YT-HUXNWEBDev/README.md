# 🚀 Node.js Mastery – Developer’s Guide

This repository is a structured learning journey of **Node.js core concepts**, covering everything from the basics to powerful built-in modules like `fs`, `http`, `events`, `streams`, and more — all using **modern ES module syntax**.

> Every folder here is a hands-on module crafted to boost your Node.js fundamentals as a backend developer.

---

## 📚 Table of Contents

| No. | Module | Description |
|-----|--------|-------------|
| 01 | [What is Node.js?](#01-what-is-nodejs) | Intro to Node.js and how it works |
| 02 | [REPL](#02-repl) | Read-Eval-Print Loop (Node's terminal playground) |
| 03 | [Module Wrapper](#03-module-wrapper) | How Node wraps your code under the hood |
| 04 | [Modules](#04-modules) | `require`, `import`, and modularity |
| 05 | [ES6 Import](#05-es6-import) | Using modern `import/export` in Node.js |
| 06 | [Path Module](#06-path-module) | Work with file and directory paths |
| 07 | [FS Module](#07-fs-module) | File system operations (Sync, Async, Promises) |
| 08 | [OS Module](#08-os-module) | Accessing system-level info |
| 09 | [URL Module](#09-url-module) | Parsing and formatting URLs |
| 10 | [HTTP Module](#10-http-module) | Creating servers and handling requests |
| 11 | [Routing](#11-routing) | Manual URL-based routing |
| 12 | [Serving Pages](#12-serving-pages) | Serve HTML and assets with Node |
| 13 | [NPM](#13-npm) | Managing packages and scripts |
| 14 | [BTS (Behind The Scenes)](#14-bts) | Internal working of Node (event loop, callbacks) |
| 15 | [Events](#15-events) | Event-driven programming with `EventEmitter` |
| 16 | [Streams](#16-streams) | Handling large data chunks efficiently |

---

## 🔍 01 - What is NodeJS?

- Node.js is a **JavaScript runtime** built on Chrome's V8 engine.
- It allows you to run JavaScript on the **server-side**.
- Non-blocking, event-driven architecture for high performance.

---

## 💻 02 - REPL

- **REPL = Read Eval Print Loop**.
- It’s Node's terminal interface to test, evaluate expressions, or play around.
- Useful for debugging and learning small concepts quickly.

---

## 🧩 03 - Module Wrapper

- Node.js wraps every file/module inside a function like:
  ```js
  (function(exports, require, module, __filename, __dirname) {
    // Your code here
  });
```

* Helps in modularizing and encapsulating code by default.

---

## 📦 04 - Modules

* Node supports:

  * **Built-in Modules** (like `fs`, `path`, `os`, etc.)
  * **Custom Modules** (your own files)
  * **3rd-Party Modules** (via npm)
* Import them using `require` (CommonJS) or `import` (ESM).

---

## ✨ 05 - ES6 Import

* Modern way to handle modules:

  ```js
  import fs from "fs";
  export const hello = () => {};
  ```
* Make sure your `package.json` has:

  ```json
  "type": "module"
  ```

---

## 🛤️ 06 - Path Module

* Built-in module to work with file paths.
* Useful methods:

  * `path.join()`
  * `path.resolve()`
  * `path.basename()`, `dirname()`, etc.
* Helps build cross-platform paths (no need to worry about slashes).

---

## 📁 07 - FS Module

* Handles **File System** operations:

  * Read/Write files (Sync/Async/Promise)
  * Rename, append, delete, create directories
* APIs: `readFileSync`, `readFile`, `promises.readFile`, etc.
* Useful for building file-based systems like blogs, config loaders.

---

## 🖥️ 08 - OS Module

* Access system info:

  * Platform (`os.platform()`)
  * Architecture (`os.arch()`)
  * CPU info (`os.cpus()`)
  * Hostname, memory, homedir, network interfaces, etc.
* Great for building system monitors or CLI tools.

---

## 🌐 09 - URL Module

* Parse, format, and work with URLs.

  ```js
  const myURL = new URL('https://example.com?user=ayush');
  console.log(myURL.searchParams.get("user")); // ayush
  ```

---

## 🌍 10 - HTTP Module

* Core module to create servers in Node.js:

  ```js
  import http from "http";
  const server = http.createServer((req, res) => { ... });
  server.listen(3000);
  ```
* You can handle different HTTP methods and routes manually.

---

## 🧭 11 - Routing

* Routing means handling different URL paths manually in HTTP server:

  ```js
  if (req.url === "/about") { ... }
  ```
* Used to create navigation paths in your backend.

---

## 🧾 12 - Serving Pages

* Serve HTML files directly via Node server.

  * Use `fs.readFile()` to load the HTML content.
  * Send it via `res.write()` or `res.end()`.
* This is the core behind templating engines or SSR.

---

## 📦 13 - NPM (Node Package Manager)

* Manage 3rd-party libraries like `chalk`, `express`, `ora`, etc.
* Commands:

  * `npm init -y` – create `package.json`
  * `npm install <pkg>` – install packages
  * `npm run <script>` – run custom scripts

---

## 🧠 14 - BTS (Behind The Scenes)

* How Node.js actually works:

  * **Single-threaded**
  * Event loop handles async code
  * Callback queue and microtask queue
  * Libuv manages threading under the hood

---

## 🔔 15 - Events

* Node’s way of handling **event-driven programming**.

  ```js
  import EventEmitter from 'events';
  const emitter = new EventEmitter();
  emitter.on("start", () => console.log("Started!"));
  emitter.emit("start");
  ```
* Super powerful in servers, chat apps, logs, real-time systems.

---

## 🌊 16 - Streams

* Handle **large data** chunk by chunk instead of all at once.
* Types:

  * Readable
  * Writable
  * Duplex
  * Transform
* Example: `createReadStream("file.txt", { encoding: "utf-8" })`
* Used in file operations, video/audio streaming, data pipelines.

---

## 🛠️ Tech Stack

* 📦 Node.js (v16+)
* 🧱 ES Module Syntax (`import/export`)
* 🛠 File-based structure for every concept

---

## 📁 Folder Structure Preview

```

NODE-JS/
└── YT-HUXNWEBDEV/
    ├── 01-WhatIsNodeJS/        # Intro to Node.js and its architecture
    ├── 02-REPL/                # Node.js REPL - Read Eval Print Loop
    ├── 03-ModuleWrapper/       # Function wrapper Node uses behind the scenes
    ├── 04-Modules/             # Working with built-in, custom & 3rd party modules
    ├── 05-ES6Import/           # Using ES Module syntax in Node.js
    ├── 06-PathModule/          # Handling file paths across platforms
    ├── 07-FSModule/            # File System operations (read/write/delete files)
    ├── 08-OSModule/            # Getting system info (CPU, memory, etc)
    ├── 09-URLModule/           # Parsing and formatting URLs
    ├── 10-HTTPModule/          # Creating HTTP servers manually
    ├── 11-Routing/             # Manual routing using basic conditions
    ├── 12-ServingPages/        # Serving HTML pages via HTTP
    ├── 13-NPM/                 # Package management using NPM
    ├── 14-BTS/                 # Behind-the-scenes: event loop, Libuv, etc.
    ├── 15-Events/              # EventEmitter and event-driven programming
    └── 16-Streams/             # Reading/writing large data using streams
    └── README.md                         ✅ Master Readme (you already got it)

```

---

## 🤓 Author

**Ayush Kohre**
🚀 Full-Stack Developer in Progress
💡 Learning Node.js, system modules, and backend foundations
📦 GitHub: [@ash-dot-coder](https://github.com/ash-dot-coder)

---

## 🧠 Tip

> “Don’t just learn Node.js — master how it *thinks*.”
> Understand the why, not just the how. Build smart, scalable apps from day one.

---
