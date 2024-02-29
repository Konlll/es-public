import FeaturedRestaurants from "../../Components/FeaturedRestaurants";
import Hero from "../../Components/Hero";
import SearchBar from "../../Components/SearchBar";
import Testimonials from "../../Components/Testimonials";

const Home = () => {
  // Components
  return (
    <>
      <Hero />
      <FeaturedRestaurants />
      <Testimonials />
      <SearchBar />
    </>
  );
};

export default Home;
