import React from 'react';
import { Trash } from "lucide-react";

const CartItem = ({ item, cardIcon, cardCount, setCardCount, sum, setSum }) => {
  const {name,price} = item;
  const handleRemove = (item) => {
    const filterCard = cardCount.filter((prod) => prod.name !== item.name);
    setCardCount(filterCard);
    setSum(sum - price)
  };
  return (
    <div className="flex justify-between items-center px-4 py-3 space-y-3 shadow-lg rounded-2xl">
      <div className="flex gap-5 items-center">
        <img src={cardIcon} alt="" className="h-10 w-10" />
        <div>
          <h1 className="font-bold text-2xl">{name}</h1>
          <p className="font-semibold text-gray-500">${price}</p>
        </div>
      </div>
      <button
        onClick={() => handleRemove(item)}
        className="btn px-10 rounded-2xl"
      >
        <Trash></Trash>
      </button>
    </div>
  );
};

export default CartItem;