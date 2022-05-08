import React from 'react';
import Loading from '../../commonPages/Loading/Loading';
import Contact from '../Contact/Contact';
import Quality from '../Quality/Quality';
import Banner from './Banner/Banner';
import Header from './Header/Header';
import InventoryItem from './InventoryItem/InventoryItem';

const Home = () => {
   

    return (
        <div>
            
           
            
            <h2 className='text-center text-primary'>Fruits Store House</h2>
           
            <Banner></Banner>
            <InventoryItem></InventoryItem>
            <Quality></Quality>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;