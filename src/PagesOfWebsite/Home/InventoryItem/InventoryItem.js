import React, { useEffect, useState } from 'react';
import SingleItem from '../../SingleItem/SingleItem';
import './InventoryItem.css'

const InventoryItem = () => {
    const [items,setItems]=useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/item')
        .then(res=>res.json())
        .then(data=>setItems(data))
    })
    return (
        <div id='inventory' className='container' >
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
    </div>
    );
};

export default InventoryItem;