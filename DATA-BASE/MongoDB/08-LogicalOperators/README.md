# 📘 MongoDB — `08-LogicalOperator[lo.txt]`

> A well-structured and practical MongoDB reference focused on **logical operators** like `$and`, `$or`, `$in`, `$nin`, `$ne`, etc.  
> Commands extracted from the `08-LogicalOperator / lo.txt` file.

This file is part of the [`DATA-BASE/MongoDB`](https://github.com/Ash-dot-coder/GrowthCodeLab/tree/code/DATA-BASE/MongoDB) directory in the **GrowthCodeLab** repository.

---

## 📂 File Overview

- **FolderName:** `08-LogicalOperator`
- **FileName:** `lo.txt`
- **Purpose:** Contains various MongoDB queries demonstrating real-world usage of logical operators for filtering and querying document collections.

---

## ⚙️ How to Run These Commands

> These queries are meant to be executed inside the **`mongosh` shell**, preferably after inserting a dataset like `survivalAsianSeries`.

### 🔽 Step-by-Step:

1. Open your terminal (Command Prompt, Git Bash, etc.)
2. Run:
   ```bash
   mongosh
```

3. Make sure your working database is selected:

   ```bash
   use myFirstdb
   ```
4. Run the logical queries from `lo.txt`.

✅ **Sample Document Query:**

```bash
db.survivalAsianSeries.find({
  $and: [
    { origin: "South Korea" },
    { genres: "Zombie" }
  ]
})
```

---

## 🛠️ Logical Operators & Usage

### 1. `$and`

🔍 **Find all shows from South Korea AND have "Zombie" genre:**

```bash
db.survivalAsianSeries.find({
  $and: [
    { origin: "South Korea" },
    { genres: "Zombie" }
  ]
})
```

---

### 2. `$in`

🔍 **Find shows with "Zombie" OR "Thriller" genre:**

```bash
db.survivalAsianSeries.find({
  genres: { $in: ["Zombie", "Thriller"] }
})
```

💡 `$in` = Performs an **OR match** among array values.

---

### 3. `$nin`

🔍 **Find shows where genre is NOT "Horror" or "Apocalypse":**

```bash
db.survivalAsianSeries.find({
  genres: { $nin: ["Horror", "Apocalypse"] }
})
```

💡 `$nin` = "Not in" = Excludes all matching values from the result.

---

### 4. `$or`

🔍 **Find shows that are either from Japan OR have "Fantasy" genre:**

```bash
db.survivalAsianSeries.find({
  $or: [
    { origin: "Japan" },
    { genres: "Fantasy" }
  ]
})
```

---

### 5. `$and` + `$gt`

🔍 **Find shows from South Korea AND released after 2020:**

```bash
db.survivalAsianSeries.find({
  $and: [
    { origin: "South Korea" },
    { released: { $gt: 2020 } }
  ]
})
```

---

### 6. `$in` on Arrays

🔍 **Find shows with "Song Kang" OR "Lee Jung-jae" in the cast:**

```bash
db.survivalAsianSeries.find({
  cast: { $in: ["Song Kang", "Lee Jung-jae"] }
})
```

---

### 7. `$ne` with Arrays

🔍 **Find shows that have non-empty `awards` field:**

```bash
db.survivalAsianSeries.find({
  awards: { $ne: [] }
})
```

💡 `$ne` = Not Equal

---

### 8. `$and` on Array Items

🔍 **Find shows with BOTH "Thriller" AND "Drama" genres:**

```bash
db.survivalAsianSeries.find({
  $and: [
    { genres: "Thriller" },
    { genres: "Drama" }
  ]
})
```

✅ This works because MongoDB checks for existence of both values inside the array.

---

### 9. `$ne` on Single Field

🔍 **Find shows NOT from South Korea:**

```bash
db.survivalAsianSeries.find({
  origin: { $ne: "South Korea" }
})
```

---

### 10. `$and` + `$in` + Exact Match

🔍 **Find shows with either "Fantasy" or "Mystery" genre AND released in 2021:**

```bash
db.survivalAsianSeries.find({
  $and: [
    { genres: { $in: ["Fantasy", "Mystery"] } },
    { released: 2021 }
  ]
})
```

---

## 🧾 Summary Cheat Sheet

| Operator | Usage Example                                                                 | Purpose |
| -------- | ----------------------------------------------------------------------------- | ------- |
| `$and`   | Combines multiple filter conditions with AND                                  |         |
| `$or`    | Matches documents that satisfy any one of the conditions                      |         |
| `$in`    | Matches documents where the field’s value is in a specified array             |         |
| `$nin`   | Excludes documents where the field’s value is in a specified array            |         |
| `$ne`    | Matches documents where the field’s value is NOT equal to the specified value |         |
| `$gt`    | Greater than comparison                                                       |         |

---

## 📦 Location

```
DATA-BASE/
└── MongoDB/
    └── 08-LogicalOperator/
        ├── lo.txt           ← command source
        └── README.md        ← documentation
```

---

## 🔗 Main Repository

Explore more in the full stack journey:
👉🏻 [`GrowthCodeLab`](https://github.com/Ash-dot-coder/GrowthCodeLab)

---

## ✍️ Author

**Ayush Kohre**
📌 Front-End & Full-Stack Developer
🔗 GitHub: [Ash-dot-coder](https://github.com/Ash-dot-coder)
🎓 MongoDB | MERN Stack | Self-Learning via GrowthCodeLab

---

> Crafted with 🔍 logic and 💡 clarity — under the **GrowthCodeLab** initiative for mastering full-stack development.

---