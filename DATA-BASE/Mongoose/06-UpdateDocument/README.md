# 📘 Mongoose — `06-UpdateDocument`

> A well-organized, beginner-to-intermediate reference for **updating documents** using Mongoose — with deep insights into `findByIdAndUpdate`, `updateOne`, and `updateMany`.  
> Extracted from the folder: `06-UpdateDocument` under `DATA-BASE/Mongoose`.

This module is a part of the [`DATA-BASE/Mongoose`](https://github.com/Ash-dot-coder/GrowthCodeLab/tree/code/DATA-BASE/Mongoose) section within the **GrowthCodeLab** repository.

---

## 📂 File Overview

- **FolderName:** `06-UpdateDocument`
- **Purpose:** To demonstrate and understand various update methods in Mongoose with real-world-like movie document updates.

---

## 🧱 Tech Stack & Packages Used

| Command                      | Description                          |
|-----------------------------|--------------------------------------|
| `npm init -y`               | Initializes the Node.js project      |
| `npm i express mongoose dotenv` | Installs core dependencies        |
| `npm i --save-dev nodemon`  | Installs nodemon for live reload     |

---

## 🛠️ Project Structure Breakdown

```bash
DATA-BASE/
└── Mongoose/
    └── 06-UpdateDocument/
        ├── app.js                ← Express entry point, database connect, and trigger functions
        ├── db/
        │   └── connectdb.js      ← Establishes MongoDB connection
        ├── models/
        │   └── movies.js         ← Mongoose Schema + update operations
        ├── .env                  ← Environment variables (PORT, DB URL)
        ├── nodemon.json          ← Nodemon watcher config
        ├── .gitignore            ← Ignore node_modules folder
        ├── package.json          ← Project configuration
        ├── package-lock.json     ← Locked versions of dependencies
        └── README.md             ← Documentation (this file)
```

---

## 💡 Topic: What are We Learning?

In this chapter, you'll explore **how to update MongoDB documents** using the Mongoose library, through three core methods:

1. `findByIdAndUpdate()`
2. `updateOne()`
3. `updateMany()`

These methods allow us to modify one or more documents based on certain conditions, using an elegant and object-oriented approach through **Mongoose Models**.

---

## 🧠 Mongoose Update Operation Cheat Sheet

### 🔸 What is a Mongoose Schema?

> A **schema** defines the structure of your document — types, validation rules, default values, etc.

In `models/movies.js`, the `movieSchema` describes what each movie document should include:

* `name`: a trimmed string and required
* `ratings`: a number between 1 and 5
* `money`: a decimal type with a minimum threshold validator (e.g., at least ₹40,000)
* `genre`: an array of strings like ["Drama", "Action"]
* `isActive`: a boolean flag
* `comments`: an array of objects, each with:

  * `value`: the comment text
  * `publish`: the date it was published (defaults to current date)

### 🔸 What is a Model?

> A **model** is a Mongoose interface to interact with the MongoDB collection.

Here, `movieModel` is created using:

```js
mongoose.model("movie", movieSchema);
```

Which links your schema to the actual collection named `movies`.

---

## ✍️ Update Functions Explained

### ✅ `updateByID()`

* Uses `findByIdAndUpdate()` to find a movie by its `_id` and update it.
* Modifies both `ratings` and `genre` fields.
* Efficient when you know the exact document ID.

📌 **Comment Insight:**
Explains that it's a direct update by ID. Good for admin-side updates or bulk editors.

---

### ✅ `updateOne(id)`

* Uses `updateOne()` method with a filter and update object.
* Updates the `name` field for the given `_id`.

📌 **Comment Insight:**
Demonstrates how to conditionally update only one document by matching its filter.

---

### ✅ `updateMany()`

* Targets multiple documents that match a condition (e.g., all movies with a 4.8 rating).
* Adds a comment array to all matching entries.

📌 **Comment Insight:**
Practical for tagging or reviewing groups of entries — good for bulk status flags or user feedbacks.

---

## 💬 Special Note on `comments` Field

* The `comments` field is a sub-document array.
* It demonstrates how you can update deeply nested structured data.
* Each comment object stores text (`value`) and timestamp (`publish`), giving it a blog-post style update ability.

---

## ⚙️ How to Run the Project

### 🔽 Step-by-Step:

1. **Clone the repo**

   ```bash
   git clone https://github.com/Ash-dot-coder/GrowthCodeLab.git
   ```

2. **Navigate to folder**

   ```bash
   cd DATA-BASE/Mongoose/06-UpdateDocument
   ```

3. **Install packages**

   ```bash
   npm install
   ```

4. **Configure your `.env` file**

   ```
   PORT = 1006
   DATABASE_URL = "mongodb://127.0.0.1:27017/moviesdb"
   ```

5. **Run the server**

   ```bash
   npx nodemon app.js
   ```

---

## 📌 Highlighted Concepts

| Concept             | Description                                                              |
| ------------------- | ------------------------------------------------------------------------ |
| `mongoose.Schema`   | Defines structure, types, and rules for a document                       |
| `mongoose.model()`  | Creates model to perform queries/updates on the defined schema           |
| `findByIdAndUpdate` | Updates a single document using its `_id`                                |
| `updateOne`         | Finds and updates one document matching the filter                       |
| `updateMany`        | Finds and updates all documents matching the filter                      |
| `Decimal128`        | Special type to handle precise decimal values (for `money`)              |
| `validators`        | Ensure input like `ratings` fall within a valid range (min: 1, max: 5)   |
| `Date.now` default  | Auto-generates current time for `publish` in each comment                |
| `nodemon.json`      | Enables automatic restart on code changes, improves development workflow |

---

## 🔗 Repository Reference

Explore more hands-on Mongoose, Express, MongoDB, and JavaScript modules at:
👉🏻 [`GrowthCodeLab`](https://github.com/Ash-dot-coder/GrowthCodeLab)

---

## 👨🏻‍💻 Author

**Ayush Kohre**
* 📌 Full-Stack Web Developer | MERN Stack Explorer
* 🔗 GitHub: [Ash-dot-coder](https://github.com/Ash-dot-coder)
* 🛠️ Crafting real-world projects & developer guides with **GrowthCodeLab**

---

> Crafted for clarity 💡 and practice 🧠 under the GrowthCodeLab Series.

---