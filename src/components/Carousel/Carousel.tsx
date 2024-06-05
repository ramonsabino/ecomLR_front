// Carousel.tsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import StyledCarousel from './StyledCarousel';
import fone from '../../assets/foneJblBT.jpeg'
import carregador from '../../assets/carregadorTurboIOSLehmox.jpeg'
import caixaJbl from '../../assets/caixaJBLExtreme.jpeg'
import pelicula from '../../assets/pelicula3D.jpeg'
import smart from '../../assets/smartWatch.jpeg'
import logo from '../../assets/favicon_lr.jpg'



const CarouselHome: React.FC = () => {
  return (
    <StyledCarousel showThumbs={false} infiniteLoop autoPlay showStatus={false} showArrows={false} >
    <div>
      <img src={fone} alt="Fone JBL" />
    </div>
    <div>
      <img src={carregador} alt="Carregador Turbo" />
    </div>
    <div>
      <img src={caixaJbl} alt="Caixa JBL Extreme" />
    </div>
    <div>
      <img src={pelicula} alt="Peliculas de proteção" />
    </div>
    <div>
      <img src={smart} alt="Smartwatch" />
    </div>
    <div>
      <img src={logo} alt="Logo LR" />
    </div>
  </StyledCarousel>
  );
};

export default CarouselHome;
