// -----JSX RULES-----

// 1. Return a single root element
// To return multiple element from a component, wrap them with a single paretnt tag.
// --Error--
// const App =()=> {
//   return (
//     <section id="section"></section>
//     <h1>Welcome To React(single root element)</h1>
//   )
// }

// 2. Close all the tags
// JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img/>, and wrapping tags like <li>orages must be written as <li> oranges</li>
// --Error--
// const App = () =>{
//   return (
//     <section id="section">
//       <img >
//     </section>
//   )
// }

// 3. ClassName
// Open your DevTools and read the error message - Warning:  Invalid DOM property `class`. Did you mean `className`?
// --Error--
// const App = () => {
//   return (
//     <section class="section">
//       <form>
//         <label htmlFor="name">Name</label>
//         <input type="text" placeholder="Enter Your ID" id="name" />
//       </form>
//     </section>
//   )
// }

// 4. forHTML
// Open your DevTools and read the error message - Warning: Invalid DOM property `For`. Did you mean `htmlFor`?
// const App = () => {
//   return (
//     <section className="section">
//       <form>
//         <label For="name">Name</label>
//         <input type="text" placeholder="Enter Your Code Properly" id="name" />
//       </form>
//     </section>
//   )
// }

// Show:
import JSXRules from "./component/JSXRules";
const App = () => {
  return (
    <JSXRules />
  )
}

export default App;