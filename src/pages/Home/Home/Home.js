import React from 'react';
import Banner from '../Banner/Banner';
import Departments from '../Departments/Departments';
import Faqs from '../Faqs/Faqs';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Departments></Departments>
            <Faqs></Faqs>
        </div>
    );
};

export default Home;