import React from 'react';
import './Contact.css';
import owner from '../../images/owner.jpg'

const Contact = () => {
    return (
        <div id='contact' className='contact-container'>
            <h1 className='text-center text-primary'>Contact Us</h1>
            <div className="container mt-5">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 col-12">
                        <img src={owner} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6 col-12">
                        <h1 className="fw-bold">Contact With Owner</h1>
                        <p> Any consumer can contact with owner for fresh fruit.and any supplier are also connected with owner to supply fresh fruit item.  </p>
                        <button type="button" className="btn btn-light bg-info">
                            Contact</button>
                    </div>

                </div>
            </div>





        </div>
    );
};

export default Contact;