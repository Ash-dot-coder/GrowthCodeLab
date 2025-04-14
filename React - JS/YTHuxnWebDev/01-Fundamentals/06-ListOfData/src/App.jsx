// Let's iterate over lists and render them to the DOM.

// Example 1:
// const App = () => {
//   const num = [1, 2, 3, 4, 5];

//   return (
//     <main>
//       {num.map((number) => (
//         <ul key={Math.random()}>
//           <li>{number}</li>
//         </ul>
//       ))}
//     </main>
//   )
// }


// Example 2:
// const App = () => {
//   const userInfo = [
//     {
//       username: "Kashyap",
//       email: "kais@gmail.com",
//       location: "Gujrat",
//     },
//     {
//       username: "Ashish",
//       email: "As@gmail.com",
//       location: "MadhyaPradesh",
//     },
//     {
//       username: "Tejas",
//       email: "Tej@gmail.com",
//       location: "Maharashtra",
//     },
//   ];

//   return (
//     <section>
//       {userInfo.map((user) => (
//         <ul key={Math.random()}>
//           <li>{user.username}</li>
//           <li>{user.email}</li>
//           <li>{user.location}</li>
//         </ul>
//       ))}
//     </section>
//   )
// }


// Example 3: 
// import "YTHuxnWebDev/01-Fundamentals/06-ListOfData/src/Shopping.css"
// import React from 'react'
// import "./Shopping.css";

// const Shopping = ({ items }) => {
//   return (
//     <section>
//       <ol>
//         {items.map((item) => (
//           <li key={Math.random() * 5}>{item}</li>
//         ))}
//       </ol>
//     </section>
//   );
// };

// const App = () => {
//   return (
//     <section>
//       <Shopping items={["Wireless Earbuds", "Power Bank", "New SSd", "Jogger", "Hoddie"]} />
//     </section>
//   );
// };


// -----------Practice-Task:
import React from 'react'
import ProductList from './components/ProductList';
import UserList from './components/UserList';

const App = () => {
  return (
    <>
      <h3>-------Product-List-------</h3>
      <ProductList />
      <h3>-------User-List-------</h3>
      <UserList />
    </>
  )
}

export default App;