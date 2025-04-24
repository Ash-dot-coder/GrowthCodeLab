import { useState } from "react"
import SSOne from "./SSOne";
import SSTwo from "./SSTwo";

const SSCombine = () => {
    const [count, setCount] = useState(0);

    return (
        <section>
            <SSOne count={count} onClickHandler={() => setCount(count + 1)} />
            <SSTwo count={count} onClickHandler={() => setCount(count + 1)} />
        </section>
    );
};

export default SSCombine;