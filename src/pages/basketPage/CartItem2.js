import React from 'react'
import classes from "./ShoppingCart.module.css";
import png2 from "./icons/fashion-shoes-sneakers 2.svg"
import icon_color2 from "./icons/Ellipse_balck.svg"
import icon_basket1 from "./icons/basket_icon_Gray.svg"
import {useState} from "react";


export default function CartItem2() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <div className={classes.cartItemSecond}>
                        <div className={classes.cartItem1}>
                            <img src={png2} alt="Sneakers"/>
                            <div className={classes.title}>
                                <h4>Кроссовки</h4>
                                <b>Adidas Nova</b>
                                <p><strong>Цвет</strong></p>
                                <img src={icon_color2} alt="Color"/>
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
