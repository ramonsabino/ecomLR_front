import React, { useState } from "react";
import {
  Typography,
  Box,
  Divider,
  Button,
  IconButton,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  Modal,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import InputMask from "react-input-mask";
import { useCart } from "../../context/CartContext";
import { useDelivery } from "../../context/DeliveryContext";

const MaskedInput = (props: any) => {
  const { onChange } = props;
  return (
    <InputMask
      mask="(99) 9 9999-9999"
      onChange={(e) => {
        if (e.target.value === "() _ ____-____") {
          e.target.value = "";
        }
        if (onChange) {
          onChange(e);
        }
      }}
      {...props}
    />
  );
};

const MaskedInputCep = (props: any) => {
  const { inputRef, ...other } = props;
  return <InputMask {...other} ref={inputRef} mask="99999-999" />;
};

const CheckoutPage: React.FC = () => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } =
    useCart();
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [shippingMethod, setShippingMethod] = useState("retirada");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout>();
  const { getDeliveryPrice } = useDelivery();

  const handleCepChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const cepValue = event.target.value;
    setCep(cepValue);

    if (cepValue.length === 8) {
      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${cepValue}/json/`
        );
        const data = await response.json();
        if (!data.erro) {
          setLogradouro(data.logradouro);
        }
      } catch (error) {
        console.error("Error fetching address:", error);
      }
    } else if (cepValue.length === 0) {
      setLogradouro(""); 
    }
  };

  const handleShippingMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShippingMethod(event.target.value);
  };

  const deliveryPrice = getDeliveryPrice(cep);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
       if (cartItems.length === 0) {
        alert("Seu carrinho está vazio. Adicione produtos ao carrinho antes de finalizar a compra.");
        return;
    }

    setShowModal(true); 
    setTimerId(setTimeout(() => {
        setShowModal(false); 
        redirectToWhatsApp();
    }, 5000)); 
  };

  const closeModal = () => {
    setShowModal(false);
    redirectToWhatsApp();
    clearTimeout(timerId);
  };
  const redirectToWhatsApp = () => {
    let message = `*Informações do Cliente:*\n\n`;
    message += `*Nome:* ${name}\n`;
    message += `*Endereço:* ${logradouro}\n`;
    message += `*Email:* ${email}\n`;
    message += `*Telefone:* ${phone}\n\n`;
    message += `*Opção de Entrega:* ${shippingMethod}\n`;
    if (shippingMethod === "entrega") {
      message += `*CEP:* ${cep}\n`;
      message += `*Frete:* R$ ${deliveryPrice}\n\n`;
    }
    message += `*Produtos no Carrinho:*\n\n`;

    cartItems.forEach((item) => {
      message += `*Produto:* ${item.name}\n`;
      message += `*Quantidade:* ${item.quantity}\n\n`;
      message += `*Total:* R$ ${(total + deliveryPrice).toFixed(2)}\n\n`;
    });

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5585992907301?text=${encodedMessage}`;

    window.location.href = whatsappUrl;

    
  };

 

  return (
    <Box sx={{ display: "flex", maxWidth: 1000, margin: "auto", padding: 2 }}>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Checkout
        </Typography>
        <Divider sx={{ margin: "16px 0" }} />
        <Typography variant="h5" gutterBottom>
          Itens do Carrinho:
        </Typography>
        <Box>
          {cartItems.map((item) => (
            <Box
              key={item.id}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              marginBottom={1}
            >
              <Typography>{item.name}</Typography>
              <Box display="flex" alignItems="center">
                <IconButton
                  onClick={() => decrementQuantity(item.id)}
                  size="small"
                >
                  <RemoveIcon />
                </IconButton>
                <Typography>{item.quantity}</Typography>
                <IconButton
                  onClick={() => incrementQuantity(item.id)}
                  size="small"
                >
                  <AddIcon />
                </IconButton>
                <IconButton
                  onClick={() => removeFromCart(item.id)}
                  size="small"
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
              <Typography>R$ {item.price.toFixed(2)}</Typography>
            </Box>
          ))}
        </Box>
        <Divider sx={{ margin: "16px 0" }} />
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          marginBottom={2}
        >
          <Typography variant="body2">
            Taxa de Entrega: R$ {deliveryPrice.toFixed(2)}
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          marginBottom={2}
          >
            <Typography variant="h6">
              Total (incluindo frete): R$ {(total + deliveryPrice).toFixed(2)}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ flex: 1, marginLeft: 2 }}>
          <Typography variant="h6" gutterBottom>
            Informações de Compra:
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              id="name"
              label="Nome"
              variant="outlined"
              margin="normal"
              fullWidth
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              label="Telefone"
              InputProps={{
                inputComponent: MaskedInput as any,
              }}
            />
            <RadioGroup
              aria-label="shipping-method"
              name="shipping-method"
              value={shippingMethod}
              onChange={handleShippingMethodChange}
            >
              <FormControlLabel
                value="retirada"
                control={<Radio />}
                label="Retirada em Loja"
              />
              <FormControlLabel
                value="entrega"
                control={<Radio />}
                label="Entrega"
              />
            </RadioGroup>
            {shippingMethod === "entrega" && (
              <Box>
                <TextField
                  id="cep"
                  label="CEP"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={cep}
                  onChange={handleCepChange}
                  sx={{ bgcolor: "transparent" }}
                />
                <TextField
                  id="logradouro"
                  label="Logradouro"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={logradouro}
                  disabled
                />
                <TextField
                  id="numero"
                  label="Número"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={numero}
                  onChange={(event) => setNumero(event.target.value)}
                />
                <TextField
                  id="complemento"
                  label="Complemento"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={complemento}
                  onChange={(event) => setComplemento(event.target.value)}
                />
              </Box>
            )}
            <Button variant="contained" color="primary" fullWidth type="submit">
              Confirmar Compra
            </Button>
          </form>
          <Modal open={showModal} onClose={closeModal}>
            <Box
              sx={{
                borderRadius: 2,
                position: 'absolute',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <Typography variant="h5" align="center" gutterBottom>
                Confirmação de Compra
              </Typography>
              {shippingMethod === "entrega" ? (
                <Typography variant="body1" gutterBottom>
                  Obrigado por comprar conosco ❤️! 
                  você será redirecionado em alguns segundos para nosso contato onde seu pedido já será separado para entrega 🛵.
                </Typography>
              ) : (
                <Typography variant="body1" gutterBottom>
                  Obrigado por comprar conosco ❤️!
                  Você será redirecionado em alguns segundos para nosso contato para mais informações de retirada.
                </Typography>
              )}
              <Button onClick={closeModal} variant="contained" color="primary" fullWidth>
                Ok
              </Button>
            </Box>
          </Modal>
        </Box>
      </Box>
    );
  };
  
  export default CheckoutPage;
  