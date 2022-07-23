import React from "react";

export default function EducationCard({ education }) {
    const { school, degree, graduate, description } = education;

    return (
        <div className="school" key={school}>
            <h3>{school}</h3>
            <p className="info">{degree}
            <br />
            <em className="date">{graduate}</em>
            </p>
            <p>{description}</p>
        </div>
    );
};