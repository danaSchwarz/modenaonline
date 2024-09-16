import { Link } from "react-router-dom";
import { Main } from "./Main";
import { Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return <Main>
    <Box sx={{ height: "100vh" }}>
      <Typography variant="h4">Page not found</Typography>
      <Typography component="p">The page could not be found. <Button component={NavLink} to="/" sx={{ textDecorationLine: "none", color: "primary.contrastText", ':hover': { textDecorationLine: "underline" } }} > Go back</Button> to the home page?</Typography>
    </Box>
  </Main >;
}