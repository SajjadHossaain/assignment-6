import React from "react";

const ProductsHeader = () => {
  return (
    <div className="flex justify-center">
      <div className="space-y-5">
        <h1 className="font-extrabold text-5xl text-center">
          Premium Digital Tools
        </h1>
        <p className="text-center text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        <div className="flex gap-2 justify-center">
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">
            Products
          </button>
          <button className="btn rounded-full">
            Cart <span>0</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsHeader;
