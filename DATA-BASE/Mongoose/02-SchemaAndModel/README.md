# 📘 Mongoose — `02-SchemaAndModel`

> A professional and beginner-friendly reference to understand and implement **Schema** and **Model** using Mongoose.  
> Extracted from the folder: `02-SchemaAndModel` under `DATA-BASE/Mongoose`.

This chapter is a part of the [`DATA-BASE/Mongoose`](https://github.com/Ash-dot-coder/GrowthCodeLab/tree/code/DATA-BASE/Mongoose) section inside the **GrowthCodeLab** repository.

---

## 📂 File Overview

- **FolderName:** `02-SchemaAndModel`
- **Purpose:** To define the structure of MongoDB documents using **Mongoose Schemas**, and interact with them using **Mongoose Models**.

---

## 🧱 Tech Stack & Packages Used

| Package    | Purpose                                |
|------------|----------------------------------------|
| `express`  | Sets up the backend server             |
| `mongoose` | Connects MongoDB and defines schema    |
| `dotenv`   | Loads environment variables securely   |
| `nodemon`  | Auto-reloads server on code changes    |

> Installed with:

```bash
npm init -y
npm i express mongoose dotenv
npm i --save-dev nodemon
```

---

## 🛠️ Project Structure Breakdown

```bash
DATA-BASE/
└── Mongoose/
    └── 02-SchemaAndModel/
        ├── db/
        │   └── connectdb.js     ← Mongoose DB connection logic
        ├── models/
        │   └── student.js       ← schema + model defined here
        ├── app.js               ← main entry file
        ├── .env                 ← stores DB config variables
        ├── .gitignore           ← hides node_modules
        ├── nodemon.json         ← configuration for nodemon
        ├── package.json         ← npm config
        ├── package-lock.json    ← lockfile for npm packages
        └── README.md            ← Documentation
```

---

## 📌 Explanation of Key Files

### ✅ `app.js`

* Imports Express and Mongoose connection logic.
* Loads environment variables.
* Defines the database URI (`DATABASE_URL`) and port number (`PORT`).
* Establishes MongoDB connection using `connectDB()`.
* Sets up and starts the Express server on given port.

---

### ✅ `models/student.js`

* Defines a **Schema** called `movieSchema` which structures MongoDB documents with fields like:

  * `name`: String, required, trimmed
  * `ratings`: Number, range from 1 to 5
  * `money`: Decimal128, minimum 10, validated
  * `genre`: Array of categories
  * `isActive`: Boolean flag
  * `Comments`: An embedded sub-document array with comment string and published date

* Creates a **Model** called `movieModel` using the schema. This model represents the **"movie" collection** in MongoDB.

---

### ✅ `db/connectdb.js`

* Uses `mongoose.connect()` to establish connection to the MongoDB server using the URL provided in `.env`.

---

### ✅ `.env`

* Stores:

  * `PORT`: Express app port
  * `DATABASE_URL`: MongoDB URI (`schooldb` as the database name)

---

## 🧠 Mongoose Schema & Model Cheat Sheet

| Concept            | Description                                                               |
| ------------------ | ------------------------------------------------------------------------- |
| **Schema**         | Blueprint/structure for documents in a collection                         |
| **Model**          | Interface for interacting with MongoDB documents of a specific collection |
| **Required**       | Ensures that a field must be present                                      |
| **Trim**           | Removes whitespace from both ends of a string                             |
| **Decimal128**     | Stores high-precision decimal values (ideal for currency)                 |
| **Validation**     | Custom logic to ensure data integrity (e.g., money >= 10)                 |
| **Embedded Array** | Schema inside a schema (used for comments with date)                      |

---

### ✅ What is a Schema?

A **Schema** is a structure that defines how your MongoDB documents will look like. In our example, the schema defines:

* A movie should have a name
* A rating that is between 1 to 5
* A monetary value (with at least 10 currency units)
* Genres in array format
* A status if the movie is active or not
* Comments list (each comment with value and publish date)

---

### ✅ What is a Model?

A **Model** is a compiled version of the schema. It gives you methods like:

* `create()`
* `find()`
* `findById()`
* `updateOne()` / `updateMany()`
* `deleteOne()` / `deleteMany()`

Model is what you use to interact with your data in MongoDB collections.

---

### 📌 Schema Line-by-Line Highlights

* `type: String`: Defines the data type.
* `required: true`: Makes the field mandatory.
* `trim: true`: Cleans up string fields.
* `min`/`max`: Sets numeric boundaries for values.
* `mongoose.Decimal128`: Used for precision numbers like money.
* `validate`: Applies custom logic like "must be ≥ 10".
* `default: Date.now`: Auto-assigns current time to `publish` field.

---

## ⚙️ How to Run the Project

### Step 1: Clone the repository
```bash
git clone https://github.com/Ash-dot-coder/GrowthCodeLab.git
```

### Step 2: Navigate to this module
```bash
cd DATA-BASE/Mongoose/02-SchemaAndModel
```

### Step 3: Install required packages
```bash
npm install
```

### Step 4: Setup your environment file
* **.env:**
    * `PORT=1002`
    * `DATABASE_URL="mongodb://127.0.0.1:27017/schooldb"`

### Step 5: Start the development server
```bash
npx nodemon app.js
```

---

## 🔗 Repository Reference

Explore other modules on MongoDB, Mongoose, Express, JavaScript, and Frontend Development:
👉🏻 [`GrowthCodeLab`](https://github.com/Ash-dot-coder/GrowthCodeLab)

---

## 👨🏻‍💻 Author

**Ayush Kohre**
* 📌 MERN Stack Developer | GrowthCodeLab Creator
* 🔗 GitHub: [Ash-dot-coder](https://github.com/Ash-dot-coder)
* 💼 Exploring Full Stack | Backend | MongoDB | Mongoose

---

> Built with clarity 💡 and precision 🔍 as part of the **GrowthCodeLab** learning journey.

---