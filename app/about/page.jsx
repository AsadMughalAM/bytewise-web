import React from "react";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import SlidingText from "@/components/sections/SlidingText";
import Team from "@/components/sections/Team";
import Counter from "@/components/sections/Counter";
import Testimonial from "@/components/sections/Testimonial";
// import Blog from "@/components/sections/Blog";
import Link from "next/link";

import PageHeader from "@/components/layout/PageHeader";

const AboutPage = () => {
  return (
    <>
      <PageHeader
        title="About Us"
        breadcrumb={[{ label: "Home", link: "/" }, { label: "About Us" }]}
      />
      <About variant="one" />
      <Services variant="one" />
      <SlidingText />
      <Team />
      <Counter variant="two" />
      <Testimonial variant="two" />
      {/* <Blog /> */}
    </>
  );
};

export default AboutPage;
