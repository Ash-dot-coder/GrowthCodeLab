// Adding syles
// I. Use double curly braces{{property: value}}
// you'd also neet to use camelCase convention for styling.

// const App = () => {
//   return (
//     <section>
//       <h1 style={{ color: "white", backgroundColor: "teal", padding: "2rem" }}>Inline Style</h1>
//     </section>
//   )
// }

// export default App

// II. Seperate styles and then interpolate it.
const Is = () => {
    const styles = { color: "#1d1d1d", background: "teal", padding: "2rem", borderRadius: ".8em .4em" };

    return (
        <h1 style={styles}>Inline Style with Seperate</h1>
    )
}

export default Is;