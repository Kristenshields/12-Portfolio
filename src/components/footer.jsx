import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
    );
};

const footerStyle = {
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '1rem 0'
};

export default Footer;