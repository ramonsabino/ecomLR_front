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
  IconButton
} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useProductContext } from '../../context/ProductContext';

const ChargersPage: React.FC = () => {
  const { filteredProducts } = useProductContext();

  // Filtrando os produtos da categoria "Carregador"
  const chargers = filteredProducts.filter(product => product.category === 'Carregador');

  return (
    <Container maxWidth="xl" sx={{ display: 'flex', marginTop: 4 }}>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Produtos de Carregadores
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />
        <Grid container spacing={2}>
          {chargers.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
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
                  to={`/${product.category}/${product.id}`}
                  color="primary"
                >
                  <ShoppingCart />
                </IconButton>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ChargersPage;
