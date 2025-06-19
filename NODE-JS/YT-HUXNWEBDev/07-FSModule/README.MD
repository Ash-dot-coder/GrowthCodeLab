# 📁 Node.js File System (FS) Module Projects

This repository demonstrates the use of Node.js's **File System (FS)** module using **three different approaches**:

1. **Promise API**
2. **Callback API**
3. **Sync API**

Each section includes code examples with proper handling for creating directories/files, reading/writing/appending, deleting, copying, and fetching file stats.

---

## 1️⃣ FS Module with Promise API (using `fs/promises`)

### 🔌 What is `fs/promises`?

The `fs/promises` API offers an asynchronous, promise-based interface for working with the file system.

### 🛠️ Setup

```bash
npm init -y
```

Ensure you’re using modern ES Modules:

```json
{
  "type": "module"
}
```

### 📄 Key Operations

* **Import**:

```js
import * as fs from "fs/promises";
```

#### ✅ Create Directory

```js
await fs.mkdir("./fs/index", { recursive: true });
```

#### ✅ Read Directory Contents

```js
const files = await fs.readdir("./fs/index");
```

#### ✅ Create & Write File

```js
await fs.writeFile("readme.md", "Hey NodeJs :)");
```

#### ✅ Read File

```js
const data = await fs.readFile("readme.md", "utf-8");
```

#### ✅ Append Data

```js
await fs.appendFile("readme.md", "Hey Ash!");
```

#### ✅ Copy File

```js
await fs.copyFile("readme.md", "fs/copyInfo.txt");
```

#### ✅ Delete File

```js
await fs.unlink("fs/copyInfo.txt");
```

#### ✅ Delete Directory

```js
await fs.rm("./fs", { recursive: true, force: true });
```

#### ✅ File Info

```js
const info = await fs.stat("index.js");
console.log(info.isDirectory());
console.log(info.isFile());
```

#### ✅ Delete Multiple Files

```js
await Promise.all([
  fs.unlink("copyInfo.txt"),
  fs.unlink("readme.md")
]);
```

---

## 2️⃣ FS Module with Callback API

### 🔌 What is Callback API?

This is the traditional Node.js method of handling file system operations using callbacks.

### 🛠️ Setup

```bash
npm init -y
```

### 📄 Key Operations

* **Import**:

```js
import * as fs from "fs";
```

#### ✅ Create Directory

```js
fs.mkdir("./filesystem", (err) => {
  if (err) throw err;
});
```

#### ✅ Read Directory

```js
fs.readdir("./", (err, files) => {
  if (err) throw err;
  files.forEach(file => console.log(file));
});
```

#### ✅ Write File

```js
fs.writeFile("readme.txt", "Hey NodeJs", (err) => {
  if (err) throw err;
});
```

#### ✅ Read File

```js
fs.readFile("readme.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

#### ✅ Append File

```js
fs.appendFile("readme.txt", "Ash Coder", (err) => {
  if (err) throw err;
});
```

#### ✅ Copy File

```js
fs.copyFile("readme.txt", "info.txt", (err) => {
  if (err) throw err;
});
```

#### ✅ Remove Directory

```js
fs.rmdir("./f", (err) => {
  if (err) throw err;
});
```

#### ✅ File Info

```js
fs.stat("index.js", (err, stats) => {
  if (err) throw err;
  console.log(stats.isDirectory());
});
```

#### ✅ Remove Files (Multiple)

```js
["info.txt", "readme.txt"].forEach((filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) throw err;
  });
});
```

---

## 3️⃣ FS Module with Sync API

### 🔌 What is Sync API?

Synchronous methods that block execution until each operation completes. Ideal for simple scripts but not for performance-critical apps.

### 🛠️ Setup

```bash
npm init -y
```

### 📄 Key Operations

* **Import**:

```js
import * as fs from "fs";
```

#### ✅ Create Directory

```js
fs.mkdirSync("./filesystem");
```

#### ✅ Read Directory

```js
const files = fs.readdirSync("./");
```

#### ✅ Write File

```js
fs.writeFileSync("readme.md", "Hey my Sync..");
```

#### ✅ Read File

```js
const data = fs.readFileSync("readme.md", "utf-8");
```

#### ✅ Append File

```js
fs.appendFileSync("readme.md", "Okay.. i'm here again!");
```

#### ✅ Copy File

```js
fs.copyFileSync("readme.md", "info.txt");
```

#### ✅ File Info

```js
const stats = fs.statSync("index.js");
console.log(stats.isFile());
```

#### ✅ Remove Files

```js
["info.txt", "readme.md"].forEach((file) => {
  fs.unlinkSync(file);
});
```

#### ✅ Remove Directory

```js
fs.rmdirSync("./info.txt"); // if it's a dir and empty
```

---

## 🙌 Author

**Ayush Kohre**
Learning Node.js file systems hands-on using real-world scenarios with Promise, Callback, and Sync APIs. 💻✨

---