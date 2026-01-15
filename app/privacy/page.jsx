"use client";

import React from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <>
      {/* Page Header */}
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
            <h3>Privacy Policy</h3>
            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="icon-arrow-angle-pointing-to-right"></span>
                </li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="service-details pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10">
              <div className="service-details__left">
                <div className="service-details__content">
                  {/* Introduction */}
                  <h2 className="service-details__title-1">
                    Privacy Policy Highlights
                  </h2>
                  <div className="service-details__text-1 mb-4">
                    <p>
                      At <strong>Bytewise Technologies Ltd.</strong>, we are
                      committed to protecting your personal information and your
                      right to privacy. If you have any questions or concerns
                      about this privacy notice, or our practices with regards
                      to your personal information, please contact us.
                    </p>
                  </div>
                  <p className="service-details__text-2">
                    When you visit our website{" "}
                    <a
                      href="https://bytewisetechnologies.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-underline"
                      style={{ color: "var(--itzone-base)" }}
                    >
                      https://bytewisetechnologies.com
                    </a>{" "}
                    (the "Website"), and more generally, use any of our services
                    (the "Services", which include the Website), we appreciate
                    that you are trusting us with your personal information. We
                    take your privacy very seriously.
                  </p>

                  <hr className="my-5" style={{ opacity: "0.1" }} />

                  {/* Table of Contents */}
                  <h3 className="service-details__img-box-content-title mb-4">
                    Table of Contents
                  </h3>
                  <div
                    className="service-details__sidebar mb-5 p-4"
                    style={{
                      backgroundColor: "var(--itzone-extra)",
                      borderRadius: "var(--itzone-bdr-radius)",
                    }}
                  >
                    <ul className="service-details__services-list list-unstyled">
                      {[
                        "What Information Do We Collect?",
                        "How Do We Use Your Information?",
                        "Will Your Information Be Shared With Anyone?",
                        "Do We Use Cookies and Other Tracking Technologies?",
                        "How Long Do We Keep Your Information?",
                        "How Do We Keep Your Information Safe?",
                        "Do We Collect Information From Minors?",
                        "What Are Your Privacy Rights?",
                        "Controls For Do-Not-Track Features",
                        "Do California Residents Have Specific Privacy Rights?",
                        "Do We Make Updates To This Notice?",
                        "How Can You Contact Us About This Notice?",
                      ].map((item, idx) => (
                        <li key={idx} className="mb-2">
                          <a
                            href={`#section-${idx + 1}`}
                            style={{ fontSize: "16px", padding: "10px 15px" }}
                          >
                            {idx + 1}. {item}
                            <span
                              className="icon-arrow-angle-pointing-to-right"
                              style={{
                                fontSize: "12px",
                                color: "var(--itzone-base)",
                              }}
                            ></span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section 1 */}
                  <div
                    id="section-1"
                    className="service-details__content-box mb-5"
                  >
                    <h3 className="service-details__img-box-content-title">
                      1. What Information Do We Collect?
                    </h3>
                    <h4
                      className="mt-4 mb-3"
                      style={{
                        fontWeight: "700",
                        color: "var(--itzone-black)",
                      }}
                    >
                      Personal information you disclose to us
                    </h4>
                    <p className="service-details__text-2">
                      We collect personal information that you voluntarily
                      provide to us when you express an interest in obtaining
                      information about us or our products and Services, when
                      you participate in activities on the Website or otherwise
                      when you contact us.
                    </p>
                    <ul className="service-details__points-list list-unstyled mt-3">
                      <li>
                        <div className="icon">
                          <span className="icon-arrow-angle-pointing-to-right"></span>
                        </div>
                        <p>
                          Personal Information Provided by You: We collect
                          names; phone numbers; email addresses; and other
                          similar information.
                        </p>
                      </li>
                    </ul>
                  </div>

                  {/* Section 2 */}
                  <div
                    id="section-2"
                    className="service-details__content-box mb-5"
                  >
                    <h3 className="service-details__img-box-content-title">
                      2. How Do We Use Your Information?
                    </h3>
                    <p className="service-details__text-2">
                      We use personal information collected via our Website for
                      a variety of business purposes described below. We process
                      your personal information for these purposes in reliance
                      on our legitimate business interests, in order to enter
                      into or perform a contract with you, with your consent,
                      and/or for compliance with our legal obligations.
                    </p>
                    <ul className="service-details__points-list list-unstyled mt-3">
                      <li>
                        <div className="icon">
                          <span className="icon-arrow-angle-pointing-to-right"></span>
                        </div>
                        <p>
                          To facilitate account creation and logon process with
                          your consent.
                        </p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-arrow-angle-pointing-to-right"></span>
                        </div>
                        <p>To post testimonials with your consent.</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-arrow-angle-pointing-to-right"></span>
                        </div>
                        <p>
                          To send administrative information to you for business
                          purposes and/or legal reasons.
                        </p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-arrow-angle-pointing-to-right"></span>
                        </div>
                        <p>
                          To deliver and facilitate delivery of services to the
                          user.
                        </p>
                      </li>
                    </ul>
                  </div>

                  {/* Section 3 */}
                  <div
                    id="section-3"
                    className="service-details__content-box mb-5"
                  >
                    <h3 className="service-details__img-box-content-title">
                      3. Will Your Information Be Shared With Anyone?
                    </h3>
                    <p className="service-details__text-2">
                      We only share and disclose your information in the
                      following situations:
                    </p>
                    <ul className="service-details__points-list list-unstyled mt-3">
                      <li>
                        <div className="icon">
                          <span className="icon-arrow-angle-pointing-to-right"></span>
                        </div>
                        <p>
                          Compliance with Laws: We may disclose your information
                          where we are legally required to do so in order to
                          comply with applicable law.
                        </p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-arrow-angle-pointing-to-right"></span>
                        </div>
                        <p>
                          Vital Interests and Legal Rights: We may disclose your
                          information where we believe it is necessary to
                          investigate, prevent, or take action regarding
                          potential violations of our policies.
                        </p>
                      </li>
                    </ul>
                  </div>

                  {/* Section 4 */}
                  <div
                    id="section-4"
                    className="service-details__content-box mb-5"
                  >
                    <h3 className="service-details__img-box-content-title">
                      4. Do We Use Cookies and Other Tracking Technologies?
                    </h3>
                    <p className="service-details__text-2">
                      We may use cookies and similar tracking technologies (like
                      web beacons and pixels) to access or store information.
                      Specific information about how we use such technologies
                      and how you can refuse certain cookies is set out in our
                      Cookie Notice.
                    </p>
                  </div>

                  {/* Section 5 */}
                  <div
                    id="section-5"
                    className="service-details__content-box mb-5"
                  >
                    <h3 className="service-details__img-box-content-title">
                      5. How Long Do We Keep Your Information?
                    </h3>
                    <p className="service-details__text-2">
                      We will only keep your personal information for as long as
                      it is necessary for the purposes set out in this privacy
                      notice, unless a longer retention period is required or
                      permitted by law (such as tax, accounting or other legal
                      requirements).
                    </p>
                  </div>

                  {/* Section 6 */}
                  <div
                    id="section-6"
                    className="service-details__content-box mb-5"
                  >
                    <h3 className="service-details__img-box-content-title">
                      6. How Do We Keep Your Information Safe?
                    </h3>
                    <p className="service-details__text-2">
                      We have implemented appropriate technical and
                      organizational security measures designed to protect the
                      security of any personal information we process. However,
                      please also remember that we cannot guarantee that the
                      internet itself is 100% secure.
                    </p>
                  </div>

                  {/* Section 7 */}
                  <div
                    id="section-7"
                    className="service-details__content-box mb-5"
                  >
                    <h3 className="service-details__img-box-content-title">
                      7. Do We Collect Information From Minors?
                    </h3>
                    <p className="service-details__text-2">
                      We do not knowingly solicit data from or market to
                      children under 18 years of age. By using the Website, you
                      represent that you are at least 18.
                    </p>
                  </div>

                  {/* Section 8 */}
                  <div
                    id="section-8"
                    className="service-details__content-box mb-5"
                  >
                    <h3 className="service-details__img-box-content-title">
                      8. What Are Your Privacy Rights?
                    </h3>
                    <p className="service-details__text-2">
                      In some regions (like the EEA and UK), you have certain
                      rights under applicable data protection laws. These may
                      include the right (i) to request access and obtain a copy
                      of your personal information, (ii) to request
                      rectification or erasure; (iii) to restrict the processing
                      of your personal information; and (iv) if applicable, to
                      data portability.
                    </p>
                  </div>

                  {/* Section 9 */}
                  <div
                    id="section-9"
                    className="service-details__content-box mb-5"
                  >
                    <h3 className="service-details__img-box-content-title">
                      9. Controls For Do-Not-Track Features
                    </h3>
                    <p className="service-details__text-2">
                      Most web browsers and some mobile operating systems and
                      mobile applications include a Do-Not-Track ("DNT") feature
                      or setting you can activate to signal your privacy
                      preference not to have data about your online browsing
                      activities monitored and collected. At this stage, no
                      uniform technology standard for recognizing and
                      implementing DNT signals has been finalized.
                    </p>
                  </div>

                  {/* Section 10 */}
                  <div
                    id="section-10"
                    className="service-details__content-box mb-5"
                  >
                    <h3 className="service-details__img-box-content-title">
                      10. Do California Residents Have Specific Privacy Rights?
                    </h3>
                    <p className="service-details__text-2">
                      California Civil Code Section 1798.83, also known as the
                      "Shine The Light" law, permits our users who are
                      California residents to request and obtain from us, once a
                      year and free of charge, information about categories of
                      personal information we disclosed to third parties for
                      direct marketing purposes.
                    </p>
                  </div>

                  {/* Section 11 */}
                  <div
                    id="section-11"
                    className="service-details__content-box mb-5"
                  >
                    <h3 className="service-details__img-box-content-title">
                      11. Do We Make Updates To This Notice?
                    </h3>
                    <p className="service-details__text-2">
                      We may update this privacy notice from time to time. The
                      updated version will be indicated by an updated "Revised"
                      date and the updated version will be effective as soon as
                      it is accessible.
                    </p>
                  </div>

                  {/* Section 12 */}
                  <div
                    id="section-12"
                    className="service-details__content-box mb-5"
                  >
                    <h3 className="service-details__img-box-content-title">
                      12. How Can You Contact Us About This Notice?
                    </h3>
                    <p className="service-details__text-2">
                      If you have questions or comments about this notice, you
                      may contact our Data Protection Officer (DPO) by email at
                      info@bytewisetechnologies.com, by phone at (+1)
                      778-800-6793, or by post to:
                    </p>
                    <div
                      className="mt-4 p-4"
                      style={{
                        borderLeft: "4px solid var(--itzone-base)",
                        backgroundColor: "var(--itzone-extra)",
                        borderRadius: "var(--itzone-bdr-radius)",
                      }}
                    >
                      <p className="mb-1">
                        <strong>Bytewise Technologies Ltd.</strong>
                      </p>
                      <p className="mb-1">13428 105 Ave #2306</p>
                      <p className="mb-1">Surrey, BC V3T 0S6, Canada</p>
                      <p className="mb-1">
                        <strong>Phone:</strong> (+1) 778-800-6793
                      </p>
                      <p className="mb-0">
                        <strong>Email:</strong> info@bytewisetechnologies.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
