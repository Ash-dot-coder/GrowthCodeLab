import { useState } from "react"

const UA = () => {
    const [friends, setFriends] = useState(["Kartik", "Lucky"]);

    const addOne = () => setFriends([...friends, "Mane"]);
    const removeOne = () => setFriends(friends.filter((f) => f !== 'Lucky'));
    const updateOne = () => setFriends(friends.map((f) => (f === 'Kartik' ? "Kartik Babu" : f)));

    return (
        <div style={{ backgroundColor: "teal", color: "#1d1d1d", borderRadius: '.4em', padding: '.6em', textAlign: 'left', width: 'fitContent', fontSize: '1.13em', fontWeight: '789' }}>
            {friends.map((t) => (
                <li key={Math.random()}>{t}</li>
            ))}

            <button onClick={addOne} style={{ margin: '.48em', textTransform: 'uppercase', color: "teal", fontWeight: '786', textAlign: 'center', outline: 'none' }}>Add One</button>
            <button onClick={removeOne} style={{ margin: '.48em', textTransform: 'uppercase', color: "teal", fontWeight: '786', textAlign: 'center', outline: 'none' }}>Remove One</button>
            <button onClick={updateOne} style={{ margin: '.48em', textTransform: 'uppercase', color: "teal", fontWeight: '786', textAlign: 'center', outline: 'none' }}>Update One</button>
        </div>
    )
}

export default UA;