import './App.css'
import Greeting from './component/Greeting';
import UserStatus from './component/UserStatus'
import Weather from './component/Weather';

// ---------Live Work

// ------Example - 1 (IF)
// const ValidPassword = () => <h1>Valid Password</h1>;
// const InvalidPassword = () => <h1>Invalid Password</h1>;

// const Password = ({ isValid }) => {
//   if (isValid) {
//     return <ValidPassword />;
//   }
//   return <InvalidPassword />
// };

// const App = () => {
//   return (
//     <section>
//       <Password isValid={true} />
//     </section>
//   )
// }
// export default App

// --------Example - 2(&&)
// function Cart() {
//   const items = ["Nothing Phone 1", "Boat earbuds", "MI Band 3", "Zebronics Mouse"];

//   return (
//     <>
//       <h1>Card 🛒</h1>
//       {items.length > 0 && <h2>You have {items.length} items in your Cart.</h2>}
//       <ul>
//         <h4>👇Products</h4>
//         {items.map((item) => (
//           <li key={Math.random()}>{item}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

// const App = () => <Cart />;
// export default App;

// ------------Example - 3(Ternary Operator)
// Condition ? true : false
// const ValidPassword = () => <h1>Valid Password</h1>
// const InvalidPassword = () => <h1>Invalid Password</h1>

// const Password = ({ isValid }) => isValid ? <ValidPassword /> : <InvalidPassword />;

// const App = () => {
//   return (
//     <section>
//       <Password isValid={true} />
//     </section>
//   )
// }

// export default App;

// ----------Exercise---------
function App() {
  return (
    <>
      <Weather />
      <UserStatus loggedIn={true} isAdmin={false} />
      <Greeting timeOfDay="morning" />
    </>
  )
}

export default App;