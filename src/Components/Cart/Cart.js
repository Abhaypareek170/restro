import React, { useContext } from "react";
import CartContext from "../../store/Cart-Context";
import Model from "../UI/Model";
import classes from './Cart.module.css'
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCntx = useContext(CartContext);
  const totalAmount = cartCntx.totalAmount.toFixed(2);

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCntx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.quantity}
          price={item.price}
          item = {item}
        />
      ))}
    </ul>
  );
  return (
    <Model onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Model>
  );
};

export default Cart;