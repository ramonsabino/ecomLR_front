import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Divider,
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Card,
  CardContent,
  CardMedia,
  IconButton
} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import airdotImage from '../../assets/fones/foneAirDots.jpg';
import caixaJbl from '../../assets/caixasDeSom/caixaJbl.jpg';
import carregador from '../../assets/carregadores/carregadorIos.jpg';
import smartWatch from '../../assets/smartWatch/smartWatch.jpg';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  brand: string;
}

const products: Product[] = [
  { id: 1, name: "Produto 1", price: 40.0, category: "Fones", image: airdotImage, brand: "Xiaomi" },
  { id: 2, name: "Produto 2", price: 120.0, category: "Caixas", image: caixaJbl, brand: "JBL" },
  { id: 3, name: "Produto 3", price: 40.0, category: "Carregador", image: carregador, brand: "OkGold" },
  { id: 4, name: "Produto 4", price: 90.0, category: "SmartWatch", image: smartWatch, brand: "WBS" },
  // Add more products here
];

const Products: React.FC = () => {
  const [category, setCategory] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const handleApplyFilters = () => {
    let filtered = products.filter((product) => {
      let matchCategory = true;
      let matchBrand = true;
      let matchPrice = true;
      let matchSearch = true;

      if (category && product.category !== category) {
        matchCategory = false;
      }

      if (brand && product.brand !== brand) {
        matchBrand = false;
      }

      if (minPrice && product.price < parseFloat(minPrice)) {
        matchPrice = false;
      }

      if (maxPrice && product.price > parseFloat(maxPrice)) {
        matchPrice = false;
      }

      if (search && !product.name.toLowerCase().includes(search.toLowerCase())) {
        matchSearch = false;
      }

      return matchCategory && matchBrand && matchPrice && matchSearch;
    });

    setFilteredProducts(filtered);
    setMenuOpen(false); // Close the filters menu after applying filters

    // Reset filter fields
    setCategory("");
    setBrand("");
    setMinPrice("");
    setMaxPrice("");
    setSearch("");
  };

  return (
    <Container maxWidth="xl" sx={{ display: 'flex', marginTop: 4 }}>
      <Box sx={{ width: '250px' }}>
        <Button onClick={() => setMenuOpen(true)}>Filtros</Button>
        <Drawer
          anchor="left"
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
        >
          <List>
            <ListItem>
              <ListItemText primary="Filtros" />
            </ListItem>
            <ListItem>
              <FormControl fullWidth>
                <InputLabel>Categoria</InputLabel>
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as string)}
                >
                  <MenuItem value="">Todas as categorias</MenuItem>
                  <MenuItem value="Fones">Fones de Ouvido</MenuItem>
                  <MenuItem value="Caixas">Caixas de Som</MenuItem>
                  <MenuItem value="Carregador">Carregadores</MenuItem>
                  <MenuItem value="SmartWatch">SmartWatch</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
            <ListItem>
              <FormControl fullWidth>
                <InputLabel>Marca</InputLabel>
                <Select
                  value={brand}
                  onChange={(e) => setBrand(e.target.value as string)}
                >
                  <MenuItem value="">Todas as marcas</MenuItem>
                  <MenuItem value="Xiaomi">Xiaomi</MenuItem>
                  <MenuItem value="JBL">JBL</MenuItem>
                  <MenuItem value="OkGold">OkGold</MenuItem>
                  <MenuItem value="WBS">WBS</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
            <ListItem>
              <TextField
                fullWidth
                type="number"
                label="Preço Mínimo"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </ListItem>
            <ListItem>
              <TextField
                fullWidth
                type="number"
                label="Preço Máximo"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </ListItem>
            <ListItem>
              <TextField
                fullWidth
                label="Pesquisar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </ListItem>
            <ListItem>
              <Button
                fullWidth
                variant="contained"
                onClick={handleApplyFilters}
              >
                Aplicar Filtros
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </Box>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Todos os Produtos
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />
        <Grid container spacing={2}>
          {filteredProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link to={`/categorias/${product.category}/${product.id}`} style={{ textDecoration: 'none' }}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Grid
                      container
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Grid item>
                        <Typography gutterBottom variant="h6" component="div">
                          {product.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Preço: R${product.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Categoria: {product.category}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <IconButton aria-label="add to cart">
                          <ShoppingCart />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Products;
