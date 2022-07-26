import React from "react";

export default function ProjectCard({ project }) {
    const { name, repo, link, description } = project;

    return (
        <div className='project col-md-4' key={name}>
            <div className="imageContainer d-flex justify-content-center">
            <a href={link} target="_blank" rel="noreferrer">
            <img 
            src={require(`../../assets/images/${name}.webp`)}
            alt={`Screenshot of ${name} project`}
            className='projectItem-bg'
            />
            </a>
            </div>
            <div className='projectTitle'>

                    <h2 className='projectText'>{name}</h2>
                    
                    <a className='githubText' href={repo} target="_blank" rel="noreferrer">GitHub Repository</a>

                <p className='d-flex mt-3 justify-content-center'>{description}</p>
            </div>
        </div>
    );
};