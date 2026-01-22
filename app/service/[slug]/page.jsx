"use client";
import React from "react";
import { useQuery } from "@apollo/client/react";
import { GET_SERVICE_BY_SLUG } from "./query";
import { GET_ALL_SERVICES } from "../query";
import { useParams } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../../../components/layout/PageHeader"
const richTextOptions = {
  renderBlock: {
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "700",
          marginBottom: "20px",
          marginTop: "30px",
          color: "#1a1a1a",
        }}
      >
        {children}
      </h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2
        style={{
          fontSize: "26px",
          fontWeight: "700",
          marginBottom: "18px",
          marginTop: "28px",
          color: "#1a1a1a",
        }}
      >
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3
        style={{
          fontSize: "22px",
          fontWeight: "600",
          marginBottom: "16px",
          marginTop: "24px",
          color: "#1a1a1a",
        }}
      >
        {children}
      </h3>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p
        style={{
          marginBottom: "20px",
          lineHeight: "1.8",
          color: "#555",
          fontSize: "16px",
        }}
      >
        {children}
      </p>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul
        style={{ paddingLeft: "20px", marginBottom: "20px" }}
        className="rich-ul"
      >
        {children}
      </ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol
        style={{ paddingLeft: "20px", marginBottom: "20px" }}
        className="rich-ol"
      >
        {children}
      </ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li
        style={{ marginBottom: "10px", lineHeight: "1.6", color: "#555" }}
        className="rich-li"
      >
        {children}
      </li>
    ),
  },

  renderMark: {
    [MARKS.BOLD]: (text) => <strong style={{ color: "#333" }}>{text}</strong>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
  },
};

const ServiceDetailPage = () => {
  const { slug } = useParams();

  const {
    data: serviceData,
    loading: serviceLoading,
    error: serviceError,
  } = useQuery(GET_SERVICE_BY_SLUG, {
    variables: { slug },
  });

  const { data: allServicesData, loading: allServicesLoading } =
    useQuery(GET_ALL_SERVICES);

  if (serviceLoading || allServicesLoading) return <p>Loading...</p>;
  if (serviceError) return <p>Error: {serviceError.message}</p>;

  const service = serviceData?.serviceCollection?.items[0];

  if (!service) return <p>Service not found</p>;

  return (
    <>
     <PageHeader title={service.title} breadcrumb={[{ label: "Home", link: "/" }, { label: "Service",link:"/service"},{label:service.title}]}/>

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
                    {allServicesData?.serviceCollection?.items.map((s) => (
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
                <div
                  className="service-details__img mb-5"
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  }}
                >
                  <Image
                    src={`${service.image.url}`}
                    alt={service.title}
                    width={800} // Optimized width for content column
                    height={500} // Standard aspect ratio
                    className="w-100"
                    priority
                    quality={100}
                    style={{ objectFit: "cover", height: "auto" }}
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
