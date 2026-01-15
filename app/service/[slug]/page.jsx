import React from "react";
import { servicesData } from "@/components/sections/ServicePage_Services";

const page = async ({ params }) => {
  const { slug } = await params; // params se slug le rahe hain
  const serviceData = servicesData.find((service) => service.slug === slug);

  if (!serviceData) {
    return <div>Service not found</div>; // fallback agar slug invalid ho
  }

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h3 className="text-capitalize">{slug.split("-").join(" ")}</h3>
            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li><a href="/">Home</a></li>
                <li><span className="icon-arrow-angle-pointing-to-right"></span></li>
                <li><a href="/services">Services</a></li>
                <li><span className="icon-arrow-angle-pointing-to-right"></span></li>
                <li>{slug.split("-").join(" ")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="service-details">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-xl-4 col-lg-5">
              <div
                className="service-details__sidebar"
                style={{ position: "sticky", top: "100px", zIndex: 1 }}
              >
                <div className="service-details__services-box">
                  <h3 className="service-details__services-title">Our Services</h3>
                  <ul className="service-details__services-list list-unstyled">
                    {servicesData.map((service) => (
                      <li
                        key={service.slug}
                        className={service.slug === slug ? "active" : ""}
                      >
                        <a href={`/service/${service.slug}`}>
                          {service.title}
                          <span className="icon-arrow-right"></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__left">
                {/* Main Image */}
                <div className="service-details__img">
                  <img src={serviceData.img} alt={serviceData.title} />
                </div>

                {/* Title */}
                <h3 className="service-details__title-1 text-capitalize">
                  {serviceData.title}
                </h3>

                {/* Description */}
                <p className="service-details__text-1">{serviceData.description}</p>

                {/* Static Extra Text (optional) */}
                <p className="service-details__text-2">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.
                </p>

                {/* Optional Points List */}
                <ul className="service-details__points-list list-unstyled">
                  <li>
                    <div className="icon"><span className="icon-check"></span></div>
                    <p>It is a long established fact that a reader will be distracted by readable content.</p>
                  </li>
                  <li>
                    <div className="icon"><span className="icon-check"></span></div>
                    <p>Content layout and readability enhance user experience.</p>
                  </li>
                  <li>
                    <div className="icon"><span className="icon-check"></span></div>
                    <p>Clear content presentation keeps users engaged.</p>
                  </li>
                  <li>
                    <div className="icon"><span className="icon-check"></span></div>
                    <p>Good design and structure improve trust and conversion.</p>
                  </li>
                </ul>

                {/* Optional Image Boxes */}
                <div className="service-details__img-box">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="service-details__img-box-single">
                        <div className="service-details__img-box-img">
                          <img
                            src="/assets/images/services/service-details-img-box-img-1.jpg"
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
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="service-details__img-box-single">
                        <div className="service-details__img-box-img">
                          <img
                            src="/assets/images/services/service-details-img-box-img-2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="service-details__img-box-content">
                          <div className="service-details__img-box-content-icon-and-title">
                            <div className="service-details__img-box-content-icon">
                              <span className="icon-certified"></span>
                            </div>
                            <h3 className="service-details__img-box-content-title">
                              100% Work Satisfaction
                            </h3>
                          </div>
                          <p className="service-details__img-box-content-text">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Section (Optional Static) */}
                <div className="service-details__faq-box">
                  <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                    <div className="accrodion">
                      <div className="accrodion-title"><h4>How long should a business plan be?</h4></div>
                      <div className="accrodion-content"><div className="inner"><p>From personalized solutions to expert execution, we prioritize quality and reliability.</p></div></div>
                    </div>
                    <div className="accrodion active">
                      <div className="accrodion-title"><h4>Do I need a business plan?</h4></div>
                      <div className="accrodion-content"><div className="inner"><p>Yes, a business plan helps guide your strategy and decision making.</p></div></div>
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
