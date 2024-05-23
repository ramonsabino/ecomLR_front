import React, { useState } from "react";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import logo from "../../assets/IconLR.png";
import { ShoppingCart, Close } from "@mui/icons-material";
import { Link } from "react-router-dom";
import CartSidebar from "../Cart/CartSidebar";

const Logo = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexGrow: 1,
});

const MenuItemsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(1, 0), // Reduz o padding
}));

const SearchField = styled(TextField)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "50px", // Bordas ligeiramente arredondadas
  width: "100px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent", // Define a cor da borda como transparente
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
}));

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartItems, setCartItems] = useState<
    { id: number; name: string; quantity: number; price: number }[]
  >([]);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const handleAddToCart = (id: number) => {
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      const newItem = {
        id: id,
        name: `Product ${id}`,
        quantity: 1,
        price: 10, // Defina o preço conforme necessário
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  const handleRemoveFromCart = (id: number) => {
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity -= 1;
      if (updatedCartItems[itemIndex].quantity === 0) {
        updatedCartItems.splice(itemIndex, 1);
      }
      setCartItems(updatedCartItems);
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <AppBar position="static" color="primary" sx={{ bgcolor: "#333" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {["Home", "Products", "Contact"].map((text, index) => (
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
              sx={{ display: { xs: "none", md: "flex" }, ml: 2 }}
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
              <img src={logo} alt="Logo" style={{ height: "70px" }} />
            </Logo>
            <IconButton
              size="large"
              color="inherit"
              aria-label="cart"
              sx={{ ml: 2 }}
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart />
            </IconButton>
          </Toolbar>
        </Container>
        <Divider
          sx={{ display: { xs: "none", md: "block" }, bgcolor: "#444" }}
        />
        <MenuItemsBox
          sx={{ display: { xs: "none", md: "flex" }, bgcolor: "#444" }}
        >
          <Typography
            variant="h6"
            component={Link}
            to="/home"
            sx={{
              marginLeft: 2,
              marginRight: 2,
              color: "white",
              textDecoration: "none",
            }}
          >
            Página Inicial
          </Typography>
          <Typography
            variant="h6"
            component={Link}
            to="/products"
            sx={{
              marginLeft: 2,
              marginRight: 2,
              color: "white",
              textDecoration: "none",
            }}
          >
            Produtos
          </Typography>
          <Typography
            variant="h6"
            component={Link}
            to="/contact"
            sx={{
              marginLeft: 2,
              marginRight: 2,
              color: "white",
              textDecoration: "none",
            }}
          >
            Contato
          </Typography>
        </MenuItemsBox>
      </AppBar>

      <CartSidebar
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onAdd={handleAddToCart}
        onRemove={handleRemoveFromCart}
        onClear={handleClearCart}
      />
    </>
  );
};

export default Navbar;
