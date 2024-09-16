import { Link } from "react-router-dom";
import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Fab, styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useContext } from "react";
import { AppContext } from "../../pages/AppContext.jsx";
import useMediaQuery from '@mui/material/useMediaQuery';

const ProductAddButton = styled(Fab)(({ theme }) => ({
  margin: theme.spacing(1),
  position: "absolute",
  bottom: 0,
  right: 0,
  backgroundColor: theme.palette.secondary.main,
  "&:hover": {
    backgroundColor: theme.palette.secondary.contrastText
  }
}));

export default function ProductCard(props) {
  const { details } = props;
  const context = useContext(AppContext);
  const matches = useMediaQuery('(min-width:900px)');

  return (
    <Card sx={{ position: "relative", width: { xs: 200, sm: 200, md: 250, lg: 300, xl: 350 } }}>
      <CardActionArea component={Link} to={`${details.title}`} >
        <CardMedia
          component="img"
          height="auto"
          image={details.pic}
          alt={details.title}
        />
        <CardContent >
          <Typography gutterBottom component="h6">
            {details.title}
          </Typography>
          <Typography gutterBottom component="h6" sx={{ mt: 2 }}>
            {context.currency} {context.setPriceWithRate(details.price)}
          </Typography>
        </CardContent>
      </CardActionArea>
      {matches ? <><Fab onClick={() => context.onFavoriteAdd(details)} sx={{ mb: 1, mr: 10, position: "absolute", bottom: 0, right: 0 }}><FavoriteIcon /></Fab>
        <ProductAddButton onClick={() => context.onProductAdd(details)}><AddIcon /></ProductAddButton>
      </>
        :
        <>
          <Fab size="medium" onClick={() => context.onFavoriteAdd(details)} sx={{ mb: 1, mr: 8, position: "absolute", bottom: 0, right: 0 }}><FavoriteIcon /></Fab>
          <ProductAddButton size="medium" onClick={() => context.onProductAdd(details)}><AddIcon /></ProductAddButton>
        </>
      }
    </Card >
  )
}