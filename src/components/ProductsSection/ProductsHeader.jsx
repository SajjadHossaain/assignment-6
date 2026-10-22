import React from "react";

const ProductsHeader = ({ isButtonSelect, setButtonSelect, cardCount }) => {
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
          <button
            onClick={() => setButtonSelect("products")}
            className={`btn ${isButtonSelect === "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : ""} rounded-full`}
          >
            Products
          </button>
          <button
            onClick={() => setButtonSelect("cart")}
            className={`btn ${isButtonSelect === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : ""} rounded-full`}
          >
            Cart <span>{cardCount.length}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsHeader;
