// Carousel.tsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import StyledCarousel from './StyledCarousel';

const CarouselHome: React.FC = () => {
  return (
    <StyledCarousel showThumbs={false} infiniteLoop autoPlay showStatus={false}>
    <div>
      <img src="https://via.placeholder.com/800x300.png?text=Slide+1" alt="Slide 1" />
    </div>
    <div>
      <img src="https://via.placeholder.com/800x300.png?text=Slide+2" alt="Slide 2" />
    </div>
    <div>
      <img src="https://via.placeholder.com/800x300.png?text=Slide+3" alt="Slide 3" />
    </div>
  </StyledCarousel>
  );
};

export default CarouselHome;
