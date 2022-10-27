import React, { useState } from 'react'
import CartContext from './Cart-Context'

const CartProvider = (props) => {
  const [items,setItems] = useState([])
  const [totalAmount,setTotalAmount] = useState(0);
  const addItemHandler = (item)=>{
    let addIt = true;
    let index;
      for(let i=0;i<items.length;i++){
          if(items[i].id===item.id){
            addIt=false;
            index=i;
          }
      }
      if(addIt){
          setItems([...items,item]);
          setTotalAmount((prevState)=>prevState+item.price*item.quantity)
          // setTotalAmount(totalAmount+);
      }
      else{
          let newItem = [...items];
          newItem[index].quantity++;
          setItems([...newItem]);
          setTotalAmount((prevState)=>prevState+item.price);
          alert('Item is added Successfully!')
      }
  }
    
    const removeItemHandler = (item)=>{
      let index;
        for(let i=0;i<items.length;i++){
            if(items[i].id===item.id){
              index=i;
            }
        }
      let newItem = [...items];
      if(newItem[index].quantity>1){
        newItem[index].quantity--;
        setItems([...newItem]);
      }
      
      else{
        newItem = newItem.filter(ele=>ele.id!==item.id)
        setItems(newItem);}
      setTotalAmount((prevState)=>prevState-item.price);

      
    };
    const cartContext = {
        items:items,
        addItem:addItemHandler,
        removeItem:removeItemHandler,
        totalAmount:totalAmount
    }
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider