import { Link } from "react-router-dom";
import star from "../../assets/images/star.png";
import greyStar from "../../assets/images/greystar.png";
import chevronIcon from "../../assets/images/Chevron Down Iconvector.svg";

const Card = ({ restaurant, className }) => {
  // Getting the properties from the restaurant
  const { name, description, rating, image } = restaurant;

  // Checking the type of the star
  let starTypes = [];
  for (let i = 0; i < 5; i++) {
    starTypes = [...starTypes, i < rating ? star : greyStar];
  }

  // Template
  return (
    <article
      className={`card ${!!className ? className : ""}`}
      role="article"
      aria-label={`${name} Restaurant`}
    >
      <div
        className="img-restaurant"
        style={{
          backgroundImage: `url(${image})`,
        }}
        role="img"
        aria-label={`${name} Restaurant Image`}
      ></div>
      <div className="title">
        <h2>{name}</h2>
        <div className="stars" role="img" aria-label={`${rating} Star Rating`}>
          {starTypes.map((starType, index) => (
            <img
              src={starType}
              key={`${starType}${index}`}
              alt={`${index + 1} Star`}
            />
          ))}
        </div>
      </div>
      <p>{description}</p>
      <Link
        to="/"
        className="restaurant-link"
        role="link"
        aria-label={`View Details of ${name} Restaurant`}
      >
        View restaurant <img src={chevronIcon} alt="Chevron Icon" role="img" />
        <img src={chevronIcon} alt="Chevron Icon" role="img" />
      </Link>
    </article>
  );
};

export default Card;
