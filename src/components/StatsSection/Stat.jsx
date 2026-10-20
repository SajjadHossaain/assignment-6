import React from 'react';

const Stat = ({stat}) => {
    return (
      <div className="flex-1 space-y-3">
        <h1 className="font-extrabold text-6xl text-white">{stat.value}</h1>
        <p className="text-[#FFFFFF]">{stat.label}</p>
      </div>
    );
};

export default Stat;