import React from "react";
import designIcon from "././../../../assets/products/design-tool.png";
import ProductsFeature from "./ProductsFeature";
const ProductsCard = ({ product }) => {
  const { name, description, price, period, tag, features, icon } = product;
  console.log(icon);
  return (
    <div className="relative bg-white p-5 rounded-lg space-y-4 flex flex-col ">
      {/* Best Seller Badge */}
      <span className="absolute right-4 top-5 bg-green-500 px-4 rounded-2xl">
        Best Seller
      </span>
      {/* dynamics icon */}
      <div className="space-y-2">
        <div className="mt-10 w-15 h-15">
          <img
            src={designIcon}
            alt=""
            className="w-full h-full object-contain p-3"
          />
        </div>
        <h1 className="font-bold text-2xl text-black">AI Writing Pro</h1>
        <p className="text-[#627382]">
          Generate high-quality content, blogs, and marketing copy in seconds
          with advanced AI.
        </p>
        <h3 className="font-bold text-[#101727] text-2xl">$29/mo</h3>
      </div>
      {/* card features */}
      <div className="flex-1 p-3 space-y-2">
        {features.map((feature) => (
          <ProductsFeature feature={feature}></ProductsFeature>
        ))}
      </div>
      <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full rounded-full">
        Buy Now
      </button>
    </div>
  );
};

export default ProductsCard;
