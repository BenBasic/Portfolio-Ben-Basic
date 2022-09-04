import React, { useState } from 'react';



export default function Header() {

    const [reloadState, setReloadState] = useState(false);

    if (reloadState === true) {
        window.location.reload()
    }

    return (
        <header className="row headerComponent invisibleIcon headerStartAppear">
            <h1><span className='myNameHeader hoverFX clickable' onClick={ () => {setReloadState(true)}}>Benjamin Basic</span></h1>
            <h2>Full Stack Web Developer</h2>
            <ul className="social">
               <a href='https://github.com/BenBasic' target="_blank" rel="noreferrer">GitHub</a>
               <a href='https://www.linkedin.com/in/benbasic/' target="_blank" rel="noreferrer">LinkedIn</a>
            </ul>
        </header>
    )
}