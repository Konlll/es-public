import searchIcon from "../../assets/images/Search Icon.png";
import dineEase from "../../assets/images/DineEase.png";
import heroIllustration from "../../assets/images/Hero Illustration.png";

const Hero = () => {
  // Template
  return (
    <section className="hero" itemScope>
      <div className="content">
        <h1 itemProp="title">DineEase: Exceptional Dining Awaits</h1>
        <p itemProp="description">
          Dive into culinary wonders with DineEase. We curate top-rated
          restaurants, each with distinct flavors and ambiance. From
          international dishes to traditional delights and gastronomic
          adventures, find your perfect spot with DineEase.
        </p>
        <button className="primary" aria-label="Explore Restaurants Button">
          <img src={searchIcon} alt="Search icon" />
          Explore Restaurants
        </button>
      </div>
      <div
        className="image"
        style={{
          backgroundImage: `url("${dineEase}")`,
        }}
      >
        <div className="lines">
          <div className="purple-line"></div>
          <div className="light-purple-line"></div>
        </div>
      </div>
      <div
        className="mobile-image"
        style={{
          backgroundImage: `url("${heroIllustration}")`,
        }}
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default Hero;
