# 📘 MongoDB — `07-UpdateArray [ua.txt]`

> A clean and beginner-friendly reference for **updating array fields** in MongoDB documents using operators like `$push`, `$addToSet`, and `$pull`.  
> Extracted from the file: `ua.txt` in `07-UpdateArray` directory.

This module is a part of the [`DATA-BASE/MongoDB`](https://github.com/Ash-dot-coder/GrowthCodeLab/tree/code/DATA-BASE/MongoDB) section under the **GrowthCodeLab** repository.

---

## 📂 File Overview

- **FolderName:** `07-UpdateArray`
- **FileName:** `ua.txt`
- **Purpose:** To explore and perform various array operations using MongoDB shell — including adding, removing, or conditionally updating array elements.

---

## ⚙️ How to Run These Commands

> These commands are written for the **MongoDB Shell (`mongosh`)** environment.

### 🔽 Step-by-Step:

1. Open your terminal or shell
2. Run:
   ```bash
   mongosh
```

3. Once inside, make sure you're using the correct database:

   ```bash
   use yourDatabaseName
   ```
4. Copy and run the array operations listed below.

✅ **Sample Usage:**

```js
db.survivalAsianSeries.updateOne(
  { title: "Squid Game" },
  { $push: { awards: "Golden Globe" } }
)
```

---

## 🛠️ Array Update Commands with Explanation

### 1. ➕ `$push`: Add One Item to Array

> Push a new award to the `awards` array of *Squid Game*

```js
db.survivalAsianSeries.updateOne(
  { title: "Squid Game" },
  { $push: { awards: "Golden Globe" } }
)
```

📌 *Push always adds the item to the end of the array, even if it already exists.*

---

### 2. ➕ `$push` with `$each`: Add Multiple Items

> Push multiple genres to *Mercy for None*

```js
db.survivalAsianSeries.updateOne(
  { title: "Mercy for None" },
  { $push: { genres: { $each: ["Psychological", "Suspense"] } } }
)
```

📌 *Using `$each` allows you to push multiple values in one go.*

---

### 3. ✳️ `$addToSet`: Add Only If Not Present

> Add a cast member to *Kingdom* only if not already in array

```js
db.survivalAsianSeries.updateOne(
  { title: "Kingdom" },
  { $addToSet: { cast: "Jun Ji-hyun" } }
)
```

📌 *Prevents duplicates by adding only if the value is not already present.*

---

### 4. ❌ `$pull`: Remove Specific Item

> Remove the genre *"Monster"* from *Sweet Home*

```js
db.survivalAsianSeries.updateOne(
  { title: "Sweet Home" },
  { $pull: { genres: "Monster" } }
)
```

📌 *Removes the first match of the value from the array.*

---

### 5. ❌ `$pull` with `$in`: Remove Multiple Items

> Pull multiple actors from a *cast* array using `_id`

```js
db.survivalAsianSeries.updateOne(
  { _id: ObjectId("653af91d1a8f3b23d45e6c91") },
  { $pull: { cast: { $in: ["Actor A", "Actor B"] } } }
)
```

📌 *Efficient way to remove multiple entries at once.*

---

### 6. 🆕 `$set`: Create New Array Field

> Add `languages` field as array to all South Korean shows

```js
db.survivalAsianSeries.updateMany(
  { origin: "South Korea" },
  { $set: { languages: ["Korean"] } }
)
```

📌 *Not strictly an array update operator, but helpful when starting a new array field.*

---

## 🧠 Quick Operator Reference

| Operator    | Description                                       |
| ----------- | ------------------------------------------------- |
| `$push`     | Adds a new value to the end of an array           |
| `$each`     | Adds multiple values via `$push` in one operation |
| `$addToSet` | Adds value only if it does not already exist      |
| `$pull`     | Removes a specific value or multiple values       |
| `$in`       | Used with `$pull` to match multiple values        |
| `$set`      | Adds new field or overwrites existing field       |

---

## 📦 Folder Structure

```
DATA-BASE/
└── MongoDB/
    └── 07-UpdateArray/
        ├── ua.txt           ← command source
        └── README.md        ← documentation
```

---

## 🔗 Repository Reference

Explore more MongoDB tasks, Express projects, JavaScript challenges and more at:
👉🏻 [`GrowthCodeLab`](https://github.com/Ash-dot-coder/GrowthCodeLab)

---

## ✍️ Author

**Ayush Kohre**
📌 Front-End & Full-Stack Web Developer
🔗 GitHub: [Ash-dot-coder](https://github.com/Ash-dot-coder)
🎓 Learning MongoDB | MERN Stack | GrowthCodeLab Community

---

> Crafted with clarity 💻 and curiosity 🧠 under the GrowthCodeLab Series.

---