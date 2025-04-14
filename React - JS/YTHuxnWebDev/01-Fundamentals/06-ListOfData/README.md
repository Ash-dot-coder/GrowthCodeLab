# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- Exercise-Task -->

### Exercise: Rendering a List of Data with `.map()`

In this exercise, you will learn how to render a list of items using the `.map()` method in JSX.

#### Step 1: Create a `UserList` Component

1. Create a new file called `UserList.jsx`.
2. Inside this file, create a functional component called `UserList`.
3. In the component, create a `users` array with the following objects, where each object represents a user with `id`, `name`, and `age`:

   ```javascript
   const users = [
     { id: 1, name: "Tejas", age: 22 },
     { id: 2, name: "Junaid", age: 23 },
     { id: 3, name: "Kashyap", age: 21 },
   ];
   ```

4. Use the `.map()` method to render a list of users. Each user's `name` and `age` should be displayed inside a `<div>` element. Use the `id` as the unique `key` for each list item.

#### Step 2: Create a `ProductList` Component

1. Create a new file called `ProductList.jsx`.
2. Inside this file, create a functional component called `ProductList`.
3. Create a `products` array with the following objects, where each object represents a product with `id`, `name`, and `price`:

   ```javascript
   const products = [
     { id: 1, name: "Nothing earbud 3a", price: "$328" },
     { id: 2, name: "CMF Nothing SmartWatch 1", price: "$373" },
     { id: 3, name: "Nothing Glass", price: "$289" },
   ];
   ```

4. Use the `.map()` method to render the list of products. Each product’s `name` and `price` should be displayed inside a `<div>` element. Use the `id` as the `key` for each product.

#### Step 3: Render the Components in `App.jsx`

1. In your `App.jsx` file, import the `UserList` and `ProductList` components:

   ```jsx
   import ProductList from "./components/ProductList";
   import UserList from "./components/UserList";
   ```

2. Inside the `App` component's return statement, render both the `UserList` and `ProductList` components:

   ```jsx
   function App() {
     return (
       <div>
         <UserList />
         <ProductList />
       </div>
     );
   }

   export default App;
   ```
