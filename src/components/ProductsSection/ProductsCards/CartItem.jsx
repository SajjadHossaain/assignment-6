import React from 'react';  
const CartItem = ({ item, cardIcon, cardCount, setCardCount, sum, setSum }) => {
  const {name,price} = item;
  const handleRemove = (item) => {
    if(sum>=0){
      setSum(sum - price)
    }
    else{
      alert("Not Enough Money");
      return;
    }
    const filterCard = cardCount.filter((prod) => prod.name !== item.name); 
    setCardCount(filterCard);
  };
  return (
    <div className="flex gap-5 flex-col sm:flex-row justify-between items-center px-4 py-3 space-y-3 shadow-lg rounded-2xl">
      <div className="flex gap-5 items-center">
        <img src={cardIcon} alt="" className="h-10 w-10" />
        <div>
          <h1 className="font-bold text-sm sm:text-2xl text-nowrap">{name}</h1>
          <p className="font-semibold text-gray-500">${price}</p>
        </div>
      </div>
      <button
        onClick={() => handleRemove(item)}
        className="btn px-10 text-red-700 rounded-2xl"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;