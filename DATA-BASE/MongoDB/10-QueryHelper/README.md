# 📘 MongoDB Queries & Helpers — `10-QueryHelper[qh.txt]`

> A clean and beginner-friendly reference focused on **fetching and deletion operations** in MongoDB, derived from the `10-QueryHelper/qh.txt` file.

This file is part of the [`DATA-BASE/MongoDB`](https://github.com/Ash-dot-coder/GrowthCodeLab/tree/code/DATA-BASE/MongoDB) directory under the **GrowthCodeLab** repository.

---

## 📂 File Overview

- **FolderName:** `10-QueryHelper`
- **FileName:** `qh.txt`
- **Purpose:** To store useful query patterns and helper commands for fetching and deleting data from collections.

---

## ⚙️ How to Run These Commands

> These MongoDB commands are intended to be executed inside the **`mongosh` shell**.

### 🔽 Step-by-Step:

1. **Open your terminal** (Command Prompt, Git Bash, etc.)
2. Launch MongoDB shell:
   ```bash
   mongosh
```

3. Select your working database:

   ```bash
   use survivalDB
   ```

4. Start running commands from `qh.txt`.

✅ **Example:**

```bash
> const results = db.survivalAsianSeries.find().toArray()
> console.table(results)
> db.survivalAsianSeries.deleteOne.help()
> db.survivalAsianSeries.deleteMany.help()
```

📌 *Ensure your MongoDB server is running locally and that the correct collection name exists.*

---

## 🛠️ Commands with Explanation

### 1. `db.collection.find().toArray()`

> 📦 Fetches **all documents** from the specified collection and returns them as a JavaScript array.

```js
const results = db.survivalAsianSeries.find().toArray()
console.table(results)
```

📌 *Using `console.table()` gives a cleaner visual representation in tabular form — great for debugging and readability.*

---

### 2. `db.collection.deleteOne.help()`

> 🆘 Displays the **documentation and syntax help** for the `deleteOne()` method.

```js
db.survivalAsianSeries.deleteOne.help()
```

📌 *This method is used to delete a **single** document that matches the specified filter.*

---

### 3. `db.collection.deleteMany.help()`

> 🆘 Displays the **documentation and syntax help** for the `deleteMany()` method.

```js
db.survivalAsianSeries.deleteMany.help()
```

📌 *This method is used to delete **multiple** documents that match the given filter.*

---

## 🧾 Summary Cheat Sheet

| Command                           | Description                                   |
| --------------------------------- | --------------------------------------------- |
| `find().toArray()`                | Fetch all documents in array form             |
| `console.table(results)`          | Print fetched data in a readable table format |
| `db.collection.deleteOne.help()`  | Help doc for deleting a single document       |
| `db.collection.deleteMany.help()` | Help doc for deleting multiple documents      |

---

## 📦 Location

This file lives in:

```
DATA-BASE/
└── MongoDB/
    └── 10-QueryHelper/
        ├── qh.txt           ← command source
        └── README.md        ← documentation
```

---

## 🔗 Main Repository

Explore more from the complete self-learning roadmap:
👉🏻 [`GrowthCodeLab`](https://github.com/Ash-dot-coder/GrowthCodeLab)

---

## ✍️ Author

**Ayush Kohre**
- 📌 Full-Stack Developer | MERN Stack Enthusiast
- 🔗 GitHub: [Ash-dot-coder](https://github.com/Ash-dot-coder)
- 🎓 Documented under GrowthCodeLab | MongoDB Mastery Series

---

> Crafted with clarity and care 💡 to make learning MongoDB practical, hands-on, and beginner-friendly.

---