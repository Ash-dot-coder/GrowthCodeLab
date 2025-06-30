# 📘 MongoDB Basics — `02-InsertData[id.txt]`

> A beginner-focused guide demonstrating **how to insert documents into a MongoDB collection** and retrieve them using simple shell commands — extracted from the `02-InsertData / id.txt` file.

This file is part of the [`DATA-BASE/MongoDB`](https://github.com/Ash-dot-coder/GrowthCodeLab/tree/code/DATA-BASE/MongoDB) directory under the **GrowthCodeLab** repository.

---

## 📂 File Overview

- **FolderName:** `02-InsertData`
- **FileName:** `id.txt`
- **Purpose:** To teach the basics of **inserting documents** into collections and **retrieving data** using `find()` in the MongoDB shell.

---

## ⚙️ How to Run These Commands

> These MongoDB commands are meant to be executed inside the **`mongosh` shell**.

### 🔽 Step-by-Step:

1. **Open your terminal** (Command Prompt, Git Bash, etc.)
2. Start MongoDB Shell by typing:
   ```bash
   mongosh
```

3. Switch to your desired database or create a new one:

   ```bash
   use animalDB
   ```
4. Now execute the commands from `id.txt`.

✅ **Example:**

```bash
> catNames = { name: "Milishaa", age: 3 }
> db.cat.insertOne(catNames)
> db.cat.find()
```

📌 *Ensure MongoDB is properly installed and running before execution.*

---

## 🛠️ Commands with Explanation

### 1. Create an Object

```javascript
catNames = { name: "Milishaa", age: 3 }
```

🧾 This creates a **JavaScript object** in the shell, representing one document to be inserted into the database.

📌 *Variables in `mongosh` are defined using standard JavaScript syntax.*

---

### 2. `db.cat.insertOne(catNames)`

> ➕ Inserts the `catNames` object as a **single document** into the `cat` collection.

```bash
db.cat.insertOne(catNames)
```

✅ MongoDB will:

* Create the `cat` collection if it doesn't exist.
* Insert the document into it.

📝 Example of inserted document:

```json
{ "_id": ObjectId(...), "name": "Milishaa", "age": 3 }
```

---

### 3. `db.cat.find()`

> 🔍 Retrieves and displays **all documents** stored in the `cat` collection.

```bash
db.cat.find()
```

📌 *By default, `find()` returns all documents in the collection. Use this to verify your insertions.*

---

## 🧾 Summary Cheat Sheet

| Command                      | Description                                    |
| ---------------------------- | ---------------------------------------------- |
| `catNames = { ... }`         | Create a JS object to insert into a collection |
| `db.cat.insertOne(catNames)` | Insert one document into the `cat` collection  |
| `db.cat.find()`              | Retrieve all documents from the collection     |

---

## 📦 Location

This file lives in:

```
DATA-BASE/
└── MongoDB/
    ├── 01-CollectionInfo/
    └── 02-InsertData/
        ├── id.txt           ← command source
        └── README.md        ← documentation
```

---

## 🔗 Main Repository

Explore more in the full stack series:
👉🏻 [`GrowthCodeLab`](https://github.com/Ash-dot-coder/GrowthCodeLab)

---

## ✍️ Author

**Ayush Kohre**
📌 Front-End & Full-Stack Web Developer
🔗 GitHub: [Ash-dot-coder](https://github.com/Ash-dot-coder)
🎓 Learning journey via GrowthCodeLab | MERN Stack | MongoDB Essentials

---

> Crafted with 💡 and 📚 under GrowthCodeLab — empowering self-learners to code confidently.

---