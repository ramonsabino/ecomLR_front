import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import products from '../../context/product';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  TextField,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';
import logo from '../../assets/IconLR.png';
import { ShoppingCart, Close } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import CartSidebar from '../../components/Cart/CartSidebar';

const Logo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: 1,
});

const MenuItemsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: theme.spacing(1, 0),
}));

const SearchField = styled(TextField)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: '50px',
  width: '100px',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
  },
}));

interface RouteParams {
  productId: string;
  [key: string]: string | undefined;
}

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [productsMenuAnchor, setProductsMenuAnchor] = useState<null | HTMLElement>(null);
  const { productId } = useParams<RouteParams>();
  const product = products.find((product) => product.id === Number(productId));
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const { addToCart, cartItems, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = useCart();

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleProductsMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProductsMenuAnchor(event.currentTarget);
  };

  const handleProductsMenuClose = () => {
    setProductsMenuAnchor(null);
  };

  return (
    <>
      <AppBar position="static" color="primary" sx={{ bgcolor: '#333' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {['Home', 'Products', 'Contact'].map((text, index) => (
                    <ListItem
                      button
                      key={text}
                      component={Link}
                      to={`/${text.toLowerCase()}`}
                    >
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
            <IconButton
              size="large"
              color="inherit"
              aria-label="search"
              sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }}
              onClick={() => setSearchOpen(!searchOpen)}
            >
              {searchOpen ? <Close /> : <SearchIcon />}
            </IconButton>
            {searchOpen && (
              <SearchField
                variant="outlined"
                size="small"
                autoFocus
                placeholder="Buscar..."
                sx={{ ml: 1 }}
              />
            )}
            <Logo>
              <img src={logo} alt="Logo" style={{ height: '70px' }} />
            </Logo>
            <IconButton
              size="large"
              color="inherit"
              aria-label="cart"
              sx={{ ml: 2 }}
              onClick={() => setCartOpen(!cartOpen)}
            >
              <ShoppingCart />
            </IconButton>
          </Toolbar>
        </Container>
        <Divider sx={{ display: { xs: 'none', md: 'block' }, bgcolor: '#444' }} />
        <MenuItemsBox sx={{ display: { xs: 'none', md: 'flex' }, bgcolor: '#444' }}>
          <Typography
            variant="h6"
            component={Link}
            to="/home"
            sx={{
              marginLeft: 2,
              marginRight: 2,
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Página Inicial
          </Typography>
          <Typography
            variant="h6"
            component={Link}
            onClick={handleProductsMenuOpen}
            to=""
            sx={{
              marginLeft: 2,
              marginRight: 2,
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Produtos
          </Typography>
          <Menu
              anchorEl={productsMenuAnchor}
              open={Boolean(productsMenuAnchor)}
              onClose={handleProductsMenuClose}
            >
              <MenuItem component={Link} to="/products">Todos os Produtos</MenuItem>
              <MenuItem component={Link} to="/chargers">Carregadores</MenuItem>
              <MenuItem component={Link} to="/smartwatches">SmartWatches</MenuItem>
              <MenuItem component={Link} to="/speakers">Caixas de Som</MenuItem>
              <MenuItem component={Link} to="/screen-protectors">Peliculas Protetoras</MenuItem>
            </Menu>
          <Typography
            variant="h6"
            component={Link}
            to="/contact"
            sx={{
              marginLeft: 2,
              marginRight: 2,
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Contato
          </Typography>
        </MenuItemsBox>
      </AppBar>
      <CartSidebar
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        removeFromCart={removeFromCart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
    </>
  );
};

export default Navbar;
