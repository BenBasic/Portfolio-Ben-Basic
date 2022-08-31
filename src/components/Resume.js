import React, { useState } from "react";
import EducationCard from "./EducationCard";
import WorkCard from "./WorkCard";
import SkillCard from "./SkillCard"

export default function Resume() {

    const [schools] = useState([
        {
            school: "University of Toronto",
            degree: "Coding Bootcamp",
            graduate: "August 2022",
            description: "JavaScript, React, jQuery, Express, Handlebars, Node, MySQL, MongoDB, Git, HTML, CSS",
        },
    ]);

    const [jobs] = useState([
        {
            company: "Lion Building Group",
            title: "Hotel General Manager",
            years: "March 2020 - September 2021",
            description: "Managed and supervised the daily operations of two hotel properties, led and facilitated the onboarding and training of a staff of over 20 team members, initiated and managed relationships with individual clients and corporations",
        },
    ]);

    const [frontEndSkills] = useState([
        {
            skillItem: "JavaScript",
        },
        {
            skillItem: "React",
        },
        {
            skillItem: "jQuery",
        },
        {
            skillItem: "Handlebars",
        },
        {
            skillItem: "HTML",
        },
        {
            skillItem: "CSS",
        },
        {
            skillItem: "Bootstrap",
        },
    ]);

    const [backEndSkills] = useState([
        {
            skillItem: "Express",
        },
        {
            skillItem: "Node",
        },
        {
            skillItem: "MySQL",
        },
        {
            skillItem: "MongoDB",
        },
        {
            skillItem: "GraphQL",
        },
        {
            skillItem: "PWA",
        },
    ]);

    return (
        <>
        <div className="container fadeInIcon">
            <div className="mx-5 mt-5 p3 resumePage">
                <div className='resumeDownload text-center'>
                    <p>
                        <a href='https://drive.google.com/file/d/1Ksui5Fr_NJIxeuqa05vX72K9rT8BQ2or/view?usp=sharing' rel="noreferrer" className='resumeButton' target='_blank'>Download Resume</a>
                    </p>
                </div>
                <div className="row top-border">
                <h1 className="mobilePageTitles"><span>Education</span></h1>
                    <div className="col-md-2 resumePageTitles">
                        <h1><span>Education</span></h1>
                    </div>
                    <div className="col-md-10 resumePageDescriptions">
                    {schools.map((school, index) => (
                        <EducationCard education={school} key={"school" + index} />
                    ))}
                    </div>
                </div>

                <div className="row">
                <h1 className="mobilePageTitles"><span>Work Experience</span></h1>
                    <div className="col-md-2 resumePageTitles">
                        <h1><span>Work Experience</span></h1>
                    </div>
                    <div className="col-md-10 resumePageDescriptions">
                    {jobs.map((job, index) => (
                        <WorkCard work={job} key={"job" + index} />
                    ))}
                    </div>
                </div>

                <div className="row">
                <h1 className="mobilePageTitles"><span>Skills</span></h1>
                    <div className="col-md-2 resumePageTitles">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="col-md-10 resumePageDescriptions">
                        <div className="row noUnderline">
                            <div className="col-md-6">
                                <h3>Front End</h3>
                                {frontEndSkills.map((singleSkill, index) => (
                                    <SkillCard skill={singleSkill} key={"skill" + index} />
                                ))}
                            </div>
                            <div className="col-md-6">
                                <h3 className="bottomSkill">Back End</h3>
                                {backEndSkills.map((singleSkill, index) => (
                                    <SkillCard skill={singleSkill} key={"skill" + index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}