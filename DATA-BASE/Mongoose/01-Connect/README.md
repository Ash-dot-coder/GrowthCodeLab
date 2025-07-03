# 📘 Mongoose — `01-Connect`

> A clear and beginner-friendly guide to setting up and establishing a **Mongoose connection** with a MongoDB database using environment variables and modular code structure.  
> Extracted from the folder: `01-Connect` under `DATA-BASE/Mongoose`.

This chapter is a part of the [`DATA-BASE/Mongoose`](https://github.com/Ash-dot-coder/GrowthCodeLab/tree/code/DATA-BASE/Mongoose) section inside the **GrowthCodeLab** repository.

---

## 📂 File Overview

- **FolderName:** `01-Connect`
- **Purpose:** To establish a clean and modular connection between a Node.js application and a MongoDB database using **Mongoose**.

---

## 🧱 Tech Stack & Packages Used

| Package    | Purpose                                |
|------------|----------------------------------------|
| `express`  | Handles server and routing logic       |
| `mongoose` | ODM to interact with MongoDB           |
| `dotenv`   | Loads environment variables securely   |
| `nodemon`  | Auto-restarts the server on changes    |

Installation command:

```bash
npm init -y
npm i express mongoose dotenv
npm i --save-dev nodemon
```

---

## 🛠️ Project Structure Breakdown

```bash
DATA-BASE/
└── Mongoose/
    └── 01-Connect/
        ├── app.js               ← main entry point for Express + DB connect
        ├── db/
        │   └── connectdb.js     ← handles DB connection using Mongoose
        ├── .env                 ← stores sensitive config like PORT & DB_URL
        ├── .gitignore           ← hides node_modules from git tracking
        ├── nodemon.json         ← nodemon watcher configuration
        ├── package.json         ← npm config
        ├── package-lock.json    ← package lockfile
        └── README.md            ← this documentation
```

---

## 📌 Explanation of Key Files

### ✅ `app.js`

* Sets up Express server.
* Loads `.env` config via `dotenv`.
* Connects to MongoDB using `connectDB()` function.
* Starts the server on specified port.
* Fallback defaults are provided in case `.env` values are missing.

---

### ✅ `db/connectdb.js`

* Asynchronous function using `mongoose.connect()`.
* Handles the connection logic and logs connection status.
* Uses modern `useNewUrlParser` and `useUnifiedTopology` options to ensure stability.

---

### ✅ `.env`

* Stores:

  * `PORT`: Which port your Express app should run on.
  * `DATABASE_URL`: Your MongoDB connection string.
* Helps keep credentials and configuration secure and editable.

---

### ✅ `nodemon.json`

* Custom watch behavior for `nodemon`.
* Ignores unnecessary files like `.git`, `node_modules`, etc.
* Helps improve development experience by auto-restarting on code change.

---

### ✅ `.gitignore`

* Ignores `node_modules` and other heavy/irrelevant files from being pushed to GitHub.

---

## 🧠 Mongoose Connect Cheatsheet

| File           | Role                                                        |
| -------------- | ----------------------------------------------------------- |
| `connectdb.js` | Contains the reusable DB connection logic using async/await |
| `app.js`       | Imports and invokes DB connection, starts Express app       |
| `.env`         | Keeps sensitive config like MongoDB URI and port            |
| `nodemon.json` | Makes development smoother by auto-reloading                |

---

## ⚙️ How to Run the Project

# Step 1: Clone this repository
```bash
git clone https://github.com/Ash-dot-coder/GrowthCodeLab.git
```

# Step 2: Navigate to the folder
```bash
cd DATA-BASE/Mongoose/01-Connect
```

# Step 3: Install all dependencies
```bash
npm install
```

# Step 4: Create your .env file
* **.env:**
  * `PORT=1001`
  * `DATABASE_URL="mongodb://127.0.0.1:27017/test"`

# Step 5: Start the server using nodemon
```bash
npx nodemon app.js
```

---

## 🔗 Repository Reference

Explore more projects on Express, MongoDB, JavaScript, React, and Full-Stack Challenges under:
👉🏻 [`GrowthCodeLab`](https://github.com/Ash-dot-coder/GrowthCodeLab)

---

## 👨🏻‍💻 Author

**Ayush Kohre**
* 📌 Full-Stack Web Developer & Creator of GrowthCodeLab
* 🔗 GitHub: [Ash-dot-coder](https://github.com/Ash-dot-coder)
* 🎓 Learning MERN Stack | MongoDB | Mongoose | Real-World Projects

---

> Crafted with 🧠 focus and 💻 clarity under the GrowthCodeLab series.

---