import React from "react";
import "./skills.scss";

export const Skills = ({name, description}) => (
    <div className="skill-item">
        <h4>{name}</h4>
        <p>{description}</p>
    </div>
)
