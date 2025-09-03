import { Link } from "react-router-dom";
import Createac from "./Createac";
import { createContext } from "react";

export const dataProvider = createContext();

function Home() {

    const data = "----Data----"

    return (
        <>
            <dataProvider.Provider value={data}>
                <Createac />
            </dataProvider.Provider>

            <h2 style={{ textTransform: "uppercase" }}>This is HomePage</h2>
            <a href="/signup" className="btn btn-primary">Sign-up</a>
            <Link className="btn btn-danger" to="/signup">Sign-up</Link>
        </>
    )
}

export default Home;