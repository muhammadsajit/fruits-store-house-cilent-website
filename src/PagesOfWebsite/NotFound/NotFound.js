import React from 'react';
import notFoundPic from '../../images/404.jpg';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <h1 className='header'>This page is not available </h1>

           <img className='img-fluid w-100 img' style={{height:"500px"}} src={notFoundPic} alt="" /> 
        </div>
    );
};

export default NotFound;