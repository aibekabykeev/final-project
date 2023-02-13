import React from "react";
import styles from "./PayWithCard.module.css"

const PayWithCard = () => {
  return (
    <div className="wrappper">
      <div className="payment">
        <h1 className={styles.h1}>Оплата картой</h1>
        <input className={styles.cardNumber} type="number" placeholder="Номер карты: 0000-0000-0000-0000"/>
        <input className={styles.date} type="number" placeholder="00/00"/>
        <input className={styles.cvc} type="number" placeholder="CVC код"/>
        <input className={styles.name} type="text" placeholder="Имя"/>
        <button className={styles.btn}>Оплатить</button>
      </div>
    </div>
  );
}

export default PayWithCard;