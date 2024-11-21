import { Helmet } from "react-helmet-async";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Hero from "../components/home/Hero";

const Home = () => {
  return (
    <div>
        <Helmet>
            <title>Home - UrbanNest</title>
        </Helmet>
      <Hero />
      <div className="container mx-auto">
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default Home;
