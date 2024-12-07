import React from "react";

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>My Portfolio</h1>
        </header>
    );
}

const headerStyle = {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '1rem 0'
};

export default Header;