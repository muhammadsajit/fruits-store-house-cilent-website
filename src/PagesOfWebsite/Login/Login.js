import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate()
    const navigateRegister =()=>{
        navigate('/register')
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleBlurEmail = event=>{
        setEmail(event.target.value);
    }
    const handleBlurPass = event=>{
        setPassword(event.target.value);
    }

const handleForm =event=>{
    event.preventDefault();
    signInWithEmailAndPassword(email,password);
    
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
               <h1 className='text-center text-primary'>Login</h1>

               

               <label  htmlFor="email">Email</label> <br />
               <input type="email" name='email' id="" placeholder='Email' autoComplete='off' onBlur={handleBlurEmail} required /> <br />
               <label  htmlFor="password">Password</label> <br />
               <input type="password"  name='password' id="" onBlur={handleBlurPass} autoComplete='off' placeholder='Password' required/>
               <input className='btn btn-primary' type="submit" value="Login" />
               
               
           </form>
           {errorMessage}
           <p>New to Fruits store? <Link to='/register' className='text-danger  text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            <p>Forget password? <button className='text-info btn btn-link  text-decoration-none' >Reset Password</button></p>
        </div>
    );
};

export default Login;
