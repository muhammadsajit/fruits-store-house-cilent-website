import React, { useEffect, useState } from 'react';
import AllItem from '../AllItem/AllItem'


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
                    items.map(item => <AllItem
                        key={item._id}
                        item={item}></AllItem>)
                }
            </div>
        </div>
      
       
    </div>
    );
};

export default ManageInventory;