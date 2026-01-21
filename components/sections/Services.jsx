"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { useQuery } from "@apollo/client/react";
import { GET_ALL_SERVICES } from "@/app/service/query";

const Services = ({ variant = "three" }) => {
  const { data, loading, error } = useQuery(GET_ALL_SERVICES);

  if (loading) return null; // Or a loading spinner
  if (error) return null; // Or error message

  const services = data?.serviceCollection?.items || [];

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
              <SwiperSlide key={index} style={{ height: "auto" }}>
                <div className="item h-100">
                  <div className="service-one__single-inner h-100">
                    <div className="service-one__single-wrap">
                      <div className="service-one__single">
                        <div className="service-one__single-shape-1"></div>
                        <div className="service-one__icon">
                          {service.icon?.url ? (
                            <img
                              src={service.icon.url}
                              alt={service.icon.title || service.title}
                              style={{
                                width: "60px",
                                height: "60px",
                                objectFit: "contain",
                              }}
                            />
                          ) : (
                            <span className="icon-service"></span>
                          )}
                        </div>
                        <h3 className="service-one__title">
                          <Link
                            href={`/service/${service.slug}`}
                            style={{
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              height: "3.2em", // approx 2 lines
                            }}
                          >
                            {service.title}
                          </Link>
                        </h3>
                        <p
                          className="service-one__text"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 4,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            height: "6em", // approx 4 lines
                          }}
                        >
                          {service.shortDescription}
                        </p>
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
            <SwiperSlide key={index} style={{ height: "auto" }}>
              <div className="item h-100">
                <div className="services-three__single h-100 d-flex flex-column">
                  <div className="services-three__icon">
                    {service.icon?.url ? (
                      <img
                        src={service.icon.url}
                        alt={service.icon.title || service.title}
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      <span className="icon-service"></span>
                    )}
                  </div>
                  <h3 className="services-three__title">
                    <Link
                      href={`/service/${service.slug}`}
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        height: "3.2em",
                      }}
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <p
                    className="services-three__text flex-grow-1"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      height: "6em",
                      marginBottom: "1rem",
                    }}
                  >
                    {service.shortDescription}
                  </p>
                  <div className="services-three__read-more  mt-auto ">
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
