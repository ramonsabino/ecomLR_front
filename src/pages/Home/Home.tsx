import Navbar from "../../components/Navbar/Navbar";
import CarouselHome from "../../components/Carousel/Carousel";
import { Box } from "@mui/material";
import CategoriesMenu from "../../components/Categories/CategoriesMenu";
import LaunchProducts from "../../components/LaunchProducts/LaunchProducts";
import SectionProducts from "../../components/Section/Section";

const Home: React.FC = () => {
  return (
    <div>
      <Box mt={2}>
        <CarouselHome />
      </Box>
      <CategoriesMenu />
      <LaunchProducts />
      <SectionProducts />
    </div>
  );
};

export default Home;
