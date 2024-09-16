import { Fab, Box, Typography, Container, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Select, MenuItem, FormControl, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { AppContext } from "../AppContext.jsx";
import { useContext } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { DeleteButton } from "../Buttons.jsx";
import { Main } from "../Main.jsx";
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';

export default function Cart() {
  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const context = useContext(AppContext);
  const cart = context.cart;
  const total = cart.reduce(
    (total, product) => total + context.setPriceWithRate(product.price) * product.quantity, 0
  );


  return (
    <Main>
      <Box sx={{ height: "100%", minHeight: "100vh" }}>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>Your Cart</Typography>
        {context.getCartCount() === 0 && (
          <Container sx={{ height: "100vh" }}>
            <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>You have not added any product to your cart yet.</Typography>
          </Container>
        )
        }
        {
          context.getCartCount() > 0 && (
            <TableContainer component={Paper} sx={{ mt: 2 }}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow >
                    <TableCell>Product</TableCell>
                    <TableCell></TableCell>
                    <TableCell align="right">Unit price</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Total</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.map(product =>
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
                        <FormControl>
                          <Select value={product.quantity} onChange={(event) => context.onQuantityChange(product.id, event.target.value)} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
                            {quantities.map(num => <MenuItem value={num}>{num}</MenuItem>)}
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell align="right">{(context.setPriceWithRate(product.price) * product.quantity).toFixed(2)} {context.currency}</TableCell>
                      <TableCell align="right"><Fab onClick={() => context.onFavoriteAdd(product)}><FavoriteIcon /></Fab></TableCell>
                      <TableCell align="right"><DeleteButton id={product.id} list="cart" /></TableCell>
                    </TableRow>
                  )}
                  <TableRow >
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>Total</TableCell>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>{total.toFixed(2)} {context.currency}</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          )
        }
        {context.getCartCount() > 0 &&
          <Button variant="contained" sx={{ width: "100%", mt: 2, pt: 2, pb: 2, backgroundColor: "primary.dark", color: "primary.light", ':hover': { backgroundColor: "secondary.main" } }}><PaymentsOutlinedIcon sx={{ pr: 1 }} />Go to checkout</Button>}
      </Box >

    </Main>
  )
}