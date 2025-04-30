import { useState, useEffect } from 'react';

const Three_FetchDataEffect = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    };

    fetchData();
  }, [])

  return (
    <div>
      <h1>Fifth Post Title:</h1>
      {posts.length > 0 ? <h2 style={{textTransform: 'uppercase', border: '.01em solid white', padding: '.23em'}}>{posts[4].id}&nbsp;:&nbsp;{posts[4].title}</h2> : <p>Loading...</p>}
    </div>
  );
};

export default Three_FetchDataEffect;