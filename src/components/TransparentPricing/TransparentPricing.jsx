import axios from 'axios';
import React from 'react';
import TransparentHead from './TransparentHead';
import TransparentCards from './TransparentCards';

const promiseTransparent = axios.get("transparents.json");

const TransparentPricing = () => {
    return (
        <section className='container mx-auto my-32'>
            <TransparentHead></TransparentHead>
            <TransparentCards promiseTransparent={promiseTransparent}></TransparentCards>
        </section>
    );
};

export default TransparentPricing;