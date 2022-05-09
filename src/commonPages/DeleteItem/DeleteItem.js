import React, { useEffect, useState } from 'react';

const DeleteItem = () => {
    const [items,setItems]=useState([]);
   
    
    useEffect( ()=>{
        fetch('http://localhost:5000/item')
        .then(res=>res.json())
        .then(data=>setItems(data))
        
        
    })
    return (
        <div>
            <h1></h1>
        </div>
    );
};

export default DeleteItem;