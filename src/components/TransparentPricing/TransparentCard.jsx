import React from 'react';
import TransparentFeature from './TransparentFeature';

const TransparentCard = ({transparent}) => {
    const { name, description, price, features, buttonName } = transparent;
    return (
      <div className="py-10 px-5 space-y-10 shadow-lg rounded-xl flex flex-col ">
        <div>
          <h1 className="font-bold text-2xl text-[#101727]">{name}</h1>
          <p>{description}</p>
        </div>
        <h1 className="font-bold text-4xl">
          ${price}/ <span className="text-sm">month</span>
        </h1>
        <div className="flex-1 px-4 my- space-y-1">
          {features.map((feature,index) => (
            <TransparentFeature key={index} feature={feature}></TransparentFeature>
          ))}
        </div>
        <button className="btn w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          {buttonName}
        </button>
      </div>
    );
};

export default TransparentCard;