// React components use props to communicate with each other.
// Every parent component can pass some information to its child components by giving them props.
// Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.


// ------Learning-Practice
// const App = () => {
//   return (
//     <User img="https://avatars.githubusercontent.com/u/170090946?s=400&u=bd9c46f908d88ebeb7ee4ba41b7201d69d22fa68&v=4"
//       name="Ash Dot Coder"
//       age={9}
//       isMarried={false}
//       hobbies={["Coding", "Insta-Scrolling", "Workout", "Sleeping"]} />
//   );
// };

// const User = (props) => {
//   return (
//     <section>
//       <img src={props.img} alt={props.name} width={200} />
//       <h1>Name: {props.name}</h1>
//       <h2>Age: {props.age}</h2>
//       <h3>Is married: {props.isMarried}</h3>
//       <h4>Hobbies: {props.hobbies}</h4>
//     </section>
//   );
// };

// export default App;


// ------Exercise:
import Person from "./components/Person";
import Product from "./components/Product";

function App() {
  return (
    <>
    <img src="https://avatars.githubusercontent.com/u/170090946?s=400&u=bd9c46f908d88ebeb7ee4ba41b7201d69d22fa68&v=4" alt="GitHub-Avatar" width={128}/>
      <Person name="Ash" age={26} />
      <Product name="Nothing" price={45000} />
    </>
  );
};

export default App;