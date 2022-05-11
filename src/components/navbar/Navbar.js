import React from 'react'
import s from "./navbar.module.scss"
export default function Navbar({handler}) {
    return (
        <nav className={s.navbar}>
            <a href="/">Global Beta</a>
            <button onClick={()=>handler()}>Get User</button>
        </nav>
    )
}
