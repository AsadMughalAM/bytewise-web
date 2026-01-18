import React from "react";
import AboutOne from "@/components/sections/AboutOne";
import ServicesOne from "@/components/sections/ServicesOne";
import SlidingText from "@/components/sections/SlidingText";
import Team from "@/components/sections/Team";
import CounterTwo from "@/components/sections/CounterTwo";
import TestimonialTwo from "@/components/sections/TestimonialTwo";
import BlogOne from "@/components/sections/BlogOne";

const About = () => {
  return (
    <>
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/page-header-bg.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h3>About Us</h3>
            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <span className="icon-arrow-angle-pointing-to-right"></span>
                </li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <AboutOne />
      <ServicesOne />
      <SlidingText />
      <Team />
      <CounterTwo />
      <TestimonialTwo />
      <BlogOne />
    </>
  );
};

export default About;
