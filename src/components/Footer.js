import React from "react";

export default function Footer() {
    const icons = [
        {
            info: "fab fa-github",
            link: "https://github.com/BenBasic",
        },
        {
            info: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/benbasic/",
        },
    ];

    return (
        <footer className="flex-row px-1 d-flex justify-content-center invisibleIcon headerStartAppear">
            {icons.map((icon) => (
                <a href={icon.link} key={icon.info} target="_blank" rel="noreferrer">
                    <i className={icon.info}></i>
                </a>
            ))}
        </footer>
    );
};