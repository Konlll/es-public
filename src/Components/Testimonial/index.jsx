import quote from "../../assets/images/Quote markvector.svg";

const Testimonial = ({ text, author, className }) => {
  // Template
  return (
    <div
      className={`testimonial ${className}`}
      itemScope
      itemType="https://schema.org/Review"
    >
      <div className="quote">
        <img src={quote} alt="Quote" />
      </div>
      <div className="text">
        <p itemProp="reviewBody">{text}</p>
        <h3 itemProp="author">{author}</h3>
      </div>
    </div>
  );
};

export default Testimonial;
