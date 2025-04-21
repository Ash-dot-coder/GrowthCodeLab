import "./App.css";
import SepSt from "./live-Work/2-SeperateStyles/SepSt";
import Is from "./live-Work/1-InlineStyles/Is";
import Ic from "./live-Work/3-Icons/Ic";
import IconComponent from "./Exercise-TaskWork/IconComponent";
import PofileCard from "./Exercise-TaskWork/PofileCard";
import StyledCard from "./Exercise-TaskWork/StyledCard";

const App = () => {
  return (
    <>
      <div style={{ margin: "23px" }}>
        <h1 style={{ backgroundColor: "tomato", color: "teal", fontSize: '2.3rem' }}>Live Work!</h1>
        <Is />
        <Ic />
        <SepSt />
      </div>

      <div style={{ margin: "23px" }}>
        <h1 style={{ backgroundColor: "tomato", color: "teal", fontSize: '2.3rem' }}>Exercise</h1>
        <IconComponent />
        <PofileCard />
        <StyledCard />
      </div>
    </>
  )
}

export default App