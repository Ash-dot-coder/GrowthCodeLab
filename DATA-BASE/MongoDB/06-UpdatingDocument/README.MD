# 📝 MongoDB Basics — `06-UpdatingDocument[ud.txt]`

> A focused and beginner-friendly guide on **updating documents in MongoDB**, extracted from the `06-UpdatingDocument / ud.txt` file.

This documentation is a part of the [`DATA-BASE/MongoDB`](https://github.com/Ash-dot-coder/GrowthCodeLab/tree/code/DATA-BASE/MongoDB) series under the **GrowthCodeLab** repository.

---

## 📂 File Overview

- **FolderName:** `06-UpdatingDocument`
- **FileName:** `ud.txt`
- **Purpose:** To practice and store essential MongoDB shell commands for updating documents using operators like `$set` and `$inc`.

---

## ⚙️ How to Run These Commands

> All commands are designed to be executed inside the **`mongosh` shell**.

### 🔽 Step-by-Step:

1. Open your terminal (Command Prompt, Git Bash, etc.)
2. Start MongoDB shell:
   ```bash
   mongosh
```

3. Make sure to use the correct database and collection, then run the update commands from `ud.txt`.

✅ **Example:**

```bash
> use moviesDB
> db.shows.updateOne({ name: "Movie" }, { $set: { name: "New Movie" } })
> db.shows.updateOne({ name: "Web Series" }, { $inc: { count: 2 } })
> db.shows.updateMany({ name: "Documentary", rating: { $eq: 8 } }, { $inc: { count: -3 } })
```

📌 *Ensure documents already exist for updates to take effect.*

---

## 🛠️ Commands with Explanation

### 1. `db.collectionName.updateOne({ "name": "Movie" }, { $set: { "name": "New Movie" } })`

> 🔄 Updates the **first matching document** where the name is `"Movie"` and replaces it with `"New Movie"` using `$set`.

```bash
db.shows.updateOne({ name: "Movie" }, { $set: { name: "New Movie" } })
```

📌 *Use `$set` to modify or replace specific field values.*

---

### 2. `db.collectionName.updateOne({ "name": "Web Series" }, { $inc: { count: 2 } })`

> ➕ Increments the `count` field by `2` for the document where `name` is `"Web Series"`.

```bash
db.shows.updateOne({ name: "Web Series" }, { $inc: { count: 2 } })
```

📌 *The `$inc` operator is great for numeric counters, views, votes, etc.*

---

### 3. `db.collectionName.updateMany({ name: "Documentary", rating: { $eq: 8 } }, { $inc: { count: -3 } })`

> ➖ Decrements the `count` field by `3` for all documents where `name` is `"Documentary"` and the `rating` is exactly `8`.

```bash
db.shows.updateMany({ name: "Documentary", rating: { $eq: 8 } }, { $inc: { count: -3 } })
```

📌 *Combining filters helps narrow down updates to only relevant documents.*

---

## 🧾 Summary Cheat Sheet

| Command                                         | Description                                           |
| ----------------------------------------------- | ----------------------------------------------------- |
| `updateOne({filter}, {$set: {field: value}})`   | Update one document's field                           |
| `updateOne({filter}, {$inc: {field: value}})`   | Increment field value for one document                |
| `updateMany({filter}, {$inc: {field: -value}})` | Decrement field value for multiple matching documents |

---

## 📦 Location

This file lives in:

```
DATA-BASE/
└── MongoDB/
    └── 06-UpdatingDocument/
        ├── ud.txt           ← command source
        └── README.md        ← documentation
```

---

## 🔗 Main Repository

Explore more MongoDB commands and database practices at:
👉🏻 [`GrowthCodeLab`](https://github.com/Ash-dot-coder/GrowthCodeLab)

---

## ✍️ Author

**Ayush Kohre**
📌 Front-End & Full-Stack Web Developer
🔗 GitHub: [Ash-dot-coder](https://github.com/Ash-dot-coder)
🎓 Learning Journey | GrowthCodeLab | MERN Stack

---

> Documented with 🔧 and 💡 under GrowthCodeLab — your roadmap to mastering backend foundations.

---