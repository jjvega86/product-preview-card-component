import React from "react";

const PricingText = ({ salePrice, regularPrice }) => {
  return (
    <div className="flex align-middle gap-4 mb-5">
      <p className="text-primary-dark text-3xl font-medium font-fraunces">
        {salePrice}
      </p>
      <p className="text-sm text-neutral-dark line-through mt-2 ml-2 font-montserrat">
        {regularPrice}
      </p>
    </div>
  );
};

export default PricingText;
