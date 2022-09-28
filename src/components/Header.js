import React, { useState } from 'react';



export default function Header() {

    // Assigning reloadState a value of false, will be set to true when my name is clicked
    const [reloadState, setReloadState] = useState(false);

    // Assigning state to class name values, these will make the page content fade in when triggered to appear
    const [finishAppearState, setFinishAppearState] = useState("invisibleIcon headerStartAppear")

    // After the set time interval finishes, state is set to an empty value to prevent CSS conflicts
    setTimeout(function(){
        setFinishAppearState('')
    },1300);

    // When my name is clicked, reload the website
    if (reloadState === true) {
        window.location.reload()
    }

    return (
        <header className={`row headerComponent ${finishAppearState}`}>
            <h1><span className='myNameHeader hoverFX clickable' onClick={ () => {setReloadState(true)}}>Benjamin Basic</span></h1>
            <h2>Full Stack Web Developer</h2>
            <ul className="social">
               <a
               href='https://github.com/BenBasic' target="_blank" rel="noreferrer">GitHub</a>
               <a
               href='https://www.linkedin.com/in/benbasic/' target="_blank" rel="noreferrer">LinkedIn</a>
            </ul>
        </header>
    )
}