import React from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealList.module.css";

const MealList = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3 className={classes.name}>{props.name}</h3>
        <div className={classes.desc}>{props.desc}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm id={props.id} item={props}/>
    </li>
  );
};

export default MealList;
