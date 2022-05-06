import React from 'react';
import './Footer.css'

const Footer = () => {
    const newYear = new Date ().getFullYear();
    return (
        <div className='footer-container'>
            <footer className='footer text-center'>
                <p>Fruits Items</p>
                <p>Fruits from there</p>
            <h6>Copyright &copy;{newYear}</h6>
        </footer>
        </div>
    );
};

export default Footer;