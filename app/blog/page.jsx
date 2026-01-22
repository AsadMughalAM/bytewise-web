"use client";

import React from "react";
import Link from "next/link";
import { useQuery } from "@apollo/client/react";
import { GET_ALL_BLOGS } from "./query";
import PageHeader from "../../components/layout/PageHeader";
const BlogPage = () => {
  const { data, loading, error } = useQuery(GET_ALL_BLOGS);
  console.log(data);
  if (loading) return <div className="text-center py-5">Loading blogs...</div>;
  if (error)
    return <div className="text-center py-5">Error: {error.message}</div>;

  const blogs = data?.blogCollection?.items || [];
  const search = ""; // Placeholder for potential search state
  const category = ""; // Placeholder for potential category state

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <PageHeader
        title="Blog"
        breadcrumb={[{ label: "Home", link: "/" }, { label: "Blog" }]}
      />
      <section className="blog-page py-5">
        <div className="container">
          <div className="row g-4">
            {blogs.map((blog, index) => (
              <div
                key={blog.slug || index}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`${((index % 3) + 1) * 100}ms`}
              >
                <div className="blog-one__single shadow-sm h-100 transition-all hover-translate-y">
                  <div className="blog-one__img">
                    <Link href={`/blog/${blog.slug}`}>
                      {blog.image?.url ? (
                        <img
                          src={blog.image.url}
                          alt={blog.image.title || blog.title}
                          className="img-fluid w-100 h-100"
                          style={{ objectFit: "cover", height: "250px" }}
                        />
                      ) : (
                        <div
                          style={{ height: "250px", backgroundColor: "#eee" }}
                        ></div>
                      )}
                    </Link>
                  </div>
                  <div className="blog-one__content">
                    <ul className="blog-one__meta list-unstyled d-flex align-items-center mb-2">
                      {blog.publishedDate && (
                        <li className="me-3">
                          <span className="far fa-calendar-alt text-primary me-1"></span>
                          {formatDate(blog.publishedDate)}
                        </li>
                      )}
                      {blog.author && (
                        <li>
                          <span className="far fa-user text-primary me-1"></span>
                          {blog.author}
                        </li>
                      )}
                    </ul>
                    <h3 className="blog-one__title h6 mb-2">
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="text-dark hover-primary text-decoration-none line-clamp-2 fw-bold"
                      >
                        {blog.title}
                      </Link>
                    </h3>
                    <p className="blog-one__excerpt text-muted small mb-0 line-clamp-2">
                      {blog.excerpt ||
                        "Explore our latest tech insights and industry news."}
                    </p>
                    <div className="blog-one__btn-box mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="btn btn-link p-0 text-primary text-decoration-none small fw-bold d-flex align-items-center"
                      >
                        Read More
                        <span className="fas fa-arrow-right ms-2 transition-transform"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {blogs.length === 0 && (
            <div className="text-center py-5">
              <div className="mb-4">
                <span className="fas fa-search fa-3x text-muted opacity-25"></span>
              </div>
              <h3>No blog posts found.</h3>
              <p className="text-muted">
                We couldn't find any posts. Check back later!
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
