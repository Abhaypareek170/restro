import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton
          onClick={props.onShowCart}
          onClose={props.onHideCart}
        />
      </header>
      <div className={classes["main-image"]}>
        <img
          src={mealsImage}
          alt="A table of tasty food."
          style={{
            width: "110%",
            height: "100%",
            objectFit: "cover",
            transform: "rotateZ(-5deg) translateY(-4rem) translateX(-1rem)",
          }}
        />
      </div>
    </>
  );
};

export default Header;
