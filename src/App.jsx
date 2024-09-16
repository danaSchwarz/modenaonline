import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';
import { AppContext } from "./pages/AppContext.jsx";
import { useContext, useEffect } from "react";
import Header from './components/Header.jsx';
import Pages from './pages/index.jsx';
import { theme } from "./Theme";

export default function App() {
  const context = useContext(AppContext);

  useEffect(() => {
    if (context.cart) {
      localStorage.setItem("cart", JSON.stringify(context.cart));
    }
  }, [context.cart]);

  useEffect(() => {
    if (context.favorites) {
      localStorage.setItem("favorites", JSON.stringify(context.favorites));
    }
  }, [context.favorites]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box sx={{ backgroundColor: "primary.light" }}>
          <Box sx={{ display: 'flex' }}>
            <Header />
            <Pages />
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </BrowserRouter >
  )
}