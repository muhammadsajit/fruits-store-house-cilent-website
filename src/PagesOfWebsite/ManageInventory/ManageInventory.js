import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



import './ManageInventory.css';



const ManageInventory = () => {
    const [items, setItems] = useState([]);
    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate('/addItem')
    }


    useEffect(() => {
        fetch('https://vast-taiga-43887.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data))


    })
    const handleDelete = (id) => {

        const proceed = window.confirm('Are you sure to delete');
        if (proceed) {
            const url = `https://vast-taiga-43887.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                     const remaining = items.filter(item=>item._id!==id);
                     setItems(remaining)
                })
        }

    }


    return (
        <div>
            <div className='container' >
                <div className="row">
                    <h2 className='text-center text-primary mt-5'> Manage Inventory</h2>
                    <div className='items-container'>
                        {
                            items.map(item =>
                            <div className='item-container' key={item._id}>
   

                             <img style={{ height: "300px" }} className='w-100' src={item.img} alt="" />
                             <h2>Name:{item.name}</h2>
                             <p>Price:{item.price}</p>
                             <p><small>{item.description}</small></p>
                             <p><small>Quantity:{item.quantity}</small></p>
                             <p>SupplierName:{item.supplierName}</p>
                             <button onClick={()=>handleDelete(item._id)} className='btn btn-primary button-info'><span>Delete</span></button> 
                             </div>

                            
                          )
                           }
                        

                    </div>
                </div>

               
            </div>

            <div className='button-add'>
                <button onClick={handleNavigate} className='btn btn-primary button-info'><span>Add New Item</span></button>
            </div>
            
        </div>
        )
};

export default ManageInventory;
// {/* <div className='item-container' key={item._id}>
   

// <img style={{ height: "300px" }} className='w-100' src={item.img} alt="" />
// <h2>Name:{item.name}</h2>
// <p>Price:{item.price}</p>
// <p><small>{item.description}</small></p>
// <p><small>Quantity:{item.quantity}</small></p>
// <p>SupplierName:{item.supplierName}</p>
// <button className='btn btn-primary button-info'><span>Delete</span></button> */}
// // </div>

//   */}