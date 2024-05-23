import React from 'react';
import { Typography, Grid, Button, Card, CardContent, CardMedia, Box } from '@mui/material';
import airdotImage from '../../assets/fones/foneAirDots.jpg';
import carregadorIos from '../../assets/carregadores/carregadorIos.jpg';
import caixaJbl from '../../assets/caixasDeSom/caixaJbl.jpg';
import smartWbs from '../../assets/smartWatch/smartWatch.jpg';
import './LaunchStyles.css';

interface Launch {
    name: string;
    preco: number;
    image: string;
    category: string;
}

const product: Launch[] = [
    { name: 'Fone AirDots', preco: 40.00, category:"fone-de-ouvido" ,image: airdotImage },
    { name: 'JBL Extreme', preco: 140.00, category:"caixas-de-som" ,image: caixaJbl },
    { name: 'SmartWatch WBS', preco: 90.00, category:"smartwatch" ,image: smartWbs },
    { name: 'Carregador iOS', preco: 40.00, category:"carregadores" ,image: carregadorIos },
];

const LaunchProducts: React.FC = () => {
  return (
    <Box sx={{ p: 2, mt: 4 }}>
      <Card variant="outlined" sx={{ p: 2, bgcolor: '#cccfca', borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h5" component="div" sx={{ mb: 2 }}>
          Novidades...
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {product.map((product, index) => (
            <Grid item key={index} className="card-container">
              <a href={`/categorias/${product.category}/${product.name}`} className="launch-link">
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

export default LaunchProducts;
