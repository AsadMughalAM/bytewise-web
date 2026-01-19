"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="site-footer-three pt-5">
      <div
        className="site-footer-three__shape-bg"
        style={{
          backgroundImage:
            "url(/assets/images/shapes/site-footer-three-shape-bg.png)",
        }}
      ></div>
      <div className="container">
        <div className="site-footer-three__middle">
          <div className="row">
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="footer-widget-three__column footer-widget-three__about">
                <div className="footer-widget-three__logo">
                  <Link href="/">
                    <img src="/assets/images/resources/logo-2.png" alt="" />
                  </Link>
                </div>
                <p className="footer-widget-three__about-text">
                  Secure other greater pleasures, or else he endures pains to
                  avoid worse pains selection
                </p>
                <div className="site-footer-three__social">
                  <Link href="/">
                    <i className="icon-facebook-app-symbol"></i>
                  </Link>
                  <Link href="/">
                    <i className="icon-twitter-1"></i>
                  </Link>
                  <Link href="/">
                    <i className="icon-pinterest"></i>
                  </Link>
                  <Link href="/">
                    <i className="icon-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="footer-widget-three__column footer-widget-three__usefull-link">
                <div className="footer-widget-three__title-box">
                  <h3 className="footer-widget-three__title">Quick Links</h3>
                </div>
                <div className="footer-widget-three__link-box">
                  <ul className="footer-widget-three__link list-unstyled">
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/team">Meet Our Team</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Our Projects</Link>
                    </li>
                    <li>
                      <Link href="/faq">Help & FAQs</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="footer-widget-three__column footer-widget-three__services">
                <div className="footer-widget-three__title-box">
                  <h3 className="footer-widget-three__title">Our Services</h3>
                </div>
                <ul className="footer-widget-three__link list-unstyled">
                  <li>
                    <Link href="/service">Web Development</Link>
                  </li>
                  <li>
                    <Link href="/service">Cloud services</Link>
                  </li>
                  <li>
                    <Link href="/service">Product Management</Link>
                  </li>
                  <li>
                    <Link href="/service">UI/UX Design</Link>
                  </li>
                  <li>
                    <Link href="/service">Business Development</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="footer-widget-three__contact-box">
                <div className="footer-widget-three__title-box">
                  <h3 className="footer-widget-three__title">Official info</h3>
                </div>
                <ul className="footer-widget-three__contact list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-call"></span>
                    </div>
                    <div className="content">
                      <p>
                        <Link href="tel:885747546027">(88) 574 7546 027</Link>
                      </p>
                      <p>
                        <Link href="tel:885747546027">(88) 574 7546 027</Link>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-email"></span>
                    </div>
                    <div className="content">
                      <p>
                        <Link href="mailto:example@gmail.com">
                          example@gmail.com
                        </Link>
                      </p>
                      <p>
                        <Link href="mailto:example@gmail.com">
                          example@gmail.com
                        </Link>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-pin"></span>
                    </div>
                    <div className="content">
                      <p>4517 Washington Ave. Manchester, 95</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer-three__bottom">
        <div className="container">
          <div className="site-footer-three__bottom-inner">
            <p className="site-footer-three__bottom-text">
              © Copywright 2025 by{" "}
              <Link href="https://themeforest.net/user/dreamlayout">
                Itzone.com
              </Link>{" "}
              All Rights Reserved.
            </p>
            <ul className="list-unstyled site-footer-three__bottom-menu">
              <li>
                <Link href="/contact">Support</Link>
              </li>
              <li>
                <Link href="/about">Terms and Condition</Link>
              </li>
              <li>
                <Link href="/about">Privacy and Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
