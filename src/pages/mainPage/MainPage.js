import React from 'react';
import classes from "./MainPage.module.css"

export default function MainPage() {
    return <>
        <div>
            <div className={classes.main}>
                <div className={classes.main__container}>
                    <div className={classes.main__inner}>
                        <div className={classes.main__adidas}>
                            <h3>ADIDAS REVEAL THE 'AL RIHLA'
                                2022 WORLD CUP PACK</h3>
                            <p>Продолжая давнюю традицию создания <br/> комплектов бутс для <br/>
                                чемпионата мира по футболу, <br/>
                                Adidas представила свою <br/>
                                стилистику для Катара 2022 года.</p>
                            <button>Подробнее</button>
                        </div>
                        <div className={classes.main__img}>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}

