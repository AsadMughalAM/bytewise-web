"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import CountUp from "react-countup";
import { teamMembers } from "@/data/teamData";

const About = ({ variant = "three" }) => {
  const founder =
    teamMembers.find((m) => m.position.includes("CEO")) || teamMembers[0];
  const experienceOdometerRef = useRef(null);
  const clientOdometerRef = useRef(null);

  useEffect(() => {
    // Initialize Odometers for variant "three"
    if (variant === "three" && window.Odometer) {
      if (experienceOdometerRef.current) {
        const odometer1 = new window.Odometer({
          el: experienceOdometerRef.current,
          value: 0,
        });
        odometer1.update(25);
      }

      if (clientOdometerRef.current) {
        const odometer2 = new window.Odometer({
          el: clientOdometerRef.current,
          value: 0,
        });
        odometer2.update(120);
      }
    }
  }, [variant]);

  if (variant === "one") {
    // Logic/JSX from AboutOne
    return (
      <section className="about-one">
        <div className="about-one__shape-2 float-bob">
          <img src="/assets/images/shapes/about-one-shape-2.png" alt="" />
        </div>
        <div className="about-one__shape-3 float-bob-y">
          <img src="/assets/images/shapes/about-one-shape-3.png" alt="" />
        </div>

        <div className="container">
          <div className="row">
            {/* LEFT */}
            <div className="col-xl-6">
              <div className="about-one__left">
                <div className="section-title text-left sec-title-animation animation-style2">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">About Us</span>
                  </div>
                  <h2 className="section-title__title title-animation">
                    Boost Business with Our <br />
                    Innovative <span>IT Solutions</span>
                  </h2>
                </div>

                <p className="about-one__text">
                  Innovating and empowering businesses with tailored solutions
                  for success
                  <br /> and growth. Empowering businesses to create meaningful
                  innovation.
                </p>

                <ul className="about-one__points list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-award"></span>
                    </div>
                    <div className="content">
                      <h4>Award-Winning Company.</h4>
                      <p>
                        Partner with us to unlock new possibilities, drive
                        progress, and shape
                        <br /> a future filled with success
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <span className="icon-certified"></span>
                    </div>
                    <div className="content">
                      <h4>Certified Company</h4>
                      <p>
                        Partner with us to unlock new possibilities, drive
                        progress, and shape
                        <br /> a future filled with success
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="about-one__btn-and-client-info">
                  <div className="about-one__btn-box">
                    <Link href="/about" className="thm-btn">
                      Learn More <span className="fas fa-arrow-right"></span>
                    </Link>
                  </div>

                  <div className="about-one__client-info-inner">
                    <div className="about-one__client-info">
                      <div className="about-one__client-img-inner">
                        <div className="about-one__client-img">
                          <img
                            src="/assets/images/resources/about-one-client-img-1.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="about-one__client-details">
                        <h5>{founder.name}</h5>
                        <p>{founder.position}</p>
                      </div>
                    </div>
                    <div className="about-one__client-sign">
                      <img
                        src="/assets/images/resources/about-one-client-sign.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-xl-6">
              <div className="about-one__right">
                <div className="about-one__img-box">
                  <div className="about-one__shape-1 float-bob-x">
                    <img
                      src="/assets/images/shapes/about-one-shape-1.png"
                      alt=""
                    />
                  </div>

                  <div className="about-one__img">
                    <img
                      src="/assets/images/resources/about-one-img-1.jpg"
                      alt=""
                    />
                  </div>

                  <div className="about-one__img-2">
                    <img
                      src="/assets/images/resources/about-one-img-2.jpg"
                      alt=""
                    />
                  </div>

                  <div className="about-one__video-link">
                    <Link
                      href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                      className="video-popup"
                    >
                      <div className="about-one__video-icon">
                        <span className="fa fa-play"></span>
                        <i className="ripple"></i>
                      </div>
                    </Link>
                  </div>

                  {/* CLIENT COUNTER */}
                  <div className="about-one__client-box">
                    <ul className="about-one__client-box-img-list list-unstyled">
                      <li>
                        <div className="about-one__client-box-img">
                          <img
                            src="/assets/images/resources/about-one-client-img-1-1.jpg"
                            alt=""
                          />
                        </div>
                      </li>
                      <li>
                        <div className="about-one__client-box-img">
                          <img
                            src="/assets/images/resources/about-one-client-img-1-2.jpg"
                            alt=""
                          />
                        </div>
                      </li>
                      <li>
                        <div className="about-one__client-box-img">
                          <img
                            src="/assets/images/resources/about-one-client-img-1-3.jpg"
                            alt=""
                          />
                        </div>
                      </li>
                      <li>
                        <Link href="/">
                          <span className="fas fa-plus"></span>
                        </Link>
                      </li>
                    </ul>

                    <p className="about-one__client-text">
                      <span className="odometer">
                        <CountUp end={120} duration={2.5} />
                      </span>
                      <span className="about-one__client-text-letter">K</span>{" "}
                      Satisfied Client
                    </p>
                  </div>

                  {/* EXPERIENCE COUNTER */}
                  <div className="about-one__experience-box">
                    <div className="about-one__experience-count-box">
                      <h3 className="odometer">
                        <CountUp end={25} duration={2} />
                      </h3>
                      <span>+</span>
                    </div>
                    <p className="about-one__experience-text">
                      Years of Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="about-three" id="about">
      <div
        className="about-three__bg-shape"
        style={{
          backgroundImage:
            "url(/assets/images/shapes/about-three-bg-shape.png)",
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div
              className="about-three__left wow slideInLeft"
              data-wow-delay="100ms"
              data-wow-duration="2500ms"
            >
              <div className="about-three__img-box">
                <div className="about-three__img">
                  <img
                    src="/assets/images/resources/about-three-img-1.jpg"
                    alt=""
                  />
                </div>
                <div className="about-three__img-2">
                  <img
                    src="/assets/images/resources/about-three-img-2.jpg"
                    alt=""
                  />
                </div>
                <div className="about-three__experience">
                  <div className="about-three__experience-count-box">
                    <h3 className="odometer" ref={experienceOdometerRef}>
                      00
                    </h3>
                    <span>+</span>
                  </div>
                  <p className="about-three__experience-count-text">
                    Years of Experience
                  </p>
                </div>
              </div>
              <div className="about-three__client-box">
                <ul className="about-three__client-img-list list-unstyled">
                  <li>
                    <div className="about-three__client-img">
                      <img
                        src="/assets/images/resources/about-three-client-img-1-1.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                  <li>
                    <div className="about-three__client-img">
                      <img
                        src="/assets/images/resources/about-three-client-img-1-2.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                  <li>
                    <div className="about-three__client-img">
                      <img
                        src="/assets/images/resources/about-three-client-img-1-3.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                  <li>
                    <Link href="/">
                      <span className="fas fa-plus"></span>
                    </Link>
                  </li>
                </ul>
                <p className="about-three__client-text">
                  <span
                    className="odometer count-text-1"
                    ref={clientOdometerRef}
                  >
                    00
                  </span>
                  <span className="count-text">K</span> Satisfied Client
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-three__right">
              <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">About Us</span>
                </div>
                <h2 className="section-title__title title-animation fs-4">
                  Your Business Growth with Our Cutting-Edge <br />{" "}
                  <span>IT Solutions</span>
                </h2>
              </div>
              <p className="about-three__text">
                Transform your business with our innovative IT solutions,
                tailored to address your unique challenges and drive growth in
                today's digital landscape.
              </p>
              <div className="about-three__points-box">
                <ul className="about-three__points-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-checked"></span>
                    </div>
                    <p>
                      Innovative IT Solutions Expert
                      <br /> Support & Consulting
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-checked"></span>
                    </div>
                    <p>
                      Cloud Solutions for Modern
                      <br /> Enterprises
                    </p>
                  </li>
                </ul>
                <ul className="about-three__points-list about-three__points-list-2 list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-checked"></span>
                    </div>
                    <p>
                      Seamless Digital
                      <br /> Transformation AI-Driven
                    </p>
                  </li>
                  <li>
                    <div className="about-three__points-list-img">
                      <img
                        src="/assets/images/resources/about-three-points-list-img.jpg"
                        alt=""
                      />
                    </div>
                    <div className="about-three__points-list-content">
                      <h5>{founder.name}</h5>
                      <p>{founder.position}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <ul className="about-three__points list-unstyled">
                <li>
                  <div className="icon">
                    <span className="icon-check"></span>
                  </div>
                  <p>Professional User Experince & Interface researching</p>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-check"></span>
                  </div>
                  <p>
                    We provide 24/7 monitoring and support to ensure your
                    systems.
                  </p>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-check"></span>
                  </div>
                  <p>
                    Dramatically re-engineer value added IT systems via mission
                  </p>
                </li>
              </ul>
              <div className="about-three__btn-box-and-call-box">
                <div className="about-three__btn-box">
                  <Link href="/about" className="about-three__btn thm-btn">
                    Discover More
                    <span className="fas fa-arrow-right"></span>
                  </Link>
                </div>
                <div className="about-three__call-box">
                  <div className="about-three__call-box-icon">
                    <span className="icon-call"></span>
                  </div>
                  <div className="about-three__call-box-content">
                    <p>Call to Anytime</p>
                    <h4>
                      <Link href="tel:15502505260">+1 (550) 250 5260</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
