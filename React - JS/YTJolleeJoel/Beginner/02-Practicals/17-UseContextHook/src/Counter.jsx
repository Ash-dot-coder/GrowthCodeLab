import { useContext, useEffect, useState } from 'react'
import { dataProvider } from './Home';

function Counter() {

    const data = useContext(dataProvider)
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count => count + 1)
        setCount(count => count + 1)
        setCount(count => count + 1)
    }

    useEffect(() => {
        console.log(count);
    })


    return (
        <>
            <h2>{data}</h2>
            <h2>{count}</h2>
            <button className='btn btn-danger' onClick={increment}>Count</button>
        </>
    )
}

export default Counter;