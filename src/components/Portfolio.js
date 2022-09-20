import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {

    const [projects] = useState([
        {
            name: "Locally",
            description: "Full stack MERN application for Toronto based e-commerce",
            link: "https://dry-badlands-98649.herokuapp.com/",
            repo: "https://github.com/DlonMusk/Locally",
        },
        {
            name: "Toronto Event Finder",
            description: "Front end application using MapBox API and TicketMaster API",
            link: "https://benbasic.github.io/Toronto-Event-Finder/",
            repo: "https://github.com/BenBasic/Toronto-Event-Finder",
        },
        {
            name: "Fun Cooking Converter",
            description: "Front end application using React for converting ingredient weight and volume",
            link: "https://benbasic.github.io/Fun-Cooking-Converter/",
            repo: "https://github.com/BenBasic/Fun-Cooking-Converter",
        },
        {
            name: "PWA Text Editor",
            description: "A Progressive Web Application based Text Editor for online and offline text editing",
            link: "https://afternoon-castle-19497.herokuapp.com",
            repo: "https://github.com/BenBasic/PWA-Text-Editor",
        },
        {
            name: "Social Network API",
            description: "Backend using MongoDB and Express",
            link: "https://youtu.be/bd3pFJSZYmM",
            repo: "https://github.com/BenBasic/Social-Network-API",
        },
        {
            name: "Rad Employee Tracker",
            description: "Back end using node.js and mySQL",
            link: "https://youtu.be/y3yFcRdOaNg",
            repo: "https://github.com/BenBasic/Rad-Employee-Tracker",
        },
    ]);

    const [finishPageAppearState, setFinishPageAppearState] = useState("invisibleIcon fadeInPage")

    setTimeout(function(){
        setFinishPageAppearState('')
    },490);

    return (
        <div className={`${finishPageAppearState}`}>
        <div className="portfolioContainer row mt-md-5 mt-3">
            <h1 className='text-center'>Portfolio</h1>
            {projects.map((project, index) => (
                <ProjectCard project={project} key={"project" + index} />
            ))}
        </div>
        </div>
    )
}