import React, { Suspense, useState } from "react";
import ProductsHeader from "./ProductsHeader";
import ProductsCards from "./ProductsCards/ProductsCards";
import axios from "axios";
import Cart from "./ProductsCards/Cart";

const productsPromise = axios.get("products.json");

const ProductsSection = ({ handleCount, cardCount }) => {
  const [isButtonSelect, setButtonSelect] = useState("products");
  const [sum,setSum] = useState(0);
  return (
    <section className="container mx-auto py-28">
      <ProductsHeader
        cardCount={cardCount}
        isButtonSelect={isButtonSelect}
        setButtonSelect={setButtonSelect}
      ></ProductsHeader>
      {isButtonSelect === "products" ? (
        <Suspense
          fallback={
            <div className="flex min-h-screen items-center justify-center">
              <span className="loading loading-dots loading-xl"></span>
            </div>
          }
        >
          <ProductsCards
            sum={sum}
            setSum={setSum}
            handleCount={handleCount}
            productsPromise={productsPromise}
          ></ProductsCards>
        </Suspense>
      ) : (
        <Suspense>
          <Cart 
          sum={sum}
          setSum={setSum}
          cardCount={cardCount}></Cart>
        </Suspense>
      )}
    </section>
  );
};

export default ProductsSection;
