import React, { use } from "react";
import ProductsCard from "./ProductsCard";
const ProductsCards = ({ productsPromise,Icons}) => {
  const productsDataRequest = use(productsPromise);
  const productsData = productsDataRequest.data;
  return (
    <div className="mt-10 p-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {productsData.map((product) => (
          <ProductsCard
            key={product.id}
            product={product}
          ></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsCards;
