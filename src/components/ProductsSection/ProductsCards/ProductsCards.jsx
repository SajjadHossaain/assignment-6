import React, { use } from "react";
import ProductsCard from "./ProductsCard";
import cardIcons from "../../../data/cardIcons";

const ProductsCards = ({ productsPromise, handleCount, sum, setSum }) => {
  const productsDataRequest = use(productsPromise);
  const productsData = productsDataRequest.data;
  return (
    <div className="mt-10 p-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {productsData.map((product) => (
          <ProductsCard
            sum={sum}
            setSum={setSum}
            handleCount={handleCount}
            key={product.id}
            product={product}
            cardIcon={cardIcons[product.icon]}
          ></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsCards;
