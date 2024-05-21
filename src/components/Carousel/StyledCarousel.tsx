// StyledCarousel.tsx
import { styled } from '@mui/system';
import { Carousel } from 'react-responsive-carousel';

const StyledCarousel = styled(Carousel)(({ theme }) => ({
  maxWidth: '600px', // Define a largura máxima do carrossel
  margin: '0 auto', // Centraliza o carrossel na página
  '& .carousel .slide img': {
    height: '200px', // Define a altura das imagens
    width: '350px',
    objectFit: 'cover', // Garante que a imagem cubra todo o slide
  },
  '& .carousel .legend': {
    background: 'rgba(0, 0, 0, 0.5)', // Fundo semitransparente para a legenda
    color: 'white', // Cor do texto da legenda
    padding: '10px', // Espaçamento interno da legenda
  },
}));

export default StyledCarousel;
