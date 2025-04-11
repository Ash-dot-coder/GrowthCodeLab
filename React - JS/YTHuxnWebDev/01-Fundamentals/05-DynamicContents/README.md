# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<!-- Exercise-Task -->
### Exercise: Using Dynamic Content with `{}` in JSX

In this exercise, you'll learn how to inject dynamic data into JSX using curly braces `{}`.

#### Step 1: Create a `Greeting` Component

1. Create a new file called `Greeting.jsx`.
2. Inside this file, create a functional component named `Greeting`.
3. The `Greeting` component should return a `<div>` containing:

   - A `<h1>` element that dynamically displays a greeting message.
   - A `<p>` element that dynamically displays the current date.

4. Use JavaScript expressions inside `{}` to dynamically render the following:
   - A `name` variable containing a name, such as `"John"`.
   - A `new Date()` object to display the current date.

#### Step 2: Create a `ProductInfo` Component

1. Create a new file called `ProductInfo.jsx`.
2. Inside this file, create a functional component named `ProductInfo`.
3. The `ProductInfo` component should return a `<div>` that dynamically displays product details:

   - Use a `product` object that contains the following properties:
     - `name`: `"Laptop"`,
     - `price`: `$1200`,
     - `availability`: `"In stock"`

4. Display the product name, price, and availability using `{}`.

#### Step 3: Render Components in `App.jsx`

1. In your `App.jsx` file, import the `Greeting` and `ProductInfo` components:

   ```jsx
   import Greeting from "./Greeting";
   import ProductInfo from "./ProductInfo";
   ```

2. Inside the `App` component's return statement, render both components:

   ```jsx
   function App() {
     return (
       <div>
         <Greeting />
         <ProductInfo />
       </div>
     );
   }

   export default App;
   ```