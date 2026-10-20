import React, { Suspense } from "react";
import ProductsHeader from "./ProductsHeader";
import ProductsCards from "./ProductsCards/ProductsCards";
import axios from "axios";

const productsPromise = axios.get("products.json");

const ProductsSection = () => {
  return (
    <section className="container mx-auto py-28">
      <ProductsHeader></ProductsHeader>
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        }
      >
        <ProductsCards productsPromise={productsPromise} ></ProductsCards>
      </Suspense>
    </section>
  );
};

export default ProductsSection;
