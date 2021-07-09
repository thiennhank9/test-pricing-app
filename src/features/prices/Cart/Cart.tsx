import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "app/store";
import Button from "components/Button";
import { formatCurrency } from "utils";
import "./Cart.css";

function Cart() {
  const { price } = useSelector((state: RootState) => state.prices);

  return (
    <div className="row-cart">
      Order price:
      <span className="amount">{formatCurrency(price)}</span>
      <Button>Cart</Button>
    </div>
  );
}

export default Cart;
