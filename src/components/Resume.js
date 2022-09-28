import React, { useState } from "react";
import EducationCard from "./EducationCard";
import WorkCard from "./WorkCard";
import SkillCard from "./SkillCard"

export default function Resume() {

    // Assigning state to class name values, these will make the page content fade in when triggered to appear
    const [finishPageAppearState, setFinishPageAppearState] = useState("invisibleIcon fadeInPage")

    // After the set time interval finishes, state is set to an empty value to prevent CSS conflicts
    setTimeout(function(){
        setFinishPageAppearState('')
    },490);

    // Assigning state to an array of objects containing information about my education I wish to display on the page
    const [schools] = useState([
        {
            school: "University of Toronto",
            degree: "Coding Bootcamp",
            graduate: "August 2022",
            description: "JavaScript, React, jQuery, Express, Handlebars, Node, MySQL, MongoDB, Git, HTML, CSS",
        },
    ]);

    // Assigning state to an array of objects containing information about my work history I wish to display on the page
    const [jobs] = useState([
        {
            company: "NutraBee",
            title: "Creative Director",
            years: "September 2021 - May 2022",
            description: "Managed and supervised the daily operations of the marketing team, oversaw social media rebranding campaign, created all content required for the company's online marketing with the workload including photographing, recording video, editing, designing, staging, scripting, animating, and recording voice over.",
        },
        // {
        //     company: "Lion Building Group",
        //     title: "Hotel General Manager",
        //     years: "March 2020 - September 2021",
        //     description: "Managed and supervised the daily operations of two hotel properties, led and facilitated the onboarding and training of a staff of over 20 team members, initiated and managed relationships with individual clients and corporations.",
        // },
    ]);

    // Assigning state to an array of objects containing information about my frontend skills I wish to display on the page
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

    // Assigning state to an array of objects containing information about my backend skills I wish to display on the page
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
        <div className={`container resumeContainer ${finishPageAppearState}`}>
            <div className="mx-5 mt-md-5 mt-3 p3 resumePage">
            <h1 className='text-center resumeTitle'>Resume</h1>
                <div className='resumeDownload text-center'>
                    <p>
                        <a href='https://docs.google.com/document/d/11R4EKIcuLiq21gNKZl-miMzTM2Ezkj7Y/edit?usp=sharing&ouid=102663915874628547290&rtpof=true&sd=true' rel="noreferrer" className='resumeButton' target='_blank'>Download Resume</a>
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