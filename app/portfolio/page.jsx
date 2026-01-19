// Duplicate imports removed
import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import { portfolioProjects as projects } from "@/data/portfolioData";

const Portfolio = () => {
  return (
    <>
      <PageHeader
        title="Portfolio"
        breadcrumb={[{ label: "Home", link: "/" }, { label: "Portfolio" }]}
      />
      <section className="project-page">
        <div className="container">
          <div className="row">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`col-xl-3 col-lg-6 col-md-6 wow ${project.animation || "fadeInLeft"}`}
                data-wow-delay={project.delay || "100ms"}
              >
                <div className="project-two__single">
                  <div className="project-two__img-box">
                    <div className="project-two__img">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={370}
                        height={400}
                        className="w-100"
                        style={{ height: "auto" }}
                      />
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
