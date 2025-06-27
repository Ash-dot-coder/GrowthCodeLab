Absolutely Ayush! Here's your **professionally structured**, **deeply explained**, and **visually organized** `README.md` for the `10-PostmanTesting` project — including:

* `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, `OPTIONS`
* Postman usage with examples
* Full explanation of **why we use each HTTP method**
* ✅ Cheat Sheet + Summary
* 🎯 “What You Learn” section

---

```markdown
# 🚀 Postman API Testing with Express.js  
## 🎯 Project Name: **Postman Testing**

This project is a practical playground for testing **all essential HTTP methods** using **Express.js** and **Postman**.

It covers:

- 🔹 API creation with Express
- 🔹 API method simulation (GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS)
- 🔹 Postman usage for testing requests & analyzing responses
- 🔹 Cheat sheets and developer tips

This hands-on project makes API testing easier to understand for beginners and developers alike.

---

## 📁 Folder Structure

```

10-PostmanTesting/
├── node\_modules/       # 📦 Auto-generated dependencies
├── index.js            # 🚀 All HTTP routes implemented here
├── nodemon.json        # 🔁 Nodemon config for auto reload
├── package.json        # 📜 Project metadata + start/dev scripts
├── package-lock.json   # 🔒 Dependency lock file
├── .gitignore          # 🛑 Git ignore settings
└── readme.md           # 📘 This file with all explanations

````

> ⚠️ `node_modules/` is ignored via `.gitignore`.

---

## 🧰 Installation & Setup

### Step 1: Initialize Node Project

```bash
npm init -y
````

### Step 2: Install Required Packages

```bash
npm install express             # Main framework
npm install --save-dev nodemon  # Dev-only tool for auto-restarting server
```

---

## ⚙️ Scripts in `package.json`

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

To run the app:

```bash
npm run dev
```

---

## 📄 Nodemon Configuration

`nodemon.json`

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

✅ This helps:

* Ignore heavy system files & Git repo folders
* Avoid nodemon errors on Windows
* Enable smooth auto-reloading on file save

---

## 🔗 Server Code – `index.js`

```js
import express from "express";
const app = express();
const port = 1010;

app.get("/get", (req, res) => {
  res.send("<h1>GET</h1>");
});

app.post("/post", (req, res) => {
  res.send("<h1>POST</h1>");
});

app.put("/put", (req, res) => {
  res.send("<h1>PUT</h1>");
});

app.patch("/patch", (req, res) => {
  res.send("<h1>PATCH</h1>");
});

app.delete("/delete", (req, res) => {
  res.send("<h1>DELETE</h1>");
});

app.head("/head", (req, res) => {
  res.status(200).end(); // HEAD should not send a body
});

app.options("/options", (req, res) => {
  res.set("Allow", "GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD");
  res.status(204).send(); // 204 = No Content
});

app.listen(port, () =>
  console.log(`Server UP on http://localhost:${port}`)
);
```

---

## 🧪 Test Using Postman

Postman is used to:

* Send requests to your local server
* Choose request method (GET, POST, etc.)
* See raw responses and status codes

---

## 📚 HTTP Methods Deep Dive

| Method      | Description                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------------- |
| **GET**     | Fetch data. No body required.                                                                              |
| **POST**    | Send data to create a new record.                                                                          |
| **PUT**     | Replace entire resource.                                                                                   |
| **PATCH**   | Update part of a resource.                                                                                 |
| **DELETE**  | Remove a resource.                                                                                         |
| **HEAD**    | Same as GET, but returns **headers only** (no body). Useful for checking if a resource exists.             |
| **OPTIONS** | Ask the server which HTTP methods are supported. Used for **CORS** and **preflight requests** in browsers. |

---

## 📌 Sample Endpoints to Test in Postman

| Method  | URL                             | What it Does                              |
| ------- | ------------------------------- | ----------------------------------------- |
| GET     | `http://localhost:1010/get`     | Fetches a GET response                    |
| POST    | `http://localhost:1010/post`    | Simulates sending data                    |
| PUT     | `http://localhost:1010/put`     | Replaces resource                         |
| PATCH   | `http://localhost:1010/patch`   | Partially updates data                    |
| DELETE  | `http://localhost:1010/delete`  | Removes a resource                        |
| HEAD    | `http://localhost:1010/head`    | Returns only **headers**, not body        |
| OPTIONS | `http://localhost:1010/options` | Returns allowed HTTP methods (Allow: ...) |

> Use the dropdown in Postman to change the request method before hitting **Send**.

---

## 🧠 HEAD & OPTIONS – Why Important?

### 🧵 HEAD:

* ✅ Used to fetch metadata without transferring body
* Used in **web crawlers**, **caching**, or **health checks**
* Same headers as GET, but with zero content
* Postman will show no body in response, only headers

### ⚙ OPTIONS:

* Sent by browsers during **CORS preflight**
* Server responds with `Allow:` header
* Tells client what methods (GET, POST, etc.) are allowed

```http
Allow: GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD
```

> Without OPTIONS, modern browsers will block API calls due to CORS restrictions.

---

## 📌 Developer Tips

* Always end HEAD requests with `.status().end()` instead of `.send()`
* Use `OPTIONS` especially for secured/public APIs
* Postman helps analyze response structure, headers, and status codes visually

---

## 🔄 Summary Cheat Sheet

| Concept         | Usage                            |
| --------------- | -------------------------------- |
| Init Project    | `npm init -y`                    |
| Install Express | `npm install express`            |
| Dev Tool        | `npm install --save-dev nodemon` |
| Start Script    | `npm run start`                  |
| Dev Script      | `npm run dev`                    |
| Head Method     | Check headers only, no body      |
| Options Method  | Show allowed HTTP methods        |
| Postman Test    | GUI for all request methods      |
| Server Port     | `http://localhost:1010`          |

---

## 🎓 What You Learned From This Project

✅ **Real-World HTTP Methods**
Understand how frontend and backend communicate using different verbs (GET, POST, etc.)

✅ **Postman Testing Mastery**
You can now test endpoints like a pro — even advanced ones like HEAD and OPTIONS.

✅ **CORS Awareness**
Got insight into how OPTIONS request helps prevent blocked API calls.

✅ **Express.js Routing Logic**
Learned how to define routes for each HTTP method easily.

✅ **Clean Project Setup**
Learned how to use `nodemon`, `.gitignore`, and structure for real-world projects.

---

## 🧑‍💻 Author

**Ayush Kohre**
Backend Developer | API Learner | Full-Stack Explorer

> 🚀 “The more you test, the deeper you understand.”
> 📦 Keep building. Keep testing. Keep leveling up.

---

## 📘 Useful Docs & References

* [Express Routing](https://expressjs.com/en/guide/routing.html)
* [Postman Docs](https://learning.postman.com/docs/)
* [MDN HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
* [MDN HEAD](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD)
* [MDN OPTIONS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS)

---