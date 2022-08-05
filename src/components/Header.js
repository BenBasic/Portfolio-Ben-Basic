import React from "react";

export default function Header() {
    return (
        <header className="row headerComponent">
            <h1>Benjamin Basic</h1>
            <h2>Full Stack Web Developer</h2>
            <ul className="social">
               <a href='https://github.com/BenBasic' target="_blank" rel="noreferrer">GitHub</a>
               <a href='https://www.linkedin.com/in/benbasic/' target="_blank" rel="noreferrer">LinkedIn</a>
            </ul>
        </header>
    )
}