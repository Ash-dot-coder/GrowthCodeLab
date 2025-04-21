// Set the background color to light gray
// Set padding to 15px
// Set border radius to 8px
// Set text color to black

const PofileCard = () => {
    const styles = {
        backgroundColor: "lightgray",
        padding: "15px",
        borderRadius: "8px",
        color: "black",
    };

    return (
        <div style={styles}>
            <h1>Hey Profile Card!</h1>
            <p>Lorem ipsum dolor sit amet consectetur,
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit amet quaerat,
                deleniti delectus magnam labore aut repudiandae accusantium,
                possimus, debitis odit.
                adipisicing elit. Atque assumenda id sequi!</p>
        </div>
    )
}

export default PofileCard;