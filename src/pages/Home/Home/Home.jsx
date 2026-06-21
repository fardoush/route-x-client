import React from 'react';
import Banner from '../Banner/Banner';
import HowWork from '../HowWork/HowWork';
import OurServices from '../OurServices/OurServices';
import Brands from '../Brands/Brands';
import Feature from '../Feature/Feature';
import Reviews from '../Reviews/Reviews';

const reviewsPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner/>
            <HowWork/>
            <OurServices/>
            <Brands/>
            <Feature/>
            <Reviews reviewsPromise={reviewsPromise}/>
        </div>
    );
};

export default Home;