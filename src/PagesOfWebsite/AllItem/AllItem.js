import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AllItem.css'

const AllItem = ({item}) => {
    const{ name,img,quantity,supplierName,description,price}=item;
    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate('/addItem')
    }
    
    return (
        <div className='item-container'>
            <img style={{height:"300px"}} className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
             <p><small>Quantity:{quantity}</small></p> 
            <p>SupplierName:{supplierName}</p>
            <button  className='btn btn-primary button-info'><span>Delete</span></button>
            <button onClick={handleNavigate} className='btn btn-primary button-info'><span>Add New Item</span></button>
        </div>
    );

};

export default AllItem;