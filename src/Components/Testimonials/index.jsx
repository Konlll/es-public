import Testimonial from "../Testimonial";
import quote from "../../assets/images/Quote mark.png";

const Testimonials = () => {
  // Template
  return (
    <section className="testimonials">
      <div className="circle" role="presentation"></div>
      <div className="col col-1">
        <h2>
          <img src={quote} alt="Quote" role="presentation" />
          Delightful Experiences Shared by Our Guests
        </h2>
        <Testimonial
          text={`"Exquisite flavors, impeccable service, and a memorable ambiance –
          DineEase made our celebration truly special!"`}
          author={`Robert & Emily`}
          className={`first`}
        />
      </div>
      <div className="col">
        <Testimonial
          text={`"With DineEase, we've uncovered culinary treasures right in our city. Every dining recommendation feels like an exclusive invitation to a world of flavors. We thought we knew our local dining scene, but DineEase introduced us to so much more.`}
          author={`Emma & Jacob`}
          className={`second`}
        />
        <Testimonial
          text={`"DineEase guided us to hidden gems we never knew existed! We've become food adventurers, thanks to this platform."`}
          author={`Lisa & Mark`}
          className={`third`}
        />
      </div>
    </section>
  );
};

export default Testimonials;
