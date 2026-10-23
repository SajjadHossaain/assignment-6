import React from "react";
import CartItem from "./CartItem";
import cardIcons from "../../../data/cardIcons";

const Cart = ({ cardCount, setCardCount, sum, setSum }) => {
  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-2xl ml-20 font-bold">Your Cart</h1>
      <div className="p-19 space-y-5">
        {/* card */}
        {cardCount.map((item, index) => (
          <CartItem
            sum={sum}
            setSum={setSum}
            cardCount={cardCount}
            setCardCount={setCardCount}
            cardIcon={cardIcons[item.icon]}
            key={index}
            item={item}
          ></CartItem>
        ))}
        <div className="flex justify-between px-4">
          <h3>Total</h3>
          <p className="font-semibold text-2xl">${sum}</p>
        </div>
        <button className="btn w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
