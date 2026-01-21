"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { testimonials as testimonialsData } from "@/data/testimonialsData";

const Testimonial = ({ variant = "three" }) => {
  if (variant === "two") {
    const testimonials = [
      {
        name: "Adam Smith",
        role: "Co-Founder",
        image: "/assets/images/testimonial/testimonial-2-1.jpg",
        text: "Adipiscing elit, sed do eiusmod tempor incididunt ut labored etos dolore magna aliquant. Ut enim ad minim veniam nostrud exercitation ullamco laboris nisi ut aliquip",
      },
      {
        name: "Robert Son",
        role: "Co-Founder",
        image: "/assets/images/testimonial/testimonial-2-2.jpg",
        text: "Adipiscing elit, sed do eiusmod tempor incididunt ut labored etos dolore magna aliquant. Ut enim ad minim veniam nostrud exercitation ullamco laboris nisi ut aliquip",
      },
      {
        name: "Alisha Martin",
        role: "Co-Founder",
        image: "/assets/images/testimonial/testimonial-2-3.jpg",
        text: "Adipiscing elit, sed do eiusmod tempor incididunt ut labored etos dolore magna aliquant. Ut enim ad minim veniam nostrud exercitation ullamco laboris nisi ut aliquip",
      },
      {
        name: "Adam Smith",
        role: "Co-Founder",
        image: "/assets/images/testimonial/testimonial-2-1.jpg",
        text: "Adipiscing elit, sed do eiusmod tempor incididunt ut labored etos dolore magna aliquant. Ut enim ad minim veniam nostrud exercitation ullamco laboris nisi ut aliquip",
      },
      {
        name: "Robert Son",
        role: "Co-Founder",
        image: "/assets/images/testimonial/testimonial-2-2.jpg",
        text: "Adipiscing elit, sed do eiusmod tempor incididunt ut labored etos dolore magna aliquant. Ut enim ad minim veniam nostrud exercitation ullamco laboris nisi ut aliquip",
      },
      {
        name: "Alisha Martin",
        role: "Co-Founder",
        image: "/assets/images/testimonial/testimonial-2-3.jpg",
        text: "Adipiscing elit, sed do eiusmod tempor incididunt ut labored etos dolore magna aliquant. Ut enim ad minim veniam nostrud exercitation ullamco laboris nisi ut aliquip",
      },
    ];

    return (
      <section className="testimonial-two">
        <div
          className="testimonial-two-bg-shape"
          style={{
            backgroundImage:
              "url(/assets/images/shapes/testimonial-two-bg-shape.png)",
          }}
        ></div>
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">Testimonials</span>
            </div>
            <h2 className="section-title__title title-animation">
              What Our Customer <span>Says?</span>
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
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="item">
                  <div className="testimonial-two__single">
                    <div className="testimonial-two__single-bdr"></div>
                    <div className="testimonial-two__quote">
                      <span className="fas fa-quote-right"></span>
                    </div>
                    <div className="testimonial-two__client-info-box">
                      <div className="testimonial-two__client-info">
                        <div className="testimonial-two__client-img-box">
                          <div className="testimonial-two__client-img">
                            <img src={item.image} alt="" />
                          </div>
                        </div>
                        <div className="testimonial-two__client-content">
                          <h3 className="testimonial-two__client-name">
                            <Link href="/">{item.name}</Link>
                          </h3>
                          <p className="testimonial-two__client-sub-title">
                            {item.role}
                          </p>
                        </div>
                      </div>
                      <div className="testimonial-two__client-ratting">
                        <span className="icon-star-1"></span>
                        <span className="icon-star-1"></span>
                        <span className="icon-star-1"></span>
                        <span className="icon-star-1"></span>
                        <span className="icon-star-1"></span>
                      </div>
                    </div>
                    <p className="testimonial-two__text">“{item.text}</p>
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
              {testimonialsData.map((testimonial, index) => (
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
              {testimonialsData.map((testimonial, index) => (
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
