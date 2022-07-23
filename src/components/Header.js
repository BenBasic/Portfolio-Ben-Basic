import React from "react";
import headerPicture from "../../assets/images/header.png";

export default function Header() {
    return (
        <header className="flex-row">
            <h1>Benjamin Basic</h1>
            <img src={headerPicture} alt="Color gradient" />
        </header>
    )
}