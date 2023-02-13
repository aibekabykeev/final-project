import React from 'react';
import classes from './product.module.css';
import {
  Box, Button, Card, CardContent, CardMedia, colors, Container, Grid, IconButton, Stack, Typography
} from "@mui/material";
import { Brightness1 } from "@mui/icons-material";
import basket from './image/basket.png'
import sneakers1 from './image/sneakers1.jpg'

const ProductBay = () => {

  const selectedProduct = {
    name: 'Кроссовки Nike Air Max 97',
    image: sneakers1,
    code: '22558',
    sizes: [39, 40, 41, 43, 44],
    price: 9200,
    currencyPrice: 8500
  }

  const colors = [
    {colorClassName: 'color'},
    {colorClassName: 'color2'},
    {colorClassName: 'color3'},
    {colorClassName: 'color4'},
    {colorClassName: 'color5'}
  ]


  return (
    <Container>
      <Grid display={"flex"} justifyContent={"space-between"} mt={10}>

        <Box width='48%'>
          <Card className={classes.image}>
            <CardMedia
              component="img"
              image={selectedProduct.image}
            />
          </Card>
          <div className={classes.line}></div>
        </Box>


        <Box width='48%' >
          <Typography className={classes.title} variant='h5'>
            {selectedProduct.name}
          </Typography>

          <Typography className={classes.article} color='#9C9C9C' textAlign={"left"}>
            Артикул {selectedProduct.code}
          </Typography>

          <Box className={classes.color}>
            <Typography className={classes.colorText}>
              Цвета:
            </Typography>
            <Stack direction="row">
              {colors.map(color =>
                <IconButton className={classes.colors}>
                  <Brightness1 className={classes[color.colorClassName]}/>
                </IconButton>
              )}
            </Stack>
          </Box>

          <Grid display={'flex'} alignItems={"flex-start"} pt={5}>
            <Box pr={10}>
              <Typography className={classes.sizeText}>
                Размеры в наличии:
              </Typography>

              <Box color='#9C9C9C'>
                {
                  selectedProduct.sizes.map(size =>
                    <Typography display={"inline-grid"} className={classes.size}>
                      {size}&nbsp;
                    </Typography>
                  )
                }
              </Box>
            </Box>

            <Box className={classes.prices}>
              <Typography className={classes.price}>
                <s>{selectedProduct.price} c</s>
              </Typography>
              <Typography className={classes.currencyPrice}>
                {selectedProduct.currencyPrice} c
              </Typography>
            </Box>
          </Grid>

          <Grid display={"flex"} alignItems={"flex-start" }>
            <Box pr={19}>
              <Button size="medium" variant="contained" className={classes.btnBay}>Купить</Button>
            </Box>
            <Box>
              <Button size="medium" variant="contained" className={classes.btn}>
                <img src={basket} alt="" width={25}/>
              </Button>
            </Box>
          </Grid>
        </Box>
      </Grid>

    </Container>
  );
};

export default ProductBay;