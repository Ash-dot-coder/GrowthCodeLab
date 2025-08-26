function Course(props) {


    return (
        props.title &&
        <>

            <div className='card'>
                <img src={props.img} alt="image" />
                <h2>{props.title}</h2>
                <h4>{props.description}</h4>
                <button>Unlock</button>
                <h2>${props.price}</h2>
            </div>

        </>
    );

}

export default Course;