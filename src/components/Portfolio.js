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
            name: "Toronto Event Finder",
            description: "Front end application using MapBox API and TicketMaster API",
            link: "https://benbasic.github.io/Toronto-Event-Finder/",
            repo: "https://github.com/BenBasic/Toronto-Event-Finder",
        },
        {
            name: "Rad Employee Tracker",
            description: "Back end using node.js and mySQL",
            link: "https://youtu.be/y3yFcRdOaNg",
            repo: "https://github.com/BenBasic/Rad-Employee-Tracker",
        },
        {
            name: "Weather Dashboard",
            description: "Front end application using the Open Weather api",
            link: "https://benbasic.github.io/Module-6-Weather-Dashboard/",
            repo: "https://github.com/BenBasic/Module-6-Weather-Dashboard",
        },
    ]);

    return (
        <div className="row mt-5">
            {projects.map((project, index) => (
                <ProjectCard project={project} key={"project" + index} />
            ))}
        </div>
    )
}