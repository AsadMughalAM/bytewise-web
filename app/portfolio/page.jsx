"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@apollo/client/react";
import PageHeader from "@/components/layout/PageHeader";
import { GET_ALL_PORTFOLIO } from "./query";

const Portfolio = () => {
  const { data, loading, error } = useQuery(GET_ALL_PORTFOLIO);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center">Failed to load projects</p>;

  const projects = data?.portfolioCollection?.items || [];

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
                key={project.slug}
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <div className="project-two__single">
                  <div className="project-two__img-box">
                    <div className="project-two__img">
                      {project.image?.url && (
                        <Image
                          src={project.image.url}
                          alt={project.image.title || project.title}
                          width={1000}
                          height={1000}
                          className="w-100 h-120"
                          style={{ objectFit: "cover" }}
                        />
                      )}

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

                      {project.shortDescription && (
                        <p className="project-two__sub-title">
                          {project.shortDescription}
                        </p>
                      )}
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
