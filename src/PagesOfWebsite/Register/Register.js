import React, { useState } from 'react';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword,useUpdateProfile  } from 'react-firebase-hooks/auth';
import './Register.css';

const Register = () => {
    const[name,setName]=useState('')
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile] = useUpdateProfile(auth);
    const handleBlurName = event=>{
        setName(event.target.value);
    }
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
        updateProfile({ displayName:name });
         console.log('updating profile')
        
        navigate('/home')
    }
    if(user){
        console.log(user)
    }
    let errorMessage;
    if (error ) {
        errorMessage=
          <div>
            <p className='text-danger'>ErrorMessage: {error.message}</p>
          </div>
        
      }
    
   return (
       <div className='form-container'>
           <form onSubmit={handleForm}>
               <h1 className='text-center text-primary'>Please Register</h1>

               <label className='fw-blod' htmlFor="username">UserName</label> <br />
               <input onBlur={handleBlurName} type="text"  name='username'  autoComplete='off' placeholder='UserName' required /> <br />

               <label  htmlFor="email">Email</label> <br />
               <input type="email" name='email'  id="" placeholder='Email' autoComplete='off' onBlur={handleBlurEmail} required /> <br />
               <label  htmlFor="password">Password</label> <br />
               <input type="password" autoComplete='off'  name="password" id="" onBlur={handleBlurPass} placeholder='Password' required/>
               <input className='btn btn-primary' type="submit" value="Register" />
               
               
           </form>
           {errorMessage}
               <p>Already have an account? <Link to='/login' className='text-danger  text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
       </div>
   ) 
   
};

export default Register;