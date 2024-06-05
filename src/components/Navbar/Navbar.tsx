import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
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
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";
import logo from "../../assets/IconLR.png";
import { ShoppingCart, AccountCircle } from "@mui/icons-material"; // Importe o ícone de login (AccountCircle)
import CartSidebar from "../../components/Cart/CartSidebar";
import { useProductContext } from "../../context/ProductContext"; // Importe o contexto de produtos

const Logo = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexGrow: 1,
});

const MenuItemsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(1, 0),
}));
interface RouteParams {
  productId: string;
  [key: string]: string | undefined;
}

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [productsDrawerOpen, setProductsDrawerOpen] = useState(false);
  const [productsMenuAnchor, setProductsMenuAnchor] =
    useState<null | HTMLElement>(null);
  const { productId } = useParams<RouteParams>();
  const { products } = useProductContext(); // Use o hook do contexto de produtos
  const product = products.find((product) => product._id === productId); // Ajuste para usar o _id
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const {
    addToCart,
    cartItems,
    removeFromCart,
    clearCart,
    incrementQuantity,
    decrementQuantity,
  } = useCart();

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

  const handleProductsDrawerOpen = () => {
    setProductsDrawerOpen(true);
  };

  const handleProductsDrawerClose = () => {
    setProductsDrawerOpen(false);
  };

  const handleProductsMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProductsMenuAnchor(event.currentTarget);
  };

  const handleProductsMenuClose = () => {
    setProductsMenuAnchor(null);
  };

  const renderProductMenuItems = () => [
    <MenuItem
      key="todos-os-produtos"
      component={Link}
      to="/products"
      onClick={handleProductsMenuClose}
    >
      Todos os Produtos
    </MenuItem>,
    <MenuItem
      key="carregadores"
      component={Link}
      to="categorias/carregadores"
      onClick={handleProductsMenuClose}
    >
      Carregadores
    </MenuItem>,
    <MenuItem
      key="fones-de-ouvido"
      component={Link}
      to="categorias/fones-de-ouvido"
      onClick={handleProductsMenuClose}
    >
      Fones de Ouvido
    </MenuItem>,
    <MenuItem
      key="smartwatches"
      component={Link}
      to="categorias/smartwatchs"
      onClick={handleProductsMenuClose}
    >
      SmartWatches
    </MenuItem>,
    <MenuItem
      key="caixas-de-som"
      component={Link}
      to="categorias/caixas-de-som"
      onClick={handleProductsMenuClose}
    >
      Caixas de Som
    </MenuItem>,
    <MenuItem
      key="peliculas"
      component={Link}
      to="categorias/peliculas"
      onClick={handleProductsMenuClose}
    >
      Peliculas Protetoras
    </MenuItem>,
    <MenuItem
      key="suportes-veiculares"
      component={Link}
      to="categorias/suportes-veiculares"
      onClick={handleProductsMenuClose}
    >
      Suportes Veiculares
    </MenuItem>,
    <MenuItem
      key="utilitarios"
      component={Link}
      to="categorias/utilitarios"
      onClick={handleProductsMenuClose}
    >
      Utilitários
    </MenuItem>,
  ];
  

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
                  <ListItem
                    button
                    component={Link}
                    to="/"
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemText primary="Página Inicial" />
                  </ListItem>
                  <ListItem button onClick={handleProductsDrawerOpen}>
                    <ListItemText primary="Produtos" />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to="/contact"
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemText primary="Contato" />
                  </ListItem>
                </List>
              </Box>
            </Drawer>
            <Drawer
              anchor="left"
              open={productsDrawerOpen}
              onClose={handleProductsDrawerClose}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={handleProductsDrawerClose}
                onKeyDown={handleProductsDrawerClose}
              >
                <List>
                  <ListItem>
                    <ListItemText primary="Categorias" />
                  </ListItem>
                  {renderProductMenuItems()}
                </List>
              </Box>
            </Drawer>
            <Logo>
              <Link to="/">
                <img src={logo} alt="Logo" style={{ height: "70px" }} />
              </Link>
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
            <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
              <IconButton
                size="large"
                color="inherit"
                aria-label="login"
                sx={{ ml: 2 }}
              >
                <AccountCircle />
              </IconButton>
            </Link>
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
            to="/"
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
            onClick={handleProductsMenuOpen}
            sx={{
              marginLeft: 2,
              marginRight: 2,
              color: "white",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Produtos
          </Typography>
          <Menu
            anchorEl={productsMenuAnchor}
            open={Boolean(productsMenuAnchor)}
            onClose={handleProductsMenuClose}
          >
            {renderProductMenuItems()}
          </Menu>
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
        items={cartItems}
        removeFromCart={removeFromCart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
    </>
  );
};

export default Navbar;
