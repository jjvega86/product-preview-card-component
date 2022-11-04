import React from "react";

import CartButton from "./CartButton";
import PricingText from "./PricingText";
import ProductDescription from "./ProductDescription";
import ProductHeading from "./ProductHeading";
import ProductCategory from "./ProductCategory";
import ProductImage from "./ProductImage";

const ProductCard = () => {
  return (
    <div>
      <div className="max-w-sm sm:flex mb-5 mt-5 mr-20">
        <ProductImage />
        <div className="p-5 bg-neutral-white rounded-b-xl sm:p-12">
          <ProductCategory />
          <ProductHeading />
          <ProductDescription />
          <PricingText regularPrice="$169.99" salePrice="$149.99" />
          <CartButton />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
