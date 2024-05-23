// ProductDetailPage.tsx

import { useParams } from 'react-router-dom';
import products from '../../context/product'; // Importe a lista de produtos aqui
import { Card, CardContent, CardMedia, Typography, Button, Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Add, Remove, ExpandMore } from '@mui/icons-material';

interface RouteParams {
    productId: string;
    [key: string]: string; // Índice de string para outros parâmetros de rota
}
  
const ProductDetailPage: React.FC = () => {
    const { productId } = useParams<RouteParams>();
    const product = products.find((product) => product.id === Number(productId));
    if (!product) {
        return <div>Produto não encontrado!</div>;
    }

    return (
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

                        {/* Contador */}
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <Button variant="outlined" onClick={() => {}}>
                                    <Remove />
                                </Button>
                            </Grid>
                            <Grid item>
                                {/* Aqui você pode adicionar a lógica para exibir a quantidade */}
                                <Typography variant="body1">Quantidade: 0</Typography>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" onClick={() => {}}>
                                    <Add />
                                </Button>
                            </Grid>
                        </Grid>

                        {/* Botão de adicionar */}
                        <Button variant="contained" fullWidth>
                            Adicionar
                        </Button>

                        {/* Accordion dos Meios de pagamento */}
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMore />}>
                                <Typography>Meios de pagamento</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {/* Conteúdo dos meios de pagamento */}
                            </AccordionDetails>
                        </Accordion>

                        {/* Accordion dos Meios de envio */}
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMore />}>
                                <Typography>Meios de envio</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {/* Conteúdo dos meios de envio */}
                            </AccordionDetails>
                        </Accordion>

                        {/* Campo de descrição do produto */}
                        {/* <Typography variant="body1">Descrição do Produto: {product.description}</Typography> */}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default ProductDetailPage;
