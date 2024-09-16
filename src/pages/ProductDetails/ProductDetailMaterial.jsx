import { useOutletContext } from "react-router-dom";
import { Container, Typography } from "@mui/material";

export default function ProductDetailInfo() {
  const context = useOutletContext();

  return <Container sx={{ mt: 2 }}>
    <Typography variant="h5" component="div">Materials</Typography>
    <Typography component="p">{context.material}</Typography>
    <Typography variant="h5" component="div" sx={{ mt: 1 }}>Care instructions</Typography>
    <Typography component="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam nostrum, blanditiis asperiores a impedit adipisci! Sequi explicabo natus aspernatur minus labore itaque beatae minima nisi laboriosam, numquam expedita perferendis nostrum?</Typography>
  </Container>;
}