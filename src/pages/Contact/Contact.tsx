import React from 'react';
import { Typography, Grid, TextField, Button, Card, CardContent, Box, IconButton } from '@mui/material';
import { Instagram, WhatsApp } from '@mui/icons-material';

const ContactPage: React.FC = () => {
  // Função para lidar com o envio do formulário
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário, como enviar um e-mail ou salvar os dados em um banco de dados
    // Por enquanto, vamos apenas exibir uma mensagem
    alert('Formulário enviado com sucesso!');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Card sx={{ borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center">
            Entre em Contato Conosco
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Nome"
                  variant="outlined"
                  // Adicione aqui o estado e a função para lidar com a alteração do valor do campo
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="E-mail"
                  variant="outlined"
                  // Adicione aqui o estado e a função para lidar com a alteração do valor do campo
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={4}
                  label="Mensagem"
                  variant="outlined"
                  // Adicione aqui o estado e a função para lidar com a alteração do valor do campo
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Button type="submit" variant="contained" color="primary">
                  Enviar Mensagem
                </Button>
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <IconButton aria-label="WhatsApp" component="a" href="https://wa.me/55992907301" target="_blank">
                  <WhatsApp fontSize='large' sx={{ color: '#25D366' }} />
                </IconButton>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContactPage;
