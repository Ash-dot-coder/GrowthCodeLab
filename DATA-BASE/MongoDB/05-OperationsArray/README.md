# 📘 MongoDB Query Operations — `05-OperationsArray[oa.txt]`

> A beginner-friendly cheat sheet focused on **MongoDB query operators** — specifically `$lt` and `$gt`, used for filtering documents by numeric values. Commands are sourced from the `05-OperationsArray/oa.txt` file.

This folder is part of the [`DATA-BASE/MongoDB`](https://github.com/Ash-dot-coder/GrowthCodeLab/tree/code/DATA-BASE/MongoDB) directory under the **GrowthCodeLab** repository.

---

## 📂 File Overview

- **FolderName:** `05-OperationsArray`
- **FileName:** `oa.txt`
- **Purpose:** To practice filtering and conditionally querying documents using MongoDB's comparison operators.

---

## ⚙️ How to Run These Commands

> These MongoDB commands are designed to be run inside the **`mongosh` shell**.

### 🔽 Step-by-Step:

1. Open your terminal (Command Prompt, Git Bash, etc.)
2. Enter Mongo shell:
   ```bash
   mongosh
```

3. Select your database and start querying:

   ```bash
   use testDB
   db.products.find({ price: { $lt: 200 } })
   ```

📌 *Ensure that you have a collection like `products` with numeric fields (e.g., `price`) to get meaningful results.*

---

## 🛠️ Commands with Explanation

### 1. `db.collectionName.find({ price: { $lt: 200 } })`

> 🔽 Finds all documents where the **price is less than 200**.

```bash
db.products.find({ price: { $lt: 200 } })
```

✅ `$lt` stands for "**less than**"
📌 Ideal for filtering items below a certain threshold, like products under ₹200.

---

### 2. `db.collectionName.find({ price: { $gt: 200 } })`

> 🔼 Finds all documents where the **price is greater than 200**.

```bash
db.products.find({ price: { $gt: 200 } })
```

✅ `$gt` stands for "**greater than**"
📌 Useful for querying items that exceed a certain limit.

---

## 🧾 Summary Cheat Sheet

| Command                                   | Description                   |
| ----------------------------------------- | ----------------------------- |
| `db.collection.find({price: {$lt: 200}})` | Returns docs with price < 200 |
| `db.collection.find({price: {$gt: 200}})` | Returns docs with price > 200 |

---

## 📦 Location

This file lives in:

```
DATA-BASE/
└── MongoDB/
    └── 05-OperationsArray/
        ├── oa.txt           ← command source
        └── README.md        ← documentation
```

---

## 🔗 Main Repository

Explore more from the MongoDB track under:
👉🏻 [`GrowthCodeLab`](https://github.com/Ash-dot-coder/GrowthCodeLab)

---

## ✍️ Author

**Ayush Kohre**
📌 Front-End & Full-Stack Web Developer
🔗 GitHub: [Ash-dot-coder](https://github.com/Ash-dot-coder)
🎓 Learning journey via GrowthCodeLab | MERN Stack | MongoDB Essentials

---

> Crafted with 💡 and 🔍 under GrowthCodeLab — empowering self-learners to query smarter and build better.

---