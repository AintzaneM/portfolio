import React from "react";
import { myProjects } from "./Projects";
import {Link} from 'react-router-dom';



const ProjectDetails = (props) => {

    const getProject = (id) => {
        const theProject = oneProject => {
            return oneProject.id === id;
        }
        return myProjects.find(theProject)
    };

    const {params} = props.match;
    const foundProject = getProject(params.id)
        
    return (
        <div>
            <p>{foundProject.name}</p>
            <p>{foundProject.year}</p>
            <p>{foundProject.technologies_tools}</p>
            <p>{foundProject.type}</p>
            <Link to='/projects'>Back</Link>
        </div>
        )

    }


export default ProjectDetails