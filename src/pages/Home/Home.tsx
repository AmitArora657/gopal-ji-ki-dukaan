import Hero from "../../components/sections/Hero";
import Categories from "../../components/sections/Categories";
import FeaturedProducts from "../../components/sections/FeaturedProducts";
import WhyChooseUs from "../../components/sections/WhyChooseUs";
import Testimonials from "../../components/sections/Testimonials";
import Gallery from "../../components/sections/Gallery";
import Newsletter from "../../components/sections/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <Newsletter />
    </>
  );
};

export default Home;
