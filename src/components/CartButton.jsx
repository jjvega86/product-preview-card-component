import React from "react";

const CartButton = () => {
  return (
    <button className="bg-primary-dark text-neutral-white hover:bg-neutral-vdark rounded-lg w-full h-10 flex justify-center pt-4 pb- gap-3">
      <img src="src/assets/images/icon-cart.svg" alt="shopping cart" />
      Add to Cart
    </button>
  );
};

export default CartButton;
