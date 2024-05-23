import React from 'react';
import { Typography, Grid, Button, Card, CardContent, CardMedia, Box } from '@mui/material';
import airdotImage from '../../assets/fones/foneAirDots.jpg';
import './SectionStyles.css';

interface Section {
    name: string;
    preco: number;
    image: string;
}

const product: Section[] = [
    { name: 'Produto 1', preco: 15.00, image: airdotImage },
    { name: 'Produto 2', preco: 15.00, image: airdotImage },
    { name: 'Produto 3', preco: 15.00, image: airdotImage },
    { name: 'Produto 4', preco: 15.00, image: airdotImage },
];

const SectionProducts: React.FC = () => {
  return (
    <Box sx={{ p: 2, mt: 4 }}>
      <Card variant="outlined" sx={{ p: 2, bgcolor: '#cccfca', borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h5" component="div" sx={{ mb: 2 }}>
          Seção dos 15R$
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {product.map((product, index) => (
            <Grid item key={index} className="card-container">
              <a href={`/category/${product.name}`} className="section-link">
                <Card sx={{ borderRadius: 2 }}>
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
                      {product.preco}R$
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
