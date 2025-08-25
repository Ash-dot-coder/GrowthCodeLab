function Course(props) {
    if (props.show) {

        return (
            <>

                <div className='card'>
                    <img src={props.img} alt="image" />
                    <h2>{props.title}</h2>
                    <h4>{props.description}</h4>
                    <button>Unlock</button>
                    <h2>{props.price}</h2>
                </div>

            </>
        );
    }else{
        return(
            <>
            <div className="card">
                <h2>Course not found!</h2>
            </div>
            </>
        )
    }

    Course.prototype = {
        title:prototype.String
    }
}

export default Course;