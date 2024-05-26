import React from 'react';
import { Typography, Grid, Button, Card, CardContent, CardMedia, Box } from '@mui/material';
import { useProductContext } from '../../context/ProductContext';
import './SectionStyles.css';

const SectionProducts: React.FC = () => {
  const { products } = useProductContext(); 

  const filteredProducts = products.filter(product => product.price <= 15);

  return (
    <Box sx={{ p: 2, mt: 4 }}>
      <Card variant="outlined" sx={{ p: 2, bgcolor: '#fafafa', borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h5" component="div" sx={{ mb: 2 }}>
          Seção dos 15$...
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {filteredProducts.map((product, index) => (
            <Grid item key={index} className="card-container">
              <a href={`/categorias/${product.category}/${product.id}`} className="launch-link">
                <Card sx={{ borderRadius: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                  <CardMedia
                    component="img"
                    height="100"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {product.price}R$
                    </Typography>
                    <Button variant="contained" color="primary">
                      Ver mais
                    </Button>
                  </CardContent>
                </Card>
              </a>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Box>
  );
};

export default SectionProducts;
