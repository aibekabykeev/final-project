import React from 'react';
import ProductReviews from "./productReviews/ProductReviews";
import ProductImage from "./productImage/ProductImage";
import ProductBay from "./productBay/ProductBay";
import SimilarProduct from "./similarProducts/SimilarProduct";

const Product = () => {
  return (
    <div>
      <ProductBay/>
      <ProductReviews/>
      <ProductImage/>
      <SimilarProduct/>
    </div>
  );
};

export default Product;