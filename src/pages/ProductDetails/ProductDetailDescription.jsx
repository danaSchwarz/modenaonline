import { useOutletContext } from "react-router-dom";
import { Container, Typography } from "@mui/material";

export default function ProductDetailDescription() {
  const context = useOutletContext();
  return <Container sx={{ mt: 2 }}>
    <Typography variant="h5" component="div">Description and fit</Typography>
    <Typography component="p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus veniam eos impedit ipsa commodi rem praesentium quod, deserunt recusandae quia, tempora eaque sequi consequatur magnam ex dolor qui in mollitia.</Typography>
    <Typography variant="h5" component="div" sx={{ mt: 1 }}>Color</Typography>
    <Typography component="p">{context.color}</Typography>
    <Typography variant="h5" component="div" sx={{ mt: 1 }}>Season</Typography>
    <Typography component="p">{context.season}</Typography>
  </Container>;
}