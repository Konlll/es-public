import searchIconButton from "../../assets/images/SearchIconButton.svg";
import searchIconInput from "../../assets/images/SearchIconInput.svg";
import filterIcon from "../../assets/images/Filter Icon.png";
import chevronDownIcon from "../../assets/images/ChevronDownIconShowMore.svg";
import locationIcon from "../../assets/images/Location Icon.png";
import { useEffect, useState } from "react";
import Card from "../Card";

const SearchBar = () => {
  const [restaurants, setRestaurants] = useState(null);
  const [showMore, setShowMore] = useState(false);

  // Fetching the featured restaurants and setting the restaurants state with random sorting
  useEffect(() => {
    fetch("https://es2025-s17-hu-r1-backend.onrender.com/api/v1/restaurants")
      .then((res) => res.json())
      .then((data) => {
        let newData = !!restaurants
          ? newData
          : data.sort((a, b) => 0.5 - Math.random());
        setRestaurants(newData);
      });
  }, []);

  // Template
  return (
    <section className="search-bar" itemScope>
      <h2 itemProp="headline">Find Your Perfect Dining Spot</h2>
      <p itemProp="description">Search by Cuisine, Location, or Name</p>
      <input type="checkbox" id="hide-checkbox" />
      <div className="search-div simple">
        <div className="search-input-icon">
          <img src={searchIconInput} alt="Search icon" />
        </div>
        <input type="text" placeholder="Search for restaurants" />
        <label htmlFor="hide-checkbox">
          <div className="toggle-search-mode">
            <img src={filterIcon} alt="Filter icon" />
          </div>
        </label>
        <button className="search-button">
          <img src={searchIconButton} alt="Search icon" />
        </button>
      </div>
      <div className="search-div combined">
        <div className="inputs">
          <select>
            <option>Cuisine</option>
          </select>
          <div className="location">
            <div className="img-location">
              <img src={locationIcon} alt="Location Icon" />
            </div>
            <input type="text" placeholder="Location" />
          </div>
          <input type="text" placeholder="Name" />
          <button className="search-button">
            <img src={searchIconButton} alt="Search icon" />
          </button>
        </div>
        <span>
          <label htmlFor="hide-checkbox">Simple search</label>
        </span>
      </div>
      <div className="cards">
        {restaurants &&
          restaurants.map((restaurant, index) => {
            return (
              <Card
                key={restaurant.id}
                restaurant={restaurant}
                className={!showMore && index >= 3 ? "hidden" : ""}
              />
            );
          })}
      </div>
      <span onClick={() => setShowMore(!showMore)} role="button">
        {!showMore ? "Show more" : "Show less"}{" "}
        <img
          src={chevronDownIcon}
          alt="Down icon"
          className={showMore ? "rotate" : ""}
        />
      </span>
    </section>
  );
};

export default SearchBar;
