import React from "react";
import "./education.scss";

export const Education = ({school,subject,grade,results}) => (
    <div className="education-item">
        <h5>{school}</h5>
        <h4>{subject}</h4>
        <h4>{grade}</h4>
        {results &&
        <table>
            <tbody>
            {results.map(r=>(
                <tr>
                    <td>
                        {r.title}
                    </td>
                    <td>
                        {r.mark}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        }
    </div>
)
