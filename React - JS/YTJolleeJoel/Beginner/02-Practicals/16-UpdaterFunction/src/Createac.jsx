import { useState } from "react";

function Createac() {

    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");
    const [same, setSame] = useState(false);

    function password1(event) {
        setPass1(event.target.value);
        console.log(event)
    }

    function password2(event) {
        setPass2(event.target.value);

        if (pass1 === event.target.value) {
            setSame(true)
        } else {
            setSame(false)
        }
    }

    // function chkSame() {
    //     if (pass1 === pass2) {
    //         setSame(true)
    //     } else {
    //         setSame(false)
    //     }
    // }

    return (
        <>

            <form className="my-5" style={{ width: "50%", margin: "auto" }}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input value={pass1} onChange={password1} type="password" className="form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Re-enter Password</label>
                    <input value={pass2} onChange={password2} type="password" className="form-control" />
                </div>

                <div className="mb-3 form-check">
                    {/* <input style={{ cursor: "pointer" }} onChange={chkSame} type="checkbox" className="form-check-input" id="exampleCheck1" /> */}
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" >Check</label>
                </div>
                {same && <p>Password Matched</p>}
                {!same && <p>Password Not Match - Do Re-enter it!</p>}

                <button type="submit" className="btn btn-primary">Create Account</button>
            </form>

        </>
    )
}

export default Createac;