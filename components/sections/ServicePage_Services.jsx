import React from "react";
import Link from "next/link";
import { services as servicesData } from "@/data/servicesData";

const ServicePage_Services = () => {
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
                      <Link href={`/service/${service.slug}`}>
                        {service.title}
                      </Link>
                    </h3>

                    <p className="services-two__text">{service.text}</p>

                    <div className="services-two__plus">
                      <Link href={`/service/${service.slug}`}>
                        <span className="fas fa-plus"></span>
                      </Link>
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
