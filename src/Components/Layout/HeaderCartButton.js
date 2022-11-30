import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/Cart-Context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = (props) => {
  const [btnIsHighlighted,setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  let quantity = 0;
  cartCtx.items.forEach(item=>{
    quantity=quantity+Number(item.quantity);
  })
  const btnClass = `${classes.button} ${btnIsHighlighted? classes.bump:''}`;
  useEffect(()=>{
    if(cartCtx.items.length === 0 ){
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(()=>{
      setBtnIsHighlighted(false);
    },300)
    return ()=>{
      clearTimeout(timer);
    }
  },[cartCtx.items])
  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;