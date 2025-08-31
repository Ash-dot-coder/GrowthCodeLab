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

    useEffect(() => {
        // console.log("Use Effect is been called.");
        // console.log(Dummy);
        // OFFICIAL JSON URL: "https://jsonplaceholder.typicode.com/posts"
        fetch('http://localhost:300/cards')
            .then(response => {
                console.log(response);
                return response.json();
            }).then(data => setCards(data))
    }, []);

    function handleDelete(recived_id) {
        setCards(cards.filter((newCards) => newCards.id != recived_id))
    }

    if (!cards) {
        return <></>
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