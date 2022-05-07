import React from 'react';
import './SingleItem.css'

const SingleItem = ({item}) => {
    const{ _id,name,img,quantity,supplierName,description,price}=item;
    return (
        <div className='item'>
            <img style={{height:"300px"}} className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
            <p>Quantity:{quantity}</p>
            <p>SupplierName:{supplierName}</p>
            <button  className='btn btn-primary button'>Stock Update</button>
        </div>
    );
};

export default SingleItem;