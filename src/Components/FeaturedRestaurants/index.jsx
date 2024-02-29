import { useEffect, useState } from "react";
import Card from "../Card";

const FeaturedRestaurants = () => {
  const [restaurants, setRestaurants] = useState(null);

  // Fetching all restaurants and setting the restaurant state with the data
  useEffect(() => {
    fetch(
      "https://es2025-s17-hu-r1-backend.onrender.com/api/v1/restaurants/top-rated"
    )
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, []);

  // Template
  return (
    <section
      className="featured-restaurants"
      role="region"
      aria-labelledby="featured-restaurants-heading"
    >
      <h2 id="featured-restaurants-heading">Featured Restaurants</h2>
      <p>Discover Unforgettable Dining Destinations</p>
      <div className="cards">
        {restaurants &&
          restaurants.map((restaurant) => {
            return <Card key={restaurant.id} restaurant={restaurant} />;
          })}
      </div>
      <div className="circle" role="presentation" aria-hidden="true"></div>
    </section>
  );
};

export default FeaturedRestaurants;
