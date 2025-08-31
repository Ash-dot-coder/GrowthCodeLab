import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [Dummy, setDummy] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // OFFICIAL JSON URL: "https://jsonplaceholder.typicode.com/posts"
        setTimeout(() => {

            fetch(url)
                .then(response => {
                    console.log(response);
                    if (!response.ok) {
                        throw new Error("Couldn't retrieve the data");
                    }
                    return response.json();
                }).then(data => setData(data)).catch((error) => {
                    console.log(error.message);
                    setError(error.message)
                })
        }, 1000);
    }, []);

    return [data, Dummy, error]
}

export default useFetch