import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  Box,
  Button,
  Divider
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

interface CartSidebarProps {
  open: boolean;
  onClose: () => void;
  cartItems: {
    id: number;
    name: string;
    quantity: number;
    price: number;
  }[];
  onAdd: (id: number) => void;
  onRemove: (id: number) => void;
  onClear: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ open, onClose, cartItems, onAdd, onRemove, onClear }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div style={{ width: 300, padding: 16 }}>
        <IconButton onClick={onClose} style={{ marginBottom: 16 }}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" gutterBottom>
          Carrinho de Compras
        </Typography>
        <List>
          {cartItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={item.name}
                secondary={`Preço: R$${item.price.toFixed(2)}`}
              />
              <Box display="flex" alignItems="center">
                <IconButton onClick={() => onRemove(item.id)}>
                  <RemoveIcon />
                </IconButton>
                <Typography>{item.quantity}</Typography>
                <IconButton onClick={() => onAdd(item.id)}>
                  <AddIcon />
                </IconButton>
                <IconButton onClick={() => onClear()}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>
        <Divider style={{ margin: '16px 0' }} />
        <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
          <Typography variant="h6">Total: R${total.toFixed(2)}</Typography>
        </Box>
        <Button variant="contained" color="primary" fullWidth>
          Ver Carrinho
        </Button>
      </div>
    </Drawer>
  );
};

export default CartSidebar;
