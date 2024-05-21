// CategoriesMenu.tsx
import React from 'react';
import { Typography, Grid, Button, Card, CardContent, CardMedia } from '@mui/material';
import airdotImage from '../../assets/fones/foneAirDots.jpg'
import './CategoriesStyle.css'

interface Category {
    name: string;
    image: string;
  }
  

const categories: Category[] = [
    { name: 'Categoria 1', image: airdotImage },
    { name: 'Categoria 2', image: airdotImage },
    { name: 'Categoria 3', image: airdotImage },
    { name: 'Categoria 4', image: airdotImage },
  ];
const CategoriesMenu: React.FC = () => {
  return (
    <Card variant="outlined" sx={{ p: 2, mt: 4 }}>
      <Typography variant="h6" component="div" sx={{ ml: 12, mb: 2 }}>
        Categorias
      </Typography>
      <Grid container spacing={2} justifyContent="center">
      {categories.map((category, index) => (
        <Grid item key={index} className="card-container"> {/* Adicionamos a classe card-container */}
          <a href={`/category/${category.name}`} className="category-link">
            <Card>
              <CardMedia
                component="img"
                height="100"
                image={category.image}
                alt={category.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {category.name}
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
  );
};

export default CategoriesMenu;
