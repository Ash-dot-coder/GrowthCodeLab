# 📘 Mongoose — `03-CreateOrInsertDoc`

> A beginner-friendly walkthrough on **creating and inserting documents** into MongoDB using Mongoose Schema and Model.  
> Extracted from the folder: `03-CreateOrInsertDoc` under `DATA-BASE/Mongoose`.

This chapter is a part of the [`DATA-BASE/Mongoose`](https://github.com/Ash-dot-coder/GrowthCodeLab/tree/code/DATA-BASE/Mongoose) section within the **GrowthCodeLab** repository.

---

## 📂 File Overview

- **FolderName:** `03-CreateOrInsertDoc`
- **Purpose:** To define a **Mongoose Schema**, build a **Model**, and insert a **document** into a MongoDB collection.

---

## 🧱 Tech Stack & Packages Used

| Package    | Purpose                                |
|------------|----------------------------------------|
| `express`  | Sets up the server                     |
| `mongoose` | Handles schema-based interaction with MongoDB |
| `dotenv`   | Manages environment variables securely |
| `nodemon`  | Auto restarts server during development |

---

## 📌 Folder Structure

```bash
DATA-BASE/
└── Mongoose/
    └── 03-CreateOrInsertDoc/
        ├── app.js               ← Entry point, connects DB, calls insert function
        ├── db/
        │   └── connectdb.js     ← Connection logic using Mongoose
        ├── models/
        │   └── student.js       ← Schema, Model & document creation logic
        ├── .env                 ← Environment variables
        ├── .gitignore           ← Ignore node_modules, etc.
        ├── nodemon.json         ← Configuration for nodemon
        ├── package.json         ← NPM configuration
        ├── package-lock.json    ← Dependency lock
        └── README.md            ← This documentation
```

---

## 🧠 Mongoose Insert Document Cheat Sheet

### 📌 What is a Schema?

A **Schema** defines the structure of the documents inside a MongoDB collection. It describes the **shape**, **data types**, **validations**, and **default values** for your data.

✅ In this module:

* We define a `movieSchema` that outlines properties like `name`, `ratings`, `money`, `genre`, `isActive`, and `comments`.

### 📌 What is a Model?

A **Model** is a wrapper around a schema that provides an interface to interact with the database collection.

✅ Here:

* The model is created as `MovieModel` using `mongoose.model("Movie", movieSchema)`.

### 🧾 Fields Explained:

| Field      | Type         | Description                                                                  |
| ---------- | ------------ | ---------------------------------------------------------------------------- |
| `name`     | `String`     | Required, trimmed name of the movie                                          |
| `ratings`  | `Number`     | Required, must be between 1 and 5                                            |
| `money`    | `Decimal128` | Required, must be greater than or equal to 10                                |
| `genre`    | `Array`      | List of genres like Drama, Action                                            |
| `isActive` | `Boolean`    | To show whether the movie is active in listing                               |
| `comments` | `Array`      | Stores nested comments with text and optional publish date (defaults to now) |

---

## 🧱 Document Creation Process

### 1️⃣ Import and Connect

* Use `mongoose.connect()` to establish a connection with your database.
* Load MongoDB URL from `.env`.

### 2️⃣ Define a Schema

* Use `new mongoose.Schema({})` to structure your movie data.

### 3️⃣ Create a Model

* Bind schema to a model using `mongoose.model()`.

### 4️⃣ Create and Save Document

* Instantiate the model: `new MovieModel({...})`.
* Call `.save()` to insert the document into MongoDB.

### 🧪 Example Data Inserted

* Name: *Tourist Family*
* Rating: `4`
* Money: `60000`
* Genres: `[ "Drama", "Comedy", "Emotional" ]`
* Active: `true`
* Comment: *"That was a very Heart Emotional movie"*

---

## ⚙️ How to Run the Project

### Step 1: Clone the repository
```bash
git clone https://github.com/Ash-dot-coder/GrowthCodeLab.git
```

### Step 2: Navigate to the Mongoose insert module
```bash
cd DATA-BASE/Mongoose/03-CreateOrInsertDoc
```

### Step 3: Install dependencies
```bash
npm install
```

### Step 4: Set up .env
* **.env:**
    * PORT=1003
    * DATABASE_URL="mongodb://127.0.0.1:27017/moviedb"

### Step 5: Start the server
```bash
npx nodemon app.js
```

When the server starts, the document will be created and inserted automatically, and the result will be logged to the console.

---

## 🔗 Repository Reference

Explore more Mongoose modules, MongoDB operations, Express setups, and full-stack development content at:
👉🏻 [`GrowthCodeLab`](https://github.com/Ash-dot-coder/GrowthCodeLab)

---

## 👨🏻‍💻 Author

**Ayush Kohre**
* 📌 Full-Stack Web Developer & Creator of GrowthCodeLab
* 🔗 GitHub: [Ash-dot-coder](https://github.com/Ash-dot-coder)
* 🎓 Building MERN Stack Projects | Mongoose | Node.js | MongoDB

---

> Clear logic, clean design, and GrowthCodeLab principles all in one place 🚀

---