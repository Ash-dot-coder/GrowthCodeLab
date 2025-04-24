import { useState } from "react";

const UO = () => {
    const [series, setSeries] = useState({
        title: 'Dark',
        rating: '8.9',
        genre: 'thriller suspense',
    });

    const handleClick = () => {
        // To tell react about state update, we have to give react a brand new object.

        // Long Way
        const copySeries = {
            // This will copy all the properties, into the new object, and then we can change whatever we want in new object.
            // ...series,
            rating: 9,
        };
        setSeries(copySeries);

        // Short Way
        setSeries({ ...series, rating: 8 });
    };

    return (
        <div>
            <h1 style={{ textTransform: "uppercase", color: "blanchedalmond" }}>{series.title}</h1>
            <p style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: '1.8em', color: '#1d1d1d', backgroundColor: "blanchedalmond", padding: '.67em', borderRadius: '50%' }}>{series.rating}<span style={{ fontSize: '.6em' }}>⭐</span></p>
            <button onClick={handleClick} style={{ outline: 'none', color: '#1d1d1d', backgroundColor: 'gold', }}>Change Rating</button>
        </div>
    );
};

export default UO;
