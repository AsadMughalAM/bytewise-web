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
import PageHeader from "../../../components/layout/PageHeader";

const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong className="font-semibold">{text}</strong>,
    [MARKS.ITALIC]: (text) => <em className="italic">{text}</em>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="text-justify leading-relaxed mb-4 text-gray-800">
        {children}
      </p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-3xl mt-6 mb-2 font-bold">
        <strong>{children}</strong>
      </h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-2xl mt-5 mb-2 font-bold">
        <strong>{children}</strong>
      </h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="text-xl mt-4 mb-2 font-bold">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-none mb-4 pl-4">{children}</ul> // no bullets
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal list-inside mb-4 pl-4">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="mb-1 text-gray-700 leading-relaxed">{children}</li> // clean li
    ),
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4">
        {children}
      </blockquote>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { url, description } = node.data.target.fields.file;
      return (
        <img
          src={url}
          alt={description || "service image"}
          className="w-full my-4 rounded-lg shadow-md"
        />
      );
    },
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
      <PageHeader
        title={service.title}
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Service", link: "/service" },
          { label: service.title },
        ]}
      />

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
                >
                  <Image
                    src={`${service.image.url}`}
                    alt={service.title}
                    width={1200}
                    height={500}
                    className="w-full h-[400px] object-cover rounded-lg shadow-md"
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
