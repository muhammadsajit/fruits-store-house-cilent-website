import React from 'react';
import Loading from '../../commonPages/Loading/Loading';
import Banner from './Banner/Banner';
import Header from './Header/Header';

const Home = () => {
    let loading;
    if(loading){
        return <Loading></Loading>
    }

    return (
        <div>
            
           
            
            <h2 className='text-center text-primary'>Fruits Store House</h2>
           
            <Banner></Banner>
            
        </div>
    );
};

export default Home;