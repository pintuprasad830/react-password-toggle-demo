import { useState } from "react";

export function PasswordToggle() {

    const [show, setShow] = useState(false);

    return (
        <div className="container p-5">

            <h2>Password Toggle</h2>

            <input
                type={show ? "text" : "password"}
                placeholder="Enter Password"
                className="form-control w-25"
            />

            <button
                onClick={() => setShow(!show)}
                className="btn btn-primary mt-3"
            >
                {show ? "Hide" : "Show"}
            </button>

        </div>
    )
}
