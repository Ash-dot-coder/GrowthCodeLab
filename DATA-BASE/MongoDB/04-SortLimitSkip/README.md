# 📘 MongoDB Basics — `04-SortLimitSkip[sls.txt]`

> A compact and easy-to-follow reference focused on **sorting, limiting, and skipping** documents inside a MongoDB collection. Extracted from the `04-SortLimitSkip / sls.txt` file.

This file is part of the [`DATA-BASE/MongoDB`](https://github.com/Ash-dot-coder/GrowthCodeLab/tree/code/DATA-BASE/MongoDB) section in the **GrowthCodeLab** repository.

---

## 📂 File Overview

- **FolderName:** `04-SortLimitSkip`
- **FileName:** `sls.txt`
- **Purpose:** To understand how to control query results using `.limit()`, `.sort()`, and `.skip()` in MongoDB's shell, especially during real-world data fetch operations.

---

## ⚙️ How to Run These Commands

> These MongoDB commands are to be executed inside the **`mongosh` shell**.

### 🔽 Step-by-Step:

1. **Open your terminal** (Command Prompt, Git Bash, etc.)
2. Run:
   ```bash
   mongosh
```

3. Switch to your desired database (e.g., `animeWorld`) using:

   ```bash
   use animeWorld
   ```
4. Now run the queries listed below using the `animeCharacters` collection.

---

## 🛠️ Commands with Explanation

### 1. `db.animeCharacters.find().limit(2)`

> 📌 Fetch only the **first 2 documents** from the collection.

```bash
db.animeCharacters.find().limit(2)
```

📌 *Used to restrict the output when previewing sample documents from a large dataset.*

---

### 2. `db.animeCharacters.find({}, { "name": 1, _id: 0 }).sort({ "name": 1 })`

> 🔼 Sort the result by the `name` field in **Ascending Order (A-Z)**.
> ✅ Only displays the `name` field, excluding `_id`.

```bash
db.animeCharacters.find({}, { "name": 1, _id: 0 }).sort({ "name": 1 })
```

📌 *Useful when alphabetically listing characters or items.*

---

### 3. `db.animeCharacters.find({}, { "name": 1, _id: 0 }).sort({ "name": -1 })`

> 🔽 Sort the result by the `name` field in **Descending Order (Z-A)**.

```bash
db.animeCharacters.find({}, { "name": 1, _id: 0 }).sort({ "name": -1 })
```

📌 *Ideal for reversing name lists or seeing latest added names first in sorted form.*

---

### 4. `db.animeCharacters.find({}, { "name": 1, _id: 0 }).sort({ "name": 1 }).skip(1)`

> 🧭 Sort by `name` in **ascending order**, but **skip the first document**.

```bash
db.animeCharacters.find({}, { "name": 1, _id: 0 }).sort({ "name": 1 }).skip(1)
```

📌 *Helpful for implementing pagination or skipping repeated entries.*

---

## 🧾 Summary Cheat Sheet

| Command                | Description                        |
| ---------------------- | ---------------------------------- |
| `.limit(n)`            | Show only first **n** results      |
| `.sort({ field: 1 })`  | Sort ascending (A-Z) by field      |
| `.sort({ field: -1 })` | Sort descending (Z-A) by field     |
| `.sort(...).skip(n)`   | Skip **n** documents after sorting |

---

## 📦 Location

This file lives in:

```
DATA-BASE/
└── MongoDB/
    └── 04-SortLimitSkip/
        ├── sls.txt         ← command source
        └── README.md       ← documentation
```

---

## 🔗 Main Repository

Explore more MongoDB cheat-sheets and full-stack docs in:
👉🏻 [`GrowthCodeLab`](https://github.com/Ash-dot-coder/GrowthCodeLab)

---

## ✍️ Author

**Ayush Kohre**
📌 Front-End & Full-Stack Web Developer
🔗 GitHub: [Ash-dot-coder](https://github.com/Ash-dot-coder)
🎓 MongoDB | MERN Stack | GrowthCodeLab Learning Journey

---

> Crafted with 💡 and 📚 under GrowthCodeLab — empowering self-learners to code confidently.

---