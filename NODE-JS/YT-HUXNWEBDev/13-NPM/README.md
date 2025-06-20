# 📦 NPM Crash Course with Node.js (ESM + CLI Practice)

This project demonstrates the use of **Node Package Manager (NPM)** — the world's largest code registry — along with practical examples like `nodemon`, `package.json`, global/local dependencies, and `.gitignore`.

You also used `npm init -y` and installed `nodemon` in this project.

---

## 📁 Project Structure

```

13-NPM/
├── 1-NPMIntro/
│   ├── 1_info.txt
│   ├── 2_NPMCommand.txt
│   ├── 3_package.json.txt
│   └── 4_nodemon.txt
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── README.md

````

---

## 🔥 What is NPM?

- `NPM` stands for **Node Package Manager**
- It comes **automatically** installed when you install Node.js.
- It allows you to:
  1. **Reuse your own code**
  2. **Use code written by other developers**
  3. **Share your solutions with the world**

> ✅ Pro Tip: The **higher the weekly downloads**, the more trusted a package is.

---

## 🔎 File: `1_info.txt`

This file explains the **concept of NPM**:

```text
https://npmjs.com/
World's biggest code store 🔥
```

* You can find everything from small utility libraries to massive frameworks like `React`, `Vue`, etc.
* Open source nature = 💪 powerful but also requires judgment.
* You must **evaluate packages** before using them (look at downloads, GitHub stars, last update).

---

## 🧾 File: `2_NPMCommand.txt`

This file contains all the useful CLI commands related to NPM.

### ✅ Checking your NPM version:

```bash
npm -v
npm --version
```

---

### 📍 Installing Local Dependencies:

```bash
npm install <package-name>
npm i <package-name>  # shorthand
```

* Installs package **locally** (only for this project)
* Saved to your `package.json` under `dependencies`

---

### 🌍 Installing Global Dependencies:

```bash
npm install -g <package-name>
sudo npm install -g <package-name>
```

* Installed globally across all projects
* Mostly used for CLI tools like `nodemon`, `eslint`, `create-react-app`

---

### ❌ Uninstalling a Package:

```bash
npm uninstall <package-name>
```

* Removes it from both the project and `package.json`.

---

## 🗂️ File: `3_package.json.txt`

This file describes the **`package.json`**, which is the **manifest file** of your project.

### Why `package.json` is important:

* Keeps track of dependencies
* Stores project metadata (name, version, scripts, etc)
* Allows others to easily install your project using:

```bash
npm install
```

---

### ✅ Create `package.json` file:

```bash
npm init        # step-by-step setup
npm init -y     # quick setup with default values
```

---

### 📦 Package Workflow in Projects:

```bash
1. Create a Git repo
2. Add node_modules to .gitignore
3. Push your code to GitHub
4. Clone it elsewhere
5. Run npm install to get dependencies back
```

---

## 🚀 File: `4_nodemon.txt`

Nodemon is a utility that automatically **restarts your Node.js app** whenever it detects changes in your code.

### ✅ Install nodemon:

```bash
npm install nodemon
```

### 🧠 Why nodemon?

* No need to run `node index.js` again and again
* It **watches your files** and **auto-restarts** on save
* Common for all Node devs in development environment

---

## 📁 .gitignore

You added the `.gitignore` file to exclude `node_modules`, which is the correct practice.

### ✅ Sample `.gitignore`:

```gitignore
/node_modules
```

> This prevents uploading the 3rd party packages to your GitHub repo.
> Others can run `npm install` to get them from `package.json`.

---

## 🛠️ Run Instructions

If you're using `nodemon`, run your project using:

```bash
npx nodemon index.js
```

Or if installed globally:

```bash
nodemon index.js
```

---

## 🤓 Author

**Ayush Kohre**
Practicing Node.js and mastering NPM from scratch 🚀
Clean projects, strong fundamentals, and pro-level structure! 💻

---