import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {

    const [projects] = useState([
        {
            name: "Greenify",
            description: "Full stack application using Express, Handlebars, and mySQL",
            link: "https://greenifywiki.herokuapp.com",
            repo: "https://github.com/JamesF905/greenify",
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
    ]);

    return (
        <div className="flex-row">
            {projects.map((project, index) => (
                <ProjectCard project={project} key={"project" + index} />
            ))}
        </div>
    )
}