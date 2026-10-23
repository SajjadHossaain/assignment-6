import React, { use } from 'react';
import TransparentCard from './TransparentCard';

const TransparentCards = ({ promiseTransparent }) => {
    const transparentDataRequest = use(promiseTransparent);
    const transparentData = transparentDataRequest.data;
  return (
    <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5'>
      {
        transparentData.map((transparent,index) => <TransparentCard key={index} transparent={transparent}></TransparentCard>)
      }
    </div>
  );
};

export default TransparentCards;