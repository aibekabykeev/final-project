import React from 'react';
import classes from "./ShoppingCart.module.css";
import png1 from "./icons/fashion-shoes-sneakers 1.svg"
import png2 from "./icons/fashion-shoes-sneakers 2.svg"
import icon_color1 from "./icons/Ellipse_white.svg"
import icon_color2 from "./icons/Ellipse_balck.svg"
import icon_basket1 from "./icons/basket_icon_Gray.svg"
import icon_basket2 from "./icons/basket_icon.svg"
import {useState} from "react";
import CartItem1 from './CartItem1';
import CartItem2 from './CartItem2';
import ClearBasketBtn from './ClearBasketBtn';
import OrderPlacement from './OrderPlacement';


function ShoppingCart(props) {
    const [count, setCount] = useState(0);
    return (
        <>
            <div className={classes.mainBlock}>
                <div className={classes.leftBlock}>
                    <CartItem1/>
                    <CartItem2/>

                    <ClearBasketBtn/>
                </div>
                <OrderPlacement/>
            </div>
        </>
    );
}

export default ShoppingCart;