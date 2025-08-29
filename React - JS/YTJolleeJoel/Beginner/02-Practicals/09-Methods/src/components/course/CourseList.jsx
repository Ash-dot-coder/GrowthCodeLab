import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import Course from './Course.jsx'
import { useState } from 'react'

function CourseList() {
    const [cards, setCards] = useState([
        {
            id: 1,
            title: "HTML Base",
            description: "Level-up the HTML Base",
            img: html,
            price: 37,
        },

        {
            id: 2,
            title: "CSS Base",
            description: "Level-up the CSS Base",
            img: css,
            price: 78,
        },

        {
            id: 3,
            title: "JS Base",
            description: "Level-up the JS Base",
            img: js,
            price: 118,
        },

        {
            id: 4,
            title: "REACT Base",
            description: "Level-up the REACT Base",
            img: react,
            price: 278,
        },

    ])

    function handleDelete(recived_id) {
        setCards(cards.filter((newCards) => newCards.id != recived_id))
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
        </>
    );
}

export default CourseList