"use client";
import React from "react";
import Contact from "@/components/sections/Contact";
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Contact form submitted");
};
const Service = () => {
  return (
    <>
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/page-header-bg.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h3>Services</h3>
            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <span className="icon-arrow-angle-pointing-to-right"></span>
                </li>
                <li>Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="services-page">
        <div className="container">
          <div className="row">
            {/*Services Two Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="services-two__single">
                <div className="services-two__img-box">
                  <div className="services-two__img">
                    <img src="assets/images/services/services-2-1.jpg" alt="" />
                  </div>
                  <div className="services-two__icon">
                    <span className="icon-ux-design"></span>
                  </div>
                </div>
                <div className="services-two__content">
                  <h3 className="services-two__title">
                    <a href="ui-ux-design.html">UI/UX Design</a>
                  </h3>
                  <p className="services-two__text">
                    Comprehensive IT management, including network monitoring,
                    data backup,
                  </p>
                  <div className="services-two__plus">
                    <a href="ui-ux-design.html">
                      <span className="fas fa-plus"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="services-two__single">
                <div className="services-two__img-box">
                  <div className="services-two__img">
                    <img src="assets/images/services/services-2-2.jpg" alt="" />
                  </div>
                  <div className="services-two__icon">
                    <span className="icon-software-development"></span>
                  </div>
                </div>
                <div className="services-two__content">
                  <h3 className="services-two__title">
                    <a href="software-development.html">APP Development</a>
                  </h3>
                  <p className="services-two__text">
                    Comprehensive IT management, including network monitoring,
                    data backup,
                  </p>
                  <div className="services-two__plus">
                    <a href="software-development.html">
                      <span className="fas fa-plus"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight"
              data-wow-delay="500ms"
            >
              <div className="services-two__single">
                <div className="services-two__img-box">
                  <div className="services-two__img">
                    <img src="assets/images/services/services-2-3.jpg" alt="" />
                  </div>
                  <div className="services-two__icon">
                    <span className="icon-product-design"></span>
                  </div>
                </div>
                <div className="services-two__content">
                  <h3 className="services-two__title">
                    <a href="product-design.html">Product Design</a>
                  </h3>
                  <p className="services-two__text">
                    Comprehensive IT management, including network monitoring,
                    data backup,
                  </p>
                  <div className="services-two__plus">
                    <a href="product-design.html">
                      <span className="fas fa-plus"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="700ms"
            >
              <div className="services-two__single">
                <div className="services-two__img-box">
                  <div className="services-two__img">
                    <img src="assets/images/services/services-2-4.jpg" alt="" />
                  </div>
                  <div className="services-two__icon">
                    <span className="icon-code"></span>
                  </div>
                </div>
                <div className="services-two__content">
                  <h3 className="services-two__title">
                    <a href="web-development.html">Website Design</a>
                  </h3>
                  <p className="services-two__text">
                    Comprehensive IT management, including network monitoring,
                    data backup,
                  </p>
                  <div className="services-two__plus">
                    <a href="web-development.html">
                      <span className="fas fa-plus"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="900ms"
            >
              <div className="services-two__single">
                <div className="services-two__img-box">
                  <div className="services-two__img">
                    <img src="assets/images/services/services-2-5.jpg" alt="" />
                  </div>
                  <div className="services-two__icon">
                    <span className="icon-promotion-1"></span>
                  </div>
                </div>
                <div className="services-two__content">
                  <h3 className="services-two__title">
                    <a href="business-analysis.html">Business Analysis</a>
                  </h3>
                  <p className="services-two__text">
                    Comprehensive IT management, including network monitoring,
                    data backup,
                  </p>
                  <div className="services-two__plus">
                    <a href="business-analysis.html">
                      <span className="fas fa-plus"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*Services Two Single End*/}
            {/*Services Two Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight"
              data-wow-delay="1100ms"
            >
              <div className="services-two__single">
                <div className="services-two__img-box">
                  <div className="services-two__img">
                    <img src="assets/images/services/services-2-6.jpg" alt="" />
                  </div>
                  <div className="services-two__icon">
                    <span className="icon-social-media-marketing"></span>
                  </div>
                </div>
                <div className="services-two__content">
                  <h3 className="services-two__title">
                    <a href="web-development.html">Web Devolopment</a>
                  </h3>
                  <p className="services-two__text">
                    Comprehensive IT management, including network monitoring,
                    data backup,
                  </p>
                  <div className="services-two__plus">
                    <a href="web-development.html">
                      <span className="fas fa-plus"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <section className="process-two">
            <div className="process-two__bg-shape"
                style={{backgroundImage: "url(assets/images/shapes/process-two-bg-shape.png)"}}></div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Working Process</span>
                    </div>
                    <h2 className="section-title__title title-animation">How we <span>works</span>
                    </h2>
                </div>
                <ul className="row list-unstyled">
                    <li className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms"
                        data-wow-duration="1500ms">
                        <div className="process-two__single">
                            <div className="process-two__single-shape-1"></div>
                            <div className="process-two__single-shape-2"></div>
                            <div className="process-two__icon">
                                <span className="icon-self-service"></span>
                            </div>
                            <div className="process-two__count"></div>
                            <h3 className="process-two__title">Choose a Service</h3>
                            <p className="process-two__text">Continua scale empowered metrics with cost effective
                                innovation.</p>
                        </div>
                    </li>
                    <li className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms"
                        data-wow-duration="1500ms">
                        <div className="process-two__single process-two__single-margin">
                            <div className="process-two__single-shape-1"></div>
                            <div className="process-two__single-shape-2"></div>
                            <div className="process-two__icon">
                                <span className="icon-conference"></span>
                            </div>
                            <div className="process-two__count"></div>
                            <h3 className="process-two__title">Request a Meeting</h3>
                            <p className="process-two__text">Continua scale empowered metrics with cost effective
                                innovation.</p>
                        </div>
                    </li>
                    <li className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="500ms"
                        data-wow-duration="1500ms">
                        <div className="process-two__single">
                            <div className="process-two__single-shape-1"></div>
                            <div className="process-two__single-shape-2"></div>
                            <div className="process-two__icon">
                                <span className="icon-execution"></span>
                            </div>
                            <div className="process-two__count"></div>
                            <h3 className="process-two__title">Receive Custom Plan</h3>
                            <p className="process-two__text">Continua scale empowered metrics with cost effective
                                innovation.</p>
                        </div>
                    </li>
                    <li className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="700ms"
                        data-wow-duration="1500ms">
                        <div className="process-two__single process-two__single-margin">
                            <div className="process-two__single-shape-1"></div>
                            <div className="process-two__single-shape-2"></div>
                            <div className="process-two__icon">
                                <span className="icon-results"></span>
                            </div>
                            <div className="process-two__count"></div>
                            <h3 className="process-two__title">Let’s Make it Happen</h3>
                            <p className="process-two__text">Continua scale empowered metrics with cost effective
                                innovation.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </>
  );
};

export default Service;
