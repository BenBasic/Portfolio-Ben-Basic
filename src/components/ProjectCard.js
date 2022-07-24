import React from "react";

export default function ProjectCard({ project }) {
    const { name, repo, link, description } = project;

    return (
        <div className='project col-md-3' key={name}>
            <img 
            src={require(`../../assets/images/${name}.png`)}
            alt={`Screenshot of ${name} project`}
            className='projectItem-bg'
            />
            <div className='projectTitle'>
                <h2>
                    <a href={link}>{name}</a>
                    <br />
                    <a href={repo}>GitHub Repository</a>
                </h2>
                <p>{description}</p>
            </div>
        </div>
    );
};