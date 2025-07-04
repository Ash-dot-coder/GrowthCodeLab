# 📘 Mongoose — Mastering MongoDB ODM

![Mongoose](Mongoose.png)

> This repository is a complete, structured, and beginner-to-advanced journey through **Mongoose**, the powerful Object Data Modeling (ODM) library for MongoDB and Node.js.  

> It is designed as part of the **GrowthCodeLab** curriculum, offering modular learning across topic-wise folders with practical examples, real schemas, and clean architecture.

---

## 🧠 What is Mongoose?

**Mongoose** is an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a schema-based solution to model your application data, while handling relationships, validations, and easy querying.

🔑 **Core Features**:
- Schema definitions and validation
- CRUD operations made easy
- Middleware & hooks support
- Virtuals, population, lean queries, etc.
- Built-in support for MongoDB best practices

---

## 📚 Topic-wise Breakdown

Each folder in this repository represents a **chapter/module** of Mongoose with fully working examples.

| Chapter | Topic Name                | Description |
|--------:|---------------------------|-------------|
| `01`    | **Connect**               | How to connect your Node.js app with MongoDB using Mongoose, and load credentials securely with `.env`. |
| `02`    | **Schema And Model**      | Learn how to define schemas, create models, and understand schema types, validators, and structure. |
| `03`    | **Create Or Insert Doc**  | Inserting single documents into the database using your schema and understanding how Mongoose handles data. |
| `04`    | **Insert Many Documents** | Learn bulk insertion of documents using `insertMany()` and handle array-based inputs efficiently. |
| `05`    | **Read Document**         | Fetching records using `find()`, `findOne()`, and querying with filters. Includes projection and limit. |
| `06`    | **Update Document**       | Updating documents using `updateOne()`, `updateMany()`, and `findByIdAndUpdate()`. |
| `07`    | **Delete Document**       | Deleting documents with `findByIdAndDelete()` and filtering with `deleteMany()` for bulk removal. |

---

## 🧾 Mongoose Cheat Sheet

### 1️⃣ Connect to MongoDB

- Use `mongoose.connect()` with async/await
- Environment variables handled with `dotenv`
- Always check connection status with try/catch

---

### 2️⃣ Define a Schema

```js
const schema = new mongoose.Schema({
  name: String,
  age: Number,
  isActive: Boolean,
});
```

📌 *Schemas define how data should be structured inside the MongoDB collection.*

---

### 3️⃣ Create a Model

```js
const User = mongoose.model("User", schema);
```

📌 *Models are constructors compiled from Schemas. They represent documents.*

---

### 4️⃣ Insert Documents

* `new Model({...}).save()`
* `Model.create({...})`
* `Model.insertMany([...])`

---

### 5️⃣ Read Documents

* `Model.find()`: get all
* `Model.findOne(filter)`: get one
* `Model.findById(id)`: get by ID

---

### 6️⃣ Update Documents

* `Model.updateOne(filter, update)`
* `Model.updateMany()`
* `Model.findByIdAndUpdate(id, update)`

---

### 7️⃣ Delete Documents

* `Model.deleteOne(filter)`
* `Model.deleteMany(filter)`
* `Model.findByIdAndDelete(id)`

---

### 🛠️ Bonus Concepts

* Schema Options: `required`, `default`, `min/max`, `enum`, etc.
* Nested Arrays & Subdocuments (e.g., `comments: [{ value: String }]`)
* `Decimal128`: for accurate currency-like values
* Middleware & Lifecycle Hooks (Coming Soon 🚧)

---

## 🗂️ Folder Structure Overview

```bash
DATA-BASE/
└── Mongoose/
    ├── 01-Connect/
    ├── 02-SchemaAndModel/
    ├── 03-CreateOrInsertDoc/
    ├── 04-InsertManyDoc/
    ├── 05-ReadDocument/
    ├── 06-UpdateDocument/
    ├── 07-DeleteDocument/
    ├── Mongoose.png
    └── README.md  ← Mongoose Overview
```

> Each folder includes:
>
> * `app.js` (main logic file)
> * `db/connectdb.js` (reusable DB connect module)
> * `models/model.js` (schema/model logic)
> * `.env`, `nodemon.json`, `.gitignore`, and other configs

---

## 🚀 How to Run

### Step 1: Clone the repo
```bash
git clone https://github.com/Ash-dot-coder/GrowthCodeLab
```

### Step 2: Navigate to any topic folder
```bash
cd DATA-BASE/Mongoose/04-InsertManyDoc
```

### Step 3: Install dependencies
```bash
npm install
```

### Step 4: Create file:
* **.env:**
    * `PORT`
    * `DATABASE_URL`

# Step 5: Run using nodemon
```bash
npx nodemon app.js
```

---

## 🔗 Repository Navigation

* 📁 [Node.js Topics](https://github.com/Ash-dot-coder/GrowthCodeLab/tree/code/NODE)
* 📁 [MongoDB Shell Topics](https://github.com/Ash-dot-coder/GrowthCodeLab/tree/code/DATA-BASE/MongoDB)
* 📁 [React Practice](https://github.com/Ash-dot-coder/GrowthCodeLab/tree/code/REACT)
* 📁 [JavaScript Challenges](https://github.com/Ash-dot-coder/GrowthCodeLab/tree/code/JS)

---

## 👨🏻‍💻 Author & Maintainer

**Ayush Kohre**
* 🔧 Full Stack Web Developer
* 🎓 Learning MERN Stack | Practicing Real-world Projects
* 🔗 GitHub: [Ash-dot-coder](https://github.com/Ash-dot-coder)
* 🧠 Passionate Contributor to GrowthCodeLab

---

> Curated with 💻 precision and 📚 intention as a part of the **GrowthCodeLab Series**.

---