"use client";
import { useEffect } from "react";
import Link from "next/link";
import { portfolioProjects as projects } from "@/data/portfolioData";

const Project = () => {
  useEffect(() => {
    // Initialize Magnific Popup for image popup
    if (window.jQuery && window.jQuery().magnificPopup) {
      window.jQuery(".img-popup").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });
    }
  }, []);

  return (
    <section className="project-three" id="project">
      <div
        className="project-three__bg-shape"
        style={{
          backgroundImage:
            "url(/assets/images/shapes/project-three-bg-shape.png)",
        }}
      ></div>
      <div className="container">
        <div className="project-three__top">
          <div className="section-title text-leftcenter sec-title-animation animation-style2">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">See Our Project</span>
            </div>
            <h2 className="section-title__title title-animation">
              Explore Our Recent <span>Work</span>
            </h2>
          </div>
          <div className="project-three__btn-box">
            <Link href="/portfolio" className="thm-btn">
              view all projects
              <span className="fas fa-arrow-right"></span>
            </Link>
          </div>
        </div>
      </div>
      <div className="project-three__bottom">
        <div className="container">
          <div className="row">
            {projects.slice(0, 4).map((project, index) => (
              <div
                key={index}
                className={`col-xl-3 col-lg-6 col-md-6 wow ${project.animation}`}
                data-wow-delay={project.delay}
              >
                <div className="project-three__single">
                  <div className="project-three__img-box">
                    <div className="project-three__img">
                      <img src={project.img} alt={project.title} />
                    </div>
                    <div className="project-three__content">
                      <div className="project-three__title-box">
                        <p className="project-three__sub-title">
                          {project.subtitle}
                        </p>
                        <h3 className="project-three__title">
                          <Link href={`/portfolio/${project.slug}`}>
                            {project.title}
                          </Link>
                        </h3>
                      </div>
                      <div className="project-three__arrow">
                        <a href={project.img} className="img-popup">
                          <span className="icon-right-arrow"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
