import React from "react";

export default function WorkCard({ work }) {
    const { company, title, years, description } = work;

    return (
        <div className="work" key={company}>
            <h3>{company}</h3>
            <p className="info">{title}
            <br />
            <em className="date">{years}</em>
            </p>
            <p>{description}</p>
        </div>
    );
};