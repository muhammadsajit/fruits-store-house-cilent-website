import React from 'react';
import './Quality.css';
import fruit from '../../images/fruit4.jpg'

const Quality = () => {
    return (
        <div id='quality' className='quality-container'>
            <h1 className='text-center text-primary'>Quality Of Fruits</h1>
            <div className="container mt-5">
                <div className="row d-flex align-items-center">
                    
                    <div className="col-md-6 col-12">
                        <h1 className="fw-bold">List Of Quality</h1>
                        
                          <ul>
                              <li>Origin</li>
                              <li>Vitual</li>
                              <li>Microbial</li>
                              <li>Sensory</li>
                              <li>Physical</li>
                              <li>Chemical</li>
                              <li>Texture</li>
                              <li>Nutrition</li>
                          </ul>

                        
                        <button type="button" className="btn btn-light bg-info">
                            Read More</button>
                    </div>
                    <div className="col-md-6 col-12">
                        <img src={fruit} className="img-fluid" alt="" />
                    </div>

                </div>
            </div>





        </div>
    );
};

export default Quality;