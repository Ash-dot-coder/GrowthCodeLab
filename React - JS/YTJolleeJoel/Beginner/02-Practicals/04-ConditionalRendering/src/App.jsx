import './App.css'
import Course from './components/course/Course'
import html from './assets/html.png'
import css from './assets/css.png'
import js from './assets/js.png'
import react from './assets/react.png'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      {/* { <Navbar /> } */}
      <Course img={html} title={1000} description="Level-up the HTML Base" price='$37' show={true}/>
      <Course img={css} title="CSS Base" description="Level-up the CSS Base" price='$78' />
      <Course img={js} title="JS Base" description="Level-up the JS Base" price='$118' show={true} />
      <Course img={react} title="REACT Base" description="Level-up the REACT Base" price='$278' show={true} />
    </>
  )
}

export default App
