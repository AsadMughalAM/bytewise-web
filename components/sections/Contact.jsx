"use client";
import Link from "next/link";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="contact-three" id="contact">
      <div className="contact-three__bg-color">
        <div
          className="contact-three__bg-shape"
          style={{
            backgroundImage:
              "url(/assets/images/shapes/contact-three-bg-shape.png)",
          }}
        ></div>
      </div>
      <ul className="contact-three__sliding-text-list list-unstyled marquee_mode-3">
        <li>
          <h2
            data-hover="Branding"
            className="contact-three__sliding-text-title"
          >
            GET IN TOUCH *
          </h2>
        </li>
        <li>
          <h2
            data-hover="Branding"
            className="contact-three__sliding-text-title"
          >
            GET IN TOUCH *
          </h2>
        </li>
        <li>
          <h2
            data-hover="Branding"
            className="contact-three__sliding-text-title"
          >
            GET IN TOUCH *
          </h2>
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
                  Conversation <span>– Reach</span>
                  <br />
                  <span>Out Anytime</span>
                </h2>
              </div>
              <p className="contact-three__text">
                We're here to listen! Whether you have questions, feedback,
                <br />
                or just want to say hello, feel free to reach out.
              </p>
              <ul className="contact-three__contact-list list-unstyled">
                <li>
                  <div className="icon">
                    <span className="icon-email"></span>
                  </div>
                  <div className="content">
                    <span>Email Us</span>
                    <p>
                      <Link href="mailto:info@domain.com">info@domain.com</Link>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-call"></span>
                  </div>
                  <div className="content">
                    <span>Contact US</span>
                    <p>
                      <Link href="tel:9900567780">+99 (00) 567 780</Link>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-pin"></span>
                  </div>
                  <div className="content">
                    <span>Our Address</span>
                    <p>
                      1629 N. Dixie Avenue,
                      <br /> Kentucky, 42701
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="contact-three__right">
              <div className="contact-three__img-1">
                <img
                  src="/assets/images/resources/contact-three-img-1.png"
                  alt=""
                />
              </div>
              <div className="contact-one__right">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
