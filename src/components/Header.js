import React from "react";

export default function Header() {
    return (
        <header className="flex-row">
            <h1>Benjamin Basic</h1>
            <img src={require(`./assets/images/header.png`)} alt="Color gradient" />
        </header>
    )
}