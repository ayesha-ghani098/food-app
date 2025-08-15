import React from "react";
import { useSelector } from "react-redux";

// Style and Assets
import "./style.css";

// Components
import ProductCard from "../Card/ProductCard";

const ProductList = () => {
  const productState = useSelector((state) => state.product);
  const { loading, products, error } = productState;

  return (
    <div className="product__List">
      {loading ? (
        <h3>loading.....</h3>
      ) : error ? (
        <h1>Error while fetching</h1>
      ) : products ? (
        products.map((product, index) => {
          return <ProductCard key={product.id} product={product} />;
        })
      ) : (
        <h1>No Products Exist </h1>
      )}
    </div>
  );
};

export default ProductList;
