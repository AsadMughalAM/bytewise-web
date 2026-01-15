import React from "react";

const page = async ({ params }) => {
  const { slug } = await params;
  return (
    <div>
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/page-header-bg.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h3 className="text-capitalize">{slug}</h3>
            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <span className="icon-arrow-angle-pointing-to-right"></span>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <span className="icon-arrow-angle-pointing-to-right"></span>
                </li>
                <li>{slug}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 ">
              <div
                className="service-details__sidebar"
                style={{ position: "sticky", top: "100px", zIndex: 1 }}
              >
                <div className="service-details__services-box">
                  <h3 className="service-details__services-title">
                    Our Services
                  </h3>
                  <ul className="service-details__services-list list-unstyled">
                    <li>
                      <a href="ui-ux-design.html">
                        UI/UX Design<span className="icon-arrow-right"></span>
                      </a>
                    </li>
                    <li>
                      <a href="web-development.html">
                        Web Development
                        <span className="icon-arrow-right"></span>
                      </a>
                    </li>
                    <li>
                      <a href="digital-marketing.html">
                        Digital Marketing
                        <span className="icon-arrow-right"></span>
                      </a>
                    </li>
                    <li>
                      <a href="business-analysis.html">
                        Business Analysis
                        <span className="icon-arrow-right"></span>
                      </a>
                    </li>
                    <li className="active">
                      <a href="software-development.html">
                        Software Development
                        <span className="icon-arrow-right"></span>
                      </a>
                    </li>
                    <li>
                      <a href="product-design.html">
                        Product Design<span className="icon-arrow-right"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__left">
                <div className="service-details__img">
                  <img
                    src="assets/images/services/service-details-img-5.jpg"
                    alt=""
                  />
                </div>
                <h3 className="service-details__title-1">
                  Software Development
                </h3>
                <p className="service-details__text-1">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa
                </p>
                <p className="service-details__text-2">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut laborer et dolore magna aliqua. Out enigma ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute inure dolor in the
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  null pariatur. Excepteur snit occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <ul className="service-details__points-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-check"></span>
                    </div>
                    <p>
                      It is a long established fact that a reader will be distr
                      acted bioiiy the rea dablea{" "}
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-check"></span>
                    </div>
                    <p>
                      Distr acted bioiiy the rea dablea content of a page when
                      looking at its layout
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-check"></span>
                    </div>
                    <p>
                      Content of a page when looking at its layout toile point
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-check"></span>
                    </div>
                    <p>
                      Reader will be distr acted bioiiy the rea dablea content
                      of a page when looking
                    </p>
                  </li>
                </ul>
                <div className="service-details__img-box">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="service-details__img-box-single">
                        <div className="service-details__img-box-img">
                          <img
                            src="assets/images/services/service-details-img-box-img-1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="service-details__img-box-content">
                          <div className="service-details__img-box-content-icon-and-title">
                            <div className="service-details__img-box-content-icon">
                              <span className="icon-financial"></span>
                            </div>
                            <h3 className="service-details__img-box-content-title">
                              Quality Full Work
                            </h3>
                          </div>
                          <p className="service-details__img-box-content-text">
                            Duis acute arura dolor in reprehenderit in voluptate
                            velit esse cillum dolore Velit esse quam nihil
                            molestiae thos consequatur, Velia ease chillum
                            dolore
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="service-details__img-box-single">
                        <div className="service-details__img-box-img">
                          <img
                            src="assets/images/services/service-details-img-box-img-2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="service-details__img-box-content">
                          <div className="service-details__img-box-content-icon-and-title">
                            <div className="service-details__img-box-content-icon">
                              <span className="icon-certified"></span>
                            </div>
                            <h3 className="service-details__img-box-content-title">
                              100% Work Satisfication
                            </h3>
                          </div>
                          <p className="service-details__img-box-content-text">
                            Duis acute arura dolor in reprehenderit in voluptate
                            velit esse cillum dolore Velit esse quam nihil
                            molestiae thos consequatur, Velia ease chillum
                            dolore
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-details__faq-box">
                  <div
                    className="accrodion-grp"
                    data-grp-name="faq-one-accrodion"
                  >
                    <div className="accrodion">
                      <div className="accrodion-title">
                        <h4>How long should a business plan be</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            From personalized solutions to expert execution, we
                            prioritize quality, reliability, and customer
                            satisfaction in everything we do. Let us be your
                            trusted partner in achieving success.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accrodion active">
                      <div className="accrodion-title">
                        <h4>Do I need a business plan?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            From personalized solutions to expert execution, we
                            prioritize quality, reliability, and customer
                            satisfaction in everything we do. Let us be your
                            trusted partner in achieving success.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accrodion">
                      <div className="accrodion-title">
                        <h4>How to Soft Launch Your Business?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            From personalized solutions to expert execution, we
                            prioritize quality, reliability, and customer
                            satisfaction in everything we do. Let us be your
                            trusted partner in achieving success.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accrodion">
                      <div className="accrodion-title">
                        <h4>How Can I Find My Solution?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            From personalized solutions to expert execution, we
                            prioritize quality, reliability, and customer
                            satisfaction in everything we do. Let us be your
                            trusted partner in achieving success.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
