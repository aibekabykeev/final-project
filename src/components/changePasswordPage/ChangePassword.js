import React from "react";
import styles from './ChangePassword.module.css';

const ChangePassword = () => {
    return(
        <div className="changePassword">
            <h1 className={styles.h1}>Изменить пароль</h1>
            <h6 className={styles.h6}>Введите свои данные, чтобы продолжить.</h6>
            <input className={styles.inputs} type="password" placeholder="Текущий пароль"/>
            <input className={styles.inputs} type="password" placeholder="Новый пароль"/>
            <input className={styles.inputs} type="password" placeholder="Подтвердите пароль"/>
            <button className={styles.btn}>Изменить пароль</button>
        </div>
    )
}

export default ChangePassword;
