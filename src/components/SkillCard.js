import React from "react";

export default function SkillCard({ skill }) {
    const { skillItem } = skill;

    return (
        <li className="skillItem" key={skillItem}>{skillItem}</li>
    );
};