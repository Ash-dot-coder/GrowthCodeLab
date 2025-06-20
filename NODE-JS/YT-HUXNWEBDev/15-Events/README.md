# 🎯 Node.js EventEmitter Example (CommonJS)

This project demonstrates how to use the built-in `events` module in Node.js using **CommonJS** syntax. It focuses on the `EventEmitter` class and explains how to listen to and emit custom events — with arguments and multiple listeners.

---

## 🧠 What is the `events` module?

The `events` module is a core part of Node.js that allows you to create, listen to, and emit custom events using the `EventEmitter` class. It follows the **Observer pattern**, which means different parts of your app can "react" to things as they happen.

---

## 📦 Project Setup

```bash
npm init -y
```

This sets up your `package.json` for managing dependencies and project metadata.

No external packages are needed — `events` is a **built-in Node.js module**.

---

## 📄 Code Explanation (Line by Line)

### 1. `const EventEmitter = require("events");`

* This imports the `EventEmitter` class from the built-in `events` module.
* It's written in **CommonJS** syntax (`require`), which is default in Node.js (unless using `"type": "module"`).

---

### 2. `const customEmitter = new EventEmitter();`

* Creates an instance of the `EventEmitter` class.
* This `customEmitter` object is used to register listeners and emit events.

---

### 3. `customEmitter.on("response", (name, id) => { ... });`

* Registers an event listener for the `"response"` event.
* The callback receives arguments when the event is emitted (in this case, `name` and `id`).
* ✅ `on()` is used to **listen** or **subscribe** to events.

```js
customEmitter.on("response", (name, id) => {
  console.log(`data received user ${name} with:${id}`);
});
```

---

### 4. Another listener for the same `"response"` event:

```js
customEmitter.on("response", () => {
  console.log("Some other logic here");
});
```

* You can register **multiple listeners** to the same event.
* They will be called in the order they were registered.
* Useful for modular logic — breaking things into multiple responsibilities.

---

### 5. `customEmitter.emit("response", "Katshu", 27);`

* This **triggers** (or emits) the `"response"` event.
* Any function registered using `.on("response", ...)` will be executed.
* You can pass arguments (`"Katshu"` and `27`), which are received by the listener callbacks.

---

## 🧪 Output

```bash
data received user Katshu with:27
Some other logic here
```

> All listeners for `"response"` event are triggered in the order they were registered.

---

## 🧩 Key Concepts

| Concept            | Method                       | Description                            |
| ------------------ | ---------------------------- | -------------------------------------- |
| Listen/Register    | `on(eventName, callback)`    | Attach a listener function             |
| Emit               | `emit(eventName, [...args])` | Trigger the event and pass arguments   |
| Multiple Listeners | ✅ Yes                        | All are executed in registration order |
| Arguments          | ✅ Yes                        | Pass any data when emitting an event   |

---

## 📁 File Structure

```
15-Events/
├── index.js
├── package.json
└── README.md
```

---

## 🤓 Author

**Ayush Kohre**
Practicing Node.js internals like `events` with pure focus 💻
Building foundations strong 💪

---

## ✨ BONUS: `index.js` with Explanation Comments

```js
const EventEmitter = require("events"); // Import EventEmitter class from Node.js

// Creating an instance of EventEmitter
const customEmitter = new EventEmitter();

// Listener 1: Logs user data with name and id
customEmitter.on("response", (name, id) => {
  console.log(`data received user ${name} with:${id}`);
});

// Listener 2: Additional logic for the same event
customEmitter.on("response", () => {
    console.log("Some other logic here");
});

// Emitting the event called "response" with arguments
customEmitter.emit("response", "Katshu", 27);
```

---