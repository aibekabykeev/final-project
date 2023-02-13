import React from 'react';
import { Box, Container, Typography } from "@mui/material";
import classes from './productImage.module.css'
import sneakers4 from './image/sneakers4.jpg'

const ProductImage = () => {

  return (
    <Container>
      <Box className={classes.imageContent}>
        <div className={classes.line}></div>
      </Box>
      <Box className={classes.mainPhoto}>
        <Box className={classes.blueLine}></Box>
        <Box className={classes.image}>
          <img src={sneakers4} alt=""/>
        </Box>
      </Box>
      <Typography className={classes.imageDescription}>Подошва из пеноматериала упругая и мягкая.</Typography>
    </Container>
  );
};

export default ProductImage;