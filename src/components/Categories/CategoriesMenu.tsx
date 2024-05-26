import React from 'react';
import { Typography, Grid, Button, Card, CardContent, CardMedia, Box } from '@mui/material';
import { Link } from 'react-router-dom'; // Importe o componente Link
import airdotImage from '../../assets/Fones/foneAirDots.jpg';
import carregadorIos from '../../assets/Carregador/carregadorIos.jpg';
import caixaJbl from '../../assets/Caixas/caixaJBLExtreme.jpeg';
import smartWbs from '../../assets/smartWatch/smartWatch.jpg';
import balanca from '../../assets/Utilitaries/balanca.jpeg'
import pelicula from '../../assets/peliculas/pelicula3D.jpg'
import './CategoriesStyle.css';

interface Categories {
    name: string;
    image: string;
}

const categories: Categories[] = [
    { name: 'Fones de Ouvido', image: airdotImage },
    { name: 'Carregadores', image: carregadorIos },
    { name: 'Caixas de Som', image: caixaJbl },
    { name: 'Peliculas', image: pelicula },
    { name: 'SmartWatchs', image: smartWbs },
    { name: 'Utilidades', image: balanca },

];

const formatCategoryName = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, '-');
}

const CategoriesMenu: React.FC = () => {
  return (
    <Box sx={{ p: 2, mt: 4 }}>
      <Card variant="outlined" sx={{ p: 2, bgcolor: '#fafafa', borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h5" component="div" sx={{ mb: 2 }}>
          Categorias
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {categories.map((category, index) => ( 
            <Grid item key={index} className="card-container" sx={{ textDecoration: 'none' }}>
              <Link to={`categorias/${formatCategoryName(category.name)}`} className="launch-link"> 
                <Card
                  sx={{
                    borderRadius: 2,
                    '&:hover': {
                      boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)', // Adiciona uma sombra leve
                      transform: 'scale(1.02)' // Aumenta ligeiramente o tamanho
                    }
                  }}
                  variant="outlined"
                >
                  <CardMedia
                    component="img"
                    height="100"
                    image={category.image}
                    alt={category.name}
                    
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {category.name}
                    </Typography>
                    <Button variant="contained" color="primary">
                      Ver mais
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Box>
  );
};

export default CategoriesMenu;
