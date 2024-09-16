import { Link } from "react-router-dom";
import { Typography, Button, Box, CardMedia, styled } from "@mui/material";


const CardMediaContainer = styled(Box)(({ theme }) => ({
  minHeight: `calc(100vh - 52px)`,
  marginTop: "48px"
}))


export default function Home() {

  return (
    <>
      <CardMediaContainer>
        <CardMedia component="video" loop autoPlay
          sx={{ width: "100vw" }}
          image={"https://firebasestorage.googleapis.com/v0/b/frogeapp.appspot.com/o/onlineStore%2Ffashion.mp4?alt=media&token=262ed02d-6d4b-4dfe-8390-47c217be8621"} />
        <Box sx={{
          position: "absolute", top: 100, left: 0,
          width: "100%", bgcolor: 'rgba(0, 0, 0, 0.54)', color: 'white', padding: '10px 0',
        }}>
          <Typography variant="h4" sx={{ ml: "10%" }}>Brand new styles</Typography>
          <Typography component="p" sx={{ ml: "10%" }}>
            Shop now
          </Typography>
          <Button variant="contained" component={Link} to="/products"
            sx={{ ml: "10%", ':hover': { backgroundColor: "primary.light" } }} >
            Start shopping
          </Button>
        </Box>
      </CardMediaContainer>

    </>
  );
}