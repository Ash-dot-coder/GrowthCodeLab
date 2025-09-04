import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Post() {

    const { id } = useParams();
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + id)
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <>
            {
                posts && <div>

                    <h2>{posts.title}</h2>
                    <p>{posts.body}</p>
                </div>
            }
        </>
    )
}

export default Post;