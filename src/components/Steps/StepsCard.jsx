import React from "react";

const StepsCard = ({ step, icon }) => {
  const { id, title, description } = step;
  return (
    <div className="relative space-y-4 shadow-lg bg-white rounded-2xl">
      <div className="absolute font-bold right-3 top-5  bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-10 h-10 rounded-full flex justify-center items-center">
        {id}
      </div>

      <div className="m-19 flex flex-col justify-center items-center space-y-4">
        <div className="p-5 bg-amber-100 rounded-full">
          <img src={icon} alt="" />
        </div>
        <h2 className="font-bold text-2xl text-[#001931]">{title}</h2>
        <p className="text-[#627382] text-center">{description}</p>
      </div>
    </div>
  );
};

export default StepsCard;
