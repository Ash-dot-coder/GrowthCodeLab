import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <h2 style={{ textTransform: "uppercase" }}>This is HomePage</h2>
            <a href="/signup" className="btn btn-primary">Sign-up</a>
            <Link className="btn btn-danger" to="/signup">Sign-up</Link>
        </>
    )
}

export default Home;