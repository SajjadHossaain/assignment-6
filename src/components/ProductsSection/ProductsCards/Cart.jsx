import React, { use } from "react";
import CartItem from "./CartItem";
import cardIcons from "../../../data/cardIcons";
import { ShoppingCartMinus } from "lucide-react";

const Cart = ({ cardCount, setCardCount, sum, setSum }) => {
  const handleCheckout = () => {
    setCardCount([]);
    setSum(0);
  };
  return (
    <div className="container mx-auto mt-10 p-4">
      <div className="space-y-5">
        {cardCount.length > 0 ? (
          <>
            <h1 className="text-2xl ml-4 font-bold">Your Cart</h1>
            {cardCount.map((item, index) => (
              <CartItem
                sum={sum}
                setSum={setSum}
                cardCount={cardCount}
                setCardCount={setCardCount}
                cardIcon={cardIcons[item.icon]}
                key={index}
                item={item}
              />
            ))}

            <div className="flex justify-between px-4">
              <h3>Total</h3>
              <p className="font-semibold text-2xl">
                ${Number(sum).toFixed(2)}
              </p>
            </div>

            <button
              onClick={handleCheckout}
              className="btn w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
            >
              Proceed to Checkout
            </button>
          </>
        ) : (
          <div className="py-10 flex flex-col justify-center items-center">
            <ShoppingCartMinus size={50}></ShoppingCartMinus>
            <h2 className="text-xl font-bold">Your cart is empty!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
