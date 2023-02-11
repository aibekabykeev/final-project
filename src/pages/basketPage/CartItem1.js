import React from 'react'
import { useState } from 'react';
import classes from "./ShoppingCart.module.css";
import png1 from "./icons/fashion-shoes-sneakers 1.svg"
import icon_color1 from "./icons/Ellipse_white.svg"
import icon_basket1 from "./icons/basket_icon_Gray.svg"


export default function CartItem1() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <div className={classes.cartItem}>
                        <div className={classes.cartItem1}>
                            <img src={png1} alt="Sneakers"/>
                            <div className={classes.title}>
                                <h4>Кроссовки</h4>
                                <b>Nike Air Max 27</b>
                                <p><strong>Цвет</strong></p>
                                <img src={icon_color1} alt="Color"/>
                                <p><strong>Размер: 40</strong></p>
                            </div>
                        </div>
                        <div className={classes.counter}>
                            <div className={classes.button__wrapper}>
                                <button onClick={() => setCount(count - 1)}>-</button>
                            </div>
                            <h1 className={classes.count}>{count}</h1>
                            <div className={classes.button__wrapper}>
                                <button onClick={() => setCount(count + 1)}>+</button>
                            </div>
                        </div>
                        <div className={classes.price}>
                            <b>8500 c</b>
                        </div>
                        <img className={classes.basket} src={icon_basket1} alt="Basket"/>
                    </div>
    </div>
  )
}
