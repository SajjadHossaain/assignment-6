import React, { useState } from "react";
import ProductsFeature from "./ProductsFeature";
const ProductsCard = ({
  product,
  handleCount,
  cardIcon,
  sum,
  setSum,
}) => {
  const { name, description, price, features, tag, tagType} = product;
  const [cardAdded, setCardAdded] = useState(false);
  const handleBuyButton = () => {
    handleCount(product);
    setCardAdded(true);
    setSum(sum + price);
  };
 const badgeStyle = (tagType) => {
   if (tagType === "new") {
     return "bg-[#DBFCE7] text-[#0A883E]";
   }
   if (tagType === "popular") {
     return "bg-[#E1E7FF] text-[#9514FA]";
   }
   if (tagType === "best seller") {
     return "bg-[#FEF3C6] text-[#BB4D00]";
   }
   return "";
 };
  return (
    <div className="relative bg-white p-5 rounded-lg space-y-4 flex flex-col ">
      {/* Best Seller Badge */}
      <span className={`absolute right-4 top-5 ${badgeStyle(tagType)} px-4 rounded-2xl`}>
        {tagType}
      </span>
      {/* dynamics icon */}
      <div className="space-y-2">
        <div className="mt-10 w-15 h-15">
          <img
            src={cardIcon}
            alt=""
            className="w-full h-full object-contain p-3"
          />
        </div>
        <h1 className="font-bold text-2xl text-black">{name}</h1>
        <p className="text-[#627382]">{description}</p>
        <h3 className="font-bold text-[#101727] text-2xl">${price}/mo</h3>
      </div>
      {/* card features */}
      <div className="flex-1 p-3 space-y-2">
        {features.map((feature, index) => (
          <ProductsFeature feature={feature} key={index}></ProductsFeature>
        ))}
      </div>
      <button
        onClick={handleBuyButton}
        disabled={cardAdded ? true : false}
        className={`btn ${cardAdded ? "bg-green-500" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"} w-full rounded-full text-white`}
      >
        {cardAdded ? "Added to Cart!" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductsCard;
