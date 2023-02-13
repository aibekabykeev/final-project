import React from 'react';
import { Box, Button, Card, CardMedia, Container, Grid, Typography } from "@mui/material";
import sneakers2 from './image/sneakers2.jpg'
import sneakers3 from './image/sneakers3.jpg'
import starFilled from './image/starFilled.svg'
import chevronDown from './image/chevronDown.svg'
import classes from './productReviews.module.css'

const ProductReviews = () => {

  const reviewsProduct = {
    name: 'Nike Air Max 97',
    image: sneakers2,
    imageTwo: sneakers3
  }

  const reviews = {
    reviews: 'Отзывы (1024)'
  }

  const reviewStarts = {
    img: starFilled,
    stars: 5
  }

  return (
    <Container>
      <Grid display={"flex"} justifyContent={"space-between"}>
        <Box pt={5} className={classes.mainText}>
          <Box>
            <Typography className={classes.text}>
              Nike Air Max 97
            </Typography>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"} className={classes.imageBox} pr={10}>
            <Card className={classes.image}>
              <CardMedia
                component="img"
                image={reviewsProduct.imageTwo}
              />
            </Card>

            <Card className={classes.image}>
              <CardMedia
                component="img"
                image={reviewsProduct.image}
              />
            </Card>
          </Box>
          <Typography className={classes.text}>
            Стиль и Удобство
          </Typography>
        </Box>

        <Box pt={5}>
          <Typography className={classes.paragraph}>
            Кроссовки Nike Air Max 97 с оригинальным волнистым дизайном,
            вдохновленным японскими сверхскоростными пассажирскими
            экспрессами, позволяют вам развивать свой стиль на полной
            скорости. Взяв за основу революционную вставку Nike Air во всю
            длин, которая потрясла мир бега, добавив свежие цвета и четкие
            детали, вы сможете кататься с первоклассным комфортом.
          </Typography>

          <Box display={"flex"} alignItems={"flex-start"} className={classes.reviewsBox}>
            <Typography className={classes.reviews}>
              {reviews.reviews}
            </Typography>

            <Grid display={"flex"} alignItems={"flex-start"} className={classes.stars}>
              {
                [...Array(reviewStarts.stars)].map(() =>
                  <Card className={classes.star}><CardMedia component="img" image={reviewStarts.img}/></Card>
                )
              }
              <Button className={classes.btn}>
                <img src={chevronDown} alt="" width={20}/>
              </Button>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};

export default ProductReviews;