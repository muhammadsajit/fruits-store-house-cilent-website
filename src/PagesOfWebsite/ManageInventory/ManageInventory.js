import React, { useEffect, useState } from 'react';
import SingleItem from '../SingleItem/SingleItem';

const ManageInventory = () => {
    const [items,setItems]=useState([]);
   
    
    useEffect( ()=>{
        fetch('http://localhost:5000/item')
        .then(res=>res.json())
        .then(data=>setItems(data))
        
        
    })
    return (
        <div  className='container' >
        <div className="row">
            <h2 className='text-center text-primary mt-5'> Manage Inventory</h2>
            <div className='items-container'>
                {
                    items.map(item => <SingleItem
                        key={item._id}
                        item={item}></SingleItem>)
                }
            </div>
        </div>
      
       
    </div>
    );
};

export default ManageInventory;