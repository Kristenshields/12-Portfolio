import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav style={navStyle}>
            <ul style={ulStyle}>
                <li style={liStyle}><a href="/">Home</a></li>
                <li style={liStyle}><a href="/about">About</a></li>
                <li style={liStyle}><a href="/projects">Projects</a></li>
            </ul>
        </nav>
    );
}

const navStyle = {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '1rem 0'
};

const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center'
};

const liStyle = {
    padding: '0 1rem'
};

export default Navigation;