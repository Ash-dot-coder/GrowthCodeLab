import './App.css';

// -----Live-Work
// const App = () => {
//   return (
//     <User img="https://avatars.githubusercontent.com/u/170090946?s=400&u=bd9c46f908d88ebeb7ee4ba41b7201d69d22fa68&v=4" name="Ash WebLearner" age={26} isMarried={false} hobbies={["Coding", "Anime", "Overthinking"]} />
//   );
// };

// const User = ({ img, name, age, isMarried, hobbies }) => {
//   return (
//     <section>
//       <img src={img} alt={name} width={200} />
//       <h1>Name: {name}</h1>
//       <h2>Age: {age}</h2>
//       <h3>IsMarried: {isMarried}</h3>
//       <h4>Hobbies: {hobbies}</h4>
//     </section>
//   )
// }
// export default App

// ----Exercice_Task
import Person from './Components/Person';
import Product from './Components/Product';

function App() {
  return (
    <>
      <Person name='Ash' age={26} />
      <Product name="Nothing" price={38700} />
    </>
  )
}

export default App;