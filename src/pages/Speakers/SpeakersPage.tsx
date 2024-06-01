import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Divider,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField
} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useProductContext } from '../../context/ProductContext';

const SpeakersPage: React.FC = () => {
  const { products, filteredProducts, setFilteredProducts } = useProductContext();
  const [category, setCategory] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Filtrando os produtos da categoria "Carregador"
  const speakers = filteredProducts.filter(products => products.category === 'Caixas');
  const handleApplyFilters = () => {
    let filtered = products.filter((product) => {
      let matchCategory = true;
      let matchSubCategory = true;
      let matchBrand = true;
      let matchPrice = true;
      let matchSearch = true;

      if (category && product.category !== category) {
        matchCategory = false;
      }

      if (subCategory && product.subCategory !== subCategory) {
        matchSubCategory = false;
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

      return matchCategory && matchSubCategory &&matchBrand && matchPrice && matchSearch;
    });

    setFilteredProducts(filtered);
    setMenuOpen(false); // Close the filters menu after applying filters

    // Reset filter fields
    setCategory("");
    setSubCategory("");
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
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value as string)}
                >
                  <MenuItem value="">Todas as categorias</MenuItem>
                  <MenuItem value="Radio">Radio</MenuItem>
                  <MenuItem value="Bluetooth">Bluetooth</MenuItem>
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
                  <MenuItem value="JBL">JBL</MenuItem>
                  <MenuItem value="Lehmox">Lehmox</MenuItem>
                  <MenuItem value="Inova">Inova</MenuItem>
                  <MenuItem value="Minifun">Minifun</MenuItem>
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
          Caixas de Som
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />
        <Grid container spacing={2}>
          {speakers.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
              <Link to={`/categorias/${product.category}/${product._id}`} className="link">
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={`http://localhost:5000${product.image}`}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.brand}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      R$ {product.price.toFixed(2)}
                    </Typography>
                  </CardContent>
                  <IconButton
                    component={Link}
                    to={`/categorias/${
                      product.category}/${product._id}`}
                      color="primary"
                    >
                      <ShoppingCart />
                    </IconButton>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    );
  };
  
  export default SpeakersPage;
  
