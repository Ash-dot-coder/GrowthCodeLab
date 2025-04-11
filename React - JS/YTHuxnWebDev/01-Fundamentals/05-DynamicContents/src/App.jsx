// // ---------Embedding Dynamic Content---------
// const App = () => {
//   const myName = "Ash WebDev";
//   const multiply = (a, b) => a + b;
//   const specialClass = "simple-class";


//   return (
//     <section>
//       {/* Rendering Expression*/}
//       <p>4 + 4 = {4 + 4}</p>
//       {/* Rendering Variable Value*/}
//       <h1>{myName}</h1>
//       {/* Rendering Array*/}
//       <p>My Batch Mates List: {["Aashish", "Junaid", "Kashyap", "Tejas"]}</p>
//       {/* Rendering Function Value*/}
//       <p>2 * 2 = {multiply(2, 2)}</p>
//       {/* Rendering Class*/}
//       <p className={specialClass}>This is special class</p>
//     </section>
//   )
// }

// export default App;

// ---------Exercises: 
import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";

function App() {
  return (
    <>
      <Greeting />
      <ProductInfo />
    </>
  )
}

export default App;