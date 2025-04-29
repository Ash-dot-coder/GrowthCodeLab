import { useState } from 'react'

const Switcher = () => {
    const [sw, setSw] = useState(false);

    return (
        <div style={{ textAlign: 'left' }}>
            {sw ? <span style={{ textTransform: 'uppercase', letterSpacing: '.86em' }}>Dark</span> : <span style={{ textTransform: 'uppercase', letterSpacing: '.86em' }}>Light</span>}
            <br />
            <input type="text" key={sw ? "dark" : "light"} style={{ width: '11vw', height: '4.19vh', outline: 'none' }} />
            <button onClick={() => setSw((s) => !s)} style={{ marginLeft: '.6rem' }}>Switch</button>
        </div>
    )
}

export default Switcher