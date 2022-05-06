import React, { useState } from 'react';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';

const Register = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const handleBlurEmail = event=>{
        setEmail(event.target.value);
    }
    const handleBlurPass = event=>{
        setPassword(event.target.value);
    }


    const navigate=useNavigate();
    const navigateLogin =()=>{
        navigate('/login')
    }
    const handleForm=event=>{
        
        createUserWithEmailAndPassword(email,password);
        event.preventDefault();
        setEmail('');
        setPassword('')
        navigate('/home')
    }
    if(user){
        console.log(user)
    }
    let errorMessage;
    if (error ) {
        errorMessage=
          <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        
      }
    
   return (
       <div className='form-container'>
           <form onSubmit={handleForm}>
               <h1 className='text-center text-primary'>Please Register</h1>

               <label className='fw-blod' htmlFor="username">UserName</label> <br />
               <input type="text" name='username' placeholder='UserName'  /> <br />

               <label  htmlFor="email">Email</label> <br />
               <input type="email" name="email" id="" placeholder='Email'onChange={handleBlurEmail} required /> <br />
               <label  htmlFor="password">Password</label> <br />
               <input type="password"  name="password" id="" onChange={handleBlurPass} placeholder='Password' required/>
               <input className='btn btn-primary' type="submit" value="Register" />
               
               
           </form>
           {errorMessage}
               <p>Already have an account? <Link to='/login' className='text-danger  text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
       </div>
   ) 
   
};

export default Register;