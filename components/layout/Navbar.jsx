"use client";
import { useState } from "react";
import Link from "next/link";
import { servicesData } from "@/components/sections/ServicePage_Services";

export const menuItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Portfolio", href: "/portfolio" },
  {
    title: "Services",
    href: "/service",
    dropdown: [
      { title: "Our Services", href: "/service" },
      ...servicesData.map((service) => ({
        title: service.title,
        href: `/service/${service.slug}`,
      })),
    ],
  },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <>
      <header className="main-header-three">
        {/* Top bar */}
        <div className="main-menu-three__top">
          <div className="container">
            <div className="main-menu-three__top-inner">
              <div className="main-menu-three__top-social">
                <Link href="#">
                  <span className="icon-facebook-app-symbol"></span>
                </Link>
                <Link href="#">
                  <span className="icon-twitter-1"></span>
                </Link>
                <Link href="#">
                  <span className="icon-linkedin"></span>
                </Link>
                <Link href="#">
                  <span className="icon-pinterest"></span>
                </Link>
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
                      <Link href="mailto:example@domain.com">
                        example@domain.com
                      </Link>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="icon-phone-call"></i>
                  </div>
                  <div className="text">
                    <p>
                      <Link href="tel:1212345678900">+12 (123) 456 78900</Link>
                    </p>
                  </div>
                </li>
              </ul>

              <ul className="list-unstyled main-menu-three__top-menu">
                <li>
                  <Link href="/about">Help</Link>
                </li>
                <li>
                  <Link href="/contact">Support</Link>
                </li>
                <li>
                  <Link href="/faq">Faqs</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="main-menu main-menu-three">
          <div className="main-menu-three__wrapper">
            <div className="container">
              <div className="main-menu-three__wrapper-inner">
                <div className="main-menu-three__left">
                  <div className="main-menu-three__logo">
                    <Link href="/">
                      <img
                        src="/assets/images/resources/logo-1.png"
                        alt="Logo"
                      />
                    </Link>
                  </div>
                </div>

                <div className="main-menu-three__main-menu-box">
                  <a href="#" className="mobile-nav__toggler">
                    <i className="fa fa-bars"></i>
                  </a>
                  <ul className="main-menu__list">
                    {menuItems.map((item, index) => (
                      <li
                        key={index}
                        className={`${item.dropdown ? "dropdown" : ""} ${
                          activeDropdown === item.title ? "active" : ""
                        }`}
                        onMouseEnter={() =>
                          item.dropdown && setActiveDropdown(item.title)
                        }
                        onMouseLeave={() =>
                          item.dropdown && setActiveDropdown(null)
                        }
                      >
                        <Link href={item.href}>{item.title}</Link>
                        {item.dropdown && (
                          <ul className="shadow-box">
                            {item.dropdown.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link href={subItem.href}>{subItem.title}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="main-menu-three__right">
                  <div className="main-menu-three__btn-box">
                    <Link href="/contact" className="thm-btn">
                      Get in Touch <span className="icon-right-arrow"></span>
                    </Link>
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
