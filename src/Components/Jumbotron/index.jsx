const Jumbotron = () => {
  // Template
  return (
    <section className="jumbotron" itemScope>
      <div className="content">
        <h2 itemProp="headline">Connect with DineEase</h2>
        <p itemProp="description">
          Hungry for more? Whether you have questions, feedback, or simply wish
          to share your culinary story, we're eager to hear from you. Dive
          deeper into the DineEase experience and let's make every meal
          memorable.
        </p>
        <button aria-label="Connect With DineEase Button">
          Connect With DineEase
        </button>
      </div>
    </section>
  );
};

export default Jumbotron;
