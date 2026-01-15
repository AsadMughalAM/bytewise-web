import React from "react";
import Link from "next/link";
import { projects } from "./PortfolioData";

const Portfolio = () => {
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
            <h3>Portfolio</h3>
            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="icon-arrow-angle-pointing-to-right"></span>
                </li>
                <li>Portfolio</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="project-page">
        <div className="container">
          <div className="row">
            {projects.map((project) => (
              <div
                key={project.id}
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <div className="project-two__single">
                  <div className="project-two__img-box">
                    <div className="project-two__img">
                      <img src={project.img} alt={project.title} />
                      <div className="project-two__arrow">
                        <Link href={`/portfolio/${project.slug}`}>
                          <span className="fas fa-arrow-right"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="project-two__content">
                      <h3 className="project-two__title">
                        <Link href={`/portfolio/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h3>
                      <p className="project-two__sub-title">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
