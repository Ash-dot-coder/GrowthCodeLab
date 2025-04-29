import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div  >
            <p>You clicked {count} times</p>
            <button style={{ marginRight: '.38rem' }} onClick={() => setCount(count + 1)}>Increment</button>
            <button style={{ marginLeft: '.38rem' }} onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default Counter;