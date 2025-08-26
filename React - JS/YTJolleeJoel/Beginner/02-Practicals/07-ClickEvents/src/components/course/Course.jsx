function Course(props) {

    // function btnHandler(discount, e) {
    //     // console.log(`${props.title}: This Base is been Unlocked with - ${discount}% discount`);
    //     // console.log(e);

    //     window.open("https://www.w3schools.com/")
    // }

    return (
        props.title &&
        <>

            <div className='card'>
                <img src={props.img} alt="image" />
                <h2>{props.title}</h2>
                <h4>{props.description}</h4>
                {/* <button onClick={(event) => { btnHandler(27, event); console.log(event) }}>Unlock</button> */}
                <button onClick={() => window.open("https://www.w3schools.com/")}>Unlock</button>
                <h2>${props.price}</h2>
            </div>

        </>
    );

}

export default Course;