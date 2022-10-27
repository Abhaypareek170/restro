import { useContext } from 'react';
import CartContext from '../../store/Cart-Context';
import classes from './CartItem.module.css';

const CartItem = (props) => {
    const cartCntx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={()=>cartCntx.removeItem(props.item)}>−</button>
        <button onClick={()=>cartCntx.addItem(props.item)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;