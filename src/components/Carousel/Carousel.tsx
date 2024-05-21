// Carousel.tsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import StyledCarousel from './StyledCarousel';
import airdotImage from '../../assets/fones/foneAirDots.jpg'
import foneLehmox from '../../assets/fones/foneLehmox.jpg'
import caixaJbl from '../../assets/caixasDeSom/caixaJbl.jpg'
import caixaMinifun from '../../assets/caixasDeSom/caixaMinifun.jpg'
import logo from '../../assets/favicon_lr.jpg'



const CarouselHome: React.FC = () => {
  return (
    <StyledCarousel showThumbs={false} infiniteLoop autoPlay showStatus={false} showArrows={false} >
    <div>
      <img src={airdotImage} alt="Fone AirDots" />
    </div>
    <div>
      <img src={foneLehmox} alt="Fone Lehmox" />
    </div>
    <div>
      <img src={caixaJbl} alt="Caixa Jbl" />
    </div>
    <div>
      <img src={caixaMinifun} alt="Caixa minifun" />
    </div>
    <div>
      <img src={logo} alt="Logo LR" />
    </div>
  </StyledCarousel>
  );
};

export default CarouselHome;
