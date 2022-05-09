import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Loading from '../../../commonPages/Loading/Loading';

import SingleItem from '../../SingleItem/SingleItem';
import './InventoryItem.css'

const InventoryItem = () => {
    
    const navigate =useNavigate();
    
    const [items,setItems]=useState([]);
    const[loading,setLoading]=useState(true);
   
    
    useEffect( ()=>{
       

        fetch('http://localhost:5000/item')
        .then(res=>res.json())
        .then(data=>{
            setItems(data);
            setLoading(false)
        })
        
        
    })
    const navigateManageInventory =()=>{
        navigate('/manageInventory')
    }
  
    return (
        
      <div>
          {
              loading?<p><Loading></Loading></p>:null
          }
            <div id='inventoryItem' className='container' >
           
           <div className="row">
              <h2 className='text-center text-primary mt-5'> Inventory Items</h2>
              <div className='items-container'>
                  
                 
                  {
                      items.slice(0,6).map(item => <SingleItem
                          key={item._id}
                          item={item}></SingleItem>)
                  }
                   
              </div>
          </div>
         <div>  
         <button onClick={ navigateManageInventory} className="btn btn-link text-primary text-decoration-none " >Manage Inventories</button>
         </div>
         
      </div>
      </div>
    );
};

export default InventoryItem;