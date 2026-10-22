import React from 'react';
import { Trash } from "lucide-react";

const CartItem = ({ item }) => {
console.log(item)

// console.log(name,price)
  return (
      <div className="flex justify-between items-center px-2 py-3 space-y-3 shadow-lg bg-amber-200 rounded-2xl">
        <div className="flex gap-5 items-center">
          <img src="" alt="" className="h-10 w-10 bg-red-500" />
          <div>
            <h1 className="font-bold text-2xl">{item.name}</h1>
            <p>${item.price}</p>
          </div>
        </div>
        <button className="btn px-10">
          <Trash></Trash>
        </button>
      </div>
  );
};

export default CartItem;