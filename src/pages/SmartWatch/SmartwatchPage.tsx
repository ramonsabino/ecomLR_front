import React from 'react';
import { Container, Box, Typography, Divider, Grid, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
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

const SmartwatchPage: React.FC = () => {
  const speakers = products.filter(product => product.category === 'Smartwatch'); // Filtrando apenas carregadores

  return (
    <Container maxWidth="xl" sx={{ display: 'flex', marginTop: 4 }}>
      <FilterMenu>
        <Typography variant="h6" gutterBottom>
          Filtros
        </Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Marca A" />
          <FormControlLabel control={<Checkbox />} label="Marca B" />
          <FormControlLabel control={<Checkbox />} label="Marca C" />
          <FormControlLabel control={<Checkbox />} label="Rápido" />
          <FormControlLabel control={<Checkbox />} label="Lento" />
        </FormGroup>
      </FilterMenu>
      <Typography variant="h6">
              Carregadores
        </Typography>
      <VerticalDivider sx={{ display: { xs: 'none', md: 'block' }, bgcolor: '#444' }} />
      <ProductGrid container spacing={2}>
        {speakers.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Box>
              <img src={product.image} alt={product.name} style={{ width: '100%' }} />
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body1">Preço: R${product.price}</Typography>
            </Box>
          </Grid>
        ))}
      </ProductGrid>
    </Container>
  );
};

export default SmartwatchPage;