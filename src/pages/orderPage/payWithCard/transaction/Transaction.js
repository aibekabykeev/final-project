import React from "react";
import styles from "./Transaction.module.css"

const Transaction = () => {
  return(
    <div>
      <h1 className={styles.h1}>Транзакция успешно прошла!</h1>
      <h6 className={styles.h6}>Номер заказа</h6>
      <p className={styles.p}>18281</p>
    </div>
  )
}

export default Transaction;