import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid, IconButton, Stack,
  Typography
} from "@mui/material";
import sneakers1 from './image/sneakers1.jpg';
import sneakers2 from './image/sneakers2.jpg';
import sneakers3 from './image/sneakers3.jpg';
import vector from './image/Vector.png';
import basket from './image/basket.png';
import classes from './favorites.module.css';
import { Brightness1 } from "@mui/icons-material";


const Favorites = () => {

  let cards = [
    {
      name: 'Adidas Adistar 1',
      img: sneakers1,
      price: '8500',
      sizes: [39, 40, 42, 41, 43]
    },
    {
      name: 'Adidas Adistar 2',
      img: sneakers2,
      price: '8700',
      sizes: [39, 40, 42, 41, 43]
    },
    {
      name: 'Adidas Adistar 3',
      img: sneakers3,
      price: '8300',
      sizes: [40, 41, 42, 43, 44, 45]
    }
  ]

  const deleteAll = () => {
    cards = []
  }

  return (
    <Container>
      <Box align='left' pb={5} pt={8} pl={2}>
        <Typography variant='h4' fontWeight='bold' color='#006195'>
          Избранное
        </Typography>
      </Box>

      {cards.length ?
        <Grid container>
          {
            cards.map(card =>
              <Card className={classes.carts}>
                <Typography className={classes.title}>
                  {card.name}
                </Typography>

                <CardMedia
                  component="img"
                  height='296'
                  image={card.img}
                />
                <IconButton className={classes.vector}>
                  <img src={vector} alt="" width={25}/>
                </IconButton>
                <Typography className={classes.price}>
                  {card.price} c
                </Typography>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <CardContent className={classes.text}>
                    <Typography>
                      Размеры в наличии:
                    </Typography>

                    <Box textAlign={"left"}>
                      {
                        card.sizes.map((size, index) =>
                          <Typography display={"inline-grid"} color='#000000'>
                            {size}{card.sizes.length !== index + 1 ? '|' : ''} &nbsp;
                          </Typography>
                        )
                      }
                    </Box>
                  </CardContent>

                  <CardContent className={classes.color}>
                    <Typography color='#999999' fontSize='14' pr={8}>
                      Цвета:
                    </Typography>

                    <Stack direction="row">
                      <IconButton className={classes.btn}>
                        <Brightness1 className={classes.color}/>
                      </IconButton>
                      <IconButton className={classes.btn}>
                        <Brightness1 className={classes.color2}/>
                      </IconButton>
                      <IconButton className={classes.btn}>
                        <Brightness1 className={classes.color3}/>
                      </IconButton>
                      <IconButton className={classes.btn}>
                        <Brightness1 className={classes.color4}/>
                      </IconButton>
                      <IconButton className={classes.btn}>
                        <Brightness1 className={classes.color5}/>
                      </IconButton>
                    </Stack>
                  </CardContent>
                </Box>


                <Grid display={'flex'} justifyContent={'space-between'} pt={5}>
                  <Button size="medium" variant="contained">Подробнее</Button>
                  <Button size="medium" variant="contained">
                    <img src={basket} alt="" width={25}/>
                  </Button>
                </Grid>
              </Card>
            )
          }
        </Grid>
        :
        <Typography>Пусто</Typography>
      }
      <Button className={classes.vector} onClick={deleteAll}>
        <img src={vector} alt="" width={18} height={19}/>
        ОЧИСТИТЬ ВСЕ
      </Button>
    </Container>
  );
};

export default Favorites;