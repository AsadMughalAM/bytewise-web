import React from "react";
import Link from "next/link";
import Image from "next/image"; // Added import

import { portfolioProjects } from "@/data/portfolioData";
import { notFound } from "next/navigation";

const ProjectDetails = async ({ params }) => {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectTitle = project.title;

  const currentIndex = portfolioProjects.findIndex((p) => p.slug === slug);
  const prevProject =
    portfolioProjects[currentIndex - 1] ||
    portfolioProjects[portfolioProjects.length - 1];
  const nextProject =
    portfolioProjects[currentIndex + 1] || portfolioProjects[0];

  return (
    <>
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
            <h3>{projectTitle}</h3>
            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="icon-arrow-angle-pointing-to-right"></span>
                </li>
                <li>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <span className="icon-arrow-angle-pointing-to-right"></span>
                </li>
                <li>{projectTitle}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="project-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="project-details__left">
                <div className="project-details__img">
                  <Image
                    src={project.img}
                    alt={projectTitle}
                    width={1000}
                    height={600}
                    className="w-100"
                    style={{ height: "auto" }}
                  />
                </div>
                <h3 className="project-details__title-1">
                  About The Project Overview
                </h3>
                <p className="project-details__text-1">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut laborer et dolore magna aliqua. Out enigma ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute inure dolor in the
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  null pariatur. Excepteur snit occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h3 className="project-details__title-2">
                  The Project Challenge
                </h3>
                <p className="project-details__text-2">
                  Out enigma ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  inure dolor in the reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat null pariatur. Excepteur snit occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div className="project-details__text-and-img">
                  <p className="project-details__text-3">
                    The wise man therefore always holds in these matters to this
                    principle of selection. He rejects pleasures to secure other
                    greater pleasures, or else he endures pains to avoid worse
                    pains to the selection point. But in certain to all this
                    circumstances
                  </p>
                  <div className="project-details__text-img">
                    <Image
                      src="/assets/images/project/project-details-text-img.jpg"
                      alt=""
                      width={400}
                      height={300}
                      className="w-100"
                      style={{ height: "auto" }}
                    />
                  </div>
                </div>
                <h3 className="project-details__title-3">
                  The Result Of Our Project
                </h3>
                <p className="project-details__text-4">
                  Out enigma ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  inure dolor in the reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat null pariatur. Excepteur snit occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div className="project-details__img-and-points">
                  <div className="project-details__points-img">
                    <Image
                      src="/assets/images/project/project-details-points-img.jpg"
                      alt=""
                      width={400}
                      height={300}
                      className="w-100"
                      style={{ height: "auto" }}
                    />
                  </div>
                  <ul className="project-details__points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-right-arrow"></span>
                      </div>
                      <p>
                        Fact that a reader will be distr acted bioiiy
                        dablea{" "}
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-right-arrow"></span>
                      </div>
                      <p>Acted bioiiy the rea dablea content of a page </p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-right-arrow"></span>
                      </div>
                      <p>When looking at its layout toile point</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-right-arrow"></span>
                      </div>
                      <p>Bioiiy the rea dablea content of a page looking</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="project-details__sidebar">
                <div className="project-details__information">
                  <h3 className="project-details__information-title">
                    Project Information
                  </h3>
                  <ul className="project-details__information-list list-unstyled">
                    <li>
                      <h4>Client :</h4>
                      <p>Jonathan Smith</p>
                    </li>
                    <li>
                      <h4>Category :</h4>
                      <p>{project.category}</p>
                    </li>
                    <li>
                      <h4>date :</h4>
                      <p>02 June 2024</p>
                    </li>
                    <li>
                      <h4>location :</h4>
                      <p>12 Green Road 05 New Yark</p>
                    </li>
                  </ul>
                </div>
                <div className="service-details__get-started">
                  <h3 className="service-details__get-started-title">
                    Get Started Today
                  </h3>
                  <p className="service-details__get-started-text">
                    Pianissimos of dulcimers qui therefore always holds in these
                    matters to this principle
                  </p>
                  <ul className="service-details__get-started-points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-call"></span>
                      </div>
                      <p>
                        <Link href="tel:585858575084">+58 585 857 5084</Link>
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-email"></span>
                      </div>
                      <p>
                        <Link href="mailto:example@gmail.com">
                          example@gmail.com
                        </Link>
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-pin"></span>
                      </div>
                      <p>
                        4517 Washington Ave. Manchester,
                        <br /> Kentucky 39495
                      </p>
                    </li>
                  </ul>
                  <div className="service-details__get-started-btn-box">
                    <Link href="/contact" className="thm-btn">
                      get in touch <span className="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="project-details__previous-next">
                <ul>
                  <li>
                    <div className="icon">
                      <Link href={`/portfolio/${prevProject.slug}`}>
                        <span
                          className="icon-right-arrow"
                          style={{
                            transform: "rotate(180deg)",
                            display: "inline-block",
                          }}
                        ></span>
                      </Link>
                    </div>
                    <div className="text-box">
                      <Link href={`/portfolio/${prevProject.slug}`}>
                        Previous Project
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div className="text-box">
                      <Link href={`/portfolio/${nextProject.slug}`}>
                        Next Project
                      </Link>
                    </div>
                    <div className="icon">
                      <Link href={`/portfolio/${nextProject.slug}`}>
                        <span className="icon-right-arrow"></span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
