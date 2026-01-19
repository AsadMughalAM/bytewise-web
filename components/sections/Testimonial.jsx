"use client";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { testimonials } from "@/data/testimonialsData";

const Testimonial = () => {
  return (
    <section className="testimonial-three" id="testimonial">
      <div className="container">
        <div className="testimonial-three__inner">
          <div
            className="testimonial-three__bg"
            style={{
              backgroundImage:
                "url(/assets/images/backgrounds/testimonial-three-bg.jpg)",
            }}
          ></div>
          <div className="testimonial-three__main-content">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="swiper-container"
              id="testimonial-three__carousel"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-three__main-content-inner">
                    <div className="testimonial-three__main-content-box">
                      <div className="testimonial-three__quote">
                        <i className="fas fa-quote-left"></i>
                      </div>
                      <p className="testimonial-three__text">
                        {testimonial.text}
                      </p>
                      <div className="testimonial-three__client-info-box">
                        <div className="testimonial-three__client-info">
                          <h3>
                            <Link href="/">{testimonial.name}</Link>
                          </h3>
                          <p>{testimonial.position}</p>
                        </div>
                        <div className="testimonial-three__ratting">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="fas fa-star"></span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-three__img">
                      <img src={testimonial.img} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="testimonial-three__nav">
              <div className="swiper-button-next">
                <i className="icon-right-arrow"></i>
              </div>
              <div className="swiper-button-prev">
                <i className="icon-right-arrow"></i>
              </div>
            </div>
          </div>
          <div className="testimonial-three__thumb-box">
            <Swiper
              modules={[Navigation]}
              navigation={false}
              className="swiper-container"
              id="testimonial-three__thumb"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-three__img-holder-box">
                    <div className="testimonial-three__img-holder">
                      <img src={testimonial.thumb} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div id="particles-js-three"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
