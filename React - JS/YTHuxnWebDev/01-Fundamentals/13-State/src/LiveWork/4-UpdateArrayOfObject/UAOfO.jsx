import { useState } from "react";

const UAOfO = () => {
    const [series, setSeries] = useState([
        { id: 3, title: 'All Of Us Are Dead', rating: '8.9' },
        { id: 1, title: 'From', rating: '7.9' },
        { id: 2, title: 'Stranger Things', rating: 8 },
    ]);

    const handleClick = () => {
        setSeries(
            series.map((s) => (s.id === 1 ? { ...series, title: 'Dark' } : s))
        );
    };

    return (
        <div style={{ textAlign: "left", width: 'fitcontent', backgroundColor: "blanchedalmond", color: '#1d1d1d', padding: '.76rem', borderRadius: '.87rem', display: "flex", flexDirection: "column", gap: '.61em' }}>
            {series.map((drama) => (
                <li key={Math.random()}>{drama.title} 🎬</li>
            ))}
            <button onClick={handleClick} style={{ textTransform: "uppercase", outline: "none" }}>change name</button>
        </div>
    );
};

export default UAOfO;