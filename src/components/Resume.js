import React, { useState } from "react";
import EducationCard from "./EducationCard";
import WorkCard from "./WorkCard";

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
            years: "March 2020 - May 2022",
            description: "Managed and supervised the daily operations of two hotel properties, led and facilitated the onboarding and training of a staff of over 20 team members, initiated and managed relationships with individual clients and corporations",
        },
    ]);

    return (
        <>
        <div className="row">
            <div className="col-md-2">
                <h1><span>Education</span></h1>
            </div>
            <div className="col-md-10">
            {schools.map((school, index) => (
                <EducationCard education={school} key={"school" + index} />
            ))}
            </div>
        </div>

        <div className="row">
            <div className="col-md-2">
                <h1><span>Work Experience</span></h1>
            </div>
            <div className="col-md-10">
            {jobs.map((job, index) => (
                <WorkCard work={job} key={"job" + index} />
            ))}
            </div>
        </div>
        </>
    )
}