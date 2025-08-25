import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import Course from './Course.jsx'

function CourseList() {
    const cards = [
        {
            title: "HTML Base",
            description: "Level-up the HTML Base",
            img: html,
            price: '$37',
            show: true
        },

        {
            title: "CSS Base",
            description: "Level-up the CSS Base",
            img: css,
            price: '$78',
            show: true
        },

        {
            title: "JS Base",
            description: "Level-up the JS Base",
            img: js,
            price: '$118',
            show: true
        },

        {
            title: "REACT Base",
            description: "Level-up the REACT Base",
            img: react,
            price: '$278',
            show: true
        },

    ]

    const courseList = cards.map((courses) =>
        <Course title={courses.title}
            price={courses.price}
            description={courses.description}
            img={courses.img}
            show={courses.show} />
    )

    return (
        <>
            {courseList}
        </>
    );
}

export default CourseList