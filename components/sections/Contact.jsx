const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted');
  };

  return (
    <section className="contact-three" id="contact">
      <div className="contact-three__bg-color">
        <div 
          className="contact-three__bg-shape"
          style={{ backgroundImage: 'url(/assets/images/shapes/contact-three-bg-shape.png)' }}
        ></div>
      </div>
      <ul className="contact-three__sliding-text-list list-unstyled marquee_mode-3">
        <li>
          <h2 data-hover="Branding" className="contact-three__sliding-text-title">GET IN TOUCH *</h2>
        </li>
        <li>
          <h2 data-hover="Branding" className="contact-three__sliding-text-title">GET IN TOUCH *</h2>
        </li>
        <li>
          <h2 data-hover="Branding" className="contact-three__sliding-text-title">GET IN TOUCH *</h2>
        </li>
      </ul>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="contact-three__left">
              <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">Get In Touch</span>
                </div>
                <h2 className="section-title__title title-animation">
                  Conversation <span>– Reach</span><br /><span>Out Anytime</span>
                </h2>
              </div>
              <p className="contact-three__text">
                We're here to listen! Whether you have questions, feedback,<br />
                or just want to say hello, feel free to reach out.
              </p>
              <ul className="contact-three__contact-list list-unstyled">
                <li>
                  <div className="icon">
                    <span className="icon-email"></span>
                  </div>
                  <div className="content">
                    <span>Email Us</span>
                    <p><a href="mailto:info@domain.com">info@domain.com</a></p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-call"></span>
                  </div>
                  <div className="content">
                    <span>Contact US</span>
                    <p><a href="tel:9900567780">+99 (00) 567 780</a></p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-pin"></span>
                  </div>
                  <div className="content">
                    <span>Our Address</span>
                    <p>1629 N. Dixie Avenue,<br /> Kentucky, 42701</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="contact-three__right">
              <div className="contact-three__img-1">
                <img src="/assets/images/resources/contact-three-img-1.png" alt="" />
              </div>
              <div className="contact-one__right">
                <form 
                  className="contact-form-validated contact-one__form" 
                  action="https://dreamlayout.mnsithub.com/html/itzone/main-html/assets/inc/sendemail.php"
                  method="post"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <h4 className="contact-one__input-title">Full Name</h4>
                      <div className="contact-one__input-box">
                        <div className="contact-one__input-icon">
                          <span className="icon-user"></span>
                        </div>
                        <input type="text" name="name" placeholder="Thomas Alison" required="" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <h4 className="contact-one__input-title">Email Address</h4>
                      <div className="contact-one__input-box">
                        <div className="contact-one__input-icon">
                          <span className="icon-mail"></span>
                        </div>
                        <input type="email" name="email" placeholder="thomas@domain.com" required="" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <h4 className="contact-one__input-title">Phone Number</h4>
                      <div className="contact-one__input-box">
                        <div className="contact-one__input-icon">
                          <span className="icon-phone-call"></span>
                        </div>
                        <input type="text" name="phone" placeholder="+12 (00) 123 4567 890" required="" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <h4 className="contact-one__input-title">Subject</h4>
                      <div className="contact-one__input-box">
                        <div className="contact-one__input-icon">
                          <span className="icon-edit"></span>
                        </div>
                        <input type="text" name="subject" placeholder="Subject" required="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <h4 className="contact-one__input-title">Inquiry about </h4>
                    <div className="contact-one__input-box text-message-box">
                      <div className="contact-one__input-icon">
                        <span className="icon-edit"></span>
                      </div>
                      <textarea name="message" placeholder="Write your message" required=""></textarea>
                    </div>
                    <div className="contact-one__btn-box">
                      <button type="submit" className="thm-btn">
                        Submit Now
                        <span className="fas fa-arrow-right"></span>
                      </button>
                    </div>
                  </div>
                  <div className="result"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


