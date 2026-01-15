import React from "react";
import { projects } from "./PortfolioData";
const Portfolio = () => {
  return (
    <>
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/page-header-bg.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h3>Portfolio</h3>
            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <span className="icon-arrow-angle-pointing-to-right"></span>
                </li>
                <li>    Portfolio</li>
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
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <div className="project-two__single">
                  <div className="project-two__img-box">
                    <div className="project-two__img">
                      <img src={project.img} alt="" />
                      <div className="project-two__arrow">
                        <a href={`/portfolio/${project.slug}`} className="img-popup">
                          <span className="fas fa-arrow-right"></span>
                        </a>
                      </div>
                    </div>
                    <div className="project-two__content">
                      <h3 className="project-two__title">
                        <a href={`/portfolio/${project.slug}`}>
                          {project.title}
                        </a>
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
