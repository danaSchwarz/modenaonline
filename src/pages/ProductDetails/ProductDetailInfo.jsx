import { useOutletContext } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { AddToCartButton } from "../Buttons";

export default function ProductDetailInfo(props) {
  const outletContext = useOutletContext();
  const context = useContext(AppContext);

  return <Container sx={{ mt: 2 }}>
    <Typography variant="h4">{outletContext.title}</Typography>
    <Typography variant="h6" sx={{ mt: 1, mb: 1 }}>{context.setPriceWithRate(outletContext.price)} {context.currency}</Typography>

    <AddToCartButton outlet={outletContext} />

  </Container>
}