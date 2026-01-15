import React from "react";

const ServicePage_Services = () => {
  const servicesData = [
    {
      img: "/assets/images/services/services-2-1.jpg",
      icon: "icon-ux-design",
      title: "UI/UX Design",
      slug: "ui-ux-design",
      delay: "100ms",
      description:
        "Comprehensive IT management, including network monitoring and data backup.",
    },
    {
      img: "/assets/images/services/services-2-2.jpg",
      icon: "icon-software-development",
      title: "APP Development",
      slug: "app-development",
      delay: "300ms",
      description:
        "Custom mobile and web applications built for performance and scalability.",
    },
    {
      img: "/assets/images/services/services-2-3.jpg",
      icon: "icon-product-design",
      title: "Product Design",
      slug: "product-design",
      delay: "500ms",
      description:
        "User-centered product designs that turn ideas into engaging experiences.",
    },
    {
      img: "/assets/images/services/services-2-4.jpg",
      icon: "icon-code",
      title: "Website Design",
      slug: "website-design",
      delay: "700ms",
      description:
        "Modern, responsive websites tailored to your brand and business goals.",
    },
    {
      img: "/assets/images/services/services-2-5.jpg",
      icon: "icon-promotion-1",
      title: "Business Analysis",
      slug: "business-analysis",
      delay: "900ms",
      description:
        "Strategic analysis to optimize processes, performance, and growth.",
    },
    {
      img: "/assets/images/services/services-2-6.jpg",
      icon: "icon-social-media-marketing",
      title: "Web Development",
      slug: "web-development",
      delay: "1100ms",
      description:
        "Scalable web solutions using modern technologies and best practices.",
    },
  ];

  return (
    <>
      <section className="services-page">
        <div className="container">
          <div className="row">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={service.delay}
              >
                <div className="services-two__single">
                  <div className="services-two__img-box">
                    <div className="services-two__img">
                      <img src={service.img} alt={service.title} />
                    </div>
                    <div className="services-two__icon">
                      <span className={service.icon}></span>
                    </div>
                  </div>

                  <div className="services-two__content">
                    <h3 className="services-two__title">
                      <a href={`/service/${service.slug}`}>{service.title}</a>
                    </h3>

                    <p className="services-two__text">{service.description}</p>

                    <div className="services-two__plus">
                      <a href={`/service/${service.slug}`}>
                        <span className="fas fa-plus"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage_Services;
