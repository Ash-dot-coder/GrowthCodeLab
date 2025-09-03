import { useContext, useEffect, useState } from 'react'
import { dataProvider } from './Home';
import { useRef } from 'react';

function Counter() {

    const data = useContext(dataProvider)
    const [count, setCount] = useState(0);
    let increase = useRef(0)

    function increment() {
        setCount(count + 1)
        console.log(`Count Click: ${count}`);
        increase.current++
        console.log(`Ref Updated: ${increase.current}`);
    }

    // useEffect(() => {
    //     console.log(count);
    //     console.log(increase);
    // }, [count])


    return (
        <>
            <h2>{data}</h2>
            {/* <h2>{count}</h2> */}
            <h2>{increase.current}</h2>
            <button className='btn btn-danger' onClick={increment}>Count</button>
            <button className='btn btn-primary' onClick={() => { setCount(increase.current) }}>Ref Updater</button>
        </>
    )
}

export default Counter;