import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/system';
import logo from '../../assets/IconLR.png'; // Importe a imagem da logo
import { ShoppingCart } from '@mui/icons-material';

const Logo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: 1,
});

const MenuItemsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: theme.spacing(2, 0),
}));

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };

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

  return (
    <AppBar position="static" color="primary">
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
                {['Home', 'Products', 'Contact'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="search"
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}
          >
            <SearchIcon />
          </IconButton>
          <Logo>
            <img src={logo} alt="Logo" style={{ height: '80px' }} />
          </Logo>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="search"
            sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }}
          >
            <ShoppingCart />
          </IconButton>
        </Toolbar>
      </Container>
      <Divider sx={{ display: { xs: 'none', md: 'block' } }} />
      <MenuItemsBox sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Typography variant="h6" component="div" sx={{ marginLeft: 2, marginRight: 2 }}>
          Home
        </Typography>
        <Typography variant="h6" component="div" sx={{ marginLeft: 2, marginRight: 2 }}>
          Products
        </Typography>
        <Typography variant="h6" component="div" sx={{ marginLeft: 2, marginRight: 2 }}>
          Contact
        </Typography>
      </MenuItemsBox>
    </AppBar>
  );
};

export default Navbar;
