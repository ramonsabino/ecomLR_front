import React, { useEffect, useRef } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Box,
  Divider,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

interface CartItem {
  product: {
    _id: string;
    name: string;
    price: number;
  };
  quantity: number;
}

interface CartSidebarProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  removeFromCart: (id: string) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  open,
  onClose,
  items,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
}) => {
  const { getCart } = useCart();
  const calledOnce = useRef(false);
  useEffect(() => {
    if (open && !calledOnce.current) {
      getCart();
      calledOnce.current = true;
    }
    if (!open) {
      // Reset para false quando o carrinho é fechado
      calledOnce.current = false;
    }
  }, [open, getCart]);

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{ width: "300px" }}
    >
      <div style={{ width: 300, padding: 16 }}>
        <List>
          <Typography variant="h6" align="center" style={{ margin: "10px" }}>
            Carrinho de Compras
          </Typography>
          {items.map((item) => (
            <ListItem key={item.product._id}>
              <ListItemText
                primary={item.product.name}
                secondary={`R$ ${
                  item.product.price ? item.product.price.toFixed(2) : ""
                }`}
              />
              <Box display="flex" alignItems="center">
                <IconButton
                  onClick={() => decrementQuantity(item.product._id)}
                  size="small"
                >
                  <RemoveIcon />
                </IconButton>
                <Typography variant="body1" style={{ margin: "0 8px" }}>
                  {item.quantity}
                </Typography>
                <IconButton
                  onClick={() => incrementQuantity(item.product._id)}
                  size="small"
                >
                  <AddIcon />
                </IconButton>
              </Box>
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => removeFromCart(item.product._id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
          {items.length === 0 && (
            <Typography variant="body2" align="center">
              O carrinho está vazio.
            </Typography>
          )}
        </List>
        <Divider style={{ margin: "16px 0" }} />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginBottom={2}
        >
          <Typography variant="h6">Total: R${total.toFixed(2)}</Typography>
        </Box>
        <Button
          component={Link}
          to="/checkout"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mb: 2 }} // Adiciona uma margem na parte inferior
        >
          Ver Carrinho
        </Button>
        <Button onClick={onClose} variant="contained" color="info" fullWidth>
          Continuar comprando
        </Button>
      </div>
    </Drawer>
  );
};

export default CartSidebar;
