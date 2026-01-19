"use client";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
const MobileNav = () => {
  useEffect(() => {
    try {
      const mobileContainer = document.querySelector(".mobile-nav__container");
      const mainMenu = document.querySelector(".main-menu__list");
      if (
        mobileContainer &&
        mainMenu &&
        !mobileContainer.querySelector(".main-menu__list")
      ) {
        mobileContainer.innerHTML = mainMenu.outerHTML;
      }
    } catch (e) {
      // ignore in SSR or if DOM not available
    }
  }, []);

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

          <div className="mobile-nav__container"></div>

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
