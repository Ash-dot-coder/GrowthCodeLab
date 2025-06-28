# 🗂️ Serving Static Files with Express.js  
## 📝 Cheat Sheet & Beginner-to-Advanced Learning Notes 📒

This project demonstrates how to **serve static files** like `HTML`, `CSS`, `JS`, and `images` using **Express.js** and the built-in `express.static()` middleware.

You’ll learn how the server delivers frontend assets to the browser efficiently, making Express act like a mini web server. We also include an interactive frontend page for testing this flow.

---

## 📁 Folder Structure with Descriptions

```

12-ServingStaticFiles/
├── node_modules/       # 📦 Installed dependencies (auto-generated)
├── public/             # 🖼️ Public folder (served statically)
│   ├── index.html      # 🌐 Frontend HTML file
│   ├── app.js          # 🧠 Frontend JS (runs in browser)
│   ├── style.css       # 🎨 Frontend styling
│   └── squi-g.png      # 🖼️ Image used on the HTML page
├── index.js            # 🚀 Main server file (Express backend)
├── nodemon.json        # 🔁 Nodemon config
├── package.json        # 📜 Project metadata + scripts
├── package-lock.json   # 🔒 Locked dependency versions
├── .gitignore          # 🛑 Prevents unnecessary files from being pushed
└── readme.md           # 📘 This file — documentation & explanation

```

> `public/` is exposed to the browser as a static directory

---

## 📦 What is `express.static()`?

### 🔎 Definition:
`express.static()` is a built-in middleware function in Express.  
It serves **static files** such as:
- HTML pages
- CSS files
- Client-side JavaScript files
- Images (JPEG, PNG, SVG)
- Fonts, videos, etc.

### 📂 Usage:

```js
app.use(express.static("./public"));
```

> This line tells Express:
> “Whatever is inside `public/`, serve it to the browser as-is.”

So, for example:

* Visiting `/` serves `index.html`
* Accessing `/style.css` serves the CSS file
* Clicking the button triggers `app.js`

---

## 🔧 Installation & Setup (Step-by-Step)

### Step 1: Initialize Node Project

```bash
npm init -y
```

### Step 2: Install Required Packages

```bash
npm install express             # Core framework
npm install --save-dev nodemon  # For auto-reloading during dev
```

---

## ⚙️ Scripts Setup in `package.json`

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

Run your server with:

```bash
npm run dev
```

---

## 🔄 Nodemon Configuration

📄 `nodemon.json`

```json
{
  "watch": ["./"],
  "ignore": [
    "C:\\\\DumpStack.log.tmp",
    "node_modules",
    ".git"
  ],
  "ext": "js,json",
  "legacyWatch": true
}
```

✅ This helps prevent unnecessary restarts and fixes file-lock issues on Windows.

---

## 🚀 Express Server Code (Backend)

📁 `index.js`

```js
const path = require("path");
const express = require("express");
const app = express();
const port = 1012;

// Serve all files inside public/ folder statically
app.use(express.static("./public"));

// Optional route for root request — serves index.html
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/index.html"));
});

app.listen(port, () => console.log(`Listening on PORT:${port}`));
```

---

## 🌐 Frontend Files — Explained

### 📝 `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Hey-JS</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>Just a Page 📃👁‍🗨</h1>
  <img src="squi-g.png" alt="squidGame Image" />
  <button>Front-End JS</button>
  <script src="app.js"></script>
</body>
</html>
```

### 🎨 `style.css`

```css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: rgb(21, 21, 21);
}

body h1 {
  font-family: sans-serif;
  margin-bottom: 20px;
  color: #fff;
}

img {
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
}
```

### 🧠 `app.js`

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  alert("This alert is coming from Front End JS");
});
```

---

## 🧪 How It Works (Browser Flow)

| Step | Action                              | Result                                        |
| ---- | ----------------------------------- | --------------------------------------------- |
| 1️⃣  | User visits `http://localhost:1012` | Express serves `index.html`                   |
| 2️⃣  | Browser parses the HTML             | Loads `style.css`, `squi-g.png`, and `app.js` |
| 3️⃣  | CSS applied to page                 | UI becomes styled                             |
| 4️⃣  | JS adds click event                 | Clicking button shows alert                   |
| 5️⃣  | Image loaded                        | Displayed as circular avatar                  |

---

## 🧠 Summary Cheat Sheet

| Concept           | Code / Example                    | Purpose                             |
| ----------------- | --------------------------------- | ----------------------------------- |
| Static Middleware | `express.static("./public")`      | Serves frontend files like HTML/CSS |
| Route Handling    | `res.sendFile(path.resolve(...))` | Sends specific HTML manually        |
| Nodemon Setup     | `npm run dev`                     | Auto restarts server on file change |
| Folder Structure  | `public/`                         | Default static directory            |
| Frontend JS       | `app.js` file                     | Adds interactivity to HTML          |

---

## ✅ What You’ll Learn from This Project

1. **How Express can serve frontend files**
2. Proper **folder structure** for full-stack (front + back)
3. Use of `express.static()` to serve:

   * HTML
   * CSS
   * JS
   * Images
4. Setting up and configuring **Nodemon** correctly
5. How **frontend and backend** communicate during static serving
6. **Postman is NOT required here** — since it’s a browser-facing project

---

## 🔚 Final Thoughts

This is a foundational mini-project that bridges **frontend and backend** using static file serving — a core skill every full-stack developer needs.

You now know how to:

* Structure folders properly
* Serve a real webpage using Express
* Handle static resources
* Use dev tools like nodemon efficiently

🧠 This builds a strong base before jumping into dynamic routing, template engines (like EJS), or full REST APIs.

---

## 👨🏻‍💻 Author

**Ayush Kohre**
Backend + Frontend explorer.
Making real-world learning simple & clear 🌟

> 💻 Express.js ✅ | Static Files ✅ | Front-End + Back-End Synergy ✅

---

## 📘 Useful Docs

* [Express.js Static Middleware](https://expressjs.com/en/starter/static-files.html)
* [MDN - HTML basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
* [Node.js Docs](https://nodejs.org/en/docs/)
* [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---