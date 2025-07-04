# 📘 Mongoose — `04-InsertManyDoc`

> A detailed and beginner-friendly guide to creating **Mongoose Schemas and Models**, and inserting **multiple documents** using `insertMany()` method.  
> Extracted from the folder: `04-InsertManyDoc` under `DATA-BASE/Mongoose`.

This chapter is a part of the [`DATA-BASE/Mongoose`](https://github.com/Ash-dot-coder/GrowthCodeLab/tree/code/DATA-BASE/Mongoose) series inside the **GrowthCodeLab** repository.

---

## 📂 File Overview

- **FolderName:** `04-InsertManyDoc`
- **Purpose:** To understand and practice creating Mongoose **schemas**, **models**, and inserting multiple documents efficiently into a MongoDB collection.

---

## 🧱 Tech Stack & Packages Used

| Package      | Purpose                                |
|--------------|----------------------------------------|
| `express`    | Sets up the server                     |
| `mongoose`   | ODM for defining schema & interacting with MongoDB |
| `dotenv`     | Handles environment variables          |
| `nodemon`    | Auto-restarts the server on file changes (dev only) |

Installation:

```bash
npm init -y
npm i express mongoose dotenv
npm i --save-dev nodemon
```

---

## 📦 Folder Structure

```bash
DATA-BASE/
└── Mongoose/
    └── 04-InsertManyDoc/
        ├── app.js               ← main entry point
        ├── db/
        │   └── connectdb.js     ← handles MongoDB connection
        ├── models/
        │   └── movies.js        ← schema, model, insertMany logic
        ├── .env                 ← environment variables
        ├── nodemon.json         ← nodemon config
        ├── .gitignore           ← ignore node_modules
        ├── package.json         ← npm config
        ├── package-lock.json    ← auto-generated lockfile
        └── README.md            ← this documentation
```

---

## 🛠️ Explanation of Core Files

### ✅ `app.js`

* **Purpose:** Entry file for the app.
* Imports Express, environment variables, DB connection, and insert function.
* Connects to database using `connectDB(DATABASE_URL)`.
* Runs the server using `app.listen(...)`.
* Calls `insertManyDocs()` once to add multiple entries on server start.

---

### ✅ `models/movies.js`

* **Purpose:** Defines the **schema** for the movie collection and contains logic to insert multiple movie documents.

#### ✍️ Schema Breakdown

| Field      | Type         | Extra Config                                               |
| ---------- | ------------ | ---------------------------------------------------------- |
| `name`     | `String`     | Required, trimmed                                          |
| `ratings`  | `Number`     | Required, with min 1 and max 5                             |
| `money`    | `Decimal128` | Required, custom validator to ensure value ≥ 10            |
| `genre`    | `Array`      | No validation applied                                      |
| `isActive` | `Boolean`    | Standard boolean flag                                      |
| `comments` | `Array`      | Array of subdocuments with `value` and `publish` timestamp |

#### 📥 `insertManyDocs()` Function

* Creates multiple instances of the Movie model.
* Populates each with data including name, genre, rating, etc.
* Uses `insertMany()` to bulk insert all movie documents into the collection.
* Provides console logs for success or failure messages.

---

### ✅ `connectdb.js`

* Uses `mongoose.connect()` to establish connection to MongoDB.
* Prints a success or error message on the console.

---

### ✅ `.env`

* **PORT**: Sets Express server port (default fallback used in app).
* **DATABASE_URL**: MongoDB connection string.

---

### ✅ `nodemon.json`

* Configured to watch all files and auto-reload server on changes.
* Ignores unnecessary files and folders.

---

## ⚙️ How to Run This Project

### Step 1: Clone the GrowthCodeLab repo
```bash
git clone https://github.com/Ash-dot-coder/GrowthCodeLab.git
```

### Step 2: Navigate to the folder
```bash
cd DATA-BASE/Mongoose/04-InsertManyDoc
```

### Step 3: Install dependencies
```bash
npm install
```

### Step 4: Create a file:
* **.env**
    * `PORT=1004`
    * `DATABASE_URL="mongodb://127.0.0.1:27017/moviesdb"`

# Step 5: Run the project with nodemon
```bash
npx nodemon app.js
```

🟢 When successful, you’ll see console messages confirming:

* Database connection
* Movie documents inserted

---

## 🧠 Mongoose Cheatsheet: Insert Many Documents

### 🔹 What is a Schema?

A **Schema** defines the structure and rules for documents in a MongoDB collection.

```js
const movieSchema = new mongoose.Schema({ ... });
```

---

### 🔹 What is a Model?

A **Model** is a constructor compiled from the schema. It represents the collection.

```js
const MovieModel = mongoose.model("Movie", movieSchema);
```

---

### 🔹 Inserting Multiple Documents

* Create multiple instances using `new Model({...})`
* Use `Model.insertMany([doc1, doc2, ...])` to insert them at once.

```js
await MovieModel.insertMany([m1, m2, m3, ...]);
```

✅ Benefits:

* Reduces DB round-trips.
* Easier to manage bulk data.

---

### 🔹 Data Types and Validations Used

| Type         | Purpose                                    |
| ------------ | ------------------------------------------ |
| `String`     | Title and comment values                   |
| `Number`     | Ratings (validated with min/max)           |
| `Decimal128` | For precise currency-like values (`money`) |
| `Array`      | Genres and nested `comments`               |
| `Boolean`    | Active flag for movies                     |
| `Date`       | Automatically sets comment publish time    |

---

### 🔹 Tips

* Use `trim`, `min`, `max`, and `required` for input validation.
* Use `Decimal128` for financial data to avoid float precision issues.
* Subdocuments (like comments) can have their own schema inside the parent.

---

## 🔗 Repository Reference

Explore more MongoDB + Mongoose use-cases, Express.js projects, and Full-Stack challenges:
👉🏻 [`GrowthCodeLab`](https://github.com/Ash-dot-coder/GrowthCodeLab)

---

## 👨🏻‍💻 Author

**Ayush Kohre**
* 📌 Full-Stack Developer | GrowthCodeLab Creator
* 🔗 GitHub: [Ash-dot-coder](https://github.com/Ash-dot-coder)
* 🎯 Building Projects in MongoDB, Mongoose, MERN Stack

---

> Documented with ❤️ for your Developer Journey in GrowthCodeLab.

---