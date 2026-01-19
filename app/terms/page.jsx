"use client";

import React from "react";
import Link from "next/link";

import PageHeader from "@/components/layout/PageHeader";

const TermsAndConditions = () => {
  return (
    <>
      <PageHeader
        title="Terms & Conditions"
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Terms & Conditions" },
        ]}
      />

      {/* Terms & Conditions Content */}
      <section className="service-details pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10">
              <div className="service-details__left">
                <div className="service-details__content">
                  {/* Introduction */}
                  <h2 className="service-details__title-1">
                    Agreement to Our Legal Terms
                  </h2>
                  <div className="service-details__text-1 mb-4">
                    <p>
                      We are <strong>Bytewise Technologies Ltd.</strong>{" "}
                      ("Company," "we," "us," "our"), a company registered in
                      Canada at 13428 105 Ave #2306, Surrey, BC V3T 0S6.
                    </p>
                  </div>
                  <p className="service-details__text-2">
                    We operate the website{" "}
                    <Link
                      href="https://bytewisetechnologies.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-underline"
                      style={{ color: "var(--itzone-base)" }}
                    >
                      https://bytewisetechnologies.com
                    </Link>{" "}
                    (the "Site") and related products and services
                    (collectively, the "Services").
                  </p>
                  <p className="service-details__text-2">
                    Contact us: <br />
                    <strong>Phone:</strong> (+1) 778-800-6793 <br />
                    <strong>Email:</strong>{" "}
                    <Link
                      href="mailto:info@bytewisetechnologies.com"
                      style={{ color: "var(--itzone-base)" }}
                    >
                      info@bytewisetechnologies.com
                    </Link>
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
                        "Our Services",
                        "Intellectual Property Rights",
                        "User Representations",
                        "Prohibited Activities",
                        "User Generated Contributions",
                        "Contribution License",
                        "Third-Party Websites and Content",
                        "Services Management",
                        "Privacy Policy",
                        "Term and Termination",
                        "Miscellaneous",
                        "Contact Us",
                      ].map((item, idx) => (
                        <li key={idx} className="mb-2">
                          <Link
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
                          </Link>
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
                      1. Our Services
                    </h3>
                    <p className="service-details__text-2">
                      The information provided when using the Services is not
                      intended for distribution to or use by any person or
                      entity in any jurisdiction or country where such
                      distribution or use would be contrary to law or regulation
                      or which would subject us to any registration requirement
                      within such jurisdiction or country. Accordingly, those
                      persons who choose to access the Services from other
                      locations do so on their own initiative and are solely
                      responsible for compliance with local laws, if and to the
                      extent local laws are applicable.
                    </p>
                  </div>

                  {/* Section 2 */}
                  <div
                    id="section-2"
                    className="service-details__content-box mb-5"
                  >
                    <h3 className="service-details__img-box-content-title">
                      2. Intellectual Property Rights
                    </h3>
                    <p className="service-details__text-2">
                      We are the owner or the licensee of all intellectual
                      property rights in our Services, including all source
                      code, databases, functionality, software, website designs,
                      audio, video, text, photographs, and graphics in the
                      Services (collectively, the "Content"), as well as the
                      trademarks, service marks, and logos contained therein
                      (the "Marks").
                    </p>

                    <h4
                      className="mt-4 mb-3"
                      style={{
                        fontWeight: "700",
                        color: "var(--itzone-black)",
                      }}
                    >
                      Your Use of Our Services
                    </h4>
                    <p className="service-details__text-2">
                      Subject to your compliance with these Legal Terms, we
                      grant you a non-exclusive, non-transferable, revocable
                      license to access the Services for personal or internal
                      business purposes only.
                    </p>

                    <h4
                      className="mt-4 mb-3"
                      style={{
                        fontWeight: "700",
                        color: "var(--itzone-black)",
                      }}
                    >
                      Your Submissions
                    </h4>
                    <p className="service-details__text-2">
                      Any submissions (comments, feedback, ideas) you send to us
                      become our property, and we may use them freely for any
                      lawful purpose without further permission or compensation
                      to you.
                    </p>
                  </div>

                  {/* Section 3 */}
                  <div
                    id="section-3"
                    className="service-details__content-box mb-5"
                  >
                    <h3 className="service-details__img-box-content-title">
                      3. User Representations
                    </h3>
                    <ul className="service-details__points-list list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-arrow-angle-pointing-to-right"></span>
                        </div>
                        <p>
                          You have the legal capacity and you agree to comply
                          with these Legal Terms.
                        </p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-arrow-angle-pointing-to-right"></span>
                        </div>
                        <p>
                          You will not access the Services through automated or
                          non-human means.
                        </p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-arrow-angle-pointing-to-right"></span>
                        </div>
                        <p>
                          You will not use the Services for any illegal or
                          unauthorized purpose.
                        </p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-arrow-angle-pointing-to-right"></span>
                        </div>
                        <p>
                          Your use of the Services will not violate any
                          applicable law or regulation.
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
                      4. Prohibited Activities
                    </h3>
                    <p className="service-details__text-2">
                      You may not access or use the Services for any purpose
                      other than that for which we make the Services available.
                      The Services may not be used in connection with any
                      commercial endeavors except those that are specifically
                      endorsed or approved by us.
                    </p>
                    <ul className="service-details__points-list list-unstyled mt-3">
                      <li>
                        <div className="icon">
                          <span className="icon-arrow-angle-pointing-to-right"></span>
                        </div>
                        <p>
                          Systematically retrieve data or other content from the
                          Services to create or compile, directly or indirectly,
                          a collection, compilation, database, or directory
                          without written permission from us.
                        </p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-arrow-angle-pointing-to-right"></span>
                        </div>
                        <p>
                          Trick, defraud, or mislead us and other users,
                          especially in any attempt to learn sensitive account
                          information such as user passwords.
                        </p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-arrow-angle-pointing-to-right"></span>
                        </div>
                        <p>
                          Circumvent, disable, or otherwise interfere with
                          security-related features of the Services.
                        </p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-arrow-angle-pointing-to-right"></span>
                        </div>
                        <p>
                          Disparage, tarnish, or otherwise harm, in our opinion,
                          us and/or the Services.
                        </p>
                      </li>
                    </ul>
                  </div>

                  {/* Section 5 */}
                  <div
                    id="section-5"
                    className="service-details__content-box mb-5"
                  >
                    <h3 className="service-details__img-box-content-title">
                      5. User Generated Contributions
                    </h3>
                    <p className="service-details__text-2">
                      The Services may invite you to chat, contribute to, or
                      participate in blogs, message boards, online forums, and
                      other functionality. Contributions must not violate
                      intellectual property, be offensive, or unlawful. Any
                      violation may result in termination of your access to the
                      Services.
                    </p>
                  </div>

                  {/* Section 6 */}
                  <div
                    id="section-6"
                    className="service-details__content-box mb-5"
                  >
                    <h3 className="service-details__img-box-content-title">
                      6. Contribution License
                    </h3>
                    <p className="service-details__text-2">
                      By posting your Contributions to any part of the Services,
                      you automatically grant, and you represent and warrant
                      that you have the right to grant, to us an unrestricted,
                      unlimited, irrevocable, perpetual, non-exclusive,
                      transferable, royalty-free, fully-paid, worldwide right,
                      and license to host, use, copy, disclose, sell, resell,
                      publish, broadcast, and distribute such Contributions.
                    </p>
                  </div>

                  {/* Section 7 */}
                  <div
                    id="section-7"
                    className="service-details__content-box mb-5"
                  >
                    <h3 className="service-details__img-box-content-title">
                      7. Third-Party Websites and Content
                    </h3>
                    <p className="service-details__text-2">
                      The Services may contain links to other websites
                      ("Third-Party Websites") as well as articles, photographs,
                      text, graphics, pictures, designs, music, sound, video,
                      information, applications, software, and other content or
                      items belonging to or originating from third parties
                      ("Third-Party Content"). We are not responsible for any
                      Third-Party Websites accessed through the Services.
                    </p>
                  </div>

                  {/* Section 8 */}
                  <div
                    id="section-8"
                    className="service-details__content-box mb-5"
                  >
                    <h3 className="service-details__img-box-content-title">
                      8. Services Management
                    </h3>
                    <p className="service-details__text-2">
                      We reserve the right, but not the obligation, to: (1)
                      monitor the Services for violations of these Legal Terms;
                      (2) take appropriate legal action against anyone who, in
                      our sole discretion, violates the law or these Legal
                      Terms; (3) in our sole discretion and without limitation,
                      refuse, restrict access to, limit the availability of, or
                      disable any of your Contributions.
                    </p>
                  </div>

                  {/* Section 9 */}
                  <div
                    id="section-9"
                    className="service-details__content-box mb-5"
                  >
                    <h3 className="service-details__img-box-content-title">
                      9. Privacy Policy
                    </h3>
                    <p className="service-details__text-2">
                      We care about data privacy and security. By using the
                      Services, you agree to be bound by our Privacy Policy
                      posted on the Services, which is incorporated into these
                      Legal Terms. Please be advised the Services are hosted in
                      Canada.
                    </p>
                  </div>

                  {/* Section 10 */}
                  <div
                    id="section-10"
                    className="service-details__content-box mb-5"
                  >
                    <h3 className="service-details__img-box-content-title">
                      10. Term and Termination
                    </h3>
                    <p className="service-details__text-2">
                      These Legal Terms shall remain in full force and effect
                      while you use the Services. WITHOUT LIMITING ANY OTHER
                      PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO,
                      IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY,
                      DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING
                      CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON.
                    </p>
                  </div>

                  {/* Section 11 */}
                  <div
                    id="section-11"
                    className="service-details__content-box mb-5"
                  >
                    <h3 className="service-details__img-box-content-title">
                      11. Miscellaneous
                    </h3>
                    <p className="service-details__text-2">
                      These Legal Terms and any policies or operating rules
                      posted by us on the Services or in respect to the Services
                      constitute the entire agreement and understanding between
                      you and us. Our failure to exercise or enforce any right
                      or provision of these Legal Terms shall not operate as a
                      waiver of such right or provision.
                    </p>
                  </div>

                  {/* Section 12 */}
                  <div
                    id="section-12"
                    className="service-details__content-box mb-5"
                  >
                    <h3 className="service-details__img-box-content-title">
                      12. Contact Us
                    </h3>
                    <p className="service-details__text-2">
                      In order to resolve a complaint regarding the Services or
                      to receive further information regarding use of the
                      Services, please contact us at:
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

export default TermsAndConditions;
