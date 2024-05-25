import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; // Importe o contexto do carrinho
import products from '../../context/product';
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
  [key: string]: string | undefined; // Índice de string para outros parâmetros de rota
}

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<RouteParams>();
  const product = products.find((product) => product.id === Number(productId));
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const { addToCart, cartItems, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = useCart();
  const [quantity, setQuantity] = useState<number>(1); // Inicializa a quantidade como 1

  if (!product) {
    return <div>Produto não encontrado!</div>;
  }

  const handleBuy = () => {
    // Verifica se o produto já está no carrinho
    const existingItem = cartItems.find(item => item.id === product.id);
  
    if (existingItem) {
      // Se o produto já estiver no carrinho, apenas incrementa a quantidade
      incrementQuantity(product.id);
    } else {
      // Se o produto não estiver no carrinho, adiciona-o com quantidade 1
      addToCart({
        id: product.id,
        name: product.name,
        quantity: 1, // Quantidade inicial
        price: product.price
      });
    }
  
    // Abra o carrinho de compras após adicionar o produto
    setCartOpen(true);
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
                <Button variant="contained" color="primary" sx={{ ml: 0 }} onClick={handleBuy}>
                  Adicionar ao Carrinho
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
                Descrição do Produto: {product.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Barra lateral do carrinho */}
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
