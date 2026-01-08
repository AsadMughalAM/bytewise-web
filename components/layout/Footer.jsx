const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter form submitted');
  };

  return (
    <footer className="site-footer-three">
      <div 
        className="site-footer-three__shape-bg"
        style={{ backgroundImage: 'url(/assets/images/shapes/site-footer-three-shape-bg.png)' }}
      ></div>
      <div className="container">
        <div className="site-footer-three__top">
          <div className="row">
            <div className="col-xl-12">
              <div className="footer-widget-three__column footer-widget-three__newsletter">
                <h3 className="footer-widget-three__newsletter-title">
                  Subscribe To Our Newsletter To<br />Get Latest Update
                </h3>
                <form 
                  className="contact-form-validated footer-widget-three__newsletter-form"
                  action="https://dreamlayout.mnsithub.com/html/itzone/main-html/assets/inc/sendemail.php" 
                  method="POST"
                  onSubmit={handleNewsletterSubmit}
                >
                  <div className="footer-widget-three__newsletter-form-input-box">
                    <input type="email" placeholder="Enter email" name="email" required />
                  </div>
                  <button type="submit" className="thm-btn">
                    Subscribe
                    <span className="fas fa-arrow-right"></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer-three__middle">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
              <div className="footer-widget-three__column footer-widget-three__about">
                <div className="footer-widget-three__logo">
                  <a href="/">
                    <img src="/assets/images/resources/logo-2.png" alt="" />
                  </a>
                </div>
                <p className="footer-widget-three__about-text">
                  Secure other greater pleasures, or else he endures pains to avoid worse pains selection
                </p>
                <div className="site-footer-three__social">
                  <a href="#"><i className="icon-facebook-app-symbol"></i></a>
                  <a href="#"><i className="icon-twitter-1"></i></a>
                  <a href="#"><i className="icon-pinterest"></i></a>
                  <a href="#"><i className="icon-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
              <div className="footer-widget-three__column footer-widget-three__usefull-link">
                <div className="footer-widget-three__title-box">
                  <h3 className="footer-widget-three__title">Quick Links</h3>
                </div>
                <div className="footer-widget-three__link-box">
                  <ul className="footer-widget-three__link list-unstyled">
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#team">Meet Our Team</a></li>
                    <li><a href="#project">Our Projects</a></li>
                    <li><a href="#faq">Help & FAQs</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
              <div className="footer-widget-three__column footer-widget-three__services">
                <div className="footer-widget-three__title-box">
                  <h3 className="footer-widget-three__title">Our Services</h3>
                </div>
                <ul className="footer-widget-three__link list-unstyled">
                  <li><a href="#services">Web Development</a></li>
                  <li><a href="#services">Cloud services</a></li>
                  <li><a href="#services">Product Management</a></li>
                  <li><a href="#services">UI/UX Design</a></li>
                  <li><a href="#services">Business Development</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
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
                      <p><a href="tel:885747546027">(88) 574 7546 027</a></p>
                      <p><a href="tel:885747546027">(88) 574 7546 027</a></p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-email"></span>
                    </div>
                    <div className="content">
                      <p><a href="mailto:example@gmail.com">example@gmail.com</a></p>
                      <p><a href="mailto:example@gmail.com">example@gmail.com</a></p>
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
              © Copywright 2025 by <a href="https://themeforest.net/user/dreamlayout">Itzone.com</a> All Rights Reserved.
            </p>
            <ul className="list-unstyled site-footer-three__bottom-menu">
              <li><a href="#contact">Support</a></li>
              <li><a href="#about">Terms and Condition</a></li>
              <li><a href="#about">Privacy and Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


