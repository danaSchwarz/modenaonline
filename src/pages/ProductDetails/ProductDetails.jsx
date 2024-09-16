import * as React from 'react';
import { useState, useEffect, useContext } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { AppContext } from '../AppContext.jsx';
import { Container, Box, Fab, Tab, Tabs } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import PropTypes from 'prop-types';
import { Main } from "../Main.jsx";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const params = useParams();
  const context = useContext(AppContext);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setProduct(context.productList.find(item => item.title === params.id))
  }, []);


  return (
    <Main>
      <Container sx={{ display: "flex" }}>
        <Box sx={{ position: "relative" }}>
          <Box
            component="img"
            height="auto"
            src={product.pic}
            alt={product.title}
            sx={{ width: { xs: 200, sm: 250, md: 300, lg: 350, xl: 400 } }}
          />
          <Fab onClick={() => context.onFavoriteAdd(product)} sx={{ mt: 1, mr: 1, position: "absolute", top: 0, right: 0 }}><FavoriteIcon /></Fab>
        </Box>

        <Box sx={{ width: '100%', ml: 3 }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab component={NavLink} to="" label="Details" {...a11yProps(0)} />
              <Tab component={NavLink} to="description" label="Description and fit" {...a11yProps(1)} />
              <Tab component={NavLink} to="material" label="Materials" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <Outlet context={product} />

        </Box>
      </Container>
    </Main>
  )
}