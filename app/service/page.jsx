"use client";
import React from "react";
import Contact from "@/components/sections/Contact";
import ServicePage_Services from "@/components/sections/ServicePage_Services";
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
    <ServicePage_Services/>
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
