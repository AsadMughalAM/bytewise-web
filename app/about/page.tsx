"use client";
import React from "react";
import AboutSection from "@/components/sections/About";
import Services from "@/components/sections/Services";
import SlidingText from "@/components/sections/SlidingText";
import Team from "@/components/sections/Team";
import Counter from "@/components/sections/Counter";
import Testimonial from "@/components/sections/Testimonial";
import Blog from "@/components/sections/Blog";

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

      <AboutSection />
      <Services />
      <SlidingText />
      <Team />
      <Counter />
      <Testimonial />
      <Blog />
    </>
  );
};

export default About;
