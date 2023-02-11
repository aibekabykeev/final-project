import React from 'react'
import classes from "./ShoppingCart.module.css";
import icon_basket2 from "./icons/basket_icon.svg"

export default function ClearBasketBtn() {
  return (
    <div>
        <button className={classes.clearBasket}>
                        <img src={icon_basket2} alt=""/>
                        <h4>ОЧИСТИТЬ КОРЗИНУ</h4>
                    </button>
    </div>
  )
}
