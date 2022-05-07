import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../images/google.png'
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate()
   
    
   if(loading){
       return <Loading></Loading>
   }
    let errorMessage;
    if (error ) {
        errorMessage=
          <div>
            <p className='text-danger'>ErrorMessage: {error.message}</p>
          </div>
        
      }
    
   
      if(user){
          navigate('/home');
      }
    
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-primary'>
                </div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-primary'>
                </div>
              
            </div>
            {errorMessage}
            <div > 
                  <button onClick={()=>signInWithGoogle()}  className='btn btn-info d-block mx-auto w-75  '>
                      <img style={{width:'60px'}} src={google} alt="" />
                      <span >Google Sign In</span></button>
 
              </div>
       
        </div>
    );
};

export default SocialLogin;