# 🗑️ MongoDB Delete Operations — `09-DeleteDocument[dd.txt]`

> A practical and beginner-friendly guide to **deleting documents, collections, and databases** using MongoDB shell commands — all extracted from the `09-DeleteDocument / dd.txt` file.

This file is part of the [`DATA-BASE/MongoDB`](https://github.com/Ash-dot-coder/GrowthCodeLab/tree/code/DATA-BASE/MongoDB) directory under the **GrowthCodeLab** repository.

---

## 📂 File Overview

- **FolderName:** `09-DeleteDocument`
- **FileName:** `dd.txt`
- **Purpose:** To demonstrate different MongoDB delete operations using various filters — including documents, collections, and even entire databases.

---

## ⚙️ How to Run These Commands

> These MongoDB commands are meant to be executed inside the **`mongosh` shell**.

### 🔽 Step-by-Step:

1. **Open your terminal** (Command Prompt, Git Bash, etc.)
2. Run:
   ```bash
   mongosh
```

3. Switch to the relevant database, then start running the delete operations from `dd.txt`.

✅ **Example:**

```bash
> use survivalAsianDB
> db.survivalAsianSeries.deleteOne({ title: "Mercy for None" })
> db.survivalAsianSeries.deleteMany({ origin: "Japan" })
> db.survivalAsianSeries.drop()
```

📌 *Ensure you understand the scope of each operation before executing, especially `drop()` commands.*

---

## 🛠️ Delete Commands with Explanation

### 1. `db.collection.deleteOne({ filter })`

> 🧹 Deletes **a single document** that matches the specified filter.

```bash
db.survivalAsianSeries.deleteOne({ title: "Mercy for None" })
```

✅ Deletes **one document** where the title is `"Mercy for None"`.

---

### 2. `db.collection.deleteMany({ filter })`

> 🧹 Deletes **all documents** that match a given filter.

#### a) Filter by origin:

```bash
db.survivalAsianSeries.deleteMany({ origin: "Japan" })
```

✅ Deletes all documents where origin is `"Japan"`.

#### b) Filter by genres (array field):

```bash
db.survivalAsianSeries.deleteMany({ genres: "Zombie" })
```

✅ Deletes documents where `"Zombie"` exists in the `genres` array.

#### c) Filter by empty array (no awards):

```bash
db.survivalAsianSeries.deleteMany({ awards: [] })
```

✅ Deletes shows that haven’t won any awards.

---

### 3. `db.collection.drop()`

> ❌ Drops the entire collection — permanently deletes it.

```bash
db.survivalAsianSeries.drop()
```

⚠️ *Deletes the entire `survivalAsianSeries` collection. Cannot be undone.*

---

### 4. `db.dropDatabase()`

> ❌ Drops the currently selected database.

```bash
use survivalAsianDB
db.dropDatabase()
```

⚠️ *Deletes the entire database `survivalAsianDB`. All collections inside it will be removed.*

---

## 🧾 Summary Cheat Sheet

| Command                            | Description                                   |
| ---------------------------------- | --------------------------------------------- |
| `deleteOne({ title: "..." })`      | Delete a specific document using title filter |
| `deleteMany({ origin: "..." })`    | Delete all documents from specific origin     |
| `deleteMany({ genres: "Zombie" })` | Delete all with "Zombie" in genres array      |
| `deleteMany({ awards: [] })`       | Delete documents with no awards               |
| `collection.drop()`                | Drop the entire collection                    |
| `use dbName + db.dropDatabase()`   | Switch to and delete the entire database      |

---

## 📦 Location

This file lives in:

```
DATA-BASE/
└── MongoDB/
    └── 09-DeleteDocument/
        ├── dd.txt           ← command source
        └── README.md        ← documentation
```

---

## 🔗 Main Repository

Explore the full stack learning repository:
👉🏻 [`GrowthCodeLab`](https://github.com/Ash-dot-coder/GrowthCodeLab)

---

## ✍️ Author

**Ayush Kohre**
- 📌 Front-End & Full-Stack Web Developer
- 🔗 GitHub: [Ash-dot-coder](https://github.com/Ash-dot-coder)
- 🎓 Learning MongoDB, CRUD, and real-world backend essentials via GrowthCodeLab

---

> Crafted with 🧠 and 🔧 under **GrowthCodeLab** — designed to turn learning into real development power.

---