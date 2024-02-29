import elenaImage from "../../assets/images/Person1.png";
import sophiaImage from "../../assets/images/Person2.png";
import rajImage from "../../assets/images/Person3.png";
import lucasImage from "../../assets/images/Person4.png";
import aishaImage from "../../assets/images/Person5.png";

const Team = () => {
  // Template
  return (
    <section className="team" itemScope>
      <h2 itemProp="headline">Meet our team</h2>
      <p itemProp="description">The Culinary Visonaries Behind DineEase</p>
      <div className="people">
        <div className="person">
          <img src={elenaImage} alt="Elena Martinez" itemProp="image" />
          <h3 itemProp="name">Elena Martinez</h3>
          <span itemProp="jobTitle">Founder & CEO</span>
        </div>
        <div className="person">
          <img src={rajImage} alt="Raj Singh" itemProp="image" />
          <h3 itemProp="name">Raj Singh</h3>
          <span itemProp="jobTitle">Chief Culinary Curator</span>
        </div>
        <div className="person">
          <img src={sophiaImage} alt="Sophia Dawson" itemProp="image" />
          <h3 itemProp="name">Sophia Dawson</h3>
          <span itemProp="jobTitle">Director of Community Engagement</span>
        </div>
        <div className="person">
          <img src={lucasImage} alt="Lucas Kim" itemProp="image" />
          <h3 itemProp="name">Lucas Kim</h3>
          <span itemProp="jobTitle">Head of Digital Strategy</span>
        </div>
        <div className="person">
          <img src={aishaImage} alt="Aisha Abdi" itemProp="image" />
          <h3 itemProp="name">Aisha Abdi</h3>
          <span itemProp="jobTitle">Marketing & Brand Manager</span>
        </div>
      </div>
    </section>
  );
};

export default Team;
