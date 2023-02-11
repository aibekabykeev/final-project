import React from 'react'
import classes from "./ProductTrackingPage.module.css";



export default function InputAndButton() {
  return (
    <div className={classes.border}>
        <div className={classes.inputAndBtn}>
                    <div><input className={classes.inputNum} placeholder="Номер посылки" type="text"/></div>
                    <div><button className={classes.buttonProduct}>Отследить посылку</button></div>
                </div>
    </div>
  )
}
