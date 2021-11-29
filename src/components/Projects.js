import React from "react";
import {Link} from "react-router-dom";
export const myProjects = [
    {
        id: "1a",
        name: "Who invent what?",
        img:"",
        year: 2021,
        technologies_tools: "JavaScript, HTML, CSS, DOM Manipulation",
        type: "Game project",

    },
    {
        id: "1b",
        name: "SurfOn",
        img:"",
        year: 2021,
        technologies_tools: "Express, Moongose, JavaScript, HTML, CSS, Authorization and Authentication",
        type: "Full Stack application",
    },
    {
        id: "1c",
        name: "AboutSkills",
        img:"",
        year: 2021,
        technologies_tools: "React, Express, Moongose, REST API, JavaScript, HTML, CSS, Authorization and Authentication",
        type: "MERN Stack application",
    }
]

export const projects = () => {
    return (
        <div>
            <p>My Projects:</p>
            {myProjects.map((eachProject, index) => {
                return (
                    
                    <div key={eachProject.id}>
                        <p>
                        {/* {console.log(eachProject.id)} */}
                            <Link to={`/projects/${eachProject.id}`}>{eachProject.name}</Link>
                        </p>
                        <p>
                            {eachProject.technologies_tools}
                        </p>
                    </div> 
                )
            })}
        </div>
    )
}
