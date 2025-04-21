// Set the background color to light blue;
// Set padding to 20px;
// Set border radius to 10px
// Set text color to dark blue;

const StyledCard = () => {
    return (
        <div
            style={{
                backgroundColor: "lightblue",
                padding: '20px',
                borderRadius: '10px',
                color: "darkblue",
            }}
        >
            <h1 style={{ fontSize: "2rem", marginBottom: '2rem' }}>Styled Card</h1>
            <p style={{ fontSize: '1.3rem', fontFamily: "sans serif" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quidem facilis numquam dolore quasi error ipsum, fuga animi voluptatem, pariatur, a quaerat. Officiis animi quo quasi, ullam totam fuga amet id ab.</p>
        </div>
    );
};

export default StyledCard;