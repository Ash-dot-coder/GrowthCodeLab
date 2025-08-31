import { useEffect, useState } from "react";

function Course(props) {

    // Using use state:
    const [purchased, setPurchased] = useState(false)
    const [Discount, setDiscount] = useState(props.price)

    function buttonHandle(amount) {
        // console.log(props.title, "is been unlocked with", discount, "%");
        setPurchased(true)
        setDiscount(Discount - amount)
        console.log(purchased);
    }

    useEffect(() => {
        console.log("Use Effect inside Course.jsx file");
    })

    return (
        props.title &&
        <>

            <div className='card'>
                <img src={props.img} alt="image" />
                <h2>{props.title}</h2>
                <h4>{props.description}</h4>
                <button onClick={() => { buttonHandle(27) }}>Unlock with Discount</button>
                <h2>${Discount}</h2>
                <button onClick={() => { props.delete(props.id) }}>Delete</button>
                <p>{purchased ? "The base is been unlocked" : "Unlocked it now!"}</p>
            </div>

        </>
    );

}

export default Course;