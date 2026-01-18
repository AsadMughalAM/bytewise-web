"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TestimonialTwo = () => {
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
          // className="testimonial-two__carousel owl-theme owl-carousel"
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
                          <a href="testimonials.html">{item.name}</a>
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
};

export default TestimonialTwo;
