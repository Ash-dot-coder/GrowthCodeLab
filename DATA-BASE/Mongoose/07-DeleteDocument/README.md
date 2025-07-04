# 📘 Mongoose — `07-DeleteDocument`

> A beginner-friendly yet structured guide on how to **delete documents** from a MongoDB collection using **Mongoose methods** like `findByIdAndDelete()` and `deleteMany()`.  
> This lesson also introduces **schema creation**, **comments array structure**, and **modular exports** for better scalability and clarity.  
> Extracted from the folder: `07-DeleteDocument` under `DATA-BASE/Mongoose`.

This module is part of the [`DATA-BASE/Mongoose`](https://github.com/Ash-dot-coder/GrowthCodeLab/tree/code/DATA-BASE/Mongoose) section of the **GrowthCodeLab** repository.

---

## 📂 File Overview

- **FolderName:** `07-DeleteDocument`
- **Purpose:** Demonstrate how to delete one or multiple documents from MongoDB using Mongoose functions inside a modular Node.js application.

---

## 📦 Installed Packages

| Command                        | Purpose                                        |
|-------------------------------|------------------------------------------------|
| `npm init -y`                 | Initialize project with default `package.json` |
| `npm i express mongoose dotenv` | Install required packages for backend, ODM, and env configs |
| `npm i --save-dev nodemon`    | Auto-reloads server during development         |

---

## 🧱 Folder Structure

```bash
DATA-BASE/
└── Mongoose/
    └── 07-DeleteDocument/
        ├── app.js               ← main application entry
        ├── db/
        │   └── connectdb.js     ← handles Mongoose DB connection
        ├── models/
        │   └── movie.js         ← schema, model, and delete logic
        ├── .env                 ← environment config (PORT & DB URL)
        ├── .gitignore           ← hides node_modules from Git tracking
        ├── nodemon.json         ← custom dev server watcher config
        ├── package.json         ← package metadata
        ├── package-lock.json    ← package lockfile
        └── README.md            ← this documentation
```

---

## 🔍 Topic: Delete Document (Using Mongoose)

### 🔸 What You’ll Learn:

* How to define a **Mongoose schema and model**
* How to structure **nested arrays** in a schema (`comments[]`)
* How to **delete a single document** using `findByIdAndDelete()`
* How to **delete multiple documents** using `deleteMany()`
* How to **modularize** logic for better maintainability

---

## 🛠️ Explanation of Key Concepts

### 🧬 1. **Schema and Model (`movie.js`)**

* A **schema** is a blueprint that defines the structure of documents in a MongoDB collection.
* Fields like `name`, `ratings`, `money`, and `isActive` are defined with **type**, **validation rules**, and optional flags like `required`, `trim`, `default`, etc.
* `money` uses `Decimal128` with a custom validator to ensure the value is above 40,000.
* `comments` is an **array of objects**, where each comment contains:

  * `value` (text content)
  * `publish` (automatically timestamps using `Date.now`)

> 🔁 This approach is especially helpful in designing blog-style or review-based applications.

---

### 🗑️ 2. **Delete Functions**

* `deleteOne(id)`:

  * Uses `findByIdAndDelete(id)` for a **direct single deletion** using the document’s `_id`.
  * Also shows usage of `deleteOne({ _id })` for the same purpose — both included for learning differences.

* `deleteMany()`:

  * Deletes **all documents** where `ratings` are less than `4.5`.
  * Great for batch-deletion operations based on a filter.

> 📌 Both functions are wrapped in `try...catch` blocks to ensure error logging and clean exception handling.

---

### 🧠 3. **Connection File (`connectdb.js`)**

* Uses `mongoose.connect(DATABASE_URL)` to connect.
* Encapsulated inside an `async` function.
* Returns a clean message on success and descriptive error on failure.

---

### 🔧 4. **Environment Variables (`.env`)**

* `PORT`: Sets the port for Express to listen on.
* `DATABASE_URL`: Centralizes the DB connection string.

> ✅ Keeps your app secure and scalable.

---

### 📁 5. **Comments on Code**

Every key section of the logic contains **self-explanatory comments**:

* Describing schema validations
* Explaining why `Decimal128` is used
* Differentiating between deletion methods
* Logging outcomes from delete operations
* Justifying each import and modular export

---

## 🧪 How to Run the Project

### Step 1: Navigate to the folder
```bash
cd DATA-BASE/Mongoose/07-DeleteDocument
```

### Step 2: Install all dependencies
```bash
npm install
```

### Step 3: Create your file
* **.evn:**
    * `PORT=1007`
    * `DATABASE_URL="mongodb://127.0.0.1:27017/moviesdb"`

### Step 4: Start the server
```bash
npx nodemon app.js
```

> 💡 The server will automatically attempt to delete a specific document by ID and also remove documents with low ratings.

---

## 📌 Mongoose Delete Cheatsheet

| Function              | Description                                                                   |
| --------------------- | ----------------------------------------------------------------------------- |
| `mongoose.Schema()`   | Define the structure and rules of your document                               |
| `mongoose.model()`    | Create a model (class) from a schema                                          |
| `findByIdAndDelete()` | Deletes a document directly via its `_id`                                     |
| `deleteOne()`         | Deletes one document that matches a filter (e.g., `{ _id: id }`)              |
| `deleteMany()`        | Deletes all documents matching the filter (e.g., `{ ratings: { $lt: 4.5 } }`) |
| `Decimal128`          | Used for storing precise decimal values like currency                         |
| `try...catch`         | Handles asynchronous operation errors gracefully                              |

---

## 🧠 What You’ve Learned

| Topic                       | Insight                                                              |
| --------------------------- | -------------------------------------------------------------------- |
| Mongoose Schema Design      | Structuring fields with validation and default values                |
| Array of Objects in Schema  | Modeling `comments[]` with sub-fields like `value` and `publish`     |
| Model Creation              | Using `mongoose.model()` to create a reusable model                  |
| Single Document Deletion    | Removing one document via `_id` using `findByIdAndDelete()`          |
| Multiple Documents Deletion | Removing documents in bulk with `deleteMany()` and filters           |
| Modular File Organization   | Separating concerns: `connectdb.js`, `movie.js`, `app.js`            |
| Environment Setup           | Keeping secrets out of your main code                                |
| Development Best Practices  | Using `.gitignore`, `nodemon.json`, and `package-lock.json` properly |

---

## 🔗 Repository Reference

Explore more Mongoose modules, Express-based apps, JavaScript utilities and more under:
👉🏻 [`GrowthCodeLab`](https://github.com/Ash-dot-coder/GrowthCodeLab)

---

## 👨🏻‍💻 Author

**Ayush Kohre**
* 📌 MERN Stack Developer | Content Creator
* 🔗 GitHub: [Ash-dot-coder](https://github.com/Ash-dot-coder)
* 🎯 Learning Mongoose | MongoDB | Full-Stack Dev | GrowthCodeLab Projects

---

> Cleanly structured 🚀 and clearly explained 🧠 — part of the **GrowthCodeLab Series**.

---