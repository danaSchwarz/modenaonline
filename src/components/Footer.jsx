import Currency from "./Currency.jsx";
import { Container, Box, Breadcrumbs, Divider } from "@mui/material";
import NavButton from './NavButton.jsx';

export default function Footer() {
  return (
    <Container sx={{ p: "1rem", bgcolor: "primary.light" }}>
      <Divider sx={{ mb: "1rem" }} />
      <Breadcrumbs aria-label="breadcrumb" separator="">
        <Box><NavButton to="/about" value="About" /></Box>
        <Box><Currency /></Box>
      </Breadcrumbs>
    </Container>
  )
}