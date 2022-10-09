import React, { useState } from 'react'
import CartContext from './Cart-Context'

const CartProvider = (props) => {
  const [items,updateItems] = useState([])
    const addItemHandler = (item)=>{
      updateItems([...items,item]);
    }; 
    const removeItemHandler = (id)=>{};
    const cartContext = {
        items:items,
        addItem:addItemHandler,
        removeItem:removeItemHandler,
        massege:'Click me!'
    }
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider