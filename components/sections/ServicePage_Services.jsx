"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@apollo/client/react";
import { GET_ALL_SERVICES } from "../../app/service/query";
import Preloader from "../layout/Preloader";

const ServicePage_Services = () => {
  const { data, loading, error } = useQuery(GET_ALL_SERVICES);

  if (loading) return <Preloader />;
  if (error) return <p>Error loading services: {error.message}</p>;

  const services = data?.serviceCollection?.items || [];

  return (
    <section className="services-page">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={service.delay || "0s"}
            >
              <div className="services-two__single">
                <div className="services-two__img-box">
                  <div className="services-two__img">
                    <Image
                      src={service.image?.url}
                      alt={service.title}
                      width={600}
                      height={400}
                      quality={100}
                      className="w-100"
                      style={{ height: "280px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="services-two__icon mb-3">
                    <Image
                      src={service.icon?.url}
                      alt={service.title}
                      width={45}
                      height={45}
                    />
                  </div>
                </div>

                <div className="services-two__content">
                  <h3
                    className="services-two__title"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      padding: "0 10px",
                    }}
                  >
                    <Link
                      href={`/service/${service.slug}`}
                      title={service.title}
                    >
                      {service.title}
                    </Link>
                  </h3>

                  <p
                    className="services-two__text"
                    style={{
                      height: "100px",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {service.shortDescription}
                  </p>

                  <div className="services-two__plus">
                    <Link href={`/service/${service.slug}`}>
                      <span className="fas fa-plus"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePage_Services;
