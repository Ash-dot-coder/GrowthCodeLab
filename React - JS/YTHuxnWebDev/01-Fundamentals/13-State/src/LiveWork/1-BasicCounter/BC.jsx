import { useState } from "react";

const BC = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div style={{ color: "tomato", backgroundColor: "gray", padding: '9px', borderRadius: '7px', width: '12vw', textAlign: "center" }}>
            <h1>{count}</h1>
            <button onClick={increment} style={{ marginRight: '.4rem',  outline: 'none' }}>+</button>
            <button onClick={reset} style={{ marginRight: '.4rem',  outline: 'none' }}>R</button>
            <button onClick={decrement} style={{ marginLeft: '.4rem',  outline: 'none' }}>-</button>
        </div>
    );
};

export default BC;