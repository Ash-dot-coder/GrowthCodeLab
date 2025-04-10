// import { jsx as _jsx, jsxs as  } from "react/jsx-runtime";
// JSX from BabelJs.io

// import React from 'react'

// const App = () => {
//   return React.createElement("section",
//     {
//       id: "section",
//     },
//     React.createElement("h1", null, "My WebPage"),
//     React.createElement(
//       "article", null,
//       React.createElement("h2",
//         null, "Welcome to React"
//       ),
//       React.createElement(
//         "p",
//         {
//           class: "text",
//         },
//         "Paragraph Content"
//       )
//     )
//   );
// };


// export default App;



import React from 'react'
import WelcomeMessage from './components/WelcomeMessage';

const App = () => {
  return (
    <section id='section'>
      <h1>My WebPage</h1>
      <article>
        <h2>Welcome to React</h2>
        <WelcomeMessage/>
        <p className="text">Paragraph content</p>
      </article>
    </section>
  )
}

export default App;