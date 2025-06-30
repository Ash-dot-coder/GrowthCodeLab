# 📘 MongoDB Basics — `03-Find[f.txt]`

> A beginner-friendly MongoDB reference focused specifically on **data retrieval (finding documents)**, extracted from the `03-Find / f.txt` file.

This file is part of the [`DATA-BASE/MongoDB`](https://github.com/Ash-dot-coder/GrowthCodeLab/tree/main/DATA-BASE/MongoDB) directory under the **GrowthCodeLab** repository.

---

## 📂 File Overview

- **FolderName:** `03-Find`
- **FileName:** `f.txt`
- **Purpose:** To practice and understand various ways to query documents using `.find()` in MongoDB with conditions and projections.

---

## ⚙️ How to Run These Commands

> These MongoDB commands are meant to be executed inside the **`mongosh` shell**.

### 🔽 Step-by-Step:

1. **Open your terminal** (Command Prompt, Git Bash, etc.)
2. Launch MongoDB shell by running:
   ```bash
   mongosh
```

3. Select your database (e.g., `use animeDB`)
4. Run the `.find()` queries from `f.txt`.

✅ **Example Usage:**

```bash
> use animeDB
> db.animeCharacters.find()
> db.animeCharacters.find({ name: "Monkey D. Luffy" })
```

📌 *Ensure your MongoDB instance is running and the collection exists with sample documents.*

---

## 🛠️ Commands with Explanation

### 1. `db.animeCharacters.find()`

> 🔍 Fetches **all documents** from the `animeCharacters` collection.

```bash
db.animeCharacters.find()
```

📌 \*Equivalent to "SELECT *" in SQL.*

---

### 2. `db.animeCharacters.find({ "name": "Monkey D. Luffy" })`

> 🔎 Returns the document(s) where the `name` field is exactly `"Monkey D. Luffy"`.

```bash
db.animeCharacters.find({ "name": "Monkey D. Luffy" })
```

📌 *Use this to filter documents by a specific value.*

---

### 3. `db.animeCharacters.find({ "name": "Naruto Uzumaki", "age": 33 })`

> 🔍 Finds documents that **match both** the `name` and `age` fields.

```bash
db.animeCharacters.find({ "name": "Naruto Uzumaki", "age": 33 })
```

📌 *Works as an AND condition.*

---

### 4. `db.animeCharacters.find({ "name": "Monkey D. Luffy" }, { "name": 1 })`

> 📌 Returns the `"name"` field **only** for matching documents.

```bash
db.animeCharacters.find({ "name": "Monkey D. Luffy" }, { "name": 1 })
```

✅ *The `_id` field is included by default unless excluded.*

---

### 5. `db.animeCharacters.find({ "name": "Naruto Uzumaki" }, { "name": 0 })`

> ❌ Excludes the `"name"` field while returning **all other fields** for matching documents.

```bash
db.animeCharacters.find({ "name": "Naruto Uzumaki" }, { "name": 0 })
```

📌 *Great for excluding sensitive or unnecessary data from output.*

---

### 6. `db.animeCharacters.find({}, { "name": 1 })`

> 🔎 Fetches **only the names** of all characters from the collection.

```bash
db.animeCharacters.find({}, { "name": 1 })
```

✅ *Use this when you want to display a list of names only.*

---

## 🧾 Summary Cheat Sheet

| Command                                                        | Description                              |
| -------------------------------------------------------------- | ---------------------------------------- |
| `db.animeCharacters.find()`                                    | Get all documents from the collection    |
| `db.animeCharacters.find({ "name": "Luffy" })`                 | Get documents matching specific name     |
| `db.animeCharacters.find({ "name": "Naruto", "age": 33 })`     | Match documents with multiple fields     |
| `db.animeCharacters.find({ "name": "Luffy" }, { "name": 1 })`  | Include only name field                  |
| `db.animeCharacters.find({ "name": "Naruto" }, { "name": 0 })` | Exclude name field, show everything else |
| `db.animeCharacters.find({}, { "name": 1 })`                   | Show only name field for all documents   |

---

## 📦 Location

This file lives in:

```
DATA-BASE/
└── MongoDB/
    └── 03-Find/
        ├── f.txt           ← command source
        └── README.md       ← documentation
```

---

## 🔗 Main Repository

Explore more from the full stack journey:
👉🏻 [`GrowthCodeLab`](https://github.com/Ash-dot-coder/GrowthCodeLab)

---

## ✍️ Author

**Ayush Kohre**
📌 Front-End & Full-Stack Web Developer
🔗 GitHub: [Ash-dot-coder](https://github.com/Ash-dot-coder)
🎓 Learning journey via GrowthCodeLab | MERN Stack | MongoDB Querying Essentials

---

> Crafted with ❤️ and 📖 under GrowthCodeLab — empowering developers through clear, practical learning.

---