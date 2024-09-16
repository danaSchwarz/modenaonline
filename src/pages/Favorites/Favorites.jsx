import { AppContext } from "../AppContext.jsx";
import { useContext } from "react";
import { Box, Typography, Container, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { AddToCartButton, DeleteButton, SmallAddToCartButton } from "../Buttons.jsx";
import { Main } from "../Main.jsx";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Favorites() {
  const context = useContext(AppContext);
  const matches = useMediaQuery('(min-width:720px)');

  return (
    <Main>
      <Box sx={{ height: "100%", minHeight: "100vh" }}>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>Your Favorites</Typography>
        {context.favorites.length === 0 && (
          <Container sx={{ height: "100vh" }}>
            <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>You have not added any product to your favorites yet.</Typography>
          </Container>
        )}
        {context.favorites.length > 0 && (
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell></TableCell>
                  <TableCell align="right">Unit price</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {context.favorites.map(product =>
                  <TableRow>
                    <TableCell>
                      <Button component={NavLink} to={`/products/${product.title}`} className="nav-link">
                        <Box component="img" src={product.pic} alt="img"
                          sx={{
                            height: "20",
                            width: "auto",
                            maxHeight: { xs: 50, md: 100 },
                          }} />
                      </Button>
                    </TableCell>
                    <TableCell align="left">{product.title} {product.color}</TableCell>
                    <TableCell align="right">{context.setPriceWithRate(product.price)} {context.currency}</TableCell>
                    <TableCell align="right">
                      {matches ? <AddToCartButton outlet={product} /> : <SmallAddToCartButton outlet={product} />}
                    </TableCell>
                    <TableCell align="right"><DeleteButton id={product.id} list="favorites" /></TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}

      </Box >
    </Main>
  )
}