import React from 'react'
import classes from "./ShoppingCart.module.css";

export default function OrderPlacement() {
  return (
    <div>
        <div className={classes.rightBlock}>
                    <h4 className={classes.title_right}>Промокод</h4>
                    <input className={classes.input} placeholder="Введите промокод"></input>
                    <div className={classes.title_right1}>
                        Количество товаров
                        <b>2 шт.</b>
                    </div>
                    <div className={classes.title_right2}>
                        <p>Итого :</p>
                        <b>17000 с</b>
                    </div>
                    <button className={classes.btn}>Перейти к оформлению</button>
                </div>
    </div>
  )
}
