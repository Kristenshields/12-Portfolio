import React from "react";

const Project = ({ project }) => {
    return (
        <div style={projectStyle}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>



        </div>      
    );
}
        
const projectStyle = {
    backgroundColor: '#f4f4f4',
    padding: '1rem',
    margin: '1rem 0'
};

export default Project;

