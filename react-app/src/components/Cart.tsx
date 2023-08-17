import React from "react";

interface Props {
  itemCount: number;
}
const Cart = ({ itemCount }: Props) => {
  return (
    <div>
      <p>Cart: {itemCount}</p>
    </div>
  );
};

export default Cart;
