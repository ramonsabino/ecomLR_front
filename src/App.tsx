import React from 'react';
import Navbar from './components/Navbar/Navbar';
import CarouselHome from './components/Carousel/Carousel';
import { Box } from '@mui/material';
import CategoriesMenu from './components/Categories/CategoriesMenu';
import LaunchProducts from './components/LaunchProducts/LaunchProducts';


function App() {
  return (
    <div>
    <Navbar />
    <Box mt={2}> 
        <CarouselHome />
    </Box>
    <CategoriesMenu />
    <LaunchProducts />
    </div>
  );
}

export default App;
