import React, { useState } from "react";
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
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [totalImages, setTotalImages] = useState(0);

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

  const handleImageLoad = () => {
    setImagesLoaded(imagesLoaded + 1);
    if (imagesLoaded === totalImages - 1) {
      // Todas as imagens foram carregadas
      // Você pode fazer alguma ação aqui, como exibir a página do produto
    }
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
          {products.slice(0, 20).map((product, index) => {
            const imageUrl = `http://localhost:5000${product.image}`;
            return (
              <Box
                key={product._id} // Usar product.id em vez de index
                sx={{
                  p: 0,
                  "&:hover": { transform: "scale(1.05)" },
                  mx: "4px", // Redução da margem entre os cards
                }}
              >
                <a
                  href={`/categorias/${product.category}/${product._id}`}
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
                      image={imageUrl}
                      alt={product.name}
                      onLoad={() => handleImageLoad()}
                      onError={() => console.error("Erro ao carregar imagem")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product.price} R$
                      </Typography>
                      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                        Ver mais
                      </Button>
                    </CardContent>
                  </Card>
                </a>
              </Box>
            );
          })}
        </Slider>
      </Card>
    </Box>
  );
};

export default LaunchProducts;
