# 📘 Mongoose — `05-ReadDocument`

> A structured and beginner-friendly guide for **reading documents** from a MongoDB collection using Mongoose methods like `.find()`, `.findById()`, `.limit()`, `.skip()`, `.sort()`, and more.

This chapter belongs to the [`DATA-BASE/Mongoose`](https://github.com/Ash-dot-coder/GrowthCodeLab/tree/code/DATA-BASE/Mongoose) section inside the **GrowthCodeLab** repository.

---

## 📂 File Overview

- **FolderName:** `05-ReadDocument`
- **Purpose:** Learn and practice how to **retrieve documents** using multiple querying techniques in Mongoose, such as by ID, field match, limit, skip, count, and operator-based filtering.

---

## 🧱 Tech Stack & Packages Used

| Package       | Description                                |
|---------------|--------------------------------------------|
| `express`     | Handles the server setup                   |
| `mongoose`    | Interacts with MongoDB via schemas/models  |
| `dotenv`      | Manages environment variables securely     |
| `nodemon`     | Auto-reloads server during development     |

### 🛠️ Installation

```bash
npm init -y
npm i express mongoose dotenv
npm i --save-dev nodemon
```

---

## 📦 Folder Structure

```
DATA-BASE/
└── Mongoose/
    └── 05-ReadDocument/
        ├── app.js
        ├── db/
        │   └── connectdb.js
        ├── models/
        │   └── movies.js
        ├── .env
        ├── .gitignore
        ├── nodemon.json
        ├── package.json
        ├── package-lock.json
        └── README.md
```

---

## 📌 Core Logic Overview

### ✅ `app.js`

* Loads `express` and sets up the app.
* Connects to the MongoDB database using a separate connection module.
* Imports functions from the `movies.js` model file to test various document reading techniques.
* All retrieval functions (`allDocs`, `singleDoc`, `sortDoc`, etc.) are called to demonstrate their usage.

### ✅ `db/connectdb.js`

* Contains a clean, reusable function to establish a connection with MongoDB using Mongoose.
* Uses `async/await` and `try/catch` for handling errors during connection.

### ✅ `.env`

* Securely stores:

  * `PORT`: The server’s port number.
  * `DATABASE_URL`: Your MongoDB connection string.
* Helps manage configs without hardcoding sensitive data.

### ✅ `nodemon.json`

* Watches changes and restarts server automatically.
* Ignores heavy/unnecessary files (`node_modules`, `.git`) to optimize performance during dev.

---

## 🧠 Mongoose Read Cheat Sheet

### 🔹 What is a Schema?

* A **schema** in Mongoose defines the structure of a MongoDB document.
* Example fields:

  * `name`: string, required, trimmed
  * `ratings`: number with min/max validation
  * `money`: decimal value with custom validator
  * `genre`: array
  * `comments`: nested array of objects with string + date

### 🔹 What is a Model?

* A **model** is a wrapper around the schema to interact with the MongoDB collection.
* Allows querying, updating, inserting, and deleting data.

---

## 📘 Read Operations Breakdown

Each method in `movies.js` serves a unique read-related use-case.

---

### 1. 📋 `allDocs()` — Retrieve All Documents

* Uses `.find()` to fetch all movies.
* Includes an optional loop to extract selective fields like `name`, `ratings`, etc.
* Emphasizes how `.find()` returns an array of objects.

---

### 2. 🎯 `singleDoc()` — Retrieve Single Document by ID

* Uses `.findById()` to fetch a movie using its unique `_id`.
* Returns a **single object** (not array), so no need for `.forEach()`.
* Good for direct object access and manipulation.

---

### 3. 🔍 `getDocById()` — Retrieve a Document with Specific Fields

* Fetches a document by ID but limits returned fields (e.g., only `name`).
* Helps in data optimization and minimal payload.

---

### 4. 🧠 `docWithfield()` — Retrieve by Field Filter

* Uses `.find({ fieldName: value })` to query documents.
* Examples:

  * Movies named `"Dunki"`
  * Movies with `ratings` of `4.8`

---

### 5. 📊 `getLimitedDoc()` — Limit Document Count

* Applies `.limit(number)` to restrict number of results.
* Helps in scenarios like pagination or previews.

---

### 6. ⏭️ `skipDoc()` — Skip a Set of Documents

* Uses `.skip(number)` to ignore initial N records.
* Useful for implementing **pagination** (e.g., skip page 1, show page 2).

---

### 7. 🔢 `countDoc()` — Count Number of Documents

* Uses `.countDocuments()` to find total number of entries.
* Helps in analytics or pagination logic.

---

### 8. 🧮 `sortDoc()` — Sort by Field

* Uses `.sort({ field: 1 | -1 })`

  * `1` = ascending
  * `-1` = descending
* Example: sort movies alphabetically by `name`

---

### 9. ⚙️ `operato()` — Comparison & Logical Operators

* **Comparison:**

  * `$gt`, `$lt`, `$ne`: Filters like money > 53000 or money ≠ 63000
* **Logical:**

  * `$and`, `$not`: Combine conditions like "money is 56000 **and** rating is 4"
* Demonstrates how to write advanced queries similar to SQL.

---

## 🧪 How to Run the Project

### Step 1: Clone the repository
```bash
git clone https://github.com/Ash-dot-coder/GrowthCodeLab.git
```

### Step 2: Navigate to the specific folder
```bash
cd DATA-BASE/Mongoose/05-ReadDocument
```

### Step 3: Install dependencies
```bash
npm install
```

### Step 4: Create a file:
* **.env:**
    * `PORT=1002`
    * `DATABASE_URL="mongodb://127.0.0.1:27017/moviesdb"`

### Step 5: Run the server
```bash
npx nodemon app.js
```

---

## 🔗 Repository Reference

Explore full projects across Mongoose, MongoDB, Express, React, and more:
👉🏻 [`GrowthCodeLab`](https://github.com/Ash-dot-coder/GrowthCodeLab)

---

## 👨🏻‍💻 Author

**Ayush Kohre**
* 📌 Front-End & Full-Stack Developer
* 🔗 GitHub: [Ash-dot-coder](https://github.com/Ash-dot-coder)
* 🎓 Learning Mongoose | MERN Stack | GrowthCodeLab Series

---

> Crafted with clean code 💻, powerful logic 🧠, and clarity ✨ under the **GrowthCodeLab** ecosystem.

---