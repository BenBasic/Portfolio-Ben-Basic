import React from "react";

export default function ProjectCard({ project }) {
    const { name, repo, link, description } = project;

    return (
        <div className='project col-md-3' key={name}>
            <div className="d-flex justify-content-center">
            <img 
            src={require(`../../assets/images/${name}.png`)}
            alt={`Screenshot of ${name} project`}
            className='projectItem-bg'
            />
            </div>
            <div className='projectTitle'>
                <h2>
                    <a className='projectText' href={link} target="_blank" rel="noreferrer">{name}</a>
                    <br />
                    <a className='githubText' href={repo} target="_blank" rel="noreferrer">GitHub Repository</a>
                </h2>
                <p className='d-flex justify-content-center'>{description}</p>
            </div>
        </div>
    );
};