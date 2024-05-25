import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import Slider from "react-slick";
import { useProductContext } from "../../context/ProductContext"; // Ajuste o caminho conforme necessário
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LaunchProducts: React.FC = () => {
  const { products } = useProductContext(); // Use o contexto para obter os produtos

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ p: 2, mt: 4 }}>
      <Card
        variant="outlined"
        sx={{ p: 2, bgcolor: "#cccfca", borderRadius: 2, boxShadow: 3 }}
      >
        <Typography variant="h5" component="div" sx={{ mb: 2 }}>
         Lançamentos
        </Typography>
        <Slider {...settings}>
          {products.slice(0, 20).map((product, index) => (
            <Box key={index} sx={{ p: 0 }}>
              <a
                href={`/categorias/${product.category}/${product.id}`}
                className="launch-link"
                style={{ textDecoration: 'none' }}
              >
                <Card sx={{ borderRadius: 2, width: '250px', height: '350px', mx: 'auto' }}>
                  <CardMedia
                    component="img"
                    height="150"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.price}R$
                    </Typography>
                    <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                      Ver mais
                    </Button>
                  </CardContent>
                </Card>
              </a>
            </Box>
          ))}
        </Slider>
      </Card>
    </Box>
  );
};

export default LaunchProducts;
