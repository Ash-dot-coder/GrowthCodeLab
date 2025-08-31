// Accessing the JSON file(data/Cards.json) using this URL: 👇🏻 on terminal
// npx json-server --watch src/components/data/cards.json --port 300 --static ./src/components/data

// import html from '../../assets/html.png'
// import css from '../../assets/css.png'
// import js from '../../assets/js.png'
// import react from '../../assets/react.png'
import Course from './Course.jsx'
import { useEffect, useState } from 'react'

function CourseList() {
    const [cards, setCards] = useState(null)

    const [Dummy, setDummy] = useState(false);

    const [error, setError] = useState(null)

    useEffect(() => {
        // OFFICIAL JSON URL: "https://jsonplaceholder.typicode.com/posts"
        setTimeout(() => {

            fetch('http://localhost:300/cards')
                .then(response => {
                    console.log(response);
                    if (!response.ok) {
                        throw new Error("Couldn't retrieve the data");
                    }
                    return response.json();
                }).then(data => setCards(data)).catch((error) => {
                    console.log(error.message);
                    setError(error.message)
                })
        }, 1000);
    }, []);

    function handleDelete(recived_id) {
        setCards(cards.filter((newCards) => newCards.id != recived_id))
    }

    if (!cards) {
        return (<>
            {!error && <p>Fetching ...</p>}
            {error && <p>{error}</p>}
        </>)
    }

    const courseList = cards.map((courses) =>
        <Course
            key={courses.id}
            title={courses.title}
            price={courses.price}
            description={courses.description}
            img={courses.img}
            delete={handleDelete}
            id={courses.id}
        />
    )

    return (
        <>
            {courseList}
            <button onClick={() => { setDummy(true) }}>State Var</button>
        </>
    );
}

export default CourseList