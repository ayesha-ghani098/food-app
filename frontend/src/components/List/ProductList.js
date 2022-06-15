import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Style and Assets
import './style.css'

// Actions
import { getAllProducts } from "../../store/actions/productAction";

// Components
import ProductCard from "../Card/ProductCard";


const ProductList = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product);

  const { loading, products, error } = productState;

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="product__List">
      {loading ? (
        <h3>loading.....</h3>
      ) : error ? (
        <h1>Error while fetching</h1>
      ) : products ? (
        products.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })
      ) : (
        <h1>No Products Exist</h1>
      )}
    </div>
  );
};

export default ProductList;
