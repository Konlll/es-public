const Timeline = () => {
  // Template
  return (
    <section className="timeline">
      <h1>About Us</h1>
      <p>Embracing the Joy of Dining</p>
      <div className="content">
        <div className="row">
          <div className="col" role="heading">
            2019
          </div>
          <div className="col">
            <span itemProp="milestone">Culinary Connections Made</span>
            <div className="col-line">
              <div className="col-line-circle" role="presentation"></div>
            </div>
          </div>
          <div className="col" role="heading">
            2021
          </div>
          <div className="col">
            <span itemProp="milestone">Redefining Dining Landscape</span>
            <div className="col-line">
              <div className="col-line-circle" role="presentation"></div>
            </div>
          </div>
          <div className="col" role="heading">
            2023
          </div>
        </div>
        <div className="line">
          <div className="outer-point">
            <div className="points" role="presentation"></div>
          </div>
          <div className="outer-point">
            <div className="points" role="presentation"></div>
          </div>
          <div className="outer-point">
            <div className="points" role="presentation"></div>
          </div>
          <div className="outer-point">
            <div className="points" role="presentation"></div>
          </div>
          <div className="outer-point">
            <div className="points" role="presentation"></div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="col-line">
              <div className="col-line-circle" role="presentation"></div>
            </div>
            <span itemProp="milestone">Birth of DineEase</span>
          </div>
          <div className="col" role="heading">
            2020
          </div>
          <div className="col">
            <div className="col-line">
              <div className="col-line-circle" role="presentation"></div>
            </div>
            <span itemProp="milestone">Curatorical Excellence Emerges</span>
          </div>
          <div className="col" role="heading">
            2022
          </div>
          <div className="col">
            <div className="col-line">
              <div className="col-line-circle" role="presentation"></div>
            </div>
            <span itemProp="milestone">Redefining Dining Landscapes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
