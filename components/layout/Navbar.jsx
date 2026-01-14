"use client";
import { useState } from "react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <>
      <header className="main-header-three">
        <div className="main-menu-three__top">
          <div className="container">
            <div className="main-menu-three__top-inner">
              <div className="main-menu-three__top-social">
                <a href="#">
                  <span className="icon-facebook-app-symbol"></span>
                </a>
                <a href="#">
                  <span className="icon-twitter-1"></span>
                </a>
                <a href="#">
                  <span className="icon-linkedin"></span>
                </a>
                <a href="#">
                  <span className="icon-pinterest"></span>
                </a>
              </div>
              <ul className="list-unstyled main-menu-three__contact-list">
                <li>
                  <div className="icon">
                    <i className="icon-pin"></i>
                  </div>
                  <div className="text">
                    <p>1629 N. Dixie Avenue, Kentucky, 42701</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="icon-mail"></i>
                  </div>
                  <div className="text">
                    <p>
                      <a href="mailto:example@domain.com">example@domain.com</a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="icon-phone-call"></i>
                  </div>
                  <div className="text">
                    <p>
                      <a href="tel:1212345678900">+12 (123) 456 78900</a>
                    </p>
                  </div>
                </li>
              </ul>
              <ul className="list-unstyled main-menu-three__top-menu">
                <li>
                  <a href="/about">Help</a>
                </li>
                <li>
                  <a href="/contact">Support</a>
                </li>
                <li>
                  <a href="#faq">Faqs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <nav className="main-menu main-menu-three">
          <div className="main-menu-three__wrapper">
            <div className="container">
              <div className="main-menu-three__wrapper-inner">
                <div className="main-menu-three__left">
                  <div className="main-menu-three__logo">
                    <a href="/">
                      <img src="/assets/images/resources/logo-1.png" alt="" />
                    </a>
                  </div>
                </div>

                <div className="main-menu-three__main-menu-box">
                  <a href="#" className="mobile-nav__toggler">
                    <i className="fa fa-bars"></i>
                  </a>
                  <ul className="main-menu__list">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li
                      className={`dropdown ${
                        activeDropdown === "services" ? "active" : ""
                      }`}
                      onMouseEnter={() => setActiveDropdown("services")}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <a href="/service">services</a>
                      <ul className="shadow-box">
                        <li>
                          <a href="/service">Services</a>
                        </li>
                        <li>
                          <a href="/services">UI/UX Design</a>
                        </li>
                        <li>
                          <a href="/services">Web Development</a>
                        </li>
                        <li>
                          <a href="/services">Digital Marketing</a>
                        </li>
                        <li>
                          <a href="/services">Business Analysis</a>
                        </li>
                        <li>
                          <a href="/services">Software Development</a>
                        </li>
                        <li>
                          <a href="/services">Product Design</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="/blog">Blog</a>
                    </li>

                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>

                <div className="main-menu-three__right">
                  <div className="main-menu-three__btn-box">
                    <a href="/contact" className="thm-btn">
                      Get in Touch
                      <span className="icon-right-arrow"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="stricky-header stricked-menu main-menu main-menu-three">
        <div className="sticky-header__content"></div>
      </div>
    </>
  );
};

export default Navbar;
