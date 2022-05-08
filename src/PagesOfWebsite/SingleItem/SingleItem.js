import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleItem.css'

const SingleItem = ({item}) => {
    const{ _id,name,img,quantity,supplierName,description,price}=item;
    const navigate= useNavigate()
    const navigateItemDetail= (id)=>{
       navigate(`/inventory/${id}`)  
    }
    return (
        <div className='item'>
            <img style={{height:"300px"}} className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
             <p><small>Quantity:{quantity}</small></p> 
            <p>SupplierName:{supplierName}</p>
            <button onClick={()=>navigateItemDetail(_id)} className='btn btn-primary button'>Stock Update</button>
        </div>
    );
};

export default SingleItem;