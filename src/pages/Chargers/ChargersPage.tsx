import React, { useState } from 'react';
import { Container, Box, Typography, Divider, Grid, Checkbox, FormControlLabel, FormGroup, ListItem, TextField, FormControl, InputLabel, Select, MenuItem, ListItemText, List, Drawer, Button, CardActionArea, CardMedia, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import products from '../../context/product'; // Supondo que você tenha uma lista de produtos

const FilterMenu = styled(Box)(({ theme }) => ({
  width: '250px',
  padding: theme.spacing(2),
}));

const ProductGrid = styled(Grid)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
}));

const VerticalDivider = styled(Divider)(({ theme }) => ({
  height: '100%',
  margin: theme.spacing(0, 2),
}));

const ChargersPage: React.FC = () => {
  const chargers = products.filter(product => product.category === 'Fones'); // Filtrando apenas carregadores
  const [category, setCategory] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

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

      if (
        search &&
        !product.name.toLowerCase().includes(search.toLowerCase())
      ) {
        matchSearch = false;
      }

      return matchCategory && matchBrand && matchPrice && matchSearch;
    });

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
    <FilterMenu>
      <Button onClick={() => setMenuOpen(true)}>Filtros</Button>
      <Drawer
        anchor="left"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      >
        <List>
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
                  <MenuItem value="Carregador">Bluetooth</MenuItem>
                  <MenuItem value="SmartWatch">Com Fio</MenuItem>
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
        </List>
      </Drawer>
    </FilterMenu>
    <ProductGrid container spacing={2}>
      {products
        .filter((product) => product.category === 'Fones') // Filtra apenas os produtos da categoria 'Fones'
        .map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card>
              <CardActionArea > {/* Torna o card clicável */}
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Preço: R$ {product.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
    </ProductGrid>

    {/* Componente para exibir os detalhes do produto */}
   
  </Container>
  );
};

export default ChargersPage;