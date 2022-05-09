import React from 'react';
import pic1 from '../../images/pic1.jpg'
import pic2 from '../../images/pic2.jpg'
import pic3 from '../../images/pic3.jpg'
import fruit from '../../images/fruits1.png';
import './Gallery.css'

const Gallery = () => {
    return (
        <div className="container gallary">
            <h1 className='text-center text-primary'>Gallery Of Items</h1>
        <div className="row">
          <div className="col-12 col-md-6 mb-3">
              <img style={{width:"650px"}}  className="img-fluid" src={pic1} alt="" />
          </div>
          <div className="col-12 col-md-6 mb-3">
          <img style={{width:"650px"}}  className="img-fluid" src={pic2} alt="" />
          </div>
      
  
          <div className="w-100 d-none d-md-block"></div>
      
          <div className="col-12 col-md-6">
              <img style={{width:"650px"}} className="img-fluid" src={pic3} alt="" />
          </div>
          <div className="col-12 col-md-6">
           <img style={{width:"650px"}}  className="img-fluid" src={fruit} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Gallery;