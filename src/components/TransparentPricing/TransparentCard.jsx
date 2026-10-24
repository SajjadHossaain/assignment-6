import React from "react";
import TransparentFeature from "./TransparentFeature";

const TransparentCard = ({ transparent }) => {
  const { name, description, price, popular, features, buttonName } =
    transparent;
  return (
    <div
      className={`relative py-10 px-10 space-y-10 shadow-lg rounded-xl flex flex-col ${popular ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "bg-[#F9FAFC]"}`}
    >
      {popular && (
        <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-[#FEF3C6] text-[#BB4D00] px-4 rounded-2xl">
          Best Seller
        </span>
      )}
      <div>
        <h1
          className={`font-bold text-2xl ${popular ? "text-white" : "text-[#101727]"}`}
        >
          {name}
        </h1>
        <p className={`${popular ? "text-white" : "text-[#627382]"}`}>
          {description}
        </p>
      </div>
      <h1
        className={`font-bold text-4xl ${popular ? "text-white" : "text-[#101727]"}`}
      >
        ${price}/ <span className="text-sm text-[#627382]">month</span>
      </h1>
      <div className="flex-1 px-4 my- space-y-1">
        {features.map((feature, index) => (
          <TransparentFeature
            popular={popular}
            key={index}
            feature={feature}
          ></TransparentFeature>
        ))}
      </div>
      <button
        className={`btn w-full rounded-full ${popular ? "bg-white " : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"}`}
      >
        <span
          className={`${popular ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent" : "text-white"}`}
        >
          {buttonName}
        </span>
      </button>
    </div>
  );
};

export default TransparentCard;
