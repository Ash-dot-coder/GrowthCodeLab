# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<!-- Exercise-Task -->
### JSX Rules Exercise

In this exercise, you will learn and apply the core rules of writing JSX in React.

#### Step 1: Create a New Component

1. Create a new file called `JSXRules.jsx`.
2. Inside this file, write a functional component called `JSXRules`.

The component should return a `<div>` containing the following:

- A `<h1>` element with the text `"JSX Rules"`.

- A paragraph (`<p>`) that lists at least 3 rules of JSX:
  - JSX must return a **single parent element**.
  - JSX elements must be **properly closed**.
  - JSX attributes are written using **camelCase** (e.g., `className` instead of `class`).