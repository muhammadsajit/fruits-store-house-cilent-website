import React from 'react';
import Loading from '../../commonPages/Loading/Loading';
import Contact from '../Contact/Contact';
import Banner from './Banner/Banner';
import Header from './Header/Header';
import InventoryItem from './InventoryItem/InventoryItem';

const Home = () => {
    let loading;
    if(loading){
        return <Loading></Loading>
    }

    return (
        <div>
            
           
            
            <h2 className='text-center text-primary'>Fruits Store House</h2>
           
            <Banner></Banner>
            <InventoryItem></InventoryItem>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;