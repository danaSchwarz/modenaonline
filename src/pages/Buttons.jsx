import { useOutletContext } from "react-router-dom";
import { Container, Card, Typography, Box, CardMedia, Button, Fab } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

export function AddToCartButton(props) {
  const context = useContext(AppContext);

  return (
    <Button sx={{ pr: 3, ':hover': { backgroundColor: "secondary.main" } }} variant="contained" onClick={() => context.onProductAdd(props.outlet)}><ShoppingBagOutlinedIcon sx={{ pr: 1 }} />Add to cart</Button>
  )
}

export function SmallAddToCartButton(props) {
  const context = useContext(AppContext);

  return (
    <Fab onClick={() => context.onProductAdd(props.outlet)} sx={{ bgcolor: "primary.main", color: "primary.contrastText", ':hover': { backgroundColor: "secondary.main" } }}><ShoppingBagOutlinedIcon /></Fab>
  )
}

export function DeleteButton(props) {
  const context = useContext(AppContext);

  function deleteProduct() {
    if (props.list === "favorites") {
      context.onFavoriteDelete(props.id);
    }
    else if (props.list === "cart") {
      context.onProductDelete(props.id);
    }
  }

  return (
    <Fab onClick={() => deleteProduct()}><DeleteOutlineOutlinedIcon /></Fab>
  )
}