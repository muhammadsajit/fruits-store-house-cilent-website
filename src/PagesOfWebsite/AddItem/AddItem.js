import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
          fetch(`https://vast-taiga-43887.herokuapp.com/item`,{
              method:'POST',
              headers:{
                  'content-type':'application/json',


              },
              body:JSON.stringify(data)

          })
          .then(res=>res.json())
          .then(result =>{console.log(result)})

        };
    return (

        <div className='w-50 mx-auto'>
            <h2>Please Add Item </h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='SupplierName' {...register("supplierName", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2'  placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2'  placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2'  placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );

};

export default AddItem;