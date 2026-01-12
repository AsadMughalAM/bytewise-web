"use client"
import React from 'react'
import ContactSection from '@/components/sections/Contact'


const ContactPage = () => {
  return (
    <>
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)' }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h3>Contact</h3>
            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li><a href="/">Home</a></li>
                <li><span className="icon-arrow-angle-pointing-to-right"></span></li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
              <div className="contact-info__single">
                <div className="contact-info__icon">
                  <span className="icon-call"></span>
                </div>
                <p>Contact Us</p>
                <h3><a href="tel:558270575405">+55 827 057 5405</a></h3>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
              <div className="contact-info__single">
                <div className="contact-info__icon">
                  <span className="icon-email"></span>
                </div>
                <p>Email Us</p>
                <h3><a href="mailto:example@gamil.com">example@gamil.com</a></h3>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
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

      <ContactSection />

      
    </>
  )
}

export default ContactPage
