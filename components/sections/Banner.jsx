"use client";

import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  const odometerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });

    // Initialize Odometer
    if (odometerRef.current && window.Odometer) {
      const odometer = new window.Odometer({
        el: odometerRef.current,
        value: 0,
      });
      odometer.update(4170);
    }
  }, []);

  return (
    <section className="banner-two">
      <div className="banner-two__shape-1"></div>
      <div className="banner-two__shape-2 img-bounce-two"></div>
      <div className="banner-two__shape-3 rotate-me">
        <img src="/assets/images/shapes/banner-two-shape-3.png" alt="" />
      </div>
      <div className="banner-two__shape-4 float-bob-x">
        <img src="/assets/images/shapes/banner-two-shape-4.png" alt="" />
      </div>
      <div className="container">
        <div className="banner-two__inner">
          <div className="banner-two__content">
            <div 
              className="banner-two__sub-title-box" 
              data-aos="fade-right" 
              data-aos-duration="1500"
              data-aos-delay="0"
            >
              <p className="banner-two__sub-title">Best it Solution Service</p>
            </div>
            <h2 
              className="banner-two__title" 
              data-aos="fade-left" 
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              Boost <span>Business</span> with Our Innovative IT Solutions for <span>Success story</span>
            </h2>
            <p 
              className="banner-two__text" 
              data-aos="fade-up" 
              data-aos-duration="1500" 
              data-aos-delay="800"
            >
              IT solutions refer to a broad range of services and technologies designed to address<br /> specific business needs, streamline operations, and drive growth.
            </p>
            <div 
              className="banner-two__btn-box" 
              data-aos="fade-up" 
              data-aos-duration="1500"
              data-aos-delay="1000"
            >
              <div className="banner-two__trustpilot-box">
                <ul className="list-unstyled banner-two__trustpilot-img-list">
                  <li>
                    <div className="banner-two__trustpilot-img">
                      <img src="/assets/images/resources/brand-two-trustpilot-img-1.jpg" alt="" />
                    </div>
                  </li>
                  <li>
                    <div className="banner-two__trustpilot-img">
                      <img src="/assets/images/resources/brand-two-trustpilot-img-2.jpg" alt="" />
                    </div>
                  </li>
                </ul>
                <div className="banner-two__trustpilot-content-box">
                  <div className="banner-two__trustpilot-logo">
                    <img src="/assets/images/resources/banner-two-trustpilot-logo.png" alt="" />
                  </div>
                  <div className="banner-two__trustpilot-rating-review">
                    <p className="banner-two__trustpilot-rating">5.0 Excellent</p>
                    <p className="banner-two__trustpilot-review">
                      Reviews <span className="odometer" ref={odometerRef}>4170</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="banner-two__btn">
                <a href="#about" className="thm-btn">
                  Discover More
                  <span className="fas fa-arrow-right"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="banner-two__img-box wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
            <div className="banner-two__img">
              <img src="/assets/images/resources/banner-two-img-1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;


