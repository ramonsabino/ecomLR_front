import React from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import Slider from "react-slick";
import { useProductContext } from "../../context/ProductContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LaunchProducts: React.FC = () => {
  const { products } = useProductContext();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <Box sx={{ p: 1, mt: 3 }}>
      <Card
        variant="outlined"
        sx={{
          p: 2,
          bgcolor: "#fafafa",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" component="div" sx={{ mb: 2 }}>
          Lançamentos
        </Typography>
        <Slider {...settings}>
          {products.slice(0, 20).map((product, index) => (
            <Box
              key={index}
              sx={{
                p: 0,
                "&:hover": { transform: "scale(1.05)" },
                mx: "4px", // Redução da margem entre os cards
              }}
            >
              <a
                href={`/categorias/${product.category}/${product.id}`}
                className="launch-link"
                style={{ textDecoration: "none" }}
              >
                <Card
                  sx={{
                    borderRadius: 2,
                    width: "200px",
                    height: "300px",
                    mx: "auto",
                    transition: "transform 0.3s",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="120"
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
