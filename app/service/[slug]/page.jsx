"use client";
import React from "react";
import { useQuery } from "@apollo/client/react";
import { GET_SERVICE_BY_SLUG } from "./query";
import { useParams } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";

const richTextOptions = {
  renderBlock: {
    [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,

    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p style={{ marginBottom: "16px" }}>{children}</p>
    ),

    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="rich-ul">{children}</ul>
    ),

    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="rich-ol">{children}</ol>
    ),

    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="rich-li">{children}</li>
    ),
  },

  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
  },
};

const ServiceDetailPage = () => {
  const { slug } = useParams();

  const { data, loading, error } = useQuery(GET_SERVICE_BY_SLUG, {
    variables: { slug },
  });

  if (loading) return <p>Loading service...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const service = data?.serviceCollection?.items[0];

  if (!service) return <p>Service not found</p>;
  console.log(data);

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
            <h3 className="text-capitalize">{service.title}</h3>
            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="icon-arrow-angle-pointing-to-right"></span>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <span className="icon-arrow-angle-pointing-to-right"></span>
                </li>
                <li>{service.title}</li>
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
                  <h3 className="service-details__services-title">
                    Our Services
                  </h3>
                  <ul className="service-details__services-list list-unstyled">
                    {data?.serviceCollection?.items.map((s) => (
                      <li
                        key={s.slug}
                        className={s.slug === slug ? "active" : ""}
                      >
                        <Link href={`/service/${s.slug}`}>
                          {s.title}
                          <span className="icon-arrow-right"></span>
                        </Link>
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
                  <Image
                    src={`${service.image.url}`}
                    alt={service.title}
                    width={1600}
                    height={900}
                    className="w-100"
                    priority
                  />
                </div>

                {/* Title */}
                <h3 className="service-details__title-1">{service.title}</h3>

                {/* Rich Text Description */}
                <div className="rich-text">
                  {documentToReactComponents(
                    service.longDescription.json,
                    richTextOptions,
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
