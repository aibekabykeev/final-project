import React from 'react';
import classes from "./ProductTrackingPage.module.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InputAndButton from  "./InputAndButton"
import Status from "./Status"
import Status2 from "./Status2"

function ProductTrackingPage() {
    return (
        <>
            <div className={classes.block}>
                <div className={classes.container}>
                <div className={classes.mainTrackingProduct}>
                <div>
                    <h1 className={classes.mainTitle}>ОТСЛЕДИТЬ ТОВАР</h1>
                </div>


                <InputAndButton/>

                <div className={classes.mainTrackingBlock}>

                    <div className={classes.leftBlock}>
                        <div className={classes.trackingInfo}>
                            <p className={classes.titleGray}>Номер отслеживания</p>
                            <p className={classes.titleBlack}><b>L84523</b></p>
                            <p className={classes.titleGray}>Кому</p>
                            <p className={classes.titleBlack}><b>Example</b></p>
                            <p className={classes.titleGray}>От</p>
                            <p className={classes.titleBlack}><b>Example</b></p>
                            <p className={classes.titleGray}>Страна отправитель</p>
                            <p className={classes.titleBlack}><b>США</b></p>
                            <p className={classes.titleGray}>Страна назначения</p>
                            <p className={classes.titleBlack}><b>Кыргызстан</b></p>
                            <p className={classes.titleGray}>Вес</p>
                            <p className={classes.titleBlack}><b>0,5 кг</b></p>
                        </div>
                    </div>

                    <div className={classes.productStatus}>
                        <p><b className={classes.titleStatus}>Статус </b></p>
                        <div className={classes.statusMui}>
                        <Status/>
                        <Status2/>
                        </div>
                    </div>

                    <div className={classes.rightBlock}>
                        <div className={classes.productInfo}>

                            <div className={classes.productInfo_inner2}>
                                <p><b className={classes.titleBlack2}>Местоположение</b></p>
                                <p><b className={classes.titleBlack2}>Дата</b></p>
                            </div>

                            <p className={classes.titleGray2}>США</p>
                            <div className={classes.productInfo_inner}>
                                <p><b className={classes.titleBlack2}>Подготовлено к отправке</b></p>
                                <p><b className={classes.titleBlack2}>17.11.2022</b></p>
                            </div>

                            <p className={classes.titleGray2}>США</p>
                            <div className={classes.productInfo_inner}>
                                <p><b className={classes.titleBlack2}>Принято перевозчиком</b></p>
                                <p><b className={classes.titleBlack2}>18.11.2022</b></p>
                            </div>


                            <div className={classes.muiAccordion}>
                                <Accordion  sx={{
                                    boxShadow:'none',
                                    '& .MuiButtonBase-root':{
                                        p:0
                                    }
                                }}>
                                    <AccordionSummary
                                    
                                        expandIcon={<ExpandMoreIcon sx={{color: "#006195"}} />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography sx={{color: "#006195"}}><h4>Показать промежуточные события (30)</h4></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{p: 0}}
                                    >
                                        <Typography sx={{color: "#006195"}}>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>


                            <p className={classes.titleGray2}>Кыргызстан</p>
                            <div className={classes.productInfo_inner}>
                                <p><b className={classes.titleBlack2}>Обработка. Прибыло на склад</b></p>
                                <p><b className={classes.titleBlack2}>08.12.2022</b></p>
                            </div>

                            <p className={classes.titleGray2}>Кыргызстан</p>
                            <div className={classes.productInfo_inner}>
                                <p><b className={classes.titleBlack2}>Прибытие в офис доставки</b></p>
                                <p><b className={classes.titleBlack2}>09.12.2022</b></p>
                            </div>

                            <p className={classes.titleGray2}>Кыргызстан</p>
                            <div className={classes.productInfo_inner}>
                                <p><b className={classes.titleBlack2}>Вручение адресату</b></p>
                                <p><b className={classes.titleBlack2}>10.12.2022</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </>
    );
}

export default ProductTrackingPage;
