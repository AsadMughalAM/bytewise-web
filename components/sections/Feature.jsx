const Feature = () => {
  const features = [
    {
      img: "/assets/images/resources/feature-one-img-1-1.png",
      title: "Security Services",
      text: "Innovating and empowering businesses with tailored solutions for success and growth. Innovating and empowering",
      link: "#services",
      delay: "100ms",
    },
    {
      img: "/assets/images/resources/feature-one-img-1-2.png",
      title: "Data Privacy",
      text: "Innovating and empowering businesses with tailored solutions for success and growth. Innovating and empowering",
      link: "#services",
      delay: "300ms",
    },
    {
      img: "/assets/images/resources/feature-one-img-1-3.png",
      title: "Industry Certified",
      text: "Innovating and empowering businesses with tailored solutions for success and growth. Innovating and empowering",
      link: "#services",
      delay: "500ms",
    },
  ];

  return (
    <section className="feature-one">
      <div className="feature-one__shape-1"></div>
      <div className="feature-one__shape-2"></div>
      <div className="feature-one__shape-3 float-bob-y">
        <img src="/assets/images/shapes/feature-one-shape-3.png" alt="" />
      </div>
      <div className="container">
        <div className="row">
          {features.map((feature, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay={feature.delay}
            >
              <div className="feature-one__single">
                <div className="feature-one__img">
                  <img src={feature.img} alt="" />
                </div>
                <h3 className="feature-one__title">
                  <a href={feature.link}>{feature.title}</a>
                </h3>
                <p className="feature-one__text">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
