import React from "react";
import styles from "./OrderPage.module.css"

const OrderPage = () => {
    return (
        <div className="page">
            <div className="order">
              <h1 className={styles.h1}>Оформление заказа</h1>
              <p className={styles.p1}>Контактное лицо</p>
              <input className={styles.email} type="text" placeholder="Email"/>
              <input className={styles.name} type="text" placeholder="Имя"/>
              <input className={styles.surname} type="text" placeholder="Фамилия"/>
              <input className={styles.phone} type="text" placeholder="Телефон"/>
              <p className={styles.p2}>Адрес доставки</p>
              <input className={styles.settlement} type="text" placeholder="Населенный пункт"/>
              <input className={styles.street} placeholder="Улица"/>
              <input className={styles.postCode} type="text" placeholder="Индекс"/>
              <input className={styles.house} placeholder="Дом"/>
              <input className={styles.entrance} placeholder="Подъезд"/>
              <input className={styles.apartment} type="text" placeholder="Квартира"/>
              <p className={styles.p3}>Способ доставки</p>
              <input className={styles.delivery} type="text" placeholder="Курьером"/>
              <p className={styles.p4}>Оплата картой</p>
              <input className={styles.masterCard} type="text" placeholder="Master Card"/>
              <input className={styles.visa} type="text" placeholder="Visa"/>
              <p className={styles.p5}><input type="checkbox" name="checkme" id="agree"/> Я прочитал и согласен с условиями пользовательского соглашения.</p>
              <button className={styles.btn}>Подтверждаю заказ</button>
              <p className={styles.p6}>Комментарий</p>
              <form>
               <textarea className={styles.textarea} rows="5" cols="50" placeholder="Укажите дополнительную информацию , которая будет важна для правильного выполнения заказа." />
              </form>
            </div>
        </div>
    )
}

export default OrderPage;
