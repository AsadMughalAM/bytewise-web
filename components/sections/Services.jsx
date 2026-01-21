"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { services } from "@/data/servicesData";

const Services = ({ variant = "three" }) => {
  if (variant === "one") {
    return (
      <section className="service-one">
        <div className="services-one__shape-1"></div>
        <div className="services-one__shape-2 float-bob-x">
          <img src="/assets/images/shapes/services-one-shape-2.png" alt="" />
        </div>
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">Our Services</span>
            </div>
            <h2 className="section-title__title title-animation">
              Innovative IT Services
              <br /> Tailored <span>For Your Success.</span>
            </h2>
          </div>
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{ delay: 5000 }}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="item">
                  <div className="service-one__single-inner">
                    <div className="service-one__single-wrap">
                      <div className="service-one__single">
                        <div className="service-one__single-shape-1"></div>
                        <div className="service-one__icon">
                          <span className={service.icon}></span>
                        </div>
                        <h3 className="service-one__title">
                          <Link href={`/service/${service.slug}`}>
                            {service.title}
                          </Link>
                        </h3>
                        <p className="service-one__text">{service.text}</p>
                      </div>
                    </div>
                    <div className="service-one__btn-box">
                      <Link
                        href={`/service/${service.slug}`}
                        className="thm-btn"
                      >
                        Read More
                        <span className="fas fa-arrow-right"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  }

  return (
    <section className="services-three" id="services">
      <div className="services-three__shape-1"></div>
      <div className="services-three__shape-2 float-bob-x">
        <img src="/assets/images/shapes/services-three-shape-2.png" alt="" />
      </div>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">Our Services</span>
          </div>
          <h2 className="section-title__title title-animation">
            Reliable Services Crafted To <br />
            Your <span>Expectations</span>
          </h2>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="item">
                <div className="services-three__single">
                  <div className="services-three__icon">
                    <span className={service.icon}></span>
                  </div>
                  <h3 className="services-three__title">
                    <Link href={`/service/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>
                  <p className="services-three__text">{service.text}</p>
                  <div className="services-three__read-more">
                    <Link href={`/service/${service.slug}`}>
                      Read More
                      <span className="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
