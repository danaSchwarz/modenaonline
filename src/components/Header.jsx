import * as React from 'react';
import { AppContext } from '../pages/AppContext';
import { IconButton, Typography, Toolbar, AppBar, Badge, Button, Box, MenuItem, Menu } from '@mui/material';
import { NavLink } from "react-router-dom";
import NavButton from './NavButton';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


export default function Header() {
  const context = React.useContext(AppContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar>
      <Toolbar variant="dense">
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <MenuOutlinedIcon sx={{ color: "primary.dark" }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            <MenuItem key="home" onClick={handleCloseNavMenu}>
              <NavButton to="/" value="Home" onClick={handleCloseNavMenu} />
            </MenuItem>

            <MenuItem>
              <NavButton to="/products" value="Products" onClick={handleCloseNavMenu} />
            </MenuItem>

            <MenuItem>
              <NavButton to="/signIn" value="SignIn" onClick={handleCloseNavMenu} />
            </MenuItem>

            <MenuItem>
              <NavButton to="/favorites" value="Favorites" onClick={handleCloseNavMenu} />
            </MenuItem>

            <MenuItem>
              <NavButton to="/cart" value="Cart" onClick={handleCloseNavMenu} />
            </MenuItem>

          </Menu>
        </Box>

        <Typography noWrap variant="h6" component="div" sx={{ position: { xs: "absolute", md: "flex" }, left: { xs: 70, md: 10 } }}>
          <Button component={NavLink} to="/" sx={{ textDecoration: "none" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/frogeapp.appspot.com/o/onlineStore%2Fwoman.png?alt=media&token=02a4c3a3-e965-4bbe-b372-7fea077ae5e0"
              style={{ height: '40px' }}
            />
            <Typography variant="h4" sx={{ fontFamily: "Macondo", color: "primary.dark" }}>Modena</Typography>
          </Button>
        </Typography>

        <Box sx={{
          flexGrow: 1, display: { xs: 'none', md: 'flex' }, position: "absolute", right: 25
        }}>
          <NavButton to="/" value="Home" onClick={handleCloseNavMenu} />

          <NavButton to="/products" value="Products" onClick={handleCloseNavMenu} />

          <IconButton sx={{ color: "primary.dark" }} component={NavLink} to="/signIn"><AccountCircleOutlinedIcon /></IconButton>

          <IconButton sx={{ color: "primary.dark" }} component={NavLink} to="/favorites">
            <Badge color='secondary' invisible={context.favorites.length === 0} badgeContent={context.favorites.length}>
              <FavoriteIcon />
            </Badge>
          </IconButton>

          <IconButton sx={{ color: "primary.dark" }} component={NavLink} to="/cart">
            <Badge color='secondary' invisible={context.cart.length === 0} badgeContent={context.getCartCount()}>
              <ShoppingBagOutlinedIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar >
  )
} 