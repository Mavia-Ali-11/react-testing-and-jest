import React, { useEffect, useState } from 'react'

function Greet(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true);
        }, 1001);
    }, []);

    return (
        <>
            <span>Greetings {props.name ? props.name : "Guest"}</span>
            <input type="text" name="username" />

            <label htmlFor='email'>Email</label>
            <input type="text" id="email" />

            <h1>This is heading 1</h1>
            <h2>This is heading 2</h2>

            <ul>
                {
                    ["HTML", "CSS", "JS", "React JS"].map((s) =>
                        <li key={s}>{s}</li>
                    )
                }
            </ul>

            <p>Text match</p>

            {isLoggedIn ? <button>Start Learning</button> : <button>Login</button>}

            {isLoggedIn && <button>Logout</button>}
        </>
    )
}

export default Greet