import React from "react"
import {Collapse} from "react-collapse";

export const Work = ({company, jobtitle, dates, description, isOpened, onClick}) => (
    <div className="work-item" role="button" onClick={onClick}>
        <h3>{company}</h3>
        <h4>{jobtitle}</h4>
        <h4>{dates}</h4>
        <Collapse isOpened={isOpened}>
            <ul>
                {description.map(d => (
                    <li>{d}</li>
                ))}
            </ul>
        </Collapse>
    </div>
)
