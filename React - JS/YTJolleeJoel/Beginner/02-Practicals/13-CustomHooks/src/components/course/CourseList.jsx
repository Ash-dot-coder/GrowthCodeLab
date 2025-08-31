// Accessing the JSON file(data/Cards.json) using this URL: 👇🏻 on terminal
// npx json-server --watch src/components/data/cards.json --port 1280 --static ./src/components/data

// import html from '../../assets/html.png'
// import css from '../../assets/css.png'
// import js from '../../assets/js.png'
// import react from '../../assets/react.png'
import useFetch from '../useFetch.jsx'
import Course from './Course.jsx'
// import { useEffect, useState } from 'react'

function CourseList() {

    const [cards, Dummy, error] = useFetch('http://localhost:1280/cards');


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