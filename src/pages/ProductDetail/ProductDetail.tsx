import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useProductContext } from "../../context/ProductContext";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import CartSidebar from "../../components/Cart/CartSidebar";

interface RouteParams {
  productId: string;
  [key: string]: string | undefined;
}

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<RouteParams>();
  const { products } = useProductContext();
  const product = products.find((product) => product._id === productId);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const {
    addToCart,
    cartItems,
    removeFromCart,
    clearCart,
    incrementQuantity,
    decrementQuantity,
  } = useCart();
  const [quantity, setQuantity] = useState<number>(1);

  // Novo código para ajustar a altura da imagem
  const [cardHeight, setCardHeight] = useState(0);

  const productDetailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (productDetailsRef.current) {
      setCardHeight(productDetailsRef.current.clientHeight);
    }
  }, []);

  if (!product) {
    return <div>Produto não encontrado!</div>;
  }

  const handleBuy = () => {
    const existingItem = cartItems.find((item) => item._id === product._id);

    if (existingItem) {
      incrementQuantity(product._id);
    } else {
      addToCart({
        _id: product._id,
        name: product.name,
        quantity: 1,
        price: product.price,
      });
    }

    setCartOpen(true);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            width="100%"
            height={cardHeight} // Altura dinâmica
            image={`http://localhost:5000${product.image}`}
            alt={product.name}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Card ref={productDetailsRef}>
            <CardContent>
              <Typography variant="h4">Detalhes do Produto</Typography>
              <Typography variant="h6">
                Nome do Produto: {product.name}
              </Typography>
              <Typography variant="body1">Preço: R${product.price}</Typography>
              <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ ml: 0 }}
                  onClick={handleBuy}
                >
                  Adicionar ao Carrinho
                </Button>
              </Box>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography>Meios de pagamento</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Detalhes sobre os meios de pagamento.</Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography>Meios de envio</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Detalhes sobre os meios de envio.</Typography>
                </AccordionDetails>
              </Accordion>

              <Typography variant="body1" sx={{ mt: 2 }}>
                Descrição do Produto: {product.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <CartSidebar
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        removeFromCart={removeFromCart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
    </>
  );
};

export default ProductDetailPage;
