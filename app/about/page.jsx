import React from "react";
import AboutOne from "@/components/sections/AboutOne";
import ServicesOne from "@/components/sections/ServicesOne";
import SlidingText from "@/components/sections/SlidingText";
import Team from "@/components/sections/Team";
import CounterTwo from "@/components/sections/CounterTwo";
import TestimonialTwo from "@/components/sections/TestimonialTwo";
import Blog from "@/components/sections/Blog";
import Link from "next/link";

import PageHeader from "@/components/layout/PageHeader";

const About = () => {
  return (
    <>
      <PageHeader
        title="About Us"
        breadcrumb={[{ label: "Home", link: "/" }, { label: "About Us" }]}
      />
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
