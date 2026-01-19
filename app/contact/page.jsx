"use client";
import React from "react";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Contact from "@/components/sections/Contact";
const ContactPage = () => {
  return (
    <>
      <PageHeader
        title="Contact"
        breadcrumb={[{ label: "Home", link: "/" }, { label: "Contact" }]}
      />

      <section className="contact-info">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="contact-info__single">
                <div className="contact-info__icon">
                  <span className="icon-call"></span>
                </div>
                <p>Contact Us</p>
                <h3>
                  <Link href="tel:558270575405">+55 827 057 5405</Link>
                </h3>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="contact-info__single">
                <div className="contact-info__icon">
                  <span className="icon-email"></span>
                </div>
                <p>Email Us</p>
                <h3>
                  <Link href="mailto:example@gamil.com">example@gamil.com</Link>
                </h3>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="contact-info__single">
                <div className="contact-info__icon">
                  <span className="icon-pin"></span>
                </div>
                <p>Our Office Location</p>
                <h3>12 Green Road 05 New Yark</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default ContactPage;
