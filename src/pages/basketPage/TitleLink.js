import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import classes from "./TitleLink.module.css";



export default function TitleLink() {
    const breadcrumbs = [
        <Link style={{
            color:'inherit',
            textDecoration:'none'
        }} to="/">
            Главная
        </Link>,

        <Typography key="3" color="text.primary">
            Корзина
        </Typography>,
    ];

    return (
        <>
            <div>
                <Stack spacing={2}>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small"/>}
                        aria-label="breadcrumb"
                        sx={{marginTop: 4}}
                    >
                        {breadcrumbs}
                    </Breadcrumbs>
                </Stack>
            </div>
            <div>
                <h1 className={classes.title}>Корзина</h1>
            </div>
        </>
    );
}