import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {

    // Assigning state to an array of objects containing information about my projects I wish to display on the page
    const [projects] = useState([
        {
            name: "Locally",
            description: "Create and manage your online storefront with this full stack application for Toronto based e-commerce. Developed with a MERN tech stack (MongoDB, Express, React, Node).",
            link: "https://dry-badlands-98649.herokuapp.com/",
            repo: "https://github.com/DlonMusk/Locally",
        },
        {
            name: "Toronto Event Finder",
            description: "Find current and upcoming events in the Toronto area with this front end application using MapBox API and TicketMaster API.",
            link: "https://benbasic.github.io/Toronto-Event-Finder/",
            repo: "https://github.com/BenBasic/Toronto-Event-Finder",
        },
        {
            name: "Fun Cooking Converter",
            description: "Convert common cooking ingredients between weight and volume values with this front end application using React.",
            link: "https://benbasic.github.io/Fun-Cooking-Converter/",
            repo: "https://github.com/BenBasic/Fun-Cooking-Converter",
        },
        {
            name: "PWA Text Editor",
            description: "A Progressive Web Application based Text Editor for online and offline text editing, can also be downloaded to your computer as a native application.",
            link: "https://afternoon-castle-19497.herokuapp.com",
            repo: "https://github.com/BenBasic/PWA-Text-Editor",
        },
        {
            name: "Social Network API",
            description: "Create, edit, and delete users, posts, comments, and friends lists with this fully functional backend for social networks using MongoDB and Express.",
            link: "https://youtu.be/bd3pFJSZYmM",
            repo: "https://github.com/BenBasic/Social-Network-API",
        },
        {
            name: "Rad Employee Tracker",
            description: "Add, modify, and manage departments, roles, and employees with this fully functional backend for employee tracking using Node.js and MySQL.",
            link: "https://youtu.be/y3yFcRdOaNg",
            repo: "https://github.com/BenBasic/Rad-Employee-Tracker",
        },
    ]);

    // Assigning state to class name values, these will make the page content fade in when triggered to appear
    const [finishPageAppearState, setFinishPageAppearState] = useState("invisibleIcon fadeInPage")

    // After the set time interval finishes, state is set to an empty value to prevent CSS conflicts
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