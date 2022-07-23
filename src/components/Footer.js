import React from "react";

export default function Footer() {
    const icons = [
        {
            info: "fab fa-github",
            link: "https://github.com/BenBasic",
        },
        {
            info: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/benjamin-basic-1aa60017a/",
        },
    ];

    return (
        <footer className="flex-row px-1">
            {icons.map((icon) => (
                <a href={icon.link} key={icon.info} target="_blank">
                    <i className={icon.info}></i>
                </a>
            ))}
        </footer>
    );
};