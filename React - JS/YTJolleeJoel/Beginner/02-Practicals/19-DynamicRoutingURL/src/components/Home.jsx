import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Home() {

    const navi = useNavigate();
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <>

            {posts && posts.map((post) => {
                return (
                    <div key={post.id} className="card m-5" style={{ width: '18rem' }} onClick={() => { navi("/post/" + post.id) }}>
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
                        </div>
                    </div>
                )
            })}

        </>
    )
}

export default Home; 