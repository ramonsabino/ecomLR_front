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

const SpeakerPages: React.FC = () => {
  const { filteredProducts } = useProductContext();

  // Filtrando os produtos da categoria "Carregador"
  const speaker = filteredProducts.filter(product => product.category === 'Caixas');

  return (
    <Container maxWidth="xl" sx={{ display: 'flex', marginTop: 4 }}>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Caixas de Som
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />
        <Grid container spacing={2}>
          {speaker.map((product) => (
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

export default SpeakerPages;
