import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cardCount }) => {
const {name,price} = cardCount;
console.log(cardCount)
  const handleCheckOut = () => {};
  return (
    <div className="container mx-auto bg-green-400 mt-10 p-4">
      <h1 className="text-2xl ml-20 font-bold">Your Cart</h1>
      <div className="p-19 space-y-5">
        {/* card */}
        {
            cardCount.map((item,index) => <CartItem key={index} item={item}></CartItem>)
        }
        <button onClick={handleCheckOut} className="btn w-full rounded-full">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
