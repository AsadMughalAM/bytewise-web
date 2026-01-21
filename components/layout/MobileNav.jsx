"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useMenuData } from "@/hooks/useMenuData";

const MobileNav = () => {
  const menuItems = useMenuData();
  const [expandedDropdowns, setExpandedDropdowns] = useState({});

  const toggleDropdown = (index) => {
    setExpandedDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle boolean value
    }));
  };

  return (
    <>
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <Link href="/" aria-label="logo image">
              <Image
                src="/assets/images/resources/logo-2.png"
                width={150}
                height={150}
                alt="logo-2"
              />
            </Link>
          </div>

          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`${item.dropdown ? "dropdown" : ""} ${
                    expandedDropdowns[index] ? "expanded" : ""
                  }`}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <Link href={item.href}>
                      {item.title}
                      {/* Note: In original script, button was appended to 'a' tag. 
                          Here we separate or wrap content if needed, but styling might expect button inside.
                          Let's try putting button next to text or check visual.
                          Actually, original script appended button to the anchor tag.
                      */}
                    </Link>
                    {item.dropdown && (
                      <button
                        aria-label="dropdown toggler"
                        className={expandedDropdowns[index] ? "expanded" : ""}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleDropdown(index);
                        }}
                      >
                        <i className="fa fa-angle-down"></i>
                      </button>
                    )}
                  </div>

                  {item.dropdown && (
                    <ul
                      style={{
                        display: expandedDropdowns[index] ? "block" : "none",
                      }}
                    >
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

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <Link href="mailto:needhelp@Itzone.com">needhelp@Itzone.com</Link>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <Link href="tel:666-888-0000">666 888 0000</Link>
            </li>
          </ul>

          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link href="/" className="fab fa-twitter"></Link>
              <Link href="/" className="fab fa-facebook-square"></Link>
              <Link href="/" className="fab fa-pinterest-p"></Link>
              <Link href="/" className="fab fa-instagram"></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
