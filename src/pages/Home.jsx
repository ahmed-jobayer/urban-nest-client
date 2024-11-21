import { Helmet } from "react-helmet-async";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Hero from "../components/home/Hero";
import Testimonials from "../components/home/Testimonials";
import Categories from "../components/home/Categories";
import Accordion from "../components/home/Accordion";

const Home = () => {
  return (
    <div>
        <Helmet>
            <title>Home - UrbanNest</title>
        </Helmet>
      <Hero />
      <div className="container mx-auto">
        <FeaturedProducts />
        <Categories/>
        <Testimonials/>
        <Accordion/>
      </div>
    </div>
  );
};

export default Home;
