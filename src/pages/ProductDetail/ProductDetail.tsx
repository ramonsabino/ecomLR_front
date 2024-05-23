// ProductDetailPage.tsx

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../context/product'; // Importe a lista de produtos aqui
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
  Box
} from '@mui/material';
import { Add, Remove, ExpandMore } from '@mui/icons-material';
import CartSidebar from '../../components/Cart/CartSidebar';

interface RouteParams {
  productId: string;
  [key: string]: string; // Índice de string para outros parâmetros de rota
}

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<RouteParams>();
  const product = products.find((product) => product.id === Number(productId));
  const [quantity, setQuantity] = useState<number>(0);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<{ id: number; name: string; quantity: number; price: number }[]>([]);

  if (!product) {
    return <div>Produto não encontrado!</div>;
  }

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuy = () => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    const updatedCartItems = [...cartItems];

    if (existingItemIndex !== -1) {
      updatedCartItems[existingItemIndex].quantity += quantity;
    } else {
      updatedCartItems.push({ id: product.id, name: product.name, quantity, price: product.price });
    }

    setCartItems(updatedCartItems);
    setQuantity(0); // Reset the quantity after adding to cart
    setCartOpen(true); // Open the cart sidebar
  };

  const handleAddToCart = (id: number) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const handleRemoveFromCart = (id: number) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
    );
    setCartItems(updatedCartItems);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <Grid container spacing={2}>
        {/* Seção da imagem */}
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            height="100%"
            image={product.image}
            alt={product.name}
          />
        </Grid>

        {/* Seção dos detalhes do produto */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4">Detalhes do Produto</Typography>
              <Typography variant="h6">Nome do Produto: {product.name}</Typography>
              <Typography variant="body1">Preço: R${product.price}</Typography>

              {/* Contador e Botão de comprar */}
              <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
                <Button variant="outlined" onClick={handleRemove}>
                  <Remove />
                </Button>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    border: '1px solid #ccc',
                    mx: 2,
                  }}
                >
                  <Typography variant="body1">{quantity}</Typography>
                </Box>
                <Button variant="outlined" onClick={handleAdd}>
                  <Add />
                </Button>
                <Button variant="contained" color="primary" sx={{ ml: 2 }} onClick={handleBuy}>
                  Comprar
                </Button>
              </Box>

              {/* Accordion dos Meios de pagamento */}
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography>Meios de pagamento</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {/* Conteúdo dos meios de pagamento */}
                  <Typography>Detalhes sobre os meios de pagamento.</Typography>
                </AccordionDetails>
              </Accordion>

              {/* Accordion dos Meios de envio */}
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography>Meios de envio</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {/* Conteúdo dos meios de envio */}
                  <Typography>Detalhes sobre os meios de envio.</Typography>
                </AccordionDetails>
              </Accordion>

              {/* Campo de descrição do produto */}
              <Typography variant="body1" sx={{ mt: 2 }}>
                Descrição do Produto: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, impedit?
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Sidebar do carrinho de compras */}
      <CartSidebar
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onAdd={handleAddToCart}
        onRemove={handleRemoveFromCart}
        onClear={handleClearCart} // Passando a função de limpar o carrinho
      />
    </>
  );
};

export default ProductDetailPage;
