import React from 'react';
import Banner from './Banner/Banner';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            
            <Header></Header>
            <h2 className='text-center text-primary'>Fruits Store House</h2>
            <Banner></Banner>
        </div>
    );
};

export default Home;