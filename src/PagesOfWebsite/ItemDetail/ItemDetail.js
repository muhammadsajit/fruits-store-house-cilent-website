import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ItemDetail.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = () => {
    const { id } = useParams();
    const navigate =useNavigate();
    const [inventory, setInventory] = useState({});
    const{ _id,name,img,quantity,supplierName,description,price}=inventory;
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, []);
   
    const handleDelivery =()=>{
        const quantity=parseInt(inventory.quantity)-1;
        const newQuantity=quantity;

        fetch(`http://localhost:5000/inventory/${id}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
            },
          body: JSON.stringify({newQuantity}),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                
                 
            })
    }
    const navigateManageInventory =()=>{
        navigate('/manageInventory')
    }

    return (
        <div className='card-container' >
            <div className='row  '>
            <h1 className='text-center text-primary '>DetailsInfo</h1>
          <div className='col-md-12 col-12'>
          <div className="card w-50 container " >
            <img src={img} className="card-img-top img-fluid w-100"style={{height:'600px'}} alt="..." />
            <div className="card-body">
                <p className="card-title">Id:{_id}</p>
                <h6 className="card-title">Name:{name}</h6>
                <p className="card-text">Price:{price}</p>
                <p className="card-text">Description:{description}</p>
                <p className="card-text">Quantity:{quantity}</p>
                <p className="card-text">SupplierName:{supplierName}</p>
                <button onClick={handleDelivery} className='btn btn-primary p-2'
                >Delivered</button>
                <button  className='btn btn-primary p-2 m-2'
                >Sold</button>
            </div>
        </div>
          </div>
   
        </div>
        <div className='manageButton'>
        <button onClick={ navigateManageInventory} className="btn btn-link text-primary text-decoration-none  " >Manage Inventories</button>
        </div>
        </div>
         );
};

export default ItemDetail;