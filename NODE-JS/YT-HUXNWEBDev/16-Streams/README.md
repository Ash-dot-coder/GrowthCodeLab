# 📄 Node.js Streams Example (Readable Stream with `createReadStream`)

This project demonstrates how to use **Streams** in Node.js to read data from a file efficiently, using the built-in `fs` module with modern **ES Module** syntax.

---

## 🌊 What are Streams?

In Node.js, **streams** are a powerful way to handle reading or writing data.  
They allow you to work with **large files or continuous data** without loading the entire content into memory.

- Streams can be:
  - ✅ **Readable**
  - ✅ **Writable**
  - ✅ **Duplex** (both readable & writable)
  - ✅ **Transform** (data can be modified during the process)
- Useful in:
  - Reading large files
  - Streaming audio/video
  - Processing data chunks (like in real-time apps)

---

## 📄 Code Explanation

### 1. `import { log } from "console";`

- Imports the `log` function from the `console` module.
- It's a shortcut to use `log()` instead of `console.log()`.

---

### 2. `import { createReadStream } from "fs";`

- Imports the `createReadStream` function from the built-in `fs` (file system) module.
- Used to create a readable stream from a file.

---

### 3. `createReadStream("./test.txt", { encoding: "utf8" });`

- Reads the file `test.txt` as a stream of data.
- The `{ encoding: "utf8" }` option ensures we receive the actual **string content**, not raw buffers.
- This method helps in **efficient memory usage** for large files.

---

### 4. `stream.on("data", callback);`

- Listens for the **`data` event**, which is fired **each time a chunk of data** is available.
- Here, we log each data chunk as it arrives.
- Internally, the data is stored in **buffers**.

---

### 5. `stream.on("error", callback);`

- Listens for the **`error` event**, which occurs if there's any issue reading the file (like file not found).
- Helps in graceful error handling.

---

### 6. `highWaterMark` (commented in code)

- It's an optional configuration property that controls the **buffer size** for each data chunk.
- Default size = **64 KB**
- You can increase or decrease it like this:

```js
createReadStream("./test.txt", { highWaterMark: 90000 });
```

* Helps in tuning performance based on system capacity or file size.

---

## 🚀 Features

* Uses Node.js stream to handle file reading efficiently
* Proper error handling with `stream.on("error")`
* Uses ES Module (`import`) syntax
* Light memory usage — works great with big files!

---

## 🛠️ How to Run

Make sure your environment supports **ES Modules**. Either:

* Add `"type": "module"` to your `package.json`, or
* Rename your file to `index.mjs`

Then install dependencies (if not already done):

```bash
npm init -y
```

And run:

```bash
node index.js
```

---

## 📁 File Structure

```
16-Streams/
├── data.js
├── index.js
├── test.txt
├── package.json
└── README.md
```

---

## 📎 Example `test.txt`

Make sure your project includes a sample `test.txt` file to test the stream, like:

```
This is a test file to demonstrate how Node.js streams work.
It will be read chunk by chunk based on the buffer size.
```

---

## 🤓 Author

**Ayush Kohre**
Practicing Node.js file streaming with `fs` module 📄
Making memory-efficient applications like a pro 🚀

---