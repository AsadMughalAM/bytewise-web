import React from "react";
import AboutOne from "@/components/sections/AboutOne";
import ServicesOne from "@/components/sections/ServicesOne";
import SlidingText from "@/components/sections/SlidingText";
import Team from "@/components/sections/Team";
import CounterTwo from "@/components/sections/CounterTwo";
import TestimonialTwo from "@/components/sections/TestimonialTwo";
import Blog from "@/components/sections/Blog";
import Link from "next/link"; // Added import

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
                  <Link href="/">Home</Link>
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
      <Blog />
    </>
  );
};

export default About;
