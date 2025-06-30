# 📘 MongoDB Basics — `01-CollectionInfo[ci.txt]`

> A quick and beginner-friendly command reference focused purely on **MongoDB collection operations**, extracted from the `01-CollectionInfo.txt` file.

This file is part of the [`DATA-BASE/MongoDB`](https://github.com/Ash-dot-coder/GrowthCodeLab/tree/main/DATA-BASE/MongoDB) directory under the **GrowthCodeLab** repository.

---

## 📂 File Overview

**FolderName:** `01-CollectionInfo.txt`  
**FileName:** `ci.txt`  
**Purpose:** To store essential MongoDB shell commands for managing and exploring databases and collections during the initial learning phase.

---

## 🛠️ Commands with Explanation

### 1. `show dbs`  
> 🔍 Lists all available databases stored in your local MongoDB server.

```bash
show dbs
```

📌 *Only non-empty databases (those with collections containing data) will be displayed.*

---

### 2. `db.getName()`

> 🧭 Displays the name of the **current active database** you're working inside.

```bash
db.getName()
```

📌 *Helpful to confirm the working context while switching between databases.*

---

### 3. `db.collectionName.insertOne({})`

> ➕ Creates a **new collection** and inserts a single document into it.

```bash
db.students.insertOne({ name: "Ayush", batch: "MERN" })
```

✅ If the collection (`students` in this case) doesn’t exist, MongoDB creates it automatically.

📌 *You can also insert an empty object like `{}` just to force collection creation:*

```bash
db.temp.insertOne({})
```

---

### 4. `show collections`

> 📋 Lists all the **collections** present in the current database.

```bash
show collections
```

📌 *Use this to verify that your collection was created successfully.*

---

## 🧾 Summary Cheat Sheet

| Command                           | Description                             |
| --------------------------------- | --------------------------------------- |
| `show dbs`                        | List all databases                      |
| `db.getName()`                    | Show current database name              |
| `db.collectionName.insertOne({})` | Create new collection via data insert   |
| `show collections`                | Display collections in current database |

---

## 📦 Location

This file lives in:

```
GrowthCodeLab/
└── DATA-BASE/
    └── MongoDB/
        ├── 01-CollectionInfo/
        │   ├── ci.txt           ← command source
        │   └── README.md        ← documentation
        └── README.md            ← general MongoDB overview
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