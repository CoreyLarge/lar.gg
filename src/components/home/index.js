import React from 'react';
import "./home.scss";
import {Education} from "./experience/education";

export const Home = () => (
    <div className="home wrap">
        <div className="header">

        </div>
        <div className="skills">

        </div>
        <div className="experience">
            <div className="education">
                <Education
                    school="Ulster University"
                    grade="First Class Honours"
                    subject="BSc Computing Science"
                    results={[
                        {title:"Concurrent and Distributed Systems", mark:"78"},
                        {title:"Data Analytics", mark:"73"},
                        {title:"Process Management", mark:"59"},
                        {title:"Project", mark:"64"},
                        {title:"Full Stack Development", mark:"83"}
                    ]}
                />
            </div>
            <div className="work">
            </div>
        </div>

    </div>
)
