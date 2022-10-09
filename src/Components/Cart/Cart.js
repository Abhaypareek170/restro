import React, { useContext } from "react";
import CartContext from "../../store/Cart-Context";
import Model from "../UI/Model";
import classes from './Cart.module.css'

const Cart = (props) => {
  const cartCntx = useContext(CartContext);
  let totalAmount = 0;
  cartCntx.items.forEach(item=>{
    totalAmount+=item.price;
  })
  
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCntx.items.map(
        (item) => (
          <li key={item.id}>Name: {item.name}  Price: ${item.price}  Quantity: {item.quantity}</li>
        )
      )}
    </ul>
  );
  return (
    <Model onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Model>
  );
};

export default Cart;
